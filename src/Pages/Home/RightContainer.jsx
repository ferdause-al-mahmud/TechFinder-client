/* eslint-disable react/prop-types */
// import { useQuery } from "@tanstack/react-query";
// import useAxiosCommon from "../../Hooks/useAxiosCommon";
// import { useState } from "react";
import ProductCard from "../../Components/Card/ProductCard";
import Pagination from "../../Components/Pagination/Pagination";
import { BiFilter, BiSearch } from "react-icons/bi";

const RightContainer = ({ setCurrentPage, setOpenSearch, setSearch, setOrder, setDateOrder, products, npage, numbers, dateOrder, openSearch, order, currentPage, setFilterContainer, filterContainer, isLoading, handleAddToCard }) => {

    const handleOrderChange = (event) => {
        const selectedOrder = event.target.value;
        console.log('Selected filter:', selectedOrder);
        setOrder(selectedOrder);
    };
    const handleDateOrder = (event) => {
        const selectedOrder = event.target.value;
        console.log('Selected date Order:', selectedOrder);
        setDateOrder(selectedOrder);
    }
    return (
        <div className="w-full relative">
            <div>
                <div className="flex flex-col sm:flex-row w-full sm:items-center sm:justify-between bg-white shadow-lg py-4 rounded-lg pr-4 mb-8">
                    <div className=" ml-4 lg:flex justify-between hidden bg-white items-center gap-3 border text-black px-4 py-2 rounded-lg w-full max-w-xs">
                        <input
                            onChange={e => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search"
                            className="border-0 focus:border-0 outline-none" />
                        <div>
                            <svg

                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-8 h-8 opacity-70 hover:scale-110 hover:cursor-pointer text-blue-500">
                                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        <div onClick={() => setOpenSearch(!openSearch)} className=" flex gap-2 lg:hidden ml-1 sm:mr-3"><label>Search</label><BiSearch className=" text-3xl "></BiSearch></div>
                        <div className=" flex gap-1 sm:gap-4 justify-center items-center">

                            <div className="border p-2">
                                <select
                                    value={dateOrder}
                                    onChange={handleDateOrder}
                                >
                                    <option value=''>Default</option>
                                    <option value="1">Newest</option>
                                    <option value="-1">Oldest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        <div className=" flex gap-1 sm:gap-4 justify-center items-center">

                            <label>Sort By:</label>
                            <div className="border p-2">
                                <select value={order}
                                    onChange={handleOrderChange}
                                >
                                    <option value=''>Default</option>
                                    <option value="1">Price (Low &gt; High)</option>
                                    <option value="-1">Price (High &gt; Low)</option>
                                </select>
                            </div>
                        </div>
                        <div onClick={() => setFilterContainer(!filterContainer)} className="flex xl:hidden ml-1 sm:mr-3"><BiFilter className=" text-3xl"></BiFilter><label>Filter</label></div>
                    </div>
                </div>
                {isLoading ? (
                    <div className="flex justify-center items-center h-[60vh]">
                        <div className="loading loading-spinner loading-lg"></div>
                    </div>
                ) : products.length === 0 ? (
                    <div className="flex justify-center items-center h-[60vh]">
                        <div className="text-center">
                            <p className="text-gray-500 font-bold text-3xl">Sorry! No Products Found</p>
                            <p className="text-gray-500 mt-2">Please try searching for something else</p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {products.map((product, idx) => <ProductCard handleAddToCard={handleAddToCard} product={product} key={idx} />)}
                    </div>
                )}

                <Pagination setCurrentPage={setCurrentPage} numbers={numbers} currentPage={currentPage} npage={npage} />
            </div>

            <div className="absolute top-[110px] sm:top-[72px] w-full shadow-xl lg:hidden">
                {
                    openSearch && <>
                        <div className="flex bg-white items-center gap-3 border text-black px-4 py-2 rounded-lg w-full">
                            <input onChange={e => setSearch(e.target.value)} type="text" placeholder="Search" className="border-0 flex-1 focus:border-0 outline-none" />
                            <div>
                                <svg

                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 opacity-70 hover:scale-110 hover:cursor-pointer text-blue-500"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </div>
                        </div>
                    </>

                }
            </div>
        </div>
    );
};

export default RightContainer;