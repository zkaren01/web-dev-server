import React from "react";
import '../explore.css'
const WhoToFollowListItem = ({
      who = {
        avatarIcon: '../tuiter/images/nasa.jpg',
        userName: 'NASA',
        handle: 'NASA',
      }
    }
) => {
  return (
      <div>
        <li className={'list-group-item'}>
          <div className={'row'}>
            <div className={'col-2 ps-0'}>
              <img src={who.avatarIcon} id="image" className={'who-to-follow-img'}/>
            </div>
            <div className={'col-6 follow-font-size'}>
              <b>{who.userName} <i className={'fa fa-check-circle fa-xs'}/></b>
              <br/>
              @{who.handle}
            </div>
            <div className={'col-4 pe-0'}>
              <button className={'btn btn-primary tweet-button float-right'}>Follow
              </button>
            </div>
          </div>
        </li>
      </div>
  );
}

export default WhoToFollowListItem;