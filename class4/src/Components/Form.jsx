import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [user, setUser] = useState({ name: "", image: "", desc: "" });
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    const newObj = { ...user };
    setData([...data, newObj]);
    setUser({ name: "", image: "", desc: "" });
  };

  const handleDelete = ()=>{
    console.log("loda");
  }

  console.log(data);

  return (
    <div className="w-full min-h-screen py-10">
      <form onSubmit={(e) => submitHandler(e)} className="w-[50%] mx-auto flex flex-col items-center gap-4">
        <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          name="name"
          type="text"
          placeholder="Enter name"
          className="w-[80%] mr-4 border border-black px-4 py-2 rounded-md"
          required
        />
        <input
          value={user.email}
          onChange={(e) => setUser({ ...user, image: e.target.value })}
          name="email"
          type="text"
          placeholder="Enter imageURL"
          className="w-[80%] mr-4 border border-black px-4 py-2 rounded-md"
          required
        />
        <input
          value={user.password}
          onChange={(e) => setUser({ ...user, desc: e.target.value })}
          type="text"
          name="password"
          placeholder="Enter Descriotion"
          className="w-[80%] mr-4 border border-black px-4 py-2 rounded-md"
          required
        />
        <button className="w-[30%] border border-black bg-black text-base text-white px-6 py-2 rounded-md">
          Submit
        </button>
      </form>

      <div className="px-10 py-10 flex flex-wrap gap-10">
        {data &&
          data.map((item, i) => (
            <Card item={item} key={i} idx={i} handleDelete={handleDelete} />
          ))}
      </div>
      
    </div>
  );
};

export default Form;
