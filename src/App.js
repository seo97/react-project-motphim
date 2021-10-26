
import './App.css';
import HeaderView from './Component/Header.js';
import Main from './Component/main.js';
import Slides from './Component/Slides.js'

function App() {
  return (
    <div className="App">
      <HeaderView />
      <Slides />
      <Main />
    </div>
  );
}

export default App;
