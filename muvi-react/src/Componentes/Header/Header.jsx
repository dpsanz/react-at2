import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import { Link } from "react-router-dom";


function Header() {
    return ( 
        <header className="bg-transparent text-white p-3 w-full">
            
            <div className="flex flex-row items-center justify-between mx-7">
                <h1 className="text-4xl mt-3 mb-3 text-rose-500 font-bold tracking-tight hover:text-rose-700 transition-all">
                <Link to = "/">CINE SEARCH</Link></h1>
                
                <Search/>
                <Navbar/>
           </div>
        </header>
     );
}
export default Header;