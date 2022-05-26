import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Nav from './components/Nav/Nav';
import CreateCharacter from './components/CreateCharacter/CreateCharacter';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Home} />
      <Route exact path='/details/:id' component={CharacterDetail} />
      <Route exact path='/character/create' component={CreateCharacter} />
    </div>
  );
}

export default App;
