var user_input = document.getElementById('username');
function loadUser() {
  var userInfo = new XMLHttpRequest();

  userInfo.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var user = JSON.parse(this.responseText);
      document.getElementById('wrapper_main').style.opacity = "1";
      document.getElementById('avatar').src = user.avatar_url;
      document.getElementById('profile_name').innerHTML = user.name;
      document.getElementById('profile_link').href = "https://github.com/" + user_input.value;
      document.getElementById('name').innerHTML = user.login;
      document.getElementById('mail_id').innerHTML = user.email;
      document.getElementById('follower_link').href = "https://github.com/" + user_input.value + "?tab=followers";
      document.getElementById('follower_number').innerHTML = user.followers;
      document.getElementById('following_link').href = "https://github.com/" + user_input.value + "?tab=following";
      document.getElementById('following_number').innerHTML = user.following;
      document.getElementById('repos_link').href = "https://github.com/" + user_input.value + "?tab=repositories";
      document.getElementById('repos_number').innerHTML = user.public_repos;
      document.getElementById('location_name').innerHTML = user.location;
    }
    else if (this.readyState == 4 && this.status == 404) {
      document.getElementById('wrapper_main').style.opacity = "0";
      alert("Something went wrong!\nOr\n User Doesn't Exist.");
    }
    else if (this.readyState == 4 && this.status == 403) {
      alert("Something went wrong!");
    }
  };
  userInfo.open("GET", "https://api.github.com/users/" + user_input.value, true);
  userInfo.send();
}