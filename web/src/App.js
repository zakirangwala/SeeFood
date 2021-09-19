import logo from './logo.svg';

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      width: '100%',
      height: '100%'
    }}>
      <header>
        <div style={{
          fontSize: '72px',
          fontWeight: 'bold',
          textAlign: 'center',
          paddingTop: '15%',
        }}>F👀D</div>
        <a href='https://github.com/ZakiRangwala/SeeFood'>
          <div style={{
            backgroundColor: '#349beb',
            color: 'white',
            padding: '15px 20px',
            fontSize: '24px',
            width: '100px',
            borderRadius: '5px',
            textAlign: 'center',
            margin: '50px auto',
            textDecoration: 'underline'
          }}>
            Get App
          </div>
        </a>
      </header>
    </div>
  );
}

export default App;
