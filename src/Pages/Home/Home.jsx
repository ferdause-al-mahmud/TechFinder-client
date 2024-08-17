import { Helmet } from "react-helmet-async";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
// import Banner from "./Banner";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosCommon from "../../Hooks/useAxiosCommon";


const Home = () => {
    const axiosCommon = useAxiosCommon();
    const [currentPage, setCurrentPage] = useState(1);
    const [openSearch, setOpenSearch] = useState(false);
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(300)
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState('');
    const [dateOrder, setDateOrder] = useState('');
    const [brand, setBrand] = useState('');
    const productsPerPage = 12;
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    console.log(brand)

    const { data: pro = [], isLoading } = useQuery({
        queryKey: ['pro', search, order, dateOrder, brand],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/products?name=${search}&order=${order}&dateOrder=${dateOrder}&brand=${brand}`)
            return data
        },
    })

    const filterProducts = pro.filter(item => item?.price >= min && item?.price <= max);
    const products = filterProducts.slice(firstIndex, lastIndex);
    const npage = Math.ceil(filterProducts.length / productsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    return (
        <div className="bg-[#f2f4f8] min-h-screen">
            <Helmet>
                <title>TechFinder | Home</title>
            </Helmet>
            {/* <Banner></Banner> */}
            <div className="flex gap-6 px-4 lg:px-10 py-6">
                <div className="hidden xl:flex">
                    <LeftContainer setMin={setMin} setMax={setMax} setBrand={setBrand} />
                </div>
                <div className="flex-grow">
                    <RightContainer
                        setCurrentPage={setCurrentPage}
                        setOpenSearch={setOpenSearch}
                        setSearch={setSearch}
                        setOrder={setOrder}
                        setDateOrder={setDateOrder}
                        openSearch={openSearch}
                        products={products}
                        npage={npage}
                        numbers={numbers}
                        dateOrder={dateOrder}
                        order={order}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;