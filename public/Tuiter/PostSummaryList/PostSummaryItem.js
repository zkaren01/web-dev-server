const PostSummaryItem = (post) => {
  return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col-10">
          <span class="content-format-gray"> ${post.topic} </span>
          </br>
          <b> ${post.userName}</b> <i class="fas fa-check-circle"></i> 
          <span class="content-format-gray"> - ${post.time} </span>
          </br>
          <b> ${post.title} </b>
          </br>
          <span class="content-format-gray"> ${post.tweets} </span>
        </div>
        <div class="col-2">
          <img class="content-img" src="${post.image}">
        </div>
      </div>
    </li>
  `);
}
export default PostSummaryItem;