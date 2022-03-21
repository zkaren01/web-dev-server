import React from "react";
import '../explore.css'

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
  return (
      <div>
    <div className={'list-group'}>
        <a href="public/Tuiter/tuit.html" className={'list-group-item list-group-item-action'}>
          <i className={'fab fa-twitter'}></i>
        </a>
        <a href="public/Tuiter/home.html" className={'list-group-item list-group-item-action defaultChecked={home}'}>
          <div className={'row'} >
            <div className={'col-2'}>
              <i className="fa fa-home"></i>
            </div>
            <div className={'col-10'}>
              <span className={'d-none d-xl-block'}>Home</span>
            </div>
          </div>
        </a>
        <a href="public/Tuiter/explore/explore.html"  className={'list-group-item list-group-item-action active defaultChecked={explore}'}>
          <div className={'row'}>
            <div className={'col-2'}>
              <i className={'fa fa-hashtag'}></i>
            </div>
            <div className={'col-10'}>
              <span className={'d-none d-xl-block'}>Explore</span>
            </div>
          </div>
        </a>
        <a href="#" className={'list-group-item list-group-item-action defaultChecked={notification}'}>
          <div className={'row'}>
            <div className={'col-2'}>
              <i className={'fa fa-bell'}></i>
            </div>
            <div className={'col-10'}>
              <span className={'d-none d-xl-block'}>Notification</span>
            </div>
          </div>
        </a>
        <a href="#" className={'list-group-item list-group-item-action defaultChecked={messages}'}>
          <div className={'row'}>
            <div className={'col-2'}>
              <i className={'fa fa-envelope'}></i>
            </div>
            <div className={'col-10'}>
              <span className={'d-none d-xl-block'}>Messages</span>
            </div>
          </div>
        </a>
        <a href="public/Tuiter/bookmarks/bookmarks.html" className={'list-group-item list-group-item-action defaultChecked={bookmarks}'}>
          <div className={'row'}>
            <div className={'col-2'}>
              <i className={'fa fa-bookmark'}></i>
            </div>
            <div className={'col-10'}>
              <span className={'d-none d-xl-block'}>Bookmarks</span>
            </div>
          </div>
        </a>
        <a href="#" className={'list-group-item list-group-item-action defaultChecked={lists}'}>
          <div className={'row'}>
            <div className={'col-2'}>
              <i className={'fa fa-list'}></i>
            </div>
            <div className={'col-10'}>
              <span className={'d-none d-xl-block'}>Lists</span>
            </div>
          </div>
        </a>
        <a href="public/Tuiter/profile.html" className={'list-group-item list-group-item-action defaultChecked={profile}'}>
          <div className={'row'}>
            <div className={'col-2'}>
              <i className={'fa fa-user'}></i>
            </div>
            <div className={'col-10'}>
              <span className={'d-none d-xl-block'}>Profile</span>
            </div>
          </div>
        </a>
        <a href="#" className={'list-group-item list-group-item-action" style="padding-left: 11px defaultChecked={more}'}>
          <div className={'row'}>
            <div className={'col-2'}>
               <span className={'fa-stack small'}>
                <i className={'fa fa-circle fa-stack-2x'}></i>
                     <i className={'fa fa-ellipsis-h fa-stack-1x fa-inverse'}> </i>
               </span>
            </div>
            <div className={'col-10'}>
              <span className={'d-none d-xl-block'}>More</span>
            </div>
          </div>
        </a>
      </div>
      <div className={'mt-2'}>
        <button className={'btn btn-primary tweet-button'}>Tweet</button>
      </div>
    </div>
  );
}
export default NavigationSidebar;
