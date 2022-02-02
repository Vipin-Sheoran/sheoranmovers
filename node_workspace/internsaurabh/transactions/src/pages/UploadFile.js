import React,{useState,useEffect} from 'react';
import {parse} from 'papaparse'
import {auth,db} from '../firebase'
import {Link,useNavigate} from 'react-router-dom'

function UploadFile() {
const [entering, setEntering] = useState(false);
const [data,setData]=useState([])
const [approved,setapproved]=useState([])
const [rejected,setrejected]=useState([])
const [user,setUser]=useState('')
const [disabled,setDisabled]=useState(false)
const navigate=useNavigate()
// let data=[]

  let approvedData=[]
  let rejectedData=[]
  useEffect(()=>{
  auth.onAuthStateChanged(user=>{
    
    if(!user){
      navigate('/')
    }
    setUser(user)
  })
  },[])

  const Signout=(e)=>{
    e.preventDefault()
    auth.signOut()
    alert('signed out')
    navigate('/')
  }
  
  const DropHandler=(e)=>{
  e.preventDefault()
  setEntering(false)
  Array.from(e.dataTransfer.files).filter((file)=>file.type==="text/csv")
  .forEach(async (file)=>{
    const text=await file.text()
    const result=parse(text)
    result.data.shift()
    result.data.pop()
    setData(result.data)
  })  
  }
 const ApproveClickHandler=(e)=>{
  e.preventDefault() 

  setapproved([...approved,e.target.value])
  
  
 }

 const RejectClickHandler=(e)=>{
  e.preventDefault() 
  setrejected([...rejected,e.target.value])
 }

 for(let i of data){
  if(approved.includes(i[1])){
    approvedData.push(i)
  }
}
 
for(let i of data){
  if(rejected.includes(i[1])){
    rejectedData.push(i)
  }
}
const final=approved.concat(rejected)
const pendingData=data.filter((item)=>{
  return final.indexOf(item[1])===-1
})

const Summary=(e)=>{
e.preventDefault()
setDisabled(true)
navigate('/summary')
  approvedData.map(each=>{
    db.collection('transaction').doc(user.uid).collection('approvedTransactions').add({
      approved:each
    })
    
  })
}

  return <div className='mt-4'>
      <div className={`p-4 border-4 border-black w-72 ml-auto mr-auto ${entering?'border-green-600 bg-green-100':'border-gray-600'}`}
      onDragOver={(e)=>{e.preventDefault()}}
      onDrop={(e)=>{DropHandler(e)}}
      onDragEnter={()=>{setEntering(true)}}
      onDragLeave={()=>{setEntering(false)}}
      >
      Drop Transction File Here
      </div>
      <table className='ml-auto mr-auto border-4 border-red-800 p-4 mt-4'>
        <thead>
        <tr className='p-4'>
                       <th className='p-4 m-4'>Date</th>
                       <th className='p-4 m-4'>Transaction ID</th> 
                       <th className='p-4 m-4'>Amount</th>
                       <th className='p-4 m-4'>Accept</th>
                       <th className='p-4 m-4'>Reject</th>
                       <th className='p-4 m-4'>Status</th>
        </tr>
        </thead>
        {
          approvedData?.map((each,index)=>{
            return <tbody key={index}>
            <tr className='p-4'>
              <td className='p-2'>{each[0]}</td>
              <td className='p-2'>{each[1]}</td>
              <td className='p-2'>{each[2]}</td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'>Approved</td>
            </tr>
            </tbody>
          })
        }
        {
          rejectedData?.map(each=>{
            return <tbody key={each[1]}>
            <tr className='p-4'>
              <td className='p-2'>{each[0]}</td>
              <td className='p-2'>{each[1]}</td>
              <td className='p-2'>{each[2]}</td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'>Rejected</td>
            </tr>
            </tbody>
          })
        }

        {
         pendingData.map(each=>{
          return <tbody key={each[1]}>
          <tr className='p-4'>
            <td className='p-2'>{each[0]}</td>
            <td className='p-2'>{each[1]}</td>
            <td className='p-2'>{each[2]}</td>
            <td className='p-2'><button value={each[1]} onClick={(e)=>{ApproveClickHandler(e,each[1])}} className='border-2 border-black px-4 rounded bg-lime-600 hover:bg-lime-400'>Accept</button></td>
            <td className='p-2'><button value={each[1]} onClick={(e)=>{RejectClickHandler(e,each[1])}} className='border-2 border-black px-4 rounded bg-rose-700 hover:bg-rose-500'>Reject</button></td>
            <td className='p-2'>Pending</td>
          </tr>
          </tbody>
         })
        }
      </table>
      <button disabled={disabled} onClick={Summary} className='border-2 border-black px-4 rounded m-4 bg-amber-400 hover:bg-amber-200'>Summary of Transactions</button>
      <button className='px-4 border-2 border-black bg-amber-400 hover:bg-amber-200' onClick={Signout}>Signout</button>
  </div>;
}

export default UploadFile;
