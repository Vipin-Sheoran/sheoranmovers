import React,{useState,useEffect} from "react";
import {auth,db} from '../firebase'
import {Link,useNavigate} from 'react-router-dom'

function Summary() {
    const [approvedData,setApprovedData]=useState([])
   const navigate=useNavigate()
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                db.collection('transaction').doc(user.uid).collection('approvedTransactions').onSnapshot(snapshot=>{
                 
                    
                 setApprovedData(snapshot.docs.map(doc=>
                    {
                       return [...approvedData,doc.data()] })     )
                           
                })
            }else{
            alert('please login to continue')
            navigate('/')
            }
        })
        
    },[])
    // for(let i=0;i<approvedData.length;i++){
    //     approvedData[i][0]
    // }
    let totalAmount=0
    let totalReward=0
    if(approvedData.length>0){
        approvedData.map(each=>{
            return (totalAmount=Number(each[0]?.approved[2])+totalAmount,
                totalReward=Number(each[0]?.approved[2])/10+totalReward 
                )
        })  
    }
    
  console.log(totalAmount,totalReward);
    
  return <div>
      <h1 className="m-4 text-3xl">Transaction Summary</h1>
       <table className='ml-auto mr-auto border-4 border-red-800 p-4 mt-4'>
        <thead>
        <tr className='p-4'>
                       <th className='p-4 m-4'>Date</th>
                       <th className='p-4 m-4'>Transaction ID</th> 
                       <th className='p-4 m-4'>Amount</th>
                       <th className='p-4 m-4'>Reward</th>
                       <th className='p-4 m-4'>Net Amount</th>
                       <th className='p-4 m-4'>Status</th>
        </tr>
        </thead>
        
        {  
            approvedData?.map((each,index)=>{
                if(approvedData.length>0){
                    return <tbody key={index}>
                    <tr className='p-4'>
                      <td className='p-2'>{each[0].approved[0]}</td>
                      <td className='p-2'>{each[0].approved[1]}</td>
                      <td className='p-2'>{each[0].approved[2]}</td>
                      <td className='p-2'>{Number(each[0].approved[2])/10}</td>
                      <td className='p-2'>{Number(each[0].approved[2])-Number(each[0].approved[2])/10}</td>
                      <td className='p-2'>Approved</td>
                    </tr>
                    </tbody>
                }else{
                    <div>...Loading</div>  
                }
                
            })
        }
        </table>
        <div className="m-4"><strong>Total Transactions</strong>: {approvedData?.length}</div>
        <div className="m-4"><strong>Total Amount</strong>: {totalAmount}</div>
        <div className="m-4"><strong>Total Reward</strong>: {totalReward.toFixed(2)}</div>
        <div className="m-4"><strong>Total NetAmount</strong>: {totalAmount-totalReward}</div>
  </div>;
}

export default Summary;
