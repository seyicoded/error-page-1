// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App" style={{ margin: 40 }}>
      <div style={{ display: 'flex', alignItems: 'center',  }}>
        <img src={require('./assets/logo.png')} alt="" style={{ height: 50 }} />
        <span style={{ color: '#aaa', marginLeft: 10, paddingLeft: 10, borderLeftColor: '#aaa', borderLeftWidth: 1, borderLeftStyle: 'solid' }}>Account</span>
      </div>

      <br />
      <div>
        Please try again later.
      </div>
    </div>
  );
}

export default App;
