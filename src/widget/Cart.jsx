



import { CloseRounded,Add,Remove,KeyboardArrowLeftRounded } from '@mui/icons-material';
import { useState } from 'react';





const Cart=()=>{
    const [hide,setHide]=useState(false)
   


    return(
        <>

        <div className={`fixed ${hide? 'hidden':'visible'}  z-[999] top-[0%]  bg-gray-100 right-[0%] w-[40%] `}>


            <div className='relative h-[100vh] '>
            <div className='p-2 h-[80vh] overflow-y-scroll'>
            <div className='flex '>
            <div className='hover:scale-125 cursor-pointer'>
                <KeyboardArrowLeftRounded onClick={()=>{setHide(!hide)}} style={{fontSize:30,cursor:'pointer'}}/>
            </div>

            <p className=" font-Poppins mx-auto my-2">Cart(5)</p>
            </div>


            <div className="m-4 pb-2 border-b-2 border-gray-500 ">
                <div className="grid grid-cols-2">
                    <div className="flex flex-row">
                        <div className=''>
                            <div className='w-[100%] flex  h-[100px]'>
                            <img className='w-[80%]  h-[70px] mx-auto  ' src={require('../assets/med1.png')} />
                            </div>

                        </div>

                        <div className='w-[60%]'>
                            <p className='font-Lexend text-[14px]'>Biocidin tetrolyin Chloride</p>
                            <p className='font-Poppins text-xs underline text-emerald-500'>Himalaya care</p>
                            <p className='text-Livvic text-[14px] text-gray-700'>1 ounce</p>
                        </div>

                    </div>
                    

                    <div className=''>
                        <div className='flex justify-end'>
                            <CloseRounded />
                        </div>

                        <div className=''>
                        <div className="grid grid-cols-3 gap-x-2  my-4  border-[1px] rounded-md w-[40%] ml-auto ">
                    <div className="  px-auto my-auto cursor-pointer  bg-gray-300"><Remove style={{fontSize:20}}/></div>
                    <p className=" mx-auto">5</p>
                    <div className=" px-auto my-auto  cursor-pointer "><Add style={{fontSize:20}}/></div>

                </div>
                        </div>

                        <div>
                            <p className='font-Abel text-end'>$4.99</p>
                        </div>

                    </div>

                </div>


            </div>






            <div className="m-4 pb-2 border-b-2 border-gray-500 ">
                <div className="grid grid-cols-2">
                    <div className="flex flex-row">
                        <div className=''>
                            <div className='w-[100%] flex  h-[100px]'>
                            <img className='w-[80%]  h-[70px] mx-auto  ' src={require('../assets/med1.png')} />
                            </div>

                        </div>

                        <div className='w-[60%]'>
                            <p className='font-Lexend text-[14px]'>Biocidin tetrolyin Chloride</p>
                            <p className='font-Poppins text-xs underline text-emerald-500'>Himalaya care</p>
                            <p className='text-Livvic text-[14px] text-gray-700'>1 ounce</p>
                        </div>

                    </div>
                    

                    <div className=''>
                        <div className='flex justify-end'>
                            <CloseRounded />
                        </div>

                        <div className=''>
                        <div className="grid grid-cols-3 gap-x-2  my-4  border-[1px] rounded-md w-[40%] ml-auto ">
                    <div className="  px-auto my-auto cursor-pointer  bg-gray-300"><Remove style={{fontSize:20}}/></div>
                    <p className=" mx-auto">5</p>
                    <div className=" px-auto my-auto  cursor-pointer "><Add style={{fontSize:20}}/></div>

                </div>
                        </div>

                        <div>
                            <p className='font-Abel text-end'>$4.99</p>
                        </div>

                    </div>

                </div>


            </div>









            <div className="m-4 pb-2 border-b-2 border-gray-500 ">
                <div className="grid grid-cols-2">
                    <div className="flex flex-row">
                        <div className=''>
                            <div className='w-[100%] flex  h-[100px]'>
                            <img className='w-[80%]  h-[70px] mx-auto  ' src={require('../assets/med1.png')} />
                            </div>

                        </div>

                        <div className='w-[60%]'>
                            <p className='font-Lexend text-[14px]'>Biocidin tetrolyin Chloride</p>
                            <p className='font-Poppins text-xs underline text-emerald-500'>Himalaya care</p>
                            <p className='text-Livvic text-[14px] text-gray-700'>1 ounce</p>
                        </div>

                    </div>
                    

                    <div className=''>
                        <div className='flex justify-end'>
                            <CloseRounded />
                        </div>

                        <div className=''>
                        <div className="grid grid-cols-3 gap-x-2  my-4  border-[1px] rounded-md w-[40%] ml-auto ">
                    <div className="  px-auto my-auto cursor-pointer  bg-gray-300"><Remove style={{fontSize:20}}/></div>
                    <p className=" mx-auto">5</p>
                    <div className=" px-auto my-auto  cursor-pointer "><Add style={{fontSize:20}}/></div>

                </div>
                        </div>

                        <div>
                            <p className='font-Abel text-end'>$4.99</p>
                        </div>

                    </div>

                </div>


            </div>






            <div className="m-4 pb-2 border-b-2 border-gray-500 ">
                <div className="grid grid-cols-2">
                    <div className="flex flex-row">
                        <div className=''>
                            <div className='w-[100%] flex  h-[100px]'>
                            <img className='w-[80%]  h-[70px] mx-auto  ' src={require('../assets/med1.png')} />
                            </div>

                        </div>

                        <div className='w-[60%]'>
                            <p className='font-Lexend text-[14px]'>Biocidin tetrolyin Chloride</p>
                            <p className='font-Poppins text-xs underline text-emerald-500'>Himalaya care</p>
                            <p className='text-Livvic text-[14px] text-gray-700'>1 ounce</p>
                        </div>

                    </div>
                    

                    <div className=''>
                        <div className='flex justify-end'>
                            <CloseRounded />
                        </div>

                        <div className=''>
                        <div className="grid grid-cols-3 gap-x-2  my-4  border-[1px] rounded-md w-[40%] ml-auto ">
                    <div className="  px-auto my-auto cursor-pointer  bg-gray-300"><Remove style={{fontSize:20}}/></div>
                    <p className=" mx-auto">5</p>
                    <div className=" px-auto my-auto  cursor-pointer "><Add style={{fontSize:20}}/></div>

                </div>
                        </div>

                        <div>
                            <p className='font-Abel text-end'>$4.99</p>
                        </div>

                    </div>

                </div>


            </div>




            </div>

            <div className='w-[100%] absolute bottom-0 bg-white h-[25vh]'>
                <div className='w-[80%] mt-4  mx-auto'>
                    <div className='flex flex-row justify-between'>
                        <p className='font-Abel text-emerald-600'>Savings</p>
                        <p className='font-Abel text-emerald-600'>4.50$</p>

                    </div>

                    <div className='flex flex-row justify-between'>
                        <p className='font-Abel '>Subtotal</p>
                        <p className='font-Abel '>14.50$</p>

                    </div>

                    <div className='my-2'>
                        <button className='flex w-[80%] justify-center p-4 rounded-full bg-black mx-auto text-white'>Continue to checkout</button>
                    </div>
                    <p className='text-center text-xs text-gray-500 font-Livvic'>Taxes and shipping calculated at checkout.</p>


                </div>


            </div>


            </div>








        </div>
        
        
        
        
        
        
        
        
        </>
    )
}





export default Cart;








