import "./css/HomePage.css"
import HomePageVideo from "../components/HomePageVideo";

function HomePage() {
  return (
    <div>
      <HomePageVideo />
      <div className="overlay"></div>
      <div className="herotext">
        <p className="subtitle">SEU CULTIVO, NOSSA CONEXÃO</p>
        <h1 className="title">RAIZ<br/> CONECTADA</h1>
      </div>
    </div>
  );
}

export default HomePage;
