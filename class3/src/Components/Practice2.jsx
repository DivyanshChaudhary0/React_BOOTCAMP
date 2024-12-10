import { useState } from "react";

function Practice2() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div className="w-full h-screen bg-slate-200 flex flex-col items-center gap-2 justify-center">

      {val.map((item) => (
        <h1>{item}</h1>
      ))}
      <button
        onClick={() => setVal((prev) => prev.filter((elem) => elem % 2 !== 0))}
        className="px-3 py-1 text-white rounded-md bg-blue-500"> Click
      </button>
    </div>
  );
}

export default Practice2;
