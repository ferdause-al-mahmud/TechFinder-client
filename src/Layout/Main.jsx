
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div className="relative ">
            <Navbar />
            <div className=' min-h-[calc(90vh-68px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;