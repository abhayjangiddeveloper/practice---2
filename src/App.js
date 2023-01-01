import './App.css';
import Header from './components/Header';
import Left_side from './components/Left_side';

function App() {
  return (
    <>
      <div className="container">
        <div className="Shoping__box">
          <Header/>
          <Left_side/>
        </div>
      </div>
    </>
  );
}

export default App;
