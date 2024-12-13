import { useState } from "react";
import Card from "./Components/Card";

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

  return (
    <div className="w-full h-screen flex flex-col ">
      <form onSubmit={(e) => submitHandler(e)} className="w-full h-24 bg-slate-100 flex items-center justify-center">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
          className="mr-4 border border-black px-4 py-2 rounded-md"
          required
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Enter URL"
          className="mr-4 border border-black px-4 py-2 rounded-md"
          required
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="Enter description"
          className="mr-4 border border-black px-4 py-2 rounded-md"
          required
        />
        <button className="border border-black px-6 py-2 rounded-md">
          Submit
        </button>
      </form>

      <div className="px-10 py-6 flex flex-wrap gap-10 ">
        {data &&
          data.map(function (item) {
            return (
              <Card item={item}/>
            );
          })}
      </div>
    </div>
  );
}

export default App;