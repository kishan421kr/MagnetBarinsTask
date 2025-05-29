
import { useNavigate } from 'react-router-dom'

function Payment() {
    const navigate = useNavigate();
  return (
    <>
    <div id="data" style={{margin:"auto"}}>
    <h1 style={{color:'green'}}>Your Payment is Successfully Done</h1>
    <button onClick={()=>{navigate("/")}} >Go Back To Home Page</button>
    </div>
    </>
  )
}

export default Payment