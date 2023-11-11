import './App.css';
import Restaurantes from './components/Data/Data';
import Home from './components/Home/Home';

function App() {
  return (  
    <div className="App">
      <Home/>
      <br/>
      <Restaurantes/>
    </div>
  );
}

export default App;
