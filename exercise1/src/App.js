import './App.css';
import Header from './components/Header.js';
import Paaosio from './components/Paaosio';
import Tiedotteet from './components/Tiedotteet';

function App() {
  return (
    <div className='App'>
      <Header />
      <Tiedotteet />
      <Paaosio />
    </div>
  );
}

export default App;
