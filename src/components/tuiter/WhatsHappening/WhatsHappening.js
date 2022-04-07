import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "../explore.css"

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type:'create-tuit',
    tuit: whatsHappening
    });
    // console.log(whatsHappening);
  }
  return ( ""
      // <div className="row">
      //   <div className="col-2 who-to-follow-img"> <img className="who-to-follow-img" src="./images/food.jpg"/></div>
      //   <div className="col-10">
      // <textarea className=""
      //     value={whatsHappening}
      //           onChange={(event) =>
      //               setWhatsHappening(event.target.value)}>
      // </textarea>
      //   <button onClick={tuitClickHandler}>
      //     Tuit
      //   </button>
      //     </div>
      // </div>
  );
}
export default WhatsHappening;