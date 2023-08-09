"use client"
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AirIcon from '@mui/icons-material/Air';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Link from 'next/link'; 
import { useStateValue } from '../StateProvider';
import reducer, { initialState } from '../reducer';


export default function Header() {

const [{cart}, dispatch] = useStateValue()

  return (
    <div className='flex gap-3 p-5'>
      <Link href="/" className="header-logo flex ">
        <AirIcon className='text-3xl flex'/>
        <h1>ShopWave</h1>
      </Link>

      <div className="header-search border border-black rounded-[10px] p-1">
        <input type='text' className='border-none outline-none ml-2'/>
        <SearchIcon />
      </div>

      <div className="header-nav flex gap-4">
        <Link href="/login" className="sign-in flex">
          <LoginIcon className="w-5" />
          <p>Login</p>
        </Link>
        <Link href="/shop" className="shop flex">
          <LocalOfferIcon />
          <p>Your Shop</p>
        </Link>
        <Link href="/Checkout" className="cart flex">
          <ShoppingCartIcon />
          <span>{cart.length}</span>
        </Link>
      </div>
    </div>
  );
}
