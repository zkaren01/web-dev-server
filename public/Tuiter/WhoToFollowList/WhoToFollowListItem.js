const WhoToFollowListItem = (who) => {
  return(`
    <li class="list-group-item">
      <div class="row">
        <div class="col-2 ps-0">
          <img id="image" class="who-to-follow-img" src="${who.avatarIcon}">
        </div>
        <div class="col-6 follow-font-size">
          <b>${who.userName} <i class="fa fa-check-circle fa-xs"></i></b>
          </br>
          @${who.handle}
        </div>
        <div class="col-4 pe-0">
        <button class="btn btn-primary tweet-button float-right">Follow</button>
        </div>
      </div>
    </li>
  `);
}

export default WhoToFollowListItem;