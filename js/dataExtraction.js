var user_input = document.getElementById('username');
function loadUser() {
  var userInfo = new XMLHttpRequest();  
  
  userInfo.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var user = JSON.parse(this.responseText);
      document.getElementsByClassName('wrapper_main')[0].style.opacity = "1";
      document.getElementById('avatar').src= user.avatar_url ;
      document.getElementsByClassName('profile_name')[0].innerHTML= user.name;
      document.getElementById('profile_link').href = "https://github.com/" + user_input.value;
      document.getElementsByClassName('name')[0].innerHTML = user.login;
      document.getElementById('mail_id').innerHTML= user.email;
      document.getElementsByClassName('follower_link')[0].href = "https://github.com/"+user_input.value+"?tab=followers";
      document.getElementById('follower_number').innerHTML= user.followers;
      document.getElementsByClassName('following_link')[0].href = "https://github.com/"+user_input.value+"?tab=following";
      document.getElementById('following_number').innerHTML= user.following;
      document.getElementsByClassName('repos_link')[0].href = "https://github.com/"+user_input.value+"?tab=repositories";
      document.getElementById('repos_number').innerHTML= user.public_repos;
      document.getElementById('location_name').innerHTML= user.location;
      console.log(user.location);
    }
    else if(this.readyState==4 && this.status == 404) {
      document.getElementsByClassName('wrapper_main')[0].style.opacity = "0";
      alert("Something went wrong!\nOr\n User Doesn't Exist.");
    }
    else if(this.readyState==4 && this.status == 403) {
      alert("Something went wrong!");
    }
  };
  userInfo.open("GET" , "https://api.github.com/users/" + user_input.value , true);
  userInfo.send();
}