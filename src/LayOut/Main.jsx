import NavBar from '../Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';

const Main = () => {
    return (
        <div>
            <ScrollToTop />
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;