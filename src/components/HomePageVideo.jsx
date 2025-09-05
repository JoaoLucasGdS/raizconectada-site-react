import './css/HomePageVideo.css';
import homePageVideoFile from '../assets/HomePageVideo.mp4'

function HomePageVideo(){

    return (
        <div className='DivHomePageVideo'>
            <video src={homePageVideoFile} autoPlay loop muted/>
        </div>
    )

}

export default HomePageVideo;