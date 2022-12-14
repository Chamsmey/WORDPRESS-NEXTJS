
import Footer from "../components/footer/footer";
import Navbar from "../components/header/navbar";
const RootLayout = ({children}) => {
    return (
        <div className="w-[60%] m-auto">
            <Navbar/>
                {children}
            <Footer/>
        </div>
     );
}

export default RootLayout;