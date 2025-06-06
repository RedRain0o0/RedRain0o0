//funtion onLoad() {
//  getBskyProfile();
//}

function getBskyProfile() {
  const url = "https://public.api.bsky.app/xrpc/app.bsky.actor.getProfiles?actors=did:plc:lzylocxb3cr2hhpjejy2d3qp";
  const accountsSpan = document.getElementById('accountsSpan');
  fetch(url)
  .then(function(response) {
    response.json().then(function(account){
      bsky = account.profiles[0];
      console.log("Account %s (@%s) has %s followers and %s following", bsky.displayName, bsky.handle, bsky.followersCount, bsky.followsCount);
      container = document.createElement("div")

      container.classList = "account";
      container.id = "bskyAccount"

      banner = document.createElement("img");
      banner.src = bsky.banner;
      banner.classList = "accountBanner"
      container.appendChild(banner);

      icon = document.createElement("img");
      icon.src = bsky.avatar;
      icon.classList = "accountAvatar"
      container.appendChild(icon);

      accname = document.createElement("a");
      accname.classList = "accountName";
      accname.innerText = bsky.displayName
      accname.href = "https://bsky.app/profile/" + bsky.handle;
      container.appendChild(accname);

      handle = document.createElement("a");
      handle.classList = "accountHandle";
      handle.innerText = "@" + bsky.handle
      handle.href = "https://bsky.app/profile/" + bsky.handle;
      container.appendChild(handle);

      followDiv = document.createElement("div");
      followDiv.classList = "accountFollowDiv";
      //followDiv.style = "flex-direction: row; gap: 8px; align-items: center;";
      container.appendChild(followDiv);

      followers = document.createElement("a");
      followers.classList = "accountFollowers";
      followers.style = "text-decoration: none; gap: 8px; font-size: 13.125px; letter-spacing: 0px; color: rgb(11, 15, 20); flex-direction: row; line-height: 13.125px; font-family: Inter; font-variant: no-contextual;";
      followers.href = "https://bsky.app/profile/" + bsky.handle + "/followers";
      followers.dir = "auto";
      followers.ariaLabel = bsky.followersCount + " followers  ";
      followDiv.appendChild(followers);

      followersNum = document.createElement("span");
      followersNum.classList = "accountFollowersNum";
      followersNum.style = "font-size: 15px; letter-spacing: 0px; color: rgb(11, 15, 20); font-weight: 600; line-height: 15px; font-family: Inter; font-variant: no-contextual;"
      followersNum.innerText = bsky.followersCount + " ";
      followers.appendChild(followersNum);

      followersTxt = document.createElement("span");
      followersTxt.classList = "accountFollowersTxt";
      followersTxt.style = "font-size: 15px; letter-spacing: 0px; color: rgb(66, 87, 108); line-height: 15px; font-family: Inter; font-variant: no-contextual;"
      followersTxt.innerText = "followers  ";
      followers.appendChild(followersTxt);

      follows = document.createElement("a");
      follows.classList = "accountFollowers";
      follows.style = "text-decoration: none; gap: 8px; font-size: 13.125px; letter-spacing: 0px; color: rgb(11, 15, 20); flex-direction: row; line-height: 13.125px; font-family: Inter; font-variant: no-contextual;";
      follows.href = "https://bsky.app/profile/" + bsky.handle + "/follows";
      follows.dir = "auto";
      follows.ariaLabel = bsky.followsCount + " following  ";
      followDiv.appendChild(follows);

      followsNum = document.createElement("span");
      followsNum.classList = "accountFollowersNum";
      followsNum.style = "font-size: 15px; letter-spacing: 0px; color: rgb(11, 15, 20); font-weight: 600; line-height: 15px; font-family: Inter; font-variant: no-contextual;"
      followsNum.innerText = bsky.followsCount + " ";
      follows.appendChild(followsNum);

      followsTxt = document.createElement("span");
      followsTxt.classList = "accountFollowersTxt";
      followsTxt.style = "font-size: 15px; letter-spacing: 0px; color: rgb(66, 87, 108); line-height: 15px; font-family: Inter; font-variant: no-contextual;"
      followsTxt.innerText = "following  ";
      follows.appendChild(followsTxt);
      
      // <span class="css-1jxf684" style="font-size: 15px; letter-spacing: 0px; color: rgb(11, 15, 20); font-weight: 600; line-height: 15px; font-family: InterVariable, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-variant: no-contextual;">202 </span><span class="css-1jxf684" style="font-size: 15px; letter-spacing: 0px; color: rgb(66, 87, 108); line-height: 15px; font-family: InterVariable, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-variant: no-contextual;">following</span></a><div dir="auto" class="css-146c3p1" style="font-size: 15px; letter-spacing: 0px; color: rgb(11, 15, 20); font-weight: 600; line-height: 15px; font-family: InterVariable, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-variant: no-contextual;">59 <span class="css-1jxf684" style="font-size: 15px; letter-spacing: 0px; color: rgb(66, 87, 108); font-weight: 400; line-height: 15px; font-family: InterVariable, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-variant: no-contextual;">posts</span></div>

      // desc = document.createElement("p");
      // desc.innerText = bsky.description;
      // desc.classList = "accountDescription"
      // container.appendChild(desc)

      accountsSpan.appendChild(container);
    });
  }).catch(err => console.error(err));
}
