/* eslint-disable react/prop-types */
import BrandSelector from "../../Components/BrandSelector/BrandSelector";
import DoubleScrollBar from "../../Components/DoubleScrollBar/DoubleScrollBar";

const LeftContainer = ({ setMin, setMax, setBrand }) => {

    return (
        <div className="flex flex-col xl:w-[350px]">
            <div className="bg-white mb-6 shadow-xl rounded-xl">
                <h1 className=" p-6 text-xl font-medium">Price range</h1>
                <hr className="pb-6" />
                <DoubleScrollBar setMin={setMin} setMax={setMax} />
            </div>
            <div className="bg-white mb-6 shadow-xl rounded-xl">
                <h1 className=" p-6 text-xl font-medium">Brand</h1>
                <hr className="pb-3" />
                <BrandSelector setBrand={setBrand} />
            </div>
        </div>
    );
};

export default LeftContainer;