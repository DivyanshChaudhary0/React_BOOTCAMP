import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import Page6 from "./Components/Page6";
import Page7 from "./Components/Page7";

function App() {

  return (
    <div className="main w-full min-h-screen bg-[#E4E4E4]">  
      <Navbar/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      <Footer/>
    </div>
  )
}

export default App;
