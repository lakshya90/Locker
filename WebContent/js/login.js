onload = function() {
	document.getElementById("login").onclick = authenticate;
};
function authenticate() {
	username = document.getElementById("username").value;
	password = document.getElementById("password").value;
	if (username == "admin" && password == "admin") {
		window.location = "accountDB.html";
	} else {
		alert("Login failed");
	}
}
