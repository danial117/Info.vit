import { ProductionQuantityLimits } from "@mui/icons-material"
import { useState } from "react";
import { KeyboardArrowDownRounded,KeyboardArrowUpRounded,Add,Remove } from "@mui/icons-material";
import NavBar from './NavBar'
import Footer from './Footer'
import SimiliarProducts from "../widget/SimiliarProducts";






const ProductPage=()=>{
     const [productDescription,setProductDescription]=useState(false)


    return(

        <>
        <NavBar />

        <div className="h-[auto] my-4">
            <div className="flex flex-row ">
                <div className="basis-[40%]">

                    <div className="border-2 w-[80%] flex mx-auto h-[500px] border-gray-300 rounded-md">
                        <img className="w-[60%] h-[350px] mx-auto my-auto"  src={require('../assets/med1.png')}  />

                    </div>



                    

                </div>

                <div className="basis-[30%] mx-auto"> 

                <p className="font-Abel text-[2rem] font-bold">Dentalcidin Broad-Spectrum Toothpaste with Biocidin</p>
                <p className="font-Lexend underline text-emerald-700">Himalaya Care</p>

                <div className="flex mt-4 mb-8 flex-row">
                    <p className="font-Lexend bg-gray-100 mx-2 px-[4px]">methyl</p>
                    <p className="font-Lexend bg-gray-100 mx-2 px-[4px]">methyl</p>
                    <p className="font-Lexend bg-gray-100 mx-2 px-[4px]">methyl</p>
                    <p className="font-Lexend bg-gray-100 mx-2 px-[4px]">methyl</p>
                </div>

                <p className="font-Abel font-bold text-md">Select options:</p>

                <div className="px-4 py-2 border-2 border-black w-[30%] rounded-full bg-gray-100">
                <p className="font-Abel  ">3 ounce</p>
                </div>

                <div className="grid grid-cols-3 gap-x-2  my-4  border-[1px] border-blue-900 rounded-md w-[35%]">
                    <div className="text-blue-900  mx-autocursor-pointer p-2 bg-gray-300"><Remove style={{fontSize:20}}/></div>
                    <p className="p-2 mx-auto">5</p>
                    <div className="text-blue-900 mx-auto cursor-pointer p-2"><Add style={{fontSize:20}}/></div>

                </div>

                <div className="border-2 my-4 border-gray-300 rounded-md">
                    <p className="text-center text-gray-700 font-Lexend py-2">View in cart</p>
                </div>

                <div className="flex gap-y-2 flex-col">
                    <div onClick={()=>{setProductDescription('Description'); if(productDescription==='Description'){setProductDescription(false)}}} className="cursor-pointer border-b-2 py-2 border-gray-300 ">
                        <div className="flex justify-between">
                        <button className="text-gray-800 text-[13px] font-Lexend">Description</button>
                        <div className="text-gray-400">
                            {productDescription === 'Description'? <KeyboardArrowUpRounded /> :    <KeyboardArrowDownRounded /> }
                        </div>

                          
                        </div>

                        {productDescription === 'Description'&& <p className="font-Livvic text-xs mt-2">When dealing with gastrointestinal and systemic imbalances, Biocidin® cuts through the complexity. It clears away irritants, unwanted microbes, and biofilms, while selectively enhancing beneficial organisms. Our signature blend, Biocidin® combines 18 botanical extracts and essential oils. The result is a potent, broad-spectrum formula that targets the entire GI tract and helps maintain the delicate balance of microorganisms in the microbiome. Its far-reaching effects include support for biofilm cleansing, immunomodulation, healthy digestion and elimination, and detoxification.</p> }
                    </div>




                    <div className="flex border-b-2 py-2 border-gray-300 justify-between">

                        <p className="text-gray-800 text-[13px] font-Lexend">Warnings</p>
                        <div className="text-gray-400">
                            <KeyboardArrowDownRounded />
                        </div>
                    </div>









                    <div className="flex border-b-2 py-2 border-gray-300 justify-between">

                        <p className="text-gray-800 text-[13px] font-Lexend">Dietry Restrictions</p>
                        <div className="text-gray-400">
                            <KeyboardArrowDownRounded />
                        </div>
                    </div>








                    <div className="flex border-b-2 py-2 border-gray-300 justify-between">

                        <p className="text-gray-800 text-[13px] font-Lexend">more</p>
                        <div className="text-gray-400">
                            <KeyboardArrowDownRounded />
                        </div>
                    </div>







                    
                    
                </div>

                

                </div>

            </div>


        </div>

        <SimiliarProducts />

        <Footer />
        
        
        </>
    )
}







export default ProductPage;





