import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import BASE_URL from "../Config";

const CheckOut=()=>{
    const data = useSelector((state) => state.Cart.items);
  let totalAmount = 0;

  const ans = data.map((key) => {
    totalAmount += key.price * key.qty;
    return (
      <div >
        <p>{key.name}</p>
        <p>Price: ${key.price}</p>
        <p>Quantity: {key.qty}</p>
        <p>Total Price :{key.price*key.qty}</p>
        <hr />
      </div>
    );
  });
  const stripePromise = loadStripe("pk_test_51RQRIaE8GU7lihPqKGNtZKEMV2mmHiRtCu6ppKanRUJFleWDDWzChPfVslzVBiZy3GE2IlKkUFbSXnHKHoykAziT00dGHVjuav");
  const handlePay = async () => {
        try {
          const stripe = await stripePromise;
          const api = `${BASE_URL}/checkout`;
          const response = await axios.post(api, { Product:data});
      
          const session = response.data;
          if (!session.id) {
            console.error("Stripe session not returned:", session);
            return;
          }
          const result = await stripe.redirectToCheckout({
            sessionId: session.id,
          });
      
          if (result.error) {
            console.error("Stripe error:", result.error.message);
          }
        } catch (err) {
          console.error("Payment initiation failed:", err);
        }
      };
    
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