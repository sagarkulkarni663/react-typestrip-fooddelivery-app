
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import { addItem } from "../redux-store/cartSlice"
interface myobj {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number
  stock: number,
  brand: string,
  category: string,
  images: string[]
}
const MoreInfo = () => {
  const [data, setData] = useState<myobj | Record<string, never>>({})
  const { id } = useParams()
  const fetchresponse = async () => {
    const responsedata = await fetch(`https://dummyjson.com/products/${id}`)
    const json = await responsedata.json()
    setData(json)
    console.log(data)
  }

  useEffect(() => {
    fetchresponse();
  }, []);
  const { title, description, price, discountPercentage, rating, stock, brand, category, images } = data
const dispatch= useDispatch()

  return images && images.length > 0 && (

    <div>
      <img src={images[0]} />
      <h1>title-{title}</h1>
      <h1>description-{description}</h1>
      <h1>price-{price}</h1>
      <h1>discountPercentage-{discountPercentage}</h1>
      <h1>rating-{rating}</h1>
      <h1>stock-{stock}</h1>
      <h1>brand-{brand}</h1>
      <h1>category-{category}</h1>
      <button style={{ background: "green", padding: '1em', color: "#ffff", cursor: "pointer" }}
      onClick={()=>dispatch(addItem(data))}
      > Add to cart </button>
    </div>
  )
}

export default MoreInfo