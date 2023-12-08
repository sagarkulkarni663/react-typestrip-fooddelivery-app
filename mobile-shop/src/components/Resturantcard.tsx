import { useEffect, useState } from "react";
import Foods from "./Foods"
import { Link } from "react-router-dom"
interface Restaurant {
  id: number,
  title: string,
  description: string,
  price: number,
  rating: number
  images: string[]
}

const Resturantcard = () => {
  const [data, setData] = useState<Restaurant[]>([])
  const [filterdata, setFilterData] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const [inputdata, setInputdata] = useState<string>("")

  const handlefilter = () => {
    let filteredData = [...data]
    filteredData = filteredData.filter((item) => item.rating > 4.5)
    setData(filteredData)
  }
  const clear = () => {
    setData([...filterdata])
  }
  const inputdatasearch = (event: { target: { value: string } }) => {
    const inputValue = event.target.value;
    setInputdata(inputValue)
    let filteredData = [...filterdata]
    filteredData = filteredData.filter((item) => item.description.toLowerCase().includes(inputdata.toLowerCase()))
    setData(filteredData)
  }
  const deynamicApi = async () => {
    setLoading(true)
    try {
      const fetchdata = await fetch("https://dummyjson.com/products")
      const json = await fetchdata.json()
      setData(json?.products)
      setFilterData(json?.products)
      setLoading(false)

    }
    catch (error) {
      console.error("Error fetching or parsing data:", error);
    }

  }
  useEffect(() => {
    deynamicApi()
  }, [])
  return (
    <>
      <input placeholder="searchitems.." value={inputdata} onChange={inputdatasearch} type="search" name="inputdata" />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button onClick={() => handlefilter()}>check top star ratings</button>
        <button onClick={() => clear()}>clear</button>

      </div>
      {loading ?
        <div className="loading">

          <h1>loading...</h1>
        </div>
        :
        <div className="main-header">

          {data && data.map((item) => <Link to={"/mobiles/" + item.id} key={item.id}> <Foods resdata={item} /></Link>)}
        </div>
      }


    </>

  )
}

export default Resturantcard