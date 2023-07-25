import { Inter } from 'next/font/google'
import Dropzonee from './component/Dropzonee'
import { useState } from 'react'
import RenderFile from './component/RenderFile'
import Image from 'next/image';
import img from '../../public/picture.gif'
import axios from 'axios';
import DownloadFile from './component/DownloadFile';
import EmailFrom from './component/EmailFrom';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [file ,setFile] = useState(null);
  console.log(file);
  const [id, setId] = useState(null);
  const [downloadPageLink, setDownloadPageLink] = useState(null);
  const [uploadState, setUploadState] = useState<"Uploading" | "Upload Failed" | "Uploaded" | "Upload">("Upload");
 


  const handleSubmit = async () => {
    if(uploadState === "Uploading") return;
    setUploadState("Uploading"); 
     const formData = new FormData();
     formData.append("myFile", file);
     try {
       const { data } = await axios({
         method: "post",
         data: formData,
         url: "api/file/uploads",
         headers: {
           "Content-Type": "mutipary/form-data"
         }
 
       })
       setDownloadPageLink(data.downloadPageLink);
       setId(data.id);
 
     } catch (error: any) {
       console.log(error.response.data);
       setUploadState("Upload Failed");
     }
 
   }


   const handleReset = ()=>{
    setDownloadPageLink(null);
    setFile(null);
   }

   
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-0 m-0 bg-black ${inter.className}`}
    >
<h1 className='text-[1.4rem] font-[700] text-blue-500 p-5 m-5'>Share your files | convert files into urls</h1>

{
  !downloadPageLink && <Dropzonee setFile={setFile}></Dropzonee>
}

   {/* <p className='text-blue-500 p-6'>{file?.name}</p> */}

  {
    file && <RenderFile file={{
      format:file.type.split("/")[1],
      name:file.name,
      sizeInBytes:file.size
    }}></RenderFile>
  

  }
{
  file && !downloadPageLink &&     <button className="button mt-4" onClick={handleSubmit}><span>Upload</span></button>

}


{
  downloadPageLink &&<div className='flex justify-center items-center flex-col'>
   <DownloadFile downloadPageLink = {downloadPageLink}></DownloadFile>
   <EmailFrom id={id}/>
   <button className="button mt-4" onClick={handleReset}><span>New</span></button>
   </div>
}
    </main>
  )
}
