import { useState, useEffect } from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Home from "./Pages/Home";
import Loader from "./Components/Loader";
import "./assets/css/style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'ease-in-out',
            offset: 120,
            delay: 50,
        });
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <Home />
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
