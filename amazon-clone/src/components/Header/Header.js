import React from 'react'
import classes from './Header.module.css';
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import Lowerheader from './Lowerheader';




function Header() {
  return (
    <>
        <section className={classes.header_container}>
           <div className={classes.logo_container}>
              {/* logo */}
                <a href="/">
                    <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazon logo" />
                </a>
               {/* delivery */}
                <div className={classes.delivery}>
                    <span>
                    <SlLocationPin />

                    </span>
                    <div>
                        <p>Delivered to</p>
                        <span>Ethipia</span>

                    </div>
                 
                 </div>
           </div>
          
           {/* search */}
           <div className={classes.search}>
              
              <select name='' id=''>
                <option value="">All</option>
              </select>
              <input type="text" name='' id='' placeholder='search product' />
              <FaSearch size={25} />

                
           </div>
           {/* right side link */}
           <div className={classes.order_container}>
             <a href="" className={classes.lan}>
                <img src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?t=st=1712659972~exp=1712663572~hmac=70872f57f855b02addf9b42d2d1eb1427762d85ac74357999ae5d2f8e4ac2a34&w=1380" alt="" />
                <select>
                    <option value="">EN</option>
                </select>
             </a>
             {/* three components */}
             <a href="">
               
                 <p>Sign In</p>
                 <span>Account & Lists</span>
               
             </a>
             {/* orders */}
             <a href="">
                <p>returns</p>
                <span>& Orders</span>
             </a>
             {/* cart */}
             <a href='' className={classes.cart}>
                <BiCart size={35} />
                <span>0</span>
             </a>

           </div>
        </section>

        <Lowerheader />
    </>
  )
}

export default Header
