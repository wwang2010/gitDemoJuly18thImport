<!DOCTYPE html>
<html>
<body>

<h3>A demonstration of how to access a SUMMARY element</h3>

<details>
  <summary id="mySummary">Copyright 1999-2014.</summary>
  <p> - by Refsnes Data. All Rights Reserved.</p>
</details>

<p>Click the "Try it" button to get the HTML content of the summary element.</p>

<button onclick="myFunction()">Try it</button>

<p><b>Note:</b> The summary element is currently only supported in Chrome, Safari 6+ and Opera 15+.</p>

<p id="demo"></p>

<script>
function myFunction() {
    var x = document.getElementById("mySummary").innerHTML;
    document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>
