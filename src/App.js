import './App.css';
import Header from './components/Header';
import BookList from "./components/BookList"
import AddNewBook from './components/AddNewBook';

function App() {
  return (
    <div className="App">
      <Header/>
      <AddNewBook/>
      <BookList/>
    
    </div>
  );
}

export default App;
