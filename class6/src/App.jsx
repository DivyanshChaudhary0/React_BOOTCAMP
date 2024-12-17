import { useState } from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import CreateCards from "./Components/CreateCards";

function App() {

  const rawData = [
    {
      name: "Casual T-Shirt",
      description: "A comfortable cotton T-shirt perfect for casual outings.",
      price: 15.99,
      isAdded: false,
      image:
        "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHNoaXJ0fGVufDB8fDB8fHww",
    },
    {
      name: "Slim Fit Jeans",
      description: "Stylish slim-fit denim jeans.",
      price: 45.99,
      isAdded: false,
      image:
        "https://plus.unsplash.com/premium_photo-1674828600712-7d0caab39109?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amVhbnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Formal Blazer",
      description: "A sleek and professional formal blazer.",
      price: 120.5,
      isAdded: false,
      image:
        "https://i.pinimg.com/236x/85/b9/74/85b9746277a3efbb803629a00731399d.jpg",
    },
    {
      name: "Summer Dress",
      description: "A light and breezy summer dress with floral patterns.",
      price: 35.99,
      isAdded: false,
      image:
        "https://i.pinimg.com/236x/7e/54/47/7e544747e75218c96c4816a2edd4a943.jpg",
    },
    {
      name: "Skinny Jeans",
      description: "Classic skinny jeans with a modern fit.",
      price: 40.99,
      isAdded: false,
      image:
        "https://i.pinimg.com/236x/8b/15/98/8b15989dfe3e5a7702a949221fb7eb40.jpg",
    },
    {
      name: "Cardigan Sweater",
      description: "A cozy and stylish cardigan sweater for chilly days.",
      price: 30.99,
      isAdded: false,
      image:
        "https://i.pinimg.com/236x/3f/88/cd/3f88cd83eb6d1d022400714070342c6f.jpg",
    },
];

  const [data, setData] = useState(rawData);

  const handleChange = (cData)=>{
    console.log(cData);
    setData([...data,cData])
  }

  const handleClick = (i)=>{
    setData((prev)=> prev.map((item,idx)=>{
      if(i===idx){
        return {...item,isAdded:!item.isAdded}
      }
      return item;
    }))
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<Home data={data} handleClick={handleClick} />}  />
      <Route path="/create" element={<CreateCards handleChange={handleChange} />} />
    </Routes>
    </>
  );
}

export default App;
