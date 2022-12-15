import logo from './logo.svg';
import './App.css';
import { ContactList } from './container/contact_list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ContactList></ContactList>
        </p>
       
      </header>
    </div>
  );
}

export default App;
