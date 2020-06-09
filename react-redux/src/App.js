import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer'
import store from './redux/store'
import { Provider } from 'react-redux'
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer'
import UsersContainer from './components/UsersContainer';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersContainer></UsersContainer>
{/*         
        <ItemContainer cake></ItemContainer>
        <ItemContainer></ItemContainer> */}
        {/* <NewCakeContainer></NewCakeContainer> 
        <CakeContainer></CakeContainer>
        <HookCakeContainer></HookCakeContainer>
        <IceCreamContainer></IceCreamContainer> */}
      </div>
    </Provider>
  );
}

export default App;