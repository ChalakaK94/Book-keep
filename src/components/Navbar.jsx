import Logo from "./Logo";
import Search from "./Search";

export default function Navbar({childern}){
    return (
    <nav className='navbar'>
       <Logo/>
       <Search/>
       {childern}
       
    </nav>
    )
}