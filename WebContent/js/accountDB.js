onload = function() {
	var buttons = document.getElementsByTagName("button");
	for (var i = 1; i < buttons.length; i += 2) {
		buttons[i].onclick = removeRow;
	}
	$(function() {
		$("#addNewAccount").dialog({
			autoOpen : false
		});
		$("#addAccount").on("click", function() {
			$("#addNewAccount").dialog("open");
		});

		$("#btnAdd").on("click", function() {
			$("#addNewAccount").dialog("close");
		});
	});

	document.getElementById("btnAdd").onclick = addToDB;
	function addToDB() {
		var accountNameElement = document.createElement("td");
		var usernameElement = document.createElement("td");
		var passwordElement = document.createElement("td");
		var buttonElement1 = document.createElement("td")
		var buttonElement2 = document.createElement("td")
		var accountName = document.getElementById("accountName").value;
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		var button1 = document.createElement("button");
		var button2 = document.createElement("button");
		accountNameElement.innerHTML = accountName;
		usernameElement.innerHTML = username;
		passwordElement.innerHTML = password;
		button1.innerHTML = "Edit";
		// button1.onclick = removeRow;
		button2.innerHTML = "Delete";
		button2.onclick = removeRow;
		buttonElement1.appendChild(button1);
		buttonElement2.appendChild(button2);
		var row = document.createElement("tr");
		row.appendChild(accountNameElement);
		row.appendChild(usernameElement);
		row.appendChild(passwordElement);
		row.appendChild(buttonElement1);
		row.appendChild(buttonElement2);
		document.getElementById("tableBody").appendChild(row);
		document.getElementById("accountName").value = "";
		document.getElementById("username").value = "";
		document.getElementById("password").value = "";

	}

};
function removeRow() {
	this.parentNode.parentNode.parentNode
			.removeChild(this.parentNode.parentNode); // tr is getting removed
	// from table body

}
