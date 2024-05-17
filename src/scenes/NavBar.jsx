
import { KeyboardArrowDownRounded,ShoppingCartRounded } from "@mui/icons-material";
import { useState } from "react";
import LoginWidget from "../widget/LoginWidget";
import Cart from "../widget/Cart";
import { useMediaQuery } from "@mui/material";

const NavBar=()=>{

    const isMobile = useMediaQuery('(max-width:1024px)');
  const [loginWidget,setLoginWidget]=useState(false)
  const [cart,setCart]=useState(false)


    return(
        <nav className="w-[100%] border-b-2 border-gray-300 ">
        <div className="flex w-[90%] mx-auto flex-row">
            <div className="Logo basis-[10%]  mx-auto ">
                 <p className="text-[2rem] md:max-lg:text-center md:max-lg:my-2 md:max-lg:text-[1.6rem]">Info<span>.vit</span></p>

            </div>
            <div className="flex text-center my-auto justify-center   className='font-Abel text-lg' mx-auto gap-x-16 md:max-lg:gap-x-4 basis-[70%] md:max-lg:basis-[80%] mx-auto flex-row">
                <p className='font-Lexend md:max-lg:text-[14px] text-lg'>Home <span><KeyboardArrowDownRounded/></span></p>
                <p className='font-Lexend md:max-lg:text-[14px] text-lg'>About <span><KeyboardArrowDownRounded/></span></p>
                <p className='font-Lexend md:max-lg:text-[14px] text-lg'>News <span><KeyboardArrowDownRounded/></span></p>
                <p className='font-Lexend md:max-lg:text-[14px] text-lg'>Info <span><KeyboardArrowDownRounded/></span></p>
                <p className='font-Lexend md:max-lg:text-[14px] text-lg'>Contact Us <span><KeyboardArrowDownRounded/></span></p>
            </div>

            <div className="basis-[20%] md:max-lg:basis-[20%] md:max-lg:justify-end md:max-lg:gap-x-4  w-full gap-x-6 flex flex-row py-2 mx-auto">
                <ShoppingCartRounded onClick={()=>setCart(!cart)} style={{cursor:'pointer'}}/>
                <button onClick={()=>setLoginWidget(!loginWidget)} className="px-4  md:max-lg:text-[12px] md:max-lg:px-2  text-emerald-600 border-2 border-emerald-300  rounded-md text-sm  font-Poppins">
                    Sign Up
                </button>

            </div>

        </div>




        
     { !isMobile &&  <LoginWidget  loginWidget={loginWidget}/>}

      {cart &&  <Cart />}




        






    </nav>
    )
}



export default NavBar;







