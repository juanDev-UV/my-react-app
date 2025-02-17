/* eslint-disable react/prop-types */
import Footer from "./footer/Footer";
import Header from "./header/Header";
import "./Layout.css";

const Layout = ({children}) => {
  return (

    <div className="layout"> 
        <Header />
            <main className="layout-content">{children}</main>
        <Footer />
    </div>
  )
}

export default Layout