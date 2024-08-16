import { Helmet } from "react-helmet-async";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
// import Banner from "./Banner";


const Home = () => {
    return (
        <div className="bg-[#f2f4f8] min-h-screen">
            <Helmet>
                <title>TechFinder | Home</title>
            </Helmet>
            {/* <Banner></Banner> */}
            <div className="flex gap-6 px-4 lg:px-10 py-6">
                <div className="hidden xl:flex">
                    <LeftContainer />
                </div>
                <div className="flex-grow">
                    <RightContainer />
                </div>
            </div>
        </div>
    );
};

export default Home;