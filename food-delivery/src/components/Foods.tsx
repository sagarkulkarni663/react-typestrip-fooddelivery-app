import "./Header.css"

interface myData {
  resdata: {
    id: number,
    title: string,
    description: string,
    price: number,
    rating: number
    images: string[]
  },
}
const Foods: React.FC<myData> = (props) => {
  const { resdata } = props
  const { title, rating, description, images, price } = resdata
  return (
    <div className="card-container">
      <div>
        <img className="image-food" src={images[0]} alt="kulkarni foods" />
      </div>
      <div>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h4>Price -{price}</h4>

        <h4>Rating -{rating}</h4>

      </div>

    </div>
  )
}

export default Foods