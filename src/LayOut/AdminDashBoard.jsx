import NavBar from '../Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import AdminNavBar from '../Shared/AdminNavBar/AdminNavBar';

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