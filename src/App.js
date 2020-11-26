import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Index.css';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
      <Navbar />
      <Contacts />
    </div>
    </Provider>
    
  );
}

export default App;
