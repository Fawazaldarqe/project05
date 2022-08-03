import { Link } from 'react-router-dom';
import {  BiSearch} from 'react-icons/bi';
import {  BsBell} from 'react-icons/bs';

export function Navbar(){
    return(
        
        <nav className="main-nav">
            <div className="nav1">
			<Link to={'/'}>
				
			<img src="Image 30-07-2022 at 6.02 PM.jpg" alt="" id="logo"/>
			</Link>
            <div className="search">
            <input  className="search1" type="text"  placeholder="search"  />
            <BiSearch className="search2" />
            </div>
            </div>
            <div className="nav2">
            <Link to={'/create_post'}>
<button id="create-post"> create post</button>
            </Link>
            <BsBell id="bell"/>
            <img id="account" src="Image 30-07-2022 at 6.45 PM.jpg" alt="" />
            </div>
            </nav>
    );
}