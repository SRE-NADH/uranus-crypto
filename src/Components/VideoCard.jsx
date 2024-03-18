import { MdVideoLibrary } from "react-icons/md";

const VideoCard = ({url,link}) => {

  return ( 
  <a href={link} style={{backgroundImage:`url(${url})`,backgroundSize:"cover",backgroundRepeat:'no-repeat'}} className="video-card">
     <p><MdVideoLibrary/></p>
  </a>
  );
};

export default VideoCard;