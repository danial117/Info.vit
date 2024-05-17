

import { ShoppingCartRounded,KeyboardArrowDownRounded,Inventory2Rounded,SearchRounded,MedicationRounded,LocalPhoneRounded,EmailRounded, KeyboardArrowLeftRounded, KeyboardArrowRightRounded} from "@mui/icons-material"
import { useState, useRef } from "react"

import { useMediaQuery } from "@mui/material";
import NavBar from "./NavBar"




import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "./Footer";




const HomePage=()=>{

    const isMobile = useMediaQuery('(max-width:1024px)');




    const handleSlideRight = () => {
        sliderRef.current.slickNext(); // Move to next slide
        
      };

      const handleSlideLeft = () => {
        sliderRef.current.slickPrev(); // Move to next slide
       
      };









    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: !isMobile ? 3 :1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 5000,
        loop:true,
        pauseOnHover: false,
        arrows:false
        
      };

    


    return(
    <>

    <NavBar/>

    


    


    <section style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url(${require('../assets/Poster1.jpeg')})`}} className="w-[100%] bg-cover bg-center md:max-lg:h-[70vh] relative h-[90vh]">
        

        <div className="w-[40%] md:max-lg:w-[80%] md:max-lg:top-48 absolute left-14 top-16">
            <p className="font-Lexend text-white text-[2rem]">Pharma Products</p>

            <div className="border-l-4 mt-4 mb-6 w-[60%] pl-4 border-emerald-600 ">
                <p className="text-white text-md font-Livvic">We have plenty of medical products here available for everyone</p>
                

            </div>
           
           <div className="flex flex-row">
            <div className="w-[70%] flex flex-row py-4 bg-white">
                <div className=" w-[50%] mx-2 border-gray-300 border-r-2 flex flex-row ">
                    <div className="mx-2 text-emerald-600">
                <Inventory2Rounded />
                </div>

                <input placeholder="Search your products" className="w-[70%] text-xs  focus:outline-none " type="text"/>
                </div>

                <div>
                    <input placeholder="Search your brands" className="w-[90%] text-xs  focus:outline-none " type="text"/>
                </div>
            </div>
            <div className="py-2 px-6  text-white bg-emerald-500">

                <SearchRounded style={{fontSize:40}} />

                </div>
            </div>
        </div>



    </section>






    <section className="bg-gray-200 md:max-lg:h-auto py-12 h-[150vh] w-full">
        <div className="pt-6">
            <p className="text-center text-cyan-900 font-Lexend font-bold text-[1.8rem] ">Pharma Medicines</p>
            <p className="text-center text-cyan-900 font-Livvic ">We have every kind of medicine you need in the everyday life.</p>
        </div>

       <div className="w-[30%] md:max-lg:w-[60%] my-4 flex flex-row mx-auto">
           <div className="bg-white w-[80%] py-[18px] ">
            <input placeholder="Search Product" type="text" className="text-gray-300 focus:outline-none ml-4 text-xs" />
           


           </div>
           <div className="text-white bg-emerald-500 px-6 py-2">
            <SearchRounded style={{fontSize:40}} />
           </div>


       </div>




       
       <div className="w-[80%] mx-auto">
           <p className="font-Poppins text-cyan-900 text-[1.3rem] md:max-lg:mt-14 md:max-lg:text-[1rem] my-6">Product Category</p>

           <div className="flex flex-row gap-x-12 w-[100%] mx-auto">
            <div className="w-[100%] basis-[30%]">
                <div className="flex gap-y-2 flex-col">
                    <div className="pl-6 md:max-lg:text-sm  rounded-md bg-emerald-500 text-[16px] font-Livvic text-white w-full py-4">All pharmacutical medicines</div>
                    <div className="pl-6 md:max-lg:text-sm  rounded-md bg-white text-[16px] font-Livvic text-cyan-900 w-full py-4">All pharmacutical medicines</div>
                    <div className="pl-6 md:max-lg:text-sm  rounded-md bg-white text-[16px] font-Livvic text-cyan-900 w-full py-4">All pharmacutical medicines</div>
                    <div className="pl-6 md:max-lg:text-sm  rounded-md bg-white text-[16px] font-Livvic text-cyan-900 w-full py-4">All pharmacutical medicines</div>

                </div>


            </div>

            <div className="w-[100%] basis-[70%] gap-x-4 gap-y-4 md:max-lg:grid-cols-2  grid grid-cols-3">
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                  














                    <div className="flex gap-y-2 border-2 bg-white rounded-md border-emerald-500 flex-col">
                        <div className=" w-[90%] mt-6 border-b-2 pb-2 border-gray-200  mx-auto">
                            <img className="w-[50%] h-[100%] mx-auto my-auto" src={require('../assets/med1.png')}/>

                        </div>
                        <div className="m-2">
                        <p className="font-Abel text-[12px] font-bold text-emerald-400 my-[2px]">Himalaya-care</p>
                        <p className="font-Lexend text-gray-800">DentalCidin Broad-Spe....</p>
                        <p className="font-Poppins text-gray-600">150 Grams</p>
                        <div  className="grid py-2 grid-cols-2 gap-x-2 ">
                            <div className="bg-gray-200 font-Abel py-2 text-[20px] rounded-md text-center">$5.99</div>
                            <div className="text-md border-2 rounded-md py-2 font-Abel text-center border-gray-300">Add to cart</div>
                        </div>
                        </div>


                    </div>














                   
                    
                    <div className="flex gap-y-2 border-2 bg-white rounded-md border-emerald-500 flex-col">
                        <div className=" w-[90%] mt-6 border-b-2 pb-2 border-gray-200  mx-auto">
                            <img className="w-[50%] h-[100%] mx-auto my-auto" src={require('../assets/med1.png')}/>

                        </div>
                        <div className="m-2">
                        <p className="font-Abel text-[12px] font-bold text-emerald-400 my-[2px]">Himalaya-care</p>
                        <p className="font-Lexend text-gray-800">DentalCidin Broad-Spe....</p>
                        <p className="font-Poppins text-gray-600">150 Grams</p>
                        <div  className="grid py-2 grid-cols-2 gap-x-2 ">
                            <div className="bg-gray-200 font-Abel py-2 text-[20px] rounded-md text-center">$5.99</div>
                            <div className="text-md border-2 rounded-md py-2 font-Abel text-center border-gray-300">Add to cart</div>
                        </div>
                        </div>


                    </div>







                    <div className="flex gap-y-2 border-2 bg-white rounded-md border-emerald-500 flex-col">
                        <div className=" w-[90%] mt-6 border-b-2 pb-2 border-gray-200  mx-auto">
                            <img className="w-[50%] h-[100%] mx-auto my-auto" src={require('../assets/med1.png')}/>

                        </div>
                        <div className="m-2">
                        <p className="font-Abel text-[12px] font-bold text-emerald-400 my-[2px]">Himalaya-care</p>
                        <p className="font-Lexend text-gray-800">DentalCidin Broad-Spe....</p>
                        <p className="font-Poppins text-gray-600">150 Grams</p>
                        <div  className="grid py-2 grid-cols-2 gap-x-2 ">
                            <div className="bg-gray-200 font-Abel py-2 text-[20px] rounded-md text-center">$5.99</div>
                            <div className="text-md border-2 rounded-md py-2 font-Abel text-center border-gray-300">Add to cart</div>
                        </div>
                        </div>


                    </div>














                    <div className="flex gap-y-2 border-2 bg-white rounded-md border-emerald-500 flex-col">
                        <div className=" w-[90%] mt-6 border-b-2 pb-2 border-gray-200  mx-auto">
                            <img className="w-[50%] h-[100%] mx-auto my-auto" src={require('../assets/med1.png')}/>

                        </div>
                        <div className="m-2">
                        <p className="font-Abel text-[12px] font-bold text-emerald-400 my-[2px]">Himalaya-care</p>
                        <p className="font-Lexend text-gray-800">DentalCidin Broad-Spe....</p>
                        <p className="font-Poppins text-gray-600">150 Grams</p>
                        <div  className="grid py-2 grid-cols-2 gap-x-2 ">
                            <div className="bg-gray-200 font-Abel py-2 text-[20px] rounded-md text-center">$5.99</div>
                            <div className="text-md border-2 rounded-md py-2 font-Abel text-center border-gray-300">Add to cart</div>
                        </div>
                        </div>


                    </div>
















            </div>


           </div>








           <div className="border-2 ml-[34%] py-2  w-[20%] mt-6 border-emerald-500  rounded-md">
                <p className="font-Abel text-center text-emerald-500">Show all Products</p>
            </div>





       </div>
      



    </section>
























        























    <section>

<div className="w-full my-8 md:max-lg:h-[50vh] h-[60vh]">
    <p className="text-center font-Abel font-bold text-[2.5rem]">3 easy steps</p>

    <div className="w-[5%] mx-auto bg-emerald-500 my-4 h-[3px]"></div>

    <p className="text-center w-[50%] mx-auto font-Livvic text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae deserunt adipisci aliquid? Totam minima officia, molestias magnam facere iure laborum.</p>

    <div className="grid grid-cols-3 md:max-lg:w-[90%] my-6 gap-x-6 w-[80%] mx-auto">



        <div className="flex shadow-lg md:max-lg:p-[10px]  p-[40px]    shadow-gray-300 flex-row">
            <div className="basis-[40%]">
                <SearchRounded style={{fontSize:50}} />
            </div>
            <div>
                <p className='font-Poppins font-bold text-[1.3rem]'>Search</p>
                <p className='font-Livvic text-xs'>Search for the product you want to buy.</p>
            </div>
             
        </div>


        <div className="flex shadow-lg md:max-lg:p-[10px]  p-[40px]    shadow-gray-300 flex-row">
            <div className="basis-[40%]">
                <MedicationRounded style={{fontSize:50}} />
            </div>
            <div>
                <p className='font-Poppins font-bold text-[1.3rem]'>Select</p>
                <p className='font-Livvic text-xs'>Select and add the medication to the cart. </p>
            </div>
             
        </div>



        <div className="flex shadow-lg md:max-lg:p-[10px]  p-[40px]    shadow-gray-300 flex-row">
            <div className="basis-[40%]">
                <ShoppingCartRounded style={{fontSize:50}} />
            </div>
            <div>
                <p className='font-Poppins font-bold text-[1.3rem]'>Checkout</p>
                <p className='font-Livvic text-xs'>Move to checkout for purchasing the products.</p>
            </div>
             
        </div>

    </div>


</div>
</section>




































    <section> 

        <div  style={{backgroundImage: `linear-gradient(to right,rgba(5, 150, 105,0.7), rgba(5, 150, 105,0.8)), url(${require('../assets/Poster1.jpeg')})`}}   className="w-full relative md:max-lg:h-auto  my-24 bg-center bg-cover h-auto">

            <div onClick={handleSlideLeft} className="absolute cursor-pointer text-gray-700 bg-white rounded-full top-[35%]  md:max-lg:left-[2%] left-[8%]">
                <KeyboardArrowLeftRounded style={{fontSize:60}} />
            </div>

            <div onClick={handleSlideRight} className="absolute cursor-pointer text-gray-700 bg-white rounded-full top-[35%]  md:max-lg:right-[2%] right-[8%]">
                <KeyboardArrowRightRounded style={{fontSize:60}} />
            </div>





        <Slider  ref={sliderRef}  className=" py-12 my-6 flex gap-x-6  w-[70%] mx-auto " {...settings}>


            <div className="pl-4">
        <div className="flex gap-y-2  bg-white rounded-md flex-col">
                        <div className=" w-[90%] mt-6  pb-2 border-gray-200  mx-auto">
                            <img className="w-[50%] h-[100%] mx-auto my-auto" src={require('../assets/med1.png')}/>

                        </div>
                        <div className="m-2">
                        <p className="font-Abel text-[12px] font-bold text-emerald-400 my-[2px]">Himalaya-care</p>
                        <p className="font-Lexend text-gray-800">DentalCidin Broad-Spe....</p>
                        <p className="font-Poppins text-gray-600">150 Grams</p>
                        <div  className="grid py-2 grid-cols-2 gap-x-2 ">
                            <div className="bg-gray-200 font-Abel py-2 text-[20px] rounded-md text-center">$5.99</div>
                            <div className="text-md border-2 rounded-md py-2 font-Abel text-center border-gray-300">Add to cart</div>
                        </div>
                        </div>


                    </div>
                    </div>



                 
                 <div className="pl-4">
                    <div className="flex gap-y-2  bg-white rounded-md flex-col">
                        <div className=" w-[90%] mt-6  pb-2 border-gray-200  mx-auto">
                            <img className="w-[50%] h-[100%] mx-auto my-auto" src={require('../assets/med1.png')}/>

                        </div>
                        <div className="m-2">
                        <p className="font-Abel text-[12px] font-bold text-emerald-400 my-[2px]">Himalaya-care</p>
                        <p className="font-Lexend text-gray-800">DentalCidin Broad-Spe....</p>
                        <p className="font-Poppins text-gray-600">150 Grams</p>
                        <div  className="grid py-2 grid-cols-2 gap-x-2 ">
                            <div className="bg-gray-200 font-Abel py-2 text-[20px] rounded-md text-center">$5.99</div>
                            <div className="text-md border-2 rounded-md py-2 font-Abel text-center border-gray-300">Add to cart</div>
                        </div>
                        </div>


                    </div>
                    </div>











                 <div className="pl-4">
                    <div className="flex  gap-y-2 bg-white rounded-md flex-col">
                        <div className=" w-[90%] mt-6  pb-2 border-gray-200  mx-auto">
                            <img className="w-[50%] h-[100%] mx-auto my-auto" src={require('../assets/med1.png')}/>

                        </div>
                        <div className="m-2">
                        <p className="font-Abel text-[12px] font-bold text-emerald-400 my-[2px]">Himalaya-care</p>
                        <p className="font-Lexend text-gray-800">DentalCidin Broad-Spe....</p>
                        <p className="font-Poppins text-gray-600">150 Grams</p>
                        <div  className="grid py-2 grid-cols-2 gap-x-2 ">
                            <div className="bg-gray-200 font-Abel py-2 text-[20px] rounded-md text-center">$5.99</div>
                            <div className="text-md border-2 rounded-md py-2 font-Abel text-center border-gray-300">Add to cart</div>
                        </div>
                        </div>


                    </div>
                    </div>





            </Slider>





          










            </div>











    </section>






  <Footer />
     
























    
    </>
    )
}




export default HomePage






