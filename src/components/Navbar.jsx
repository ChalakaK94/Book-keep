import Logo from "./Logo";
import Results from "./Results";
import Search from "./Search";

export default function Navbar(){
    return (
    <nav className='navbar'>
       <Logo/>
       <Search/>
       <Results/>
    </nav>
    )
}