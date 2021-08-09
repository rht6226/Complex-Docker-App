import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1> The Fibonacci Calculator </h1>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/otherpage">OtherPage</Link></p>
        </header>
        <hr/><br/><br/>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />     
        </div>
      </div>
    </Router>
  );
}

export default App;
