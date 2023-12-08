import { useSelector } from "react-redux"
import type { RootState } from '../redux-store/appStore'
import {useDispatch} from "react-redux"
import { removeItem, } from "../redux-store/cartSlice"
const Cart = () => {
  const card = useSelector((store: RootState) => store.cart.items)
  const dispatch= useDispatch()
  console.log(card)
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
                <button onClick={()=>dispatch(removeItem(item.id))}>RemoveItem</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}

export default Cart