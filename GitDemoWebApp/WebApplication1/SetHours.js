<!DOCTYPE html>
<html>
<body>

<p>Click the button to display a date after changing the hours.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var d = new Date();
    d.setHours(15);
    document.getElementById("demo").innerHTML = d;
}
</script>

</body>
</html>