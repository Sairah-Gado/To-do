// Select the element with class "date"
const dateElement = document.querySelector(".date");
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString(undefined, options);

dateElement.textContent = formattedDate;

// Todo List
const liArray = ["Express gratitude to God for this day."];
const button = document.querySelector(".btn");
const ul = document.querySelector(".uList");
const toDelete = document.querySelector(".delete");
const toUpdate = document.querySelector(".update");

function updatedList() {
    ul.innerHTML = "";
    for(let i = 0; i < liArray.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${i + 1} : ${liArray[i]}`;
        ul.appendChild(li);
    }
};
updatedList()
// add todo list
button.addEventListener('click', () => {
    const addList = prompt("Add New Todo");
    liArray.push(addList);
    updatedList()
});
// to Delete
toDelete.addEventListener('click', () => {
    const listToDelete = parseInt(prompt("Enter index to Delete"));
    
    if(listToDelete < 1 ||listToDelete > liArray.length) {
        alert(`There is no item '${listToDelete}' in List`);
    }else{
        const adjustedIndex = listToDelete -1;
        const indexToDelete = liArray.splice(listToDelete - 1, 1)[0];
    }
    updatedList()
});
// to Update
toUpdate.addEventListener('click', () => {
    const update = parseInt(prompt("Enter an index to Update"));
    if(update < 1 || update > liArray.length){
        alert(`There is no item at index ${update} in the List`)
    }else{
        const updated = prompt("Enter What to Update");
        liArray[update -1] = updated;
    }
    updatedList();
})