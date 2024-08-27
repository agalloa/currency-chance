import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { RouterConfig } from './router/RouterConfig';
import { Navbar } from './components/ui/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
