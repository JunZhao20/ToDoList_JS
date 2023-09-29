const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

const button = document.querySelector(".btn");

// detects a action by use when they click on the btn class
button.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("You must write something in here!");
  } else {
    //   stores the method to create a new list element
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    li.appendChild(span);
    span.innerHTML =
      "<button class='binB'><img class='bin' src='images/bin.png'/></button>";
  }
  inputBox.value = "";
  savedata();
});
// This is event delegation, it takes a common acestor to the li tag (ul) and it will allow all the tags
listContainer.addEventListener("click", function (event) {
  //   // This marks the task as finished/not finished
  //   // if the event from user input is clicking on the a task(li(stored task))
  if (event.target.tagName === "LI") {
    //     // toggles the class checked
    event.target.classList.toggle("checked");
    //     // savedata();
    savedata();
  }
  //   // This deletes the task
  //   // if click event is on the delete button
  if (event.target.tagName == "BUTTON") {
    //     // grabs the parent element from the user event
    let span_ = event.target.parentElement;
    //     // grabs parent of span which is the li tag and remove sit.
    savedata();
    span_.parentElement.remove();
  } else if (event.target.tagName == "IMG") {
    let button = event.target.parentElement;
    let span_ = button.parentElement;
    span_.parentElement.remove();
    savedata();
  }
  false;
  savedata();
});

// This functions saves the content in the listContainer
function savedata() {
  // The localStorage (web storage API) allows the contents/data to be stored to the web browswer with no expiration date
  // keyname == "data", value == listcontainer.innerHTML
  localStorage.setItem("data", listContainer.innerHTML);
}

// shows the saved tasks
function showTask() {
  // takes current listContainer.innerHTML and swaps with the saved "data"
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
