import { useDispatch, useSelector } from "react-redux"
import Table from 'react-bootstrap/Table';
import { FaPlus,FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { decrement, increment, remove } from "../Redux/redux";
import { useNavigate } from "react-router-dom";
const Cart=()=>{
    const data = useSelector(state=>state.Cart.items);
    let sr=0;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return(
        <>

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr.no</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>

        {data.map((key)=>{
            sr++;
            return(<tr>
                        <td>{sr}</td>
                        <td ><img src={key.image} alt="not found" height={80} /></td>
                        <td>{key.name}</td>
                        <td>${key.price*key.qty}</td>
                        <td><FaMinus className="PoniterBtn"  onClick={()=>{dispatch(decrement({id:key.id}))}}/>  {key.qty}  <FaPlus className="PoniterBtn" onClick={()=>{dispatch(increment({id:key.id}))}} /></td>
                        <td><MdDelete className="PoniterBtn" onClick={()=>{dispatch(remove({id:key.id}))}}/></td>
                    </tr>)
                })}
      </tbody>
    </Table>

                    <div>
                        <button onClick={()=>navigate("/checkout")}>CheckOut</button>
                    </div>
        </>
    )
}

export default Cart