import NavBar from '../Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/NavBar/Footer/Footer';
import AdminNavBar from '../Components/DashBoard/AdminNavBar';

const AdminDashBoard = () => {
    return (
        <div>
            <NavBar />
            <AdminNavBar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default AdminDashBoard;