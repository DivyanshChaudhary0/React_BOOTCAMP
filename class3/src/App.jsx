import Counter from "./Components/Counter";
import Practice from "./Components/Practice";
import Practice2 from "./Components/Practice2";
import Practice3 from "./Components/Practice3";

function App() {

  return (
    <div className="w-full min-h-screen">
      <div className="h-screen flex items-center justify-center">
        <Counter/>
      </div>
      <div>
        <Practice/>
      </div>
      <div>
        <Practice2/>
      </div>
      <Practice3/>
    </div>
  )
}

export default App;