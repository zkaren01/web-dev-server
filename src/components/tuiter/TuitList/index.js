import React, {useEffect, useState} from "react";
import TuitListItem from "./TuitListItem";
import '../tuits.css'
import {useDispatch, useSelector} from "react-redux";
import {updateTuit, createTuit, deleteTuit, findAllTuits} from "../actions/tuits-actions";

const TuitList = () => {
  const tuits = useSelector(state => state.tuits);

  const dispatch = useDispatch();

  useEffect(() =>
          findAllTuits(dispatch),
      []);

  useEffect(() =>
          deleteTuit(dispatch),
      []);

  const [newTuit, setNewTuit] =
      useState({tuit: 'New tuit'});

  return (
      <>
        <button onClick={() =>
            createTuit(dispatch, newTuit)}
                className="btn btn-primary float-end">
          Tuit
        </button>

        <textarea className="form-control w-75"
                  onChange={(e) =>
                      setNewTuit({
                        ...newTuit,
                        tuit: e.target.value
                      })}/>

        <ul className="ttr-tuits list-group">
          {
              tuits.map && tuits.map(tuit =>
                  <div>
                    <i className="fas fa-times float-end"
                       onClick={() => deleteTuit(dispatch, tuit)}/>
                    <br/>
                    <TuitListItem
                        key={tuit._id ? tuit._id : Math.random().toString()}
                        tuit={tuit}/>
                    <br/>
                    <div>
                      Likes: {tuit.likes}
                      <i onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        likes: tuit.likes + 1
                      })} className="far fa-thumbs-up ms-2"/>
                      Dislikes: {tuit.dislikes}
                      <i onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        dislikes: tuit.dislikes + 1
                      })} className="far fa-thumbs-down ms-2"/>
                    </div>
                  </div>)
          }
        </ul>
      </>
  );
}

export default TuitList;