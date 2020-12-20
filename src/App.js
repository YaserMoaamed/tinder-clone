import './App.css';
import Header from './components/Header/index'
import TinderCards from './components/Tinder/TinderCards' 
import TinderChats from './components/TinderChat/TinderChats'
import TinderChatScreen from './components/TinderChat/TinderChatScreen'
import { SwipeButtons } from './components/TinderButton/SwipeButtons'
import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
         <Router>
           <Switch>
             <Route path="/chat/:person">
               <Header  backButton="/" />
               <TinderChatScreen />
             </Route>
             <Route path="/chat">
               <Header  backButton="/chat" />
               <TinderChats />
             </Route>
             <Route exact path="/">
               <Header />
               <TinderCards />
               <SwipeButtons />
             </Route>
           </Switch>
          </Router >
    </div>
  );
}

export default App;
