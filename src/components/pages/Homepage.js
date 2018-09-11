import React, {Component} from 'react';
// import Aux from '../../hoc/Aux';
import { Route, Switch} from 'react-router-dom';
import dashboard from "./dashboard";



//
class Homepage extends Component {

render(){
     return(
      <div>
          <Switch>
               <Route path="/dashboard" component={dashboard}/>
          </Switch>
      </div>
     );
   }
}
export default Homepage;
