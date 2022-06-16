import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content_wrapper">
        <AnimatedRoutes />
      </div>
    </div>
  );
}

export default App;
