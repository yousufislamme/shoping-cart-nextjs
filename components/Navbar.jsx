import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="flex justify-between bg-gray-200 px-5">
      <div className="py-4">Logo</div>
      <ul className="flex gap-5 py-4 px-7">
        <Link href='/'>Home</Link>
        <Link href='/product'>Product</Link>
        <Link href='/about'>About</Link>
        <Link className="flex justify-center items-center gap-2" href='/cart'>Cart <FaCartShopping /></Link>
      </ul>
      <div className="py-4">
        Login
      </div>
     </div>
     
  )
}

export default Navbar;