import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
import MyNAv from './components/MyNav';
import Welocome from './components/Welcome';

function App() {
  return (
    <div>
      <header>
        <MyNAv />
        <div>
          <Welocome />
        </div>
      </header>
      <main>
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
