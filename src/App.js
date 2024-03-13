import logo from './logo.svg';
import navBar from './navBar';
import Cards from './Cards';
import './App.css';


function App() {
  return (
      <div className="App">
           <navBar />
          <h1>CS 230L</h1>
          <h2>Section-02</h2>
          <p>WVU ID: 8000351750</p>
          <p>Hi I am Jeremiah</p>
          <Cards/>
    </div>
  );
}

export default App;
