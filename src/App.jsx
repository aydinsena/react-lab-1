import "./App.css";
import FooterImageContainer from "./components/FooterImageContainer";
function App() {
  return (
    <>
      <div className="header-burger">
        <img
          className="header-img"
          src="src/assets/ironhack.png"
          alt="ironhack-image"
        />
        <img
          className="header-img"
          src="src/assets/burger.png"
          alt="burger-menu"
        />
      </div>
      <div>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer
        </p>
        <div>
          <p>Awesome!</p>
        </div>
      </div>

      <FooterImageContainer />
    </>
  );
}

export default App;
