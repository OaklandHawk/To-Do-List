var list = document.querySelector("ul");
var input = document.querySelector("input");
var button = document.querySelector("button");

function addItem() {
	var myItem = input.value;
	input.value = "";

	var listItem = document.createElement("li");
	var listText = document.createElement("span");
	var listButton = document.createElement("button");

	listItem.appendChild(listText);
	listText.textContent = myItem;
	listItem.appendChild(listButton);
	listButton.textContent = "Delete";
	list.appendChild(listItem);


	listButton.onclick = function(e) {
		list.removeChild(listItem);

	input.focus();

}	



	
}