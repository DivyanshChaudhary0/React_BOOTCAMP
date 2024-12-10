import React, { useState } from "react";

const Practice = () => {
  const [val, setVal] = useState({ name: "Divyansh", age: 20, isBanned: true });

  return (
    <div className="w-full h-screen flex items-center gap-2 justify-center flex-col">
      <p className={`${val.isBanned ? "text-red-400" : "text-blue-500"}`}>
        Name: {val.name}
      </p>
      <p className={`${val.isBanned ? "text-red-400" : "text-blue-500"}`}>
        Age: {val.age}
      </p>
      <p className={`${val.isBanned ? "text-red-400" : "text-blue-500"}`}>
        Banned: {val.isBanned.toString()}
      </p>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-4 py-1 text-white  ${
          val.isBanned ? "bg-red-500" : "bg-blue-500"
        } border rounded hover:border-blue-300`}
      >
        Change
      </button>
    </div>
  );
};

export default Practice;
