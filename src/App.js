// import logo from './logo.svg';
import "./App.css"; //App Css import
import Watcher from "./Components/Watcher"; //Watcher Component Import
import Intropage from "./Components/Intropage";

function App() {
  return (
    <div className="App">
      <Intropage/>
      <Watcher /> {/* calling the watcher component in app.js file */}
    </div> 
  );
}

export default App;
