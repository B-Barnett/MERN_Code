import './App.css';
import {Router, Link} from '@reach/router';
import Create from './views/Create';
import Main from './views/Main';
import Show from './views/Show';
import Edit from './views/Edit';

function App() {
  return (
    <div>
      <div>
        <Link to="/" >HOME</Link>
        <br/>
        <Link to="/products/create" >CREATE A PRODUCT</Link>
      </div>
      <Router>
        <Main path="/" />
        <Create path="/products/create"/>
        <Show path="products/show/:id" />
        <Edit path="products/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
