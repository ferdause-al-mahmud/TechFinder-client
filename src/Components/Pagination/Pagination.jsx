/* eslint-disable react/prop-types */

const Pagination = ({ setCurrentPage, currentPage, numbers, npage }) => {
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
        <div className="flex items-center justify-center mt-6">
            <a href={currentPage === 1 ? undefined : "#"} className={`px-4 py-2 mx-1 text-gray-700 capitalize bg-white rounded-md dark:bg-gray-800 dark:text-gray-600 ${currentPage === 1 ? 'cursor-not-allowed disabled' : 'cursor-pointer hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200'} `}>
                <div className="flex items-center -mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>

                    <span onClick={prePage} className="mx-1">
                        previous
                    </span>
                </div>
            </a>
            {
                numbers.map((n, i) => <a href="#" onClick={() => changePage(n)} key={i} className={`hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform ${currentPage === n ? 'bg-blue-500' : 'bg-white'}  rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200`}>
                    {n}
                </a>)
            }



            <a href={currentPage === npage ? undefined : "#"} onClick={nextPage} className={`px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 ${currentPage === npage ? 'cursor-not-allowed disabled' : 'cursor-pointer hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200'}`}>
                <div className="flex items-center -mx-1">
                    <span className="mx-1" >
                        Next
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </a>
        </div>
    );
};

export default Pagination;