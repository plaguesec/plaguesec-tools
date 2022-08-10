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
    <button id='PSH-exec'>UNION</button>
    <button id='PSH-exec'>WAF</button>
  </div>
</div><br><br><br><br><br><br><br><br><br>
`+document.documentElement.innerHTML;
document.documentElement.innerHTML = html;

var onExec = document.getElementById('PSH-exec');

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


onExec.addEventListener('click', function Execute(){
  var site = document.getElementById('PSH-site-input').value;
  chrome.storage.sync.set({['psh-site']: site}, function(){
    window.location.href=site;
  });
});

