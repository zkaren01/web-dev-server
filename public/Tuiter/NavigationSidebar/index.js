const NavigationSidebar = () => {
  return (`

    <div class="list-group">
        <a href="public/Tuiter/tuit.html" class="list-group-item list-group-item-action">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="public/Tuiter/home.html" class="list-group-item list-group-item-action">
          <div class="row" >
            <div class="col-2">
              <i class="fa fa-home"></i>
            </div>
            <div class="col-10">
              <span class="d-none d-xl-block">Home</span>
            </div>
          </div>
        </a>
        <a href="public/Tuiter/explore/explore.html"  class="list-group-item list-group-item-action active">
          <div class="row">
            <div class="col-2">
              <i class="fa fa-hashtag"></i>
            </div>
            <div class="col-10">
              <span class="d-none d-xl-block">Explore</span>
            </div>
          </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col-2">
              <i class="fa fa-bell"></i>
            </div>
            <div class="col-10">
              <span class="d-none d-xl-block">Notification</span>
            </div>
          </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col-2">
              <i class="fa fa-envelope"></i>
            </div>
            <div class="col-10">
              <span class="d-none d-xl-block">Messages</span>
            </div>
          </div>
        </a>
        <a href="public/Tuiter/bookmarks/bookmarks.html" class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col-2">
              <i class="fa fa-bookmark"></i>
            </div>
            <div class="col-10">
              <span class="d-none d-xl-block">Bookmarks</span>
            </div>
          </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col-2">
              <i class="fa fa-list"></i>
            </div>
            <div class="col-10">
              <span class="d-none d-xl-block">Lists</span>
            </div>
          </div>
        </a>
        <a href="public/Tuiter/profile.html" class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col-2">
              <i class="fa fa-user"></i>
            </div>
            <div class="col-10">
              <span class="d-none d-xl-block">Profile</span>
            </div>
          </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action" style="padding-left: 11px">
          <div class="row">
            <div class="col-2">
               <span class="fa-stack small">
            <i class="fa fa-circle fa-stack-2x"></i><i
                   class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i></span>
            </div>
            <div class="col-10">
              <span class="d-none d-xl-block">More</span>
            </div>
          </div>
        </a>
      </div>
      <div class="mt-2">
        <button class="btn btn-primary tweet-button">Tweet</button>
      </div>
    </div>
    `);
}
export default NavigationSidebar;
