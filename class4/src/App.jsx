import { useState } from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    console.log(name);
    setData([...data, { name, image, desc }]);
    setName("");
    setImage("");
    setDesc("");
  }

  const handleDelete = (i)=>{
    console.log(i);
    const newArr = [...data];
    newArr.splice(i,1);
    // const newArr = data.filter((item,idx)=> idx!==i );
    setData(newArr)
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-300 py-10">
      <form onSubmit={(e) => submitHandler(e)} className="lg:w-[50%] w-full mx-auto flex flex-col items-center gap-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
          className="w-[80%] mr-4 border border-black px-4 py-2 rounded-md"
          required
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Enter URL"
          className="w-[80%] mr-4 border border-black px-4 py-2 rounded-md"
          required
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="Enter description"
          className="w-[80%] mr-4 border border-black px-4 py-2 rounded-md"
          required
        />
        <button className="w-[30%] border border-black bg-black text-base text-white px-6 py-2 rounded-md">
          Submit
        </button>
      </form>

      <div className="px-10 py-10 flex items-center justify-center flex-wrap gap-10">
        {data &&
          data.map((item, i) => (
            <Card item={item} key={i} idx={i} handleDelete={handleDelete} />
          ))}
      </div>
    </div>
    // <Form/>
  );
}

export default App;