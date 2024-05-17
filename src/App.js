import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";


import './main.css'

import HomePage from "./scenes/HomePage";
import ProductPage from "./scenes/ProductPage";



const App=()=>{

  return(
    <div className="app">
    <BrowserRouter basename="/Info.vit/">

    <Routes>
      <Route path='/' element={<HomePage/>}> </Route>
      <Route path='/productPage' element={<ProductPage/>}> </Route>
    

    </Routes>
    </BrowserRouter> 
    </div>
  )
      
}



export default App;