import { useNavigate } from "react-router";
import "./Home.css";
import { useCallback } from "react";


const Home = () => {
    const navigate =useNavigate();

    const handleClick= useCallback(()=> {
        navigate("/corazon", {
            state: {
                userData: {
                    displayName: "Juan Manuel"
                }
            },
        });
    }, [navigate]);

    return (
    <div className="home">
        <h1>Inicio</h1>
        <button onClick={handleClick}>EOOOOASADASA</button>
        </div>
    );
};

export default Home;