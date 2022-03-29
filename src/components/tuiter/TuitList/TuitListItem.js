import React from "react";
import '../explore.css'
import {useDispatch} from "react-redux";
const TuitListItem = ({tuit}) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({type: 'delete-tuit', tuit})
  };
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
                {tuit.postedBy.username}
                <span className="content-format-gray"> @{tuit.handle} </span>
                <i onClick={() => deleteTuit(tuit)} className="fas fa-times fa-pull-right"/>
              <br/>
              <span>{tuit.tuit}</span>
              <br/>
              {tuit.attachments.hasOwnProperty('video')? (
                  <iframe src={`https://www.youtube.com/embed/${tuit.attachments.video}`}/>
              ) : ""}

              {tuit.attachments.hasOwnProperty('image')? (
                  <image src={tuit.attachments.image}/>
              ) : ""}



              <div className="row">
                <div className="col-3"> <i className="fas fa-comment"/> {tuit.stats.comments} </div>
                <div className="col-3"> <i className="fas fa-retweet"/> {tuit.stats.retuits} </div>
                <div className="col-3"> {tuit.liked? (
                    <i onClick={() => likeTuit(tuit)} className="red-color fas fa-heart"/>
                ) : (
                    <i onClick={() => likeTuit(tuit)} className="fas fa-heart"/>
                )} {tuit.stats.likes}</div>
                <div className="col-3"> <i className="fas fa-share-square"/></div>
              </div>
            </div>
          </div>
        </li>
      </div>
  );
}
export default TuitListItem;