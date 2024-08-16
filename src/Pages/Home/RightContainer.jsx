import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import ProductCard from "../../Components/Card/ProductCard";
import { useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";
import { BiSearch } from "react-icons/bi";

const RightContainer = () => {
    const axiosCommon = useAxiosCommon();
    const [currentPage, setCurrentPage] = useState(1);
    const [openSearch, setOpenSearch] = useState(false);
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState('');
    const [dateOrder, setDateOrder] = useState('');
    const productsPerPage = 12;
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;

    const { data: pro = [], isLoading } = useQuery({
        queryKey: ['pro', search, order, dateOrder],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/products?name=${search}&order=${order}&dateOrder=${dateOrder}`)
            return data
        },
    })
    const products = pro.slice(firstIndex, lastIndex);
    const npage = Math.ceil(pro.length / productsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

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
                    <div className="flex justify-center items-center gap-3">
                        <div onClick={() => setOpenSearch(!openSearch)} className="lg:hidden text-3xl ml-1 sm:mr-3"><BiSearch></BiSearch></div>
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
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        products.map((product, idx) => <ProductCard product={product} key={idx}></ProductCard>)
                    }
                </div>
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