
import './App.css';
import Dashboard from './component/Dashboard';
import Header from './component/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import AddProject from './component/Project/AddProject';
import {Provider} from "react-redux";
import store from './store';

function App() {
  return (

    <Provider store ={store}>

    <Router>

    <div className="app">
      <Header/>
      <Route exact path="/dashboard" component={Dashboard}/>
    ` <Route exact path="/addProject" component={AddProject}/>
   
    </div>

    </Router>
    
    </Provider>



  );
}

export default App;
