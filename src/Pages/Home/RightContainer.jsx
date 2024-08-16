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
    const productsPerPage = 12;
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;

    const { data: pro = [], isLoading } = useQuery({
        queryKey: ['pro', search],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/products?name=${search}`)
            return data
        },
    })
    const products = pro.slice(firstIndex, lastIndex);
    const npage = Math.ceil(pro.length / productsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    return (
        <div className="w-full relative">
            <div>
                <div className="flex w-full items-center justify-between bg-white shadow-lg py-4 rounded-lg pr-4 mb-8">
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
                    <div onClick={() => setOpenSearch(!openSearch)} className="lg:hidden text-3xl ml-1 sm:mr-3"><BiSearch></BiSearch></div>
                    <div className=" flex gap-4 justify-center items-center">

                        <label>Sort By:</label>
                        <div className="border p-2">
                            <select id="input-sort">
                                <option value="">Default</option>
                                <option value="p.price-ASC">Price (Low &gt; High)</option>
                                <option value="p.price-DESC">Price (High &gt; Low)</option>
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

            <div className="absolute top-[72px] w-full shadow-xl lg:hidden">
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