function getBskyProfile() {
  const url = "https://public.api.bsky.app/xrpc/app.bsky.actor.getProfiles?actors=did:plc:lzylocxb3cr2hhpjejy2d3qp";
  const accountsDiv = document.getElementById('accounts');
  fetch(url)
  .then(function(response) {
    response.json().then(function(account){
      bsky = account.profiles[0];
      console.log("Account %s (@%s) has %s followers and %s following", bsky.displayName, bsky.handle, bsky.followersCount, bsky.followsCount);
    });
  }).catch(err => console.error(err));
}