import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import ProductCard from "../../Components/Card/ProductCard";
import { useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";

const RightContainer = () => {
    const axiosCommon = useAxiosCommon();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;

    const { data: pro = [], isLoading } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/products`)
            return data
        },
    })
    const products = pro.slice(firstIndex, lastIndex);
    const npage = Math.ceil(pro.length / productsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    console.log(numbers)
    console.log(products)
    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const changePage = (n) => {
        setCurrentPage(n)
    }
    return (
        <div className="w-full ">
            <div className="flex justify-end bg-white shadow-lg py-4 rounded-lg pr-4 mb-8">
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
            <Pagination prePage={prePage} changePage={changePage} nextPage={nextPage} numbers={numbers} currentPage={currentPage} npage={npage} />
        </div>
    );
};

export default RightContainer;