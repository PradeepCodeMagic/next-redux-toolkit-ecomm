"use client"
import Image from "next/image";
import Header from "./Comman/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setproduct, setProductFailure } from "./redux/features/productSlice";
import { setWishlist } from "./redux/features/wishlistSlice";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import { removeWishItem  } from './redux/features/wishlistSlice'

export default function Home() {
  const dispatch = useDispatch()

  // const products = useSelector((state) => state.product.products);
  // const error = useSelector((state) => state.product.error);
  // const status = useSelector((state) => state.product.status);

  // uper jese ya fir object destrucer kr kr

  const { products, error, status, loadingProduct } = useSelector((state) => state.product)

  
  

  let displayData = () => {
    // loading.....work......
    dispatch(setLoading())

    axios.get('https://dummyjson.com/products')
      .then((ress) => {

        dispatch(setproduct(ress.data))
      })
      .catch((error) => {
        dispatch(setProductFailure(error))

      })
  }

  useEffect(() => {
    displayData()
  }, [])

  //addWish
  const { wishlist } = useSelector((state) => state.wish)
  const [heartIcon,setHeartIcon]=useState(false)
  let addWish=(singleData)=>{
    
    let checkItem = wishlist.some((item) => JSON.stringify(item) === JSON.stringify(singleData));
       if(checkItem){
          dispatch(removeWishItem(singleData))
          setHeartIcon(false)
       }
       else{
        dispatch(setWishlist(singleData))
        setHeartIcon(true)
        alert("done...")
       }

    
  }

  return (
    <>
      <Header />
      <div className="w-[80%] mx-auto ">
        <div className=""></div>
        <div className="grid grid-cols-4 gap-2 ">

          {!loadingProduct ?
            products.map((v) => {
              let checkItem = wishlist.some((item) => JSON.stringify(item) === JSON.stringify(v));
              return (
                <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={v.thumbnail} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {v.category} </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {v.price} </p>
                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={()=>addWish(v)}
                    >
                    {checkItem ?  <FaHeart className="text-[20px]"/> : <CiHeart className="text-[26px]" />}
                       
                       
                    </button>
                  </div>
                </div>
              )
            })
            :
            "please wait...."
          }



        </div>
      </div>
    </>
  );
}
