import { Outlet, useLocation } from "react-router";
import "./Heart.css";


const Heart = () => {
    const location = useLocation();
    const userData = location.state?.userData;
    
    return (
    <>
        <div>
        <h1>Enfermedades del Corazon</h1>
        <h1>Enfermedades del Corazao</h1>
        <p>{userData?.displayName}</p>
        <Outlet/>
        </div>
    </>
    )
};

export default Heart;