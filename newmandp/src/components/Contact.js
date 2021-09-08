import React from 'react'

function Contact() {
    return (
        <div className='pt-8 contact pb-4 justify-center'>
       <div className='md:ml-60 md:mr-60'>
        <div  className='text-2xl uppercase underline pointer text-white font-sans font-semibold px-4'>Get a quote</div>
        {/* <p className='text-white px-4'>
                Please fill out the form below to send us an email and we
                will get back to you as soon as possible.
              </p> */}
        <form className='flex flex-col px-4'>
        
                  <input
                    // onChange={(e)=>nameHandler(e)}
                      type="text"
                       className="my-4 py-2 px-2"
                      placeholder="Name"
                      required="required"
                    />
                    <input
                    // onChange={(e)=>phoneHandler(e)}
                      type="text"
                      id="phone"
                       className="my-4 py-2 px-2"
                      placeholder="Phone No."
                      required="required"
                    />

                    
                     <input
                    // onChange={(e)=>phoneHandler(e)}
                      type="text"
                      id="phone"
                       className="my-4 py-2 px-2"
                      placeholder="Address"
                      required="required"
                    />
                    
                     <input
                    //  onChange={(e)=>emailHandler(e)}
                      type="email"
                      id="email"
                       className="my-4 py-2 px-2"
                      placeholder="Email"
                      required="required"
                      
                    />
                    
                    <textarea
                //  onChange={(e)=>messageHandler(e)}
                  name="message"
                  id="message"
                   className="my-4 pb-8 px-2"
                //   rows="4"
                  placeholder="Message"
                  required
                ></textarea>
             
                <button className='text-white border-2 border-black rounded-lg py-2 hover:bg-yellow-800'>Send Request</button>
        </form>
      </div>
    </div>
    )
}

export default Contact
