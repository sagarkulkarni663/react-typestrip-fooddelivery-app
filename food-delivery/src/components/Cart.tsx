import { useSelector } from "react-redux"
import type { RootState } from '../redux-store/appStore'

const Cart = () => {
  const card = useSelector((store: RootState) => store.cart.items)

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {card.map((item) => (
          <div className="main-header" key={item.id}>
            <div className="card-container">
              <div>
                <img className="image-food" src={item.images[0]} alt="kulkarni foods" />
              </div>
              <div>
                <h2>{item.title}</h2>
                <h4>{item.description}</h4>
                <h4>Price -{item.price}</h4>
                <h4>Rating -{item.rating}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}

export default Cart