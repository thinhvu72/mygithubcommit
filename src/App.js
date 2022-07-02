import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your GitHub's Commit History </h1>
      </header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Feature1</li>
          <li>Feature2</li>
          <li>About Yourself</li>
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
