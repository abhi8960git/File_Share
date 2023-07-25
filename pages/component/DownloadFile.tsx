import React, { useState } from 'react';
import Image from 'next/image';
import img from '../../public/copy.gif';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const DownloadFile = ({ downloadPageLink }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 4000);
  };

  return (
    <div className='text-black bg-white flex justify-center items-center flex-col p-3 m-4 rounded-md shadow-lg shadow-gray-500'>
      <h1 className='font-[700]'>Download Link (Copy|Paste to browser)</h1>
      <div className='flex justify-center items-center'>
        <a href={downloadPageLink}>
          <span className='text-blue-400 hover:text-black cursor-pointer'>{downloadPageLink}</span>
        </a>
        <CopyToClipboard text={downloadPageLink} onCopy={handleCopy}>
          <Image width={30} height={10} src={img} alt='' className='hover:cursor-pointer' />
        </CopyToClipboard>
      </div>
      {isCopied && <p className='text-green-500'>Link copied to clipboard!</p>}
    </div>
  );
};

export default DownloadFile;