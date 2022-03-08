import logo from './logo.svg';
import './App.css';
import GameCard from './components/GameCard';
import GameGrid from './components/GameGrid';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App ">      
      <NavBar/>
    </div>
  );
}

const styles = {
  alignItems: 'center',
  justifyContent: 'center',
}

export default App;
