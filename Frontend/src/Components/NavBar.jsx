import { Link, useNavigate } from "react-router-dom"
import "../Css/NavBar.css"
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
const NavBar=()=>{
    const value = useSelector(state=>state.Cart.value)
    const navigate = useNavigate()
    return(
        <>
            <div id="NavMainDiv">
                <div>
                    WebName
                </div>
                <div>
                    <Link className="NavLink" to={"home"}>Home</Link>
                    <Link className="NavLink" to={"product"}>Products</Link>
                    <Link className="NavLink">About</Link>
                    <Link className="NavLink">Contact Us</Link>
                </div>
                <div id="NavCartDiv">
                    <div>Admin</div>
                    <div onClick={()=>{navigate("cart")}} style={{cursor:"pointer"}}>{value}<FaShoppingCart style={{height:"20px",width:"20px",margin:"4px"}}/>Cart</div>
                </div>
            </div>
        </>
    )
}
export default NavBar