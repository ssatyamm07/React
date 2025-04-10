import "./App.css";
//import  About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import './components/style.css';


function App() {
  return (
    <>
       <Navbar title="Textutils" aboutText="About Textutils" /> 
       <div className="container my-3"> 
      {/*<Textform heading="Enter here to analyze" /> */}
      <About/>

      </div>
      
      
      
    </>
  );
}

export default App;
