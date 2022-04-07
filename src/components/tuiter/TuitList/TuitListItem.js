import React from "react";
import '../explore.css'
import {useDispatch} from "react-redux";
const TuitListItem = ({tuit}) => {
  const dispatch = useDispatch();

  const likeTuit = (tuit) => {
    dispatch({type: 'like-tuit', tuit})
  };
  return (
      <div>
        <li className="list-group-item">
          <div className="row">
            <div className="col-2">
              <img className="who-to-follow-img" src={tuit.avatarImage}/>
            </div>
            <div className="col-10">
                {tuit.postedBy? tuit.postedBy.username : "???"}
                <span className="content-format-gray"> @{tuit.handle} </span>
              <br/>
              <span>{tuit.tuit}</span>
              <br/>
              {tuit.attachments && tuit.attachments.video? <iframe src={`https://www.youtube.com/embed/${tuit.attachments.video}`}/> : ""}
              {tuit.attachments && tuit.attachments.image? <image src={tuit.attachments.image}/> : ""}



              <div className="row">
                <div className="col-3"> <i className="fas fa-comment"/> {tuit.comments} </div>
                <div className="col-3"> <i className="fas fa-retweet"/> {tuit.retuits} </div>
                <div className="col-3"> {tuit.liked? (
                    <i onClick={() => likeTuit(tuit)} className="red-color fas fa-heart"/>
                ) : (
                    <i onClick={() => likeTuit(tuit)} className="fas fa-heart"/>
                )} {tuit.likes}</div>
                <div className="col-3"> <i className="fas fa-share-square"/></div>
              </div>
            </div>
          </div>
        </li>
      </div>
  );
}
export default TuitListItem;