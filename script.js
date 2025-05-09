funtion onLoad() {
  getBskyProfile();
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

      icon = document.createElement("img");
      icon.src = bsky.avatar;
      icon.classList = "accountAvatar"
      container.appendChild(icon);

      link = document.createElement("a");
      link.classList = "accountName";
      link.innerText = bsky.displayName
      link.href = "https://bsky.app/profile/" + bsky.handle;
      container.appendChild(link);

      desc = document.createElement("p");
      desc.innerText = project.description;
      desc.classList = "accountDescription"
      container.appendChild(desc)

      accountsSpan.appendChild(container);
    });
  }).catch(err => console.error(err));
}
