
const Test = () => {

    let count = 0;
    
    let btnClick = () => {
        count++;
        console.log('Button Clicked', count);
    }
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <p>ouioui - {count}</p>
        <button onClick={btnClick}>Change</button>
    </div>
  )
}

export default Test