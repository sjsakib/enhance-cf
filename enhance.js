var url = window.location.pathname;

addCopyLink();

addAllSubs(url);


function addCopyLink() {
  var sampleTests = document.getElementsByClassName('sample-test')[0];
  sampleTests.childNodes.forEach( (el) => {
    var link = document.createElement('a');
    link.text = '(copy)';
    link.href = '#';
    link.style="font-size:.8em;font-weight:lighter;float:right"
    el.childNodes[0].append(link);
    link.addEventListener('click', copyOnClick );
  });

}


function addAllSubs(url) {
    var sidebar = document.getElementById('sidebar');
    var subsDiv = document.createElement('div');
    subsDiv.className = 'roundbox sidebox sidebar-menu';
    subsDiv.style = '';

    var titleDiv = document.createElement('div');
    titleDiv.className = "caption titled";
    titleDiv.appendChild(document.createTextNode('→ Solutions'))
    subsDiv.appendChild(titleDiv);

    var targetURL = getTargetUrl(url);
    var link = document.createElement('a')
    link.href = targetURL;
    link.appendChild(document.createTextNode('All Submissions'));

    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.appendChild(link);
    li.appendChild(span);
    ul.appendChild(li);
    subsDiv.appendChild(ul);

    sidebar.appendChild(subsDiv);
}


function getTargetUrl(url) {
    var args = url.split('/');
    if (args[1] == 'problemset' && args[2] == 'problem') {
        var targetURL = "http://codeforces.com/problemset/status/" + args[3] + "/problem/" + args[4];
    } else {
        var targetURL = "http://codeforces.com/contest/" + args[2] + "/status/" + args[4];
    }
    return targetURL;
}

function copyOnClick(e) {
  e.preventDefault();
  var textCon = e.target.parentElement.nextElementSibling;

  var inp = document.createElement('textarea');
  document.querySelector('body').append(inp);
  console.log(textCon.innerText);
  inp.value = textCon.innerText;
  inp.select();
  document.execCommand('Copy');
  inp.remove();
  e.target.text = '(copied)';

  document.getElementsByClassName('sample-test')[0].childNodes.forEach((el) => {
    if(el.childNodes[0].childNodes[1] != e.target) {
      el.childNodes[0].childNodes[1].text = '(copy)'
    }
  });
}