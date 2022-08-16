import {Navigation,Gallery} from "./components";
import Item from "./layout/Item"

function App() {
  return (
    <div className="App">
      <div className="general-layout">
      <Navigation/>
      <Gallery/>
      <Item/>
      </div>
    </div>
  );
}

export default App;
