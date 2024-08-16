import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import ProductCard from "../../Components/Card/ProductCard";

const RightContainer = () => {
    const axiosCommon = useAxiosCommon();
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/products`)
            return data
        },
    })
    console.log(products)
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
        </div>
    );
};

export default RightContainer;