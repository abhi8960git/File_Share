import React, { FunctionComponent,useState } from 'react'
import axios from 'axios'
const EmailFrom:FunctionComponent<{
    id:string|null
}> = ({id}) => {
 const [emailFrom, setEmailFrom] = useState("")
 const [emailTo, setEmailTo] = useState("")
 const [messge, setMessage]  = useState("")

 const handleEmail = async (e:any) =>{
    e.preventDefault();
    try {
        const {data} = await axios({
            method:"POST",
            url:"api/file/email",
            data:{
                id, 
                emailFrom,
                emailTo
            }
            
        })
        setMessage(data.message)
        
    } catch (error:any) {
        setMessage(error.data.response.message)
        
    }
 }
  return (
   <div className='bg-white flex flex-col  items-center p-5 shadow-sm rounded-lg shadow-white '>
    <h3 className='text-xl font-[700] m-4 mt-0' >Send file through Email</h3>
    
    <form method='POST' className='' onSubmit={handleEmail} >
        <input className='outline-blue-500 border-gray-400 border-2 rounded mr-2' type="email" placeholder='Email From ' required onChange={e => setEmailFrom(e.target.value)} value={emailFrom} />
        <input className='outline-blue-500 border-gray-400 border-2 rounded mr-2' type="email" placeholder='Email To ' required onChange={e => setEmailTo(e.target.value)} value={emailTo} />
        <button className='bg-blue-500 p-2 rounded-md py-1 hover:bg-blue-400'>Send</button>
    </form>
    {
        messge && <p className='text-green-300'>{messge}</p>
    }
   </div>
  )
}

export default EmailFrom