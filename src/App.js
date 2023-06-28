import './App.css';
import Timeout from './timeout2.png';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div>
          <h1>Waktu checkout anda telah habis</h1>
          <h3>silahkan melakukan pendaftaran kembali</h3>
        </div>
        <img className="mb-2" src={Timeout} />
      </div>
    </div>
  );
}

export default App;
