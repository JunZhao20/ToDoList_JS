const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("You must write something in here!");
  } else {
    //   stores the method to create a new list element
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    //   adding the new list with 'inputBox' content in to the 'listContainer'(ul)
    listContainer.appendChild(li);
    inputBox.value = "";
  }
});
