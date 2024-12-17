
import { FaRegHeart } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full px-10 py-6 flex items-center justify-between border-b-[1px] border-gray-400">
        <div className="logo">
          <h1 className="text-orange-600 font-semibold text-xl">Orange</h1>
        </div>
        <div className="icons flex items-center gap-4">
          <span className="text-orange-600">
            <FaRegHeart size={20}/>
          </span>
          <span className="text-orange-600">
            <FaCartArrowDown size={20} />
          </span>
        </div>
    </div>
  )
}

export default Navbar;