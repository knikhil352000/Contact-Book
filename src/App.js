import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Index.css";
import "./styles/App.css";
import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/Navbar";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddContact from './components/contacts/AddContact'
import EditContact from "./components/contacts/EditContact";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="py-3">
            <Switch>
              <Route exact path='/' component={Contacts} />
              <Route exact path='/contacts/add' component={AddContact} />
              <Route exact path='/contacts/edit/:id' component={EditContact} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
