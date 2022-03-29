import {useDispatch} from "react-redux";
import '../explore.css'

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (
  <span onClick={likeTuit}>
    {
        tuit.liked && <i className="red-color fas fa-heart me-1"/>
    }
    {
        !tuit.liked && <i className="far fa-heart me-1"/>
    }
    {tuit.stats && tuit.stats.likes}
    </span>
);
}
export default TuitStats;