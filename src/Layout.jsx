import {Outlet} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

import Navigation from './components/Navigation';


const Layout = () => {
    return(
        <div id = "content">
            <Header />
            {/* <Navigation /> */}
           <Outlet />
            
           <Footer />
        </div>

    );
};

export default Layout;