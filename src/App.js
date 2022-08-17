import {Navigation,Gallery, DeskGallery, Sidebar, Overlay} from "./components";
import Item from "./layout/Item"

function App() {
  return (
    <div className="App">
      <div className="general-layout">
      <Navigation/>
      <Overlay/>
      <Sidebar/>
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
