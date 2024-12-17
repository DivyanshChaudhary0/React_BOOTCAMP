import React, { useEffect, useState } from "react";

const CreateCards = ({handleChange}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState(null);

  function submitHandler(e) {
    e.preventDefault();
    setData({ name:name, image:image, description:desc, isAdded: false });
    setName("");
    setImage("");
    setDesc("");
  }

  return (
    <div className="w-full h-screen flex flex-col ">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="w-full h-24 bg-slate-100 flex items-center justify-center"
      >
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
        <button onClick={()=>handleChange(data)} className="border border-black px-6 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateCards;