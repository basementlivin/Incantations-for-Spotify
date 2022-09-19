import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    <div>
      <header>
        <h1>Testing, testing</h1>
      </header>
    </div>
  );
}

export default App;
