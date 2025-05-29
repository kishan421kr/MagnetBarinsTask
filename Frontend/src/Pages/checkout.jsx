import { useSelector } from "react-redux";


const CheckOut=()=>{
    const data = useSelector((state) => state.Cart.items);
  let totalAmount = 0;

  const ans = data.map((item, index) => {
    totalAmount += item.price * item.qty;
    return (
      <div key={index}>
        <p>{item.name}</p>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.qnty}</p>
        <p>Total Price :{item.price*item.qty}</p>
        <hr />
      </div>
    );
  });

  const handlePay=()=>{

  }
    
    return(
        <>
            <div style={{padding:"60px"}}>
                <h3 style={{ color: "green",textAlign:"center" }}>Total Amount: ${totalAmount}</h3>
                {ans}
                <button onClick={handlePay}>Pay Now</button>
            </div>
        </>
    )
}
export default CheckOut