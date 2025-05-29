import { useEffect, useState } from "react"
import { ProductCard } from "../Components/Card"
import axios from "axios"
import BASE_URL from "../Config";
import "../Css/Product.css"

const Products=()=>{
    const [data ,setData] = useState([]);
    const GetData=async()=>{
        const response = await axios.get(`${BASE_URL}/Product/GetData`)
        console.log(response.data); 
        setData(response.data);
    }
    useEffect(()=>{
        GetData()
    },[])
    return(
        <>  

            <div id="PrductMainDiv">
            {
                data.map(key=>{
                    return(
                            <ProductCard name={key.name}
                                brand={key.brand}
                                category={key.category}
                                description={key.description}
                                price={key.price}
                                image={key.image}
                                id={key._id}
                            />
                    )
                })
            }
            </div>
           
        </>
    )
}
export default Products