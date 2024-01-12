import { useState } from "react";

const Button = () => {
  const [click, setClick] = useState(0);
  const handleClickToCart = () => {
    setClick(click + 1);
    console.log(click);
  }
  return <button onClick={handleClickToCart} className='font-semibold bg-orange-400 rounded-lg px-5 py-2'>Add to Cart</button>
}

export default Button;