import { useEffect,useState,useContext,useRef } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import FavouriteItem from "../FavouriteProducts/FavouriteItem";

import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
    const {cartCount} = useContext(Context)

    const categoryRef = useRef();
    const [scrolled , setScrolled] = useState(false);
    const [showCart , setShowCart] = useState(false);
    const [showSearch , setShowSearch] = useState(false);
    const [showFavourites , setShowFavourites] = useState(false)
    const navigate = useNavigate()

    const handleCategoryScroll = () => {
        const route = window.location.pathname
        if (route !== "/")
        {
            navigate("/")
            setTimeout(function(){
                window.scrollTo({
                    top: 800,
                    behavior: 'smooth',
                });
            },300)
        }
        else
        {
            window.scrollTo({
                top: 600,
                behavior: 'smooth',
            });

        }
            
            
          
    }
    const handleScroll = () =>{
        const ofset = window.scrollY;
        

        if(ofset>300){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }

    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
    },[])

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header":""}`}>
                <div className="header-content">
                    <div className="left">
                        <ul>
                            <li onClick={()=>navigate("/")}>Home</li>
                            <li>About</li>
                            <li onClick={handleCategoryScroll} ref={categoryRef}>Category</li>
                        </ul>
                    </div>
                    <div className="center" onClick={()=>navigate("/")}>DEMOSTORE.</div>
                    <div className="right">
                        <TbSearch
                        onClick={()=>{
                            setShowSearch(true)
                        }}
                        />
                        <AiOutlineHeart onClick={()=>{
                            setShowFavourites(true)
                        }}/>
                        <span className="cart-icon" onClick={()=>{
                            setShowCart(true);
                        }}>
                            <CgShoppingCart/>
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart}/>}
            {showSearch && <Search setShowSearch={setShowSearch}/>}
            {showFavourites && <FavouriteItem setShowFavourites={setShowFavourites}/>}

        </>
)
    
    
};

export default Header;
