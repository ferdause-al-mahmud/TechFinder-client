
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import 'sweetalert2/src/sweetalert2.scss'

const Main = () => {
    return (
        <div className=" ">
            <div className='relative'>
                <Navbar />
                <div className=' min-h-[calc(90vh-68px)]'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Main;