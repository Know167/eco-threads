import './App.css';
import MenuBar from './components/Layout/MenuBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <MenuBar>
        <Home/>
      </MenuBar>
    </div>
  );
}

export default App;
