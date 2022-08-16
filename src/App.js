import {Navigation,Gallery, DeskGallery} from "./components";
import Item from "./layout/Item"

function App() {
  return (
    <div className="App">
      <div className="general-layout">
      <Navigation/>
        <div className="content-layout">
          <Gallery/>
          <DeskGallery/>
          <Item/>
        </div>
      </div>
    </div>
  );
}

export default App;
