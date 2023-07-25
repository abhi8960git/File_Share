import React from 'react'
import { GetServerSidePropsContext, NextPage } from 'next';
import axios from 'axios';
import { IFile } from '@/libs/types';
import { AiOutlineDownload } from 'react-icons/ai'
import RenderFile from '@/pages/component/RenderFile';
import fileDownload from 'js-file-download';
const download: NextPage<{
    file: IFile;
}> = ({ file: { format, name, sizeInBytes, id } }) => {

    const handleDownload = async() =>{
        const {data} = await axios.get(`http://localhost:8000/api/file/${id}/download`,{
            responseType:"blob"
        });
        fileDownload(data, name);
    }
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='w-screen max-w-md p-4 bg-gray-300 shadow-lg rounded-lg '>
                {!id ? (
                    <span className='flex justify-center bg-black text-white py-2'>
                        File Doesnt Exist
                    </span>
                ) : (
                    <div>
                        <h1 className='text-xl font-bold mb-4'>Your File is ready to be Downloaded</h1>
                        <div className='bg-red-300 p-4 flex rounded-lg justify-center items-center gap-3'>
                            <RenderFile  file={{ format, name, sizeInBytes }} />
                            <button className='bg-white rounded-lg text-white py-2 px-4 mt-9 ' onClick={handleDownload}>
                                <AiOutlineDownload className='text-blue-500 text-3xl font-[700]' /> 
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default download


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { id } = context.query;
    let file;


    try {
        const { data } = await axios.get(`http://localhost:8000/api/file/${id}`);
        file = data;
    } catch (error: any) {
        console.log(error.response.data)
        file = {}
    }
    return {
        props: {
            file
        }
    }
}
