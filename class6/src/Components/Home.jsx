
import Navbar from "./Navbar";
import Card from "./Card";
import { Link } from "react-router-dom";

const Home = ({data,handleClick}) => {

  return (
    <div className="w-full min-h-screen px-10 bg-gray-200">
      <Navbar />
      <div className="w-full h-60 bg-stone-200 mt-10 rounded-md flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold text-orange-700">New Arrivals</h1>
        <p className="font-semibold text-orange-700 mt-2">Discover our latest collection</p>
      </div>

      <div className="create py-10 ">
        <Link to="/create">
        <button className="px-5 py-2 bg-orange-600 text-white rounded-md absolute right-10">Create Product</button>
        </Link>
      </div>
      <div className="w-full flex flex-wrap items-center justify-between gap-2">
        {data.map((item,i)=> (
          <Card item={item} key={i} idx={i} handleClick={handleClick} />
        ))}
      </div>
    </div>
  )
}

export default Home;