import { Helmet } from "react-helmet-async";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
// import Banner from "./Banner";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosCommon from "../../Hooks/useAxiosCommon";


const Home = () => {
    const axiosCommon = useAxiosCommon();
    const [currentPage, setCurrentPage] = useState(1);
    const [openSearch, setOpenSearch] = useState(false);
    const [filterContainer, setFilterContainer] = useState(false);
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(300)
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState('');
    const [dateOrder, setDateOrder] = useState('');
    const [brand, setBrand] = useState('');
    const [cat, setCat] = useState('');
    const productsPerPage = 12;
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    console.log(cat)

    const { data: pro = [], isLoading } = useQuery({
        queryKey: ['pro', search, order, dateOrder, brand, cat],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/products?name=${search}&order=${order}&dateOrder=${dateOrder}&brand=${brand}&cat=${cat}`)
            return data
        },
    })

    const filterProducts = pro.filter(item => item?.price >= min && item?.price <= max);
    const products = filterProducts.slice(firstIndex, lastIndex);
    const npage = Math.ceil(filterProducts.length / productsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setFilterContainer(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`${filterContainer ? 'bg-black bg-opacity-60' : 'bg-[#f2f4f8]'}  min-h-screen`}>
            <Helmet>
                <title>TechFinder | Home</title>
            </Helmet>
            {/* <Banner></Banner> */}
            <div className="flex gap-6 px-4 lg:px-10 py-6">
                <div className={` ${filterContainer ? 'absolute inset-0 top-[200px] z-50 bg-black bg-opacity-60' : 'hidden'} flex justify-center xl:flex `}>
                    <div className="h-[calc(100vh-200px)] min-h-[600px] bg-white flex flex-col overflow-y-auto">
                        <LeftContainer setMin={setMin} setMax={setMax} setBrand={setBrand} setCat={setCat} />
                    </div>
                </div>


                <div className="flex-grow">
                    <RightContainer
                        isLoading={isLoading}
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
                        setFilterContainer={setFilterContainer}
                        filterContainer={filterContainer}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;