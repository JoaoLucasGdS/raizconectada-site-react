import { useRef } from "react"

import "./css/HomePage.css"

import HomePageVideo from "../components/HomePageVideo";
import RaizFooter from "../components/RaizFooter"
import Forms from "../components/Forms";

function HomePage() {

  const formsSectionRef = useRef(null);

  const handleYouTubeClick = () => {
    const youtubeUrl = "https://www.youtube.com"; 
    window.open(youtubeUrl, "_blank", "noopener,noreferrer");
  };

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

          <div className="hero-buttons-container">

            <button
              onClick={handleYouTubeClick}
              className="youtube-button"
            >
              <i className="bi bi-youtube fs-3" />
            </button>

            <button
              onClick={handleScrollToForms}
              className="scroll-to-forms-button"
            >
              <i className="bi bi-chat-dots fs-3" /> Fale Conosco
            </button>

          </div>
        </main>
        <div ref={formsSectionRef} />
        
        <Forms />
        <RaizFooter />
      </div>
    </>
  );
}

export default HomePage;
