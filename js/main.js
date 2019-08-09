// declare the variable that a will use
const entryElt = document.getElementById("entryWrite"),
buttonElt = document.getElementById("button"),
listElt = document.getElementById("list");

// when i click on the button
buttonElt.addEventListener("click", function() {
    // get the entry value
    //entryElt.value

    let li = document.createElement("li");
    li.innerHTML = `${entryElt.value} <button type="button" class="deleteButton"><i class="fas fa-times"></i></button>`;
    listElt.appendChild(li);
});