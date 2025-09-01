import './css/HomePageVideo.css';
import homePageVideoFile from '../assets/HomePageVideo.mp4'
import { useEffect } from "react";

function HomePageVideo(){

    useEffect(() => {
        // add class to disable body scroll while component is mounted
        document.body.classList.add('no-scroll');
        return () => {
        document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <div className='DivHomePageVideo'>
            <video src={homePageVideoFile} autoPlay loop muted/>
        </div>
    )

}

export default HomePageVideo;