import { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
    const {cartCount} = useContext(Context)

    const [scrolled , setScrolled] = useState(false);
    const [showCart , setShowCart] = useState(false);
    const [showSearch , setShowSearch] = useState(false);
    const navigate = useNavigate()

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
                            <li>Category</li>
                        </ul>
                    </div>
                    <div className="center" onClick={()=>navigate("/")}>DEMOSTORE.</div>
                    <div className="right">
                        <TbSearch
                        onClick={()=>{
                            setShowSearch(true)
                        }}
                        />
                        <AiOutlineHeart/>
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
        </>
)
    
    
};

export default Header;
