import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Index.css';
import Contact from './components/contacts/Contact';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact />
    </div>
  );
}

export default App;
