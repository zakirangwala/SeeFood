import logo from "./assets/qr_code.png";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        width: "100%",
        height: "100%",
      }}
    >
      <header>
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: "15%",
          }}
        >
          F👀D
        </div>
        <img
          style={{
            display: "block",
            paddingTop: "15px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "20%",
          }}
          src={logo}
        />
        <a href="https://github.com/ZakiRangwala/SeeFood">
          <div
            style={{
              backgroundColor: "#349beb",
              color: "white",
              padding: "15px 20px",
              fontSize: "24px",
              width: "100px",
              borderRadius: "5px",
              textAlign: "center",
              margin: "50px auto",
              textDecoration: "underline",
            }}
          >
            Get App
          </div>
        </a>
      </header>
    </div>
  );
}

export default App;
