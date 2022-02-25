import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
    <div class="row">
      <div class="col-11 form-group">
        <span class="form-control-icon">
          <i class="fa fa-search"></i>
        </span>
          <input type="text" class="form-control" placeholder="Search Twitter"/>
          </span>
      </div>
      <div class="col-1">
        <a href=""><i class="fa fa-cog fa-2x" style="float:right;"></i></a>
      </div>
    </div>
    
    <div class="mt-2">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html"> For You </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html"> Trending </a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="news.html"> News </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html"> Sports </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="entertainment.html"> Entertainment </a>
        </li>
      </ul>
    </div>
         
    <div class="card small-margin">
      <img src="../images/SpaceX_starship.jpeg" class="card-img-top">
        <div class="card-img-overlay d-flex flex-column justify-content-end">
          <h1 style="color: white"> SpaceX's Starship</h1>
        </div>
    </div>
    ${PostSummaryList()}
  `);
}
export default ExploreComponent;
