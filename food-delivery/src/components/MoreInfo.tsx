
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


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
    </div>
  )
}

export default MoreInfo