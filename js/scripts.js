//to do
//frank salazar
"use strict"
var list = []
function handleGoButtonClick(event) {
		// alert("New element will be added to the array.");
    list.push(addToDo())
		domTextOutput(list);






	}



function addToDo(newval) {
	var input1 = document.getElementById("toDoInput");
	if (newval !== undefined && newval !== "" ) {
		input1.value = newval;
		// document.getElementById("toDoInput").value = '';
	}
  return input1.value;
}

function domTextOutput(newval) {
	var textOutputReference = document.getElementById("textOutputId");
	if(newval !== undefined && newval !== "") {
		textOutputReference.innerHTML = newval;
		return addToDo(newval);


	}
}  (function() {
  	document.getElementById("addBtn").onclick = handleGoButtonClick;
  }());
