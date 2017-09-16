var sidebar = document.getElementById('sidebar');
var subs = document.createElement('div');

subs.className = 'roundbox sidebox sidebar-menu';
subs.style = ''

var url = window.location.pathname;
var targetURL = getTargetUrl(url);

var toAdd = "";
toAdd += "<div class='roundbox-lt'>   </div>";
toAdd += "<div class='roundbox-rt'>   </div>";
toAdd += "<div class='caption titled'> → Solutions </div>";
toAdd += "<ul> <li> <span> <a href='"+targetURL+"'>See All Submissions</a> </span> </li> </ul>";

subs.innerHTML += toAdd;
sidebar.appendChild(subs);

function getTargetUrl(url) {
  var args = url.split('/');
  if (args[1] == 'problemset' && args[2] == 'problem') {
    var targetURL = "http://codeforces.com/problemset/status/" + args[3] + "/problem/" + args[4];
  } else {
    var targetURL = "http://codeforces.com/contest/" + args[2] + "/status/" + args[4];
  }
  return targetURL;
}