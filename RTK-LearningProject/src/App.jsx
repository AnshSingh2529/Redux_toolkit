import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useDispatch,useSelector } from 'react-redux'
import Modal from './components/Modal'
import { calculateTotal, getcartItems } from './features/cart/cartSlice'

function App() {
  const {cartItems,isloading} = useSelector((store) => (store.cart));
  const {isOpen} = useSelector((store) => (store.modal));
  
  
  const dispatch = useDispatch()  

  useEffect( () => {
    dispatch(calculateTotal())
  },[cartItems])

  useEffect(() => {
    dispatch(getcartItems('random'))                      
  },[])

  if(isloading){
    return 
    <div className='loading'>
    <h1>Loading...</h1> 
    </div>
  }


  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App