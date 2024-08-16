import DoubleScrollBar from "../../Components/DoubleScrollBar/DoubleScrollBar";

const LeftContainer = () => {
    return (
        <div className="flex flex-col xl:w-[350px]">
            <div className="bg-white mb-6 shadow-xl rounded-xl">
                <h1 className=" p-6">Price range</h1>
                <hr className="pb-6" />
                <DoubleScrollBar />
            </div>
            <div>

            </div>
        </div>
    );
};

export default LeftContainer;