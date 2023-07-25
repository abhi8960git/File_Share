import { useDropzone } from "react-dropzone";
import Image from "next/image";
import img from '../../public/folder.gif'
import React, { Dispatch, FunctionComponent, useCallback } from 'react'

const Dropzonee:FunctionComponent<{setFile:Dispatch<any>}> = ({setFile}) => {
  const onDrop = useCallback((acceptedFiles:any) => {
    setFile(acceptedFiles[0]);
  }, [])
  const { getInputProps, getRootProps, isDragReject, isDragActive, isDragAccept } = useDropzone({
    onDrop,
    multiple: false,
  
  });

  return (
    <div className="h-[400px] w-[400px] bg-blue-200 rounded-full flex justify-center items-center">
      <div {...getRootProps()} className={`w-[350px] h-[350px] border-4 transitions bg-white border-dashed flex justify-center items-center rounded-full ${isDragReject ?"border-red-500": "border-green-500" }`}  >
        <input {...getInputProps()} ></input>
        <div className="flex flex-col justify-center items-center">
          {
            isDragReject ? (
              <p className="text-[1.2em] font-[600]">only jpg ,png </p>

            ) :
              (
                <p className="text-[1.2em] font-[600]">drag and drop</p>

              )
          }
          <Image src={img} alt="gif" width={200} height={200}></Image>
        </div>
      </div>
    </div>
  )
}

export default Dropzonee