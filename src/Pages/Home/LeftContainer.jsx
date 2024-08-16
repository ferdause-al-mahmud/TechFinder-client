
const LeftContainer = () => {
    return (
        <div className=" h-56 w-[300px]">
            <div className="bg-white mb-6 shadow-xl rounded-xl">
                <h1 className=" p-6">Price range</h1>
                <hr className="pb-6" />

                <div className="relative mb-6">
                    <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                    <input id="labels-range-input" type="range" value="1000" min="100" max="1500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($100)</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($1500)</span>
                </div>

            </div>
        </div>
    );
};

export default LeftContainer;