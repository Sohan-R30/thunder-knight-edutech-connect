import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';


const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;