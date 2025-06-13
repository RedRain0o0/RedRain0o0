//funtion onLoad() {
//  getBskyProfile();
//}

function addTempGap() {
  const accountsSpan = document.getElementById('accountsSpan');
  tempGap = document.createElement("div")
  tempGap.classList = "tempGap";
  accountsSpan.appendChild(tempGap);
}

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

      site = document.createElement("img");
      site.src = "assets/websites/bsky.svg";
      site.classList = "siteIcon"
      container.appendChild(site);

      icon = document.createElement("img");
      icon.src = bsky.avatar;
      icon.classList = "accountAvatar"
      icon.id = "bskyAvatar"
      container.appendChild(icon);

      accname = document.createElement("a");
      accname.classList = "accountName";
      accname.id = "bskyName";
      accname.innerText = bsky.displayName
      accname.href = "https://bsky.app/profile/" + bsky.handle;
      container.appendChild(accname);

      handle = document.createElement("a");
      handle.classList = "accountHandle";
      handle.id = "bskyHandle";
      handle.innerText = "@" + bsky.handle
      handle.href = "https://bsky.app/profile/" + bsky.handle;
      container.appendChild(handle);

      statsDiv = document.createElement("div");
      statsDiv.classList = "accountStatsDiv";
      statsDiv.id = "bskyStatsDiv";
      //followDiv.style = "flex-direction: row; gap: 8px; align-items: center;";
      container.appendChild(statsDiv);

      followers = document.createElement("a");
      followers.classList = "accountFollowers";
      followers.style = "text-decoration: none; gap: 8px; font-size: 13.125px; letter-spacing: 0px; color: rgb(11, 15, 20); flex-direction: row; line-height: 13.125px; font-family: Inter; font-variant: no-contextual;";
      followers.href = "https://bsky.app/profile/" + bsky.handle + "/followers";
      followers.dir = "auto";
      followers.ariaLabel = bsky.followersCount + " followers  ";
      statsDiv.appendChild(followers);

      followersNum = document.createElement("span");
      followersNum.classList = "accountStatsNum";
      followersNum.innerText = bsky.followersCount + " ";
      followers.appendChild(followersNum);

      followersTxt = document.createElement("span");
      followersTxt.classList = "accountStatsTxt";
      followersTxt.innerText = "followers  ";
      followers.appendChild(followersTxt);

      follows = document.createElement("a");
      follows.classList = "accountFollowers";
      follows.style = "text-decoration: none; gap: 8px; font-size: 13.125px; letter-spacing: 0px; color: rgb(11, 15, 20); flex-direction: row; line-height: 13.125px; font-family: Inter; font-variant: no-contextual;";
      follows.href = "https://bsky.app/profile/" + bsky.handle + "/follows";
      follows.dir = "auto";
      follows.ariaLabel = bsky.followsCount + " following  ";
      statsDiv.appendChild(follows);

      followsNum = document.createElement("span");
      followsNum.classList = "accountStatsNum";
      followsNum.innerText = bsky.followsCount + " ";
      follows.appendChild(followsNum);

      followsTxt = document.createElement("span");
      followsTxt.classList = "accountStatsTxt";
      followsTxt.innerText = "following  ";
      follows.appendChild(followsTxt);
      
      // <span class="css-1jxf684" style="font-size: 15px; letter-spacing: 0px; color: rgb(11, 15, 20); font-weight: 600; line-height: 15px; font-family: InterVariable, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-variant: no-contextual;">202 </span><span class="css-1jxf684" style="font-size: 15px; letter-spacing: 0px; color: rgb(66, 87, 108); line-height: 15px; font-family: InterVariable, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-variant: no-contextual;">following</span></a><div dir="auto" class="css-146c3p1" style="font-size: 15px; letter-spacing: 0px; color: rgb(11, 15, 20); font-weight: 600; line-height: 15px; font-family: InterVariable, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-variant: no-contextual;">59 <span class="css-1jxf684" style="font-size: 15px; letter-spacing: 0px; color: rgb(66, 87, 108); font-weight: 400; line-height: 15px; font-family: InterVariable, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-variant: no-contextual;">posts</span></div>

      // desc = document.createElement("p");
      // desc.innerText = bsky.description;
      // desc.classList = "accountDescription"
      // container.appendChild(desc)

      accountsSpan.appendChild(container);
      addTempGap();
    });
  }).catch(err => console.error(err));
}

function getGithubProfile() {
  const url = "https://api.github.com/users/redrain0o0";
  const accountsSpan = document.getElementById('accountsSpan');
  fetch(url)
  .then(function(response) {
    response.json().then(function(account){
      github = account;
      console.log("Account %s has %s repos and %s gists", github.name, github.public_repos, github.public_gists);
      container = document.createElement("div")

      container.classList = "account";
      container.id = "githubAccount"

      site = document.createElement("img");
      site.src = "assets/websites/github.svg";
      site.classList = "siteIcon"
      container.appendChild(site);

      icon = document.createElement("img");
      icon.src = github.avatar_url;
      icon.classList = "accountAvatar"
      icon.id = "githubAvatar"
      container.appendChild(icon);

      accname = document.createElement("a");
      accname.classList = "accountName";
      accname.id = "githubName";
      accname.innerText = github.name
      accname.href = "https://github.com/" + github.name;
      container.appendChild(accname);

      statsDiv = document.createElement("div");
      statsDiv.classList = "accountStatsDiv";
      statsDiv.id = "githubStatsDiv";
      container.appendChild(statsDiv);

      repos = document.createElement("a");
      repos.classList = "accountFollowers";
      repos.style = "text-decoration: none; gap: 8px; font-size: 13.125px; letter-spacing: 0px; color: rgb(11, 15, 20); flex-direction: row; line-height: 13.125px; font-family: Inter; font-variant: no-contextual;";
      repos.href = "https://github.com/" + github.name + "?tab=repositories";
      repos.dir = "auto";
      repos.ariaLabel = github.public_repos + " repos  ";
      statsDiv.appendChild(repos);

      reposNum = document.createElement("span");
      reposNum.classList = "accountFollowersNum";
      reposNum.style = "font-size: 15px; letter-spacing: 0px; color: rgb(11, 15, 20); font-weight: 600; line-height: 15px; font-family: Inter; font-variant: no-contextual;"
      reposNum.innerText = github.public_repos + " ";
      repos.appendChild(reposNum);

      reposTxt = document.createElement("span");
      reposTxt.classList = "accountFollowersTxt";
      reposTxt.style = "font-size: 15px; letter-spacing: 0px; color: rgb(66, 87, 108); line-height: 15px; font-family: Inter; font-variant: no-contextual;"
      reposTxt.innerText = "repos  ";
      repos.appendChild(reposTxt);

      gists = document.createElement("a");
      gists.classList = "accountFollowers";
      gists.style = "text-decoration: none; gap: 8px; font-size: 13.125px; letter-spacing: 0px; color: rgb(11, 15, 20); flex-direction: row; line-height: 13.125px; font-family: Inter; font-variant: no-contextual;";
      gists.href = "https://github.com/" + github.name + "/follows";
      gists.dir = "auto";
      gists.ariaLabel = github.public_gists + " gists  ";
      statsDiv.appendChild(gists);

      gistsNum = document.createElement("span");
      gistsNum.classList = "accountFollowersNum";
      gistsNum.style = "font-size: 15px; letter-spacing: 0px; color: rgb(11, 15, 20); font-weight: 600; line-height: 15px; font-family: Inter; font-variant: no-contextual;"
      gistsNum.innerText = github.public_gists + " ";
      gists.appendChild(gistsNum);

      gistsTxt = document.createElement("span");
      gistsTxt.classList = "accountFollowersTxt";
      gistsTxt.style = "font-size: 15px; letter-spacing: 0px; color: rgb(66, 87, 108); line-height: 15px; font-family: Inter; font-variant: no-contextual;"
      gistsTxt.innerText = "gists  ";
      gists.appendChild(gistsTxt);
    
      //<span class="css-1jxf684" style="font-size: 15px; letter-spacing: 0px; color: rgb(11, 15, 20); font-weight: 600; line-height: 15px; font-family: InterVariable, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-variant: no-contextual;">202 </span><span class="css-1jxf684" style="font-size: 15px; letter-spacing: 0px; color: rgb(66, 87, 108); line-height: 15px; font-family: InterVariable, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-variant: no-contextual;">following</span></a><div dir="auto" class="css-146c3p1" style="font-size: 15px; letter-spacing: 0px; color: rgb(11, 15, 20); font-weight: 600; line-height: 15px; font-family: InterVariable, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-variant: no-contextual;">59 <span class="css-1jxf684" style="font-size: 15px; letter-spacing: 0px; color: rgb(66, 87, 108); font-weight: 400; line-height: 15px; font-family: InterVariable, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-variant: no-contextual;">posts</span></div>

      //desc = document.createElement("p");
      //desc.innerText = bsky.description;
      //desc.classList = "accountDescription"
      //container.appendChild(desc)

      accountsSpan.appendChild(container);
      addTempGap();
    });
  }).catch(err => console.error(err));
}
