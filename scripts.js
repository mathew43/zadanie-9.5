var withButtonsClass = document.getElementsByClassName('button');
var lenghtOfbuttons = withButtonsClass.length;

for (var i = 0; i < lenghtOfbuttons; i++) {
 	var btn = withButtonsClass[i];
 	console.log(btn.innerText);
}


