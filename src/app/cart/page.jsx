"use client";
import React from 'react';
import Header from '../Comman/Header';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishItem } from '../redux/features/wishlistSlice';
import { setCart, setRemoveCart } from '../redux/features/cartSlice';


export default function Page() {
    const { cart, loading } = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    console.log(cart)
    let removeWork = (item) => {
        dispatch(setRemoveCart(item))
    };

    return (
        <div>
            <Header />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Sr</th>
                            <th scope="col" className="px-6 py-3">Image</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3"></th>
                            <th scope="col" className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="6" className="text-center py-4">Loading...</td>
                            </tr>
                        ) : cart.length > 0 ? (
                            cart.map((item, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</th>
                                    <td className="px-6 py-4">
                                        <img src={item.thumbnail} alt={item.category} className="w-16 h-16 object-cover" />
                                    </td>
                                    <td className="px-6 py-4">{item.category}</td>
                                    <td className="px-6 py-4">${item.price}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center w-1/5">
                                            <button>-</button>
                                            <span className="bg-white px-2 py-1 mx-2 " >1</span>
                                            <button>+</button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4"> <span className=" px-2 py-1 mx-2 " >1111</span>  </td>
                                    <td className="px-6 py-4 text-right">
                                        <button 
                                            type="button" 
                                            onClick={() => removeWork(item)} 
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4">No items added to the cart.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
