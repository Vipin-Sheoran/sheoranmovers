import React from 'react'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HouseIcon from '@material-ui/icons/House';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom'

function Services() {
    return (
        <div className='font-sans'>
            <div>
            <p className='text-2xl text-center mt-4'>We Provide Services</p>
            <div className='md:flex md:flex-row md:pl-24 md:pr-24'>
            <div>
            <div className='pt-4 mx-4 '>
            <img className='md:w-80 md:h-48' src='https://image.freepik.com/free-photo/couple-with-boxes_23-2147694388.jpg'/>
            </div>
            <p className='text-bg px-4 mt-4'>CORPORATE RELOCATION</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80">
            Office shifting requires lots of planning as you have to 
            ensure minimum loss in productivity and service offerings. There are specialist office shifting and relocation...
            </p>
            <Link to='corporate-relocation'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>



            <div>
            <div className='pt-4 mx-4'>
            <img className='md:w-80 md:h-48' src='https://image.freepik.com/free-photo/young-family-with-little-daughter-moving-into-new-house_1303-23761.jpg'/>
            </div>
            <p className='text-bg px-4 mt-4'>HOUSE RELOCATION</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80">
            Household shifting a comfortable and hassle free process by our household shifting service. 
            The household goods shifting service includes shifing of products like furniture...
            </p>
            <Link to='household-relocation'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>

            <div>
            <div className='pt-4 mx-4'>
            <img className='md:w-80 md:h-48' src='https://as2.ftcdn.net/v2/jpg/01/81/65/85/1000_F_181658575_6gz3Gx96iRndmBtXv2llVsGOGsfdT1AP.jpg'/>
            </div>
            <p className='text-bg px-4 mt-4'>WAREHOUSE/STORAGE</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80 ">
            Enhancing strength to our services we also offer warehousing services. We fulfill 
            your warehousing & storage needs. We have warehouses and stores where your goods can...
            </p>
            <Link to='warehouse'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>

            <div>
            <div className='pt-4 mx-4'>
            <img className='md:w-80 md:h-48' src='https://image.freepik.com/free-photo/red-luxury-sedan-road_114579-5079.jpg'/>
            </div>
            <p className='text-bg px-4 mt-4 uppercase'>VEHICLE Transportation</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80">
            We have invested a great volume to create a state of art infrastructure, 
            we can accommodate you with any type of carrier wither small or big. Our country wide network has...
            </p>
            <Link to='vehicle-transportation'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>
{/* 
            <div>
            <div className='pt-4 mx-4'>
            <img src='https://image.freepik.com/free-photo/forklift-driver-relocating-lifting-goods-large-warehouse-center_342744-1447.jpg'/>
            </div>
            <p className='text-bg px-4 mt-4 uppercase'>loading & unloading</p>
            <p className="overflow-clip px-4 pt-2 txt-col">
            We have a specialised team of trained and experienced staff who excel in handling loading and unloading services.
            The major and risky task is loading and unloading. It is always advisable to do this work with the help 
            of professional experts because it can create unwanted problems and...
            </p>
            <Link to='loading-unloading'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div> */}
            </div>
            </div>

            {/* </div> */}
            <div className='px-4 py-8 services-bg md:px-60'>
                <div>
                <div className='w-full text-white font-sans px-2 py-8 text-center vehicles flex flex-row pl-16'>
                    <div>
                    <LocalShippingIcon style={{ fontSize: '48px' }}/>
                    </div>
                    <div>
                    <p className='pl-6 text-4xl'>100+ </p><p className='text-bg pl-6'>VEHICLES</p>
                    </div>
                    </div>

                    <div className='w-full text-white font-sans px-2 py-8 text-center branches flex flex-row pl-16'>
                    <div>
                    <HouseIcon style={{ fontSize: '48px' }}/>
                    </div>
                    <div>
                    <p className='pl-6 text-4xl'>15+  </p> <p className='text-bg pl-12'>BRANCHES</p>
                    </div>
                    </div>

                    <div className='w-full text-white font-sans px-2 py-8 text-center clients flex flex-row pl-16'>
                    <div>
                    <PeopleIcon style={{ fontSize: '48px' }}/>
                    </div>
                    <div>
                    <p className='pl-6 text-4xl'>1000+ </p><p className='text-bg pl-10'>HAPPY CLIENTS</p>
                    </div>
                    </div>
                    </div>


                    <div>
                    <p className='text-2xl mt-8'>Why We Are The Best From Others</p>
                    <p className="overflow-clip px-4 pt-4 txt-col text-center">
                    Sheoran Cargo Movers always remains committed and dedicated towards clients in order to 
                    deliver the satisfactory results. We always take special measures to keep all kinds of hassles away. Best usage of 
                    time is the foremost feature of our efficacy that always helps to remain away of wastage of time. We also own a large fleet of specialized vehicles to ensure optimum results. This characteristic allures the imagination 
                    of keen entrepreneurs even more as they find it easier to execute the strategic business plans at the right time.
                    </p>
                    <img class='h-24 w-24 mx-auto mt-4' src='https://st3.depositphotos.com/1031359/13523/v/450/depositphotos_135238468-stock-illustration-a-red-24-hour-icon.jpg'></img>
                    <p className='text-bg px-4 mt-4 uppercase text-center font-medium'>24x7 service</p>
                    <p className="overflow-clip px-4 pt-4 txt-col text-center">
                    Our moving & customer care services are open for you all the time.
                    </p>

                    <img class='h-24 w-24 mx-auto mt-4' src='https://as2.ftcdn.net/v2/jpg/01/38/55/13/500_F_138551354_j414AolwYFEcaMp1ttD6z4i3iEu54ooe.jpg'></img>
                    <p className='text-bg px-4 mt-4 uppercase text-center font-medium'>ONE DECADES OF EXPERIENCE</p>
                    <p className="overflow-clip px-4 pt-4 txt-col text-center">
                    Possesses enough experience to relocate you safely.
                    </p>

                    <img class='h-24 w-24 mx-auto mt-4' src='https://images.m3xs.net/assets/img/m3server/security-logo.png'></img>
                    <p className='text-bg px-4 mt-4 uppercase text-center font-medium'>COMPLETE SECURITY</p>
                    <p className="overflow-clip px-4 pt-4 txt-col text-center">
                    Put your own lock on the cubes/containers and unlock at your end for 100% safety assurance.
                    </p>
                    </div>
            </div>

        </div>
    )
}

export default Services
