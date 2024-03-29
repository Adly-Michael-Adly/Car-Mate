import React from 'react';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./product";
import NavbarP from "./navbarP";
import {HiBarsArrowDown} from 'react-icons/hi2'
import {BsSearch} from 'react-icons/bs'

function Onlyparts(){

    const apiurl2='https://car-mate-t012.onrender.com/api/v1/prodcuts?Type=Car Parts';
    const [prodcuts2,setProducts2]=useState([]);
    useEffect(() =>{ 
      fetch(apiurl2)
      .then((res) =>res.json())
      .then((data)=>setProducts2(data))
    },[]);
    console.log(prodcuts2.product);
    return(
        <>  
        <body className="bgmarket">
    <div>
    <NavbarP />
    </div>
    <div className="cont">
      <h2 className="Marketheader p-0">Find your perfect item 
        <div class="Marketheader2">
            <div class="d-flex justify-content-center p-3 h-100">
                <div class="searchbar">
                    <input className="search_input" type="text" placeholder="Search..."/>
                    <a className="search_icon" href="*"><BsSearch/></a>
                </div>
            </div>
        </div>
      </h2>
   {/* ///////////////////////////////////// */}
    <ul className="nav mt-5 ms-5 p-0 marketheadnav" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
      <NavLink to="/market">
        <button className="marketheadnav2 " id='item'  >  All items</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink to="/onlycars" >
        <button className="marketheadnav2" id='car'>Cars</button>
    </NavLink>
      </li>
      <li className="nav-item " role="presentation">
      <NavLink to="/onlyaccessories" >
        <button className="marketheadnav2" id='access'>Accessories</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink to="/onlyparts" >
        <button className="marketheadnav2 bg-primary" id='parts'>Car parts</button>
    </NavLink>
      </li>
      <li className="nav-item marketheadnav3" role="presentation">
        <a className="marketheadna4" href="/market"><HiBarsArrowDown className="iconFilter"/></a>
      </li>
    </ul>

<div className="row row-cols-1 col-lg row-cols-md-3 g-5 m-5 cards">
    
    {prodcuts2.product?.map((prodcut) =>{
        return(
            <div className="col cardp" key={prodcut._id}>
                <Product prodcut={prodcut} />
            </div>
        )
    })}
  
  </div>
  </div>
        </body>
</>
    );
}
export default Onlyparts;