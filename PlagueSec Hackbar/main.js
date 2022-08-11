var html = `
<!-- PSH = PlagueSecurityHackbar -->
<div onload='PshLoadSite();' class="PlagueSecHackbar" id="PSH-main">
  <div class="PSH-Logo-Banner">
    <h1>PlagueSecurity Hackbar</h1>
  </div>  
  <div class="PSH-stage">
    <textarea id="PSH-site-input" autofocus></textarea>
  </div>
<hr>
  <div class="PSH-btn-wrap">
    <button id='PSH-exec'>Execute</button>

    <div class='psh-dropdown-wrap'>
      <button id='PSH-union' class='PSH-drop-btn'>UNION</button>
      <div id='psh-union-dropdown' class='psh-drop-down'>
        <button>Column count</button>
        <button>Union statement</button>
      </div>
    </div>
    
    <div class='psh-dropdown-wrap'>
      <button id='PSH-waf' class='PSH-drop-btn'>WAF</button>
      <div id='psh-waf-dropdown' class='psh-drop-down'>
        <button>Order by</button>
        <button>Union</button>
      </div>
    </div>

  </div>
</div><br><br><br><br><br><br><br><br><br>
`+document.documentElement.innerHTML;
document.documentElement.innerHTML = html;

var onExec = document.getElementById('PSH-exec');
var onUnion = document.getElementById('PSH-union');
var onWaf = document.getElementById('PSH-waf');

window.onscroll = function() {stick()};
var PlagueSecHacbar = document.getElementById("PSH-main");
var sticky = PlagueSecHacbar.offsetTop;

chrome.storage.sync.get("psh-site", function(siteData) {
  var site = siteData['psh-site'];
  document.getElementById('PSH-site-input').value = site;
});


function stick() {
  if (window.pageYOffset >= sticky){
    PlagueSecHacbar.classList.add("stick")
  }else{
    PlagueSecHacbar.classList.remove("stick");
  }
}


// Exec Section
onExec.addEventListener('click', function Execute(){
  var site = document.getElementById('PSH-site-input').value;
  chrome.storage.sync.set({['psh-site']: site}, function(){
    window.location.href=site;
  });
});


// Union Section
onUnion.addEventListener('click', function Drop(){
  document.getElementById("psh-union-dropdown").classList.toggle("show");
});

// Waf Section
onWaf.addEventListener('click', function Drop(){
  document.getElementById("psh-waf-dropdown").classList.toggle("show");
});



window.onclick = function(event) {
  if (!event.target.matches('.PSH-drop-btn')) {
    var dropdowns = document.getElementsByClassName("psh-drop-down");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




