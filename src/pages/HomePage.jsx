import { useRef } from "react"

import "./css/HomePage.css"

import HomePageVideo from "../components/HomePageVideo";
import RaizFooter from "../components/RaizFooter"
import Forms from "../components/Forms";

function HomePage() {

  const formsSectionRef = useRef(null);

  const handleScrollToForms = () => {
    formsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="d-flex flex-column min-vh-100">

      <HomePageVideo />
        <div className="herotext">
          <p className="subtitle">SEU CULTIVO, NOSSA CONEXÃO</p>
          <h1 className="title">RAIZ<br/> CONECTADA</h1>
        </div>

        {/*Works as a separator for the video and the forms/footer */}
        <main className="flex-grow-1 hero-section">

          <button
            onClick={handleScrollToForms}
            className="scroll-to-forms-button"
          >
            <i className="bi bi-chat-dots fs-3" /> Fale Conosco
          </button>

        </main>
        <div ref={formsSectionRef} />
        
        <Forms />
        <RaizFooter />
      </div>
    </>
  );
}

export default HomePage;
