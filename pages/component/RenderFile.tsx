import React, { useState } from 'react'
import { IFile } from '@/libs/types'
import { FunctionComponent } from 'react';
import { sizeInMB } from '@/libs/sizeInMB';
import Image from 'next/image';
import img from '../../public/picture.gif'
import axios from 'axios';
const RenderFile: FunctionComponent<{ file: IFile }> = (file) => {
 const { name, sizeInBytes } = file.file;
  const Data = file;
  console.log(Data);



  

  return (
    <div className='text-blue-400 bg-white rounded-md p-2 flex justify-center items-center gap-4 mt-9'>
      <Image height={30} width={30} src={img} alt='png'></Image>

      {/* img */}
      <span>{name}</span>
      <span>{sizeInMB(sizeInBytes)}</span>
     
    </div>
  )
}

export default RenderFile