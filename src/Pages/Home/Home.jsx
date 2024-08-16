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
            <div className="flex gap-6 lg:px-10 py-6">
                <LeftContainer />
                <RightContainer />
            </div>
        </div>
    );
};

export default Home;