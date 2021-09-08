import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

function Footer() {
    return (
        <div>
            


            <div className='bg-gray-800 flex flex-col'>
                <div className='flex flex-row p-4 space-x-4 text-bg font-semibold mx-auto pl-4'>
                <div className='text-white'>Find us at:</div><div className='text-red-300'><InstagramIcon/></div><div className='text-red-300'><FacebookIcon/></div><div className='text-red-300'><SubscriptionsIcon/></div>
                </div>
             <hr className='text-white'></hr>
             <div className='text-white font-semibold text-center pl-4 pb-2'>
             Sheoran Cargo Movers
All Rights Reserved.
             </div>
            </div>
        </div>
    )
}

export default Footer
