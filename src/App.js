import logo from './KloudPodLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="title">
          Welcome to Kloudpod
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="note">
          Learning CI CD set up of react application
        </p>
      </header>
    </div>
  );
}

export default App;
