import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your GitHub's Commit History </h1>
      </header>
      <nav>
        <ul className='nav justify-content-center'>
          <li className='nav-item'>
            <a href="#" className='nav-link active'>Home</a>
          </li>
          <li className='nav-item'>
            <a href="#" className='nav-link'>Page 2</a>
          </li>
          <li className='nav-item'>
            <a href="#" className='nav-link'>Page 3</a>
          </li>
          <li className='nav-item'>
            <a href="#" className='nav-link'>About</a>
          </li>
        </ul>
      </nav>
      <main>
        <h3>Your profile name is here </h3>
        <div className='commit-detail'>
          <p> your commit History is here</p>
        </div>
      </main>
      <footer>
        Copyright&copy; 2022 by Thinh Vu - Software Developer
      </footer>
    </div>
  );
}

export default App;
