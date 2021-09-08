import React,{useState,useEffect} from 'react'

function Slider() {
    const [count,setCount]=useState(0)
    const [img,setImg]=useState()
    const images=['https://alliedmoversdelhi.com/blog/wp-content/uploads/2019/08/allied-image.jpg'
    ,'https://3.imimg.com/data3/XX/VI/GLADMIN-14808843/untitled-500x500.jpg']
    useEffect(() => {
        const timeout = setTimeout(() => {
            if(count!==1){
                setCount(count+1)
               
            }else{
                setCount(0)
            }
            setImg(images[count])
         }, 3000);
         console.log(count)
       
       },[count]);
      
    return (
        <div className='w-full h-full'>
            
            <div className='absolute inset-0 name bg-black h-2 w-2'>
            
            </div>
            <img src={img} className='img1'></img>
            {/* <div className='relative z-0 text-white top-24'>hello</div> */}
        </div>
    )
}

export default Slider
