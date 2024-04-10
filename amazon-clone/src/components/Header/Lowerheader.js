import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from './Header.module.css';

function Lowerheader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
           <AiOutlineMenu />

            <p>All</p>
        </li>
        <li>Today's Delay</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  )
}

export default Lowerheader
