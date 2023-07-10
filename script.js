//your JS code here. If required.
let counter = document.createElement("p");
counter.id = "counter";
counter.innerText = 0;
let btn = document.createElement("button");
btn.innerText = "increament";
btn.id = "incrementBtn";
document.body.append(counter,btn);
let count = 0;
counter.innerText = count;
btn.addEventListener("click", ()=>{
	alert(count);
	count++;
	counter.innerText = count;
})
