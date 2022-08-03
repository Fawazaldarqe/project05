import { Link } from "react-router-dom";
import { Layout } from "../componets/Layout";

export function HomePage() {
	return (
        <>
        
		<Layout>
			<div></div>
            
		</Layout>
        <div className="lists">
         <Link to={'/'}>
             <div id="home1">
                 <img id="home2" src="Image 31-07-2022 at 12.25 AM.jpg" alt="" />
                 <p>home</p>
             </div>
         </Link>
         

         <div>
         <Link to={'/reading_list'}>
             <div id="reading_list1">
                 <img id="reading_list2" src="/Image 31-07-2022 at 12.47 AM.jpg" alt="" />
                 <p>Reading list</p>
             </div>
         </Link>
         </div>

         <div >
         <Link to={'/Listings'}>
             <div id="Listings1">
                 <img id="Listings2" src="Image 31-07-2022 at 12.50 AM.jpg" alt="" />
                 <p> Listings</p>
             </div>
         </Link>
         </div>

         <div>
         <Link to={'/Podcasts'}>
             <div id="Podcasts1">
                 <img  id="Podcasts2" src="Image 31-07-2022 at 12.52 AM.jpg" alt="" />
                 <p> Podcasts</p>
             </div>
         </Link>
         </div>

         <div>
         <Link to={'/Videos'}>
             <div id="Videos1">
                 <img id="Videos2" src="Image 31-07-2022 at 12.53 AM.jpg" alt="" />
                 <p> Videos</p>
             </div>
         </Link>
         </div>

         <div>
         <Link to={'/Tags'}>
             <div id="Tags1">
                 <img  id="Tags2" src="Image 31-07-2022 at 12.55 AM.jpg" alt="" />
                 <p> Tags</p>
             </div>
         </Link>
         </div>

         <div>
         <Link to={'/FAQ'}>
             <div id="FAQ1">
                 <img id="FAQ2" src="Image 31-07-2022 at 12.56 AM.jpg" alt="" />
                 <p> FAQ</p>
             </div>
         </Link>
         </div>

         <div>
         <Link to={'/Forem_Shop'}>
             <div id="Forem_Shop1">
                 <img  id="Forem_Shop2" src="Image 31-07-2022 at 12.58 AM.jpg" alt="" />
                 <p> Forem Shop</p>
             </div>
         </Link>
         </div>

         <div>
         <Link to={'/Sponsors'}>
             <div id="Sponsors_Shop1">
                 <img id="Sponsors_Shop2" src="Image 31-07-2022 at 1.00 AM.jpg" alt="" />
                 <p>  Sponsors</p>
             </div>
         </Link>
         </div>

         <div >
         <Link to={'/About'}>
             <div id="About1">
                 <img  id="About2" src="Image 31-07-2022 at 1.04 AM.jpg" alt="" />
                 <p>  About</p>
             </div>
         </Link>
         </div>

         <div>
         <Link to={'/Contact'}>
             <div id="Contact1">
                 <img id="Contact2" src="Image 31-07-2022 at 1.06 AM.jpg" alt="" />
                 <p>  Contact</p>
             </div>
         </Link>
         </div>

            <div className="sosial">
         <div>
         <Link to={'/https://twitter.com/FawazAldarqe'}>
             <div id="Twiter1">
                 <img  id="Twiter2" src="Image 31-07-2022 at 1.08 AM.jpg" alt="" />
             </div>
         </Link>
         </div>

         <div>
         <Link to={'/Facebook'}>
             <div id="Facebook1">
                 <img id="Facebook2" src="Image 31-07-2022 at 1.08 AM (1).jpg" alt="" />
             </div>
         </Link>
         </div>

         <div>
         <Link to={'/https://github.com/Fawazaldarqe'}>
             <div id="Github1">
                 <img id="Github2" src="Image 31-07-2022 at 1.08 AM (2).jpg" alt="" />
             </div>
         </Link>
         </div>

         <div>
         <Link to={'/Instagram'}>
             <div id="Instagram1">
                 <img id="Instagram2" src="Image 31-07-2022 at 1.09 AM.jpg" alt="" />
             </div>
         </Link>
         </div>

         <div >
         <Link to={'/Chat'}>
             <div id="Chat1">
                 <img  id="Chat2" src="Image 31-07-2022 at 1.09 AM (1).jpg" alt="" />
             </div>
         </Link>
         </div>
         </div>
         </div>
         </>
	);
}
