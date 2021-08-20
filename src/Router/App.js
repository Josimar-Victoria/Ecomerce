import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';
import Checkout from '../Components/CheckoutForm/Checkout';
import Navbar from '../Components/Navbar';
import Products from '../Components/Produts';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SingnUp';
import { auth } from '../firebase';
import CheckouPages from '../Pages/CheckoutPages';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvide';

function App() {
  const [{user}, dispatch] = useStateValue();


 useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
 },[])

  return (
    <BrowserRouter>
       <div className="App">
      <Navbar/>
          <Switch>
              <Route exact path="/" component={Products} />  
              <Route exact path="/checkout-page" component={CheckouPages}/>
              <Route exact path="/Checkout" component={Checkout} />  
              <Route exact path="/SignIn" component={SignIn} />  
              <Route exact path="/SignUp" component={SignUp} />
          </Switch>
    </div>
    </BrowserRouter>
 
  );
}

export default App;
