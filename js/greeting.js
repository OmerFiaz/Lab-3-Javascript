(function(){
  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  let getheader = document.getElementById("my-header");
   let getSurname = document.getElementById("Surname");

  
  function PerformGreeting() {
    myName.innerHTML = userName.value;
	getheader.innerHTML = userName.value + " " + getSurname.value;
    event.preventDefault();
    return false;
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
  } else {
    getName.addEventListener("submit", PerformGreeting);
  }
  
}());
