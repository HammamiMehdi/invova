import './App.css';
import { Earth } from './components/Earth/Earth';
import Header from './components/Header/Header';
import MovePath from './components/Move/MovePath';

function App() {

  

  return (
    <div className="App">
      <Header />
      
      <MovePath/>
      
      <Earth />
      
    </div>
  );
}

export default App;
