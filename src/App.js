import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="App-start">
        <h1>GitHub's Commit History</h1>
        <div id="start-box">
          <div className="mb-3 mt-3">
            <label for="profile" className='form-label'>GitHub username</label>
            <input type="text" className="form-control" id="profile" placeholder="Your Github user name" />          
          </div>
          <div className='mb-3 mt-3 my-font'>
            <button type='submit' className='btn btn-dark btn-sm'>Go >>></button>
          </div>                             
        </div>                  
      </div>
      <footer className='my-font'>
          Copyright&copy; 2022 by Thinh Vu - Software Developer
      </footer>
    </div>
  );
}

export default App;
