// import logo from './logo.svg';
import './App.css';                //App Css import
import Watcher from './Components/Watcher';  //Watcher Component Import 

function App() {          
  return (
    <div className="App">                 
      <h3>Hello Wu!</h3>          
      <Watcher/>        {/* calling the watcher component in app.js file */} 
    </div>
  );
}

export default App;
 