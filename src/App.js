import Tooltip from "./tooltip";
import "./App.css"

function App() {
  return (
    <>
    <h1 className="heading">TOOLTIP APP</h1>
    <div className="App">
        <div>
          <Tooltip position="top"/>
          <Tooltip position="bottom"/>
        </div>
        {/* <h1 style={{padding: 15}}>TOOLTIP</h1> */}
        <div>
          <Tooltip position="left"/>
          <Tooltip position="right"/>
        </div>

    </div>
    </>
  
  );
}

export default App;
