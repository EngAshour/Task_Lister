let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

Values = [];
for (v = 0; v < window.localStorage.length; v++) {
    Values.push(window.localStorage.key(v));
}
console.log(Values);
for (m = 1; m <= window.localStorage.length; m++) {
    let td = document.createTextNode(
        `${window.localStorage.getItem(`${Values[m - 1]}`)}`
    );
    let textdiv = document.createElement("div");
    textdiv.appendChild(td);
    textdiv.setAttribute("class", "textdiv");
    textdiv.classList.add(`Task${m}`);
    let remove = document.createElement("input");
    remove.setAttribute("type", "submit");
    remove.setAttribute("class", "add");
    remove.classList.add("delete");
    remove.setAttribute("value", "Delete");
    let Task = document.createElement("div");
    Task.setAttribute("class", "task");
    Task.appendChild(textdiv);
    Task.appendChild(remove);
    tasks.appendChild(Task);
    tasks.addEventListener("click", (e) => {
        if (e.target.matches(".delete")) {
            e.target.parentElement.remove();
            window.localStorage.removeItem(
                `${e.target.previousSibling.classList[1]}`
            );
        }
    });
}
let clickcounter = 0;
let x = window.localStorage.length + 1;

function newtask(x) {
    let td = document.createTextNode(`${input.value}`);
    let textdiv = document.createElement("div");
    textdiv.appendChild(td);
    textdiv.setAttribute("class", "textdiv");
    textdiv.classList.add(`Task${x}`);
    let remove = document.createElement("input");
    remove.setAttribute("type", "submit");
    remove.setAttribute("class", "add");
    remove.classList.add("delete");
    remove.setAttribute("value", "Delete");
    let Task = document.createElement("div");
    Task.setAttribute("class", "task");
    Task.appendChild(textdiv);
    Task.appendChild(remove);
    tasks.appendChild(Task);
}
for (i = 0; i < 1; i++) {
    add.addEventListener("click", function (e) {
        if (input.value === "") {
            alert(`No New Tasks ?`);
        } else {
            newtask(x);
            tasks.addEventListener("click", (e) => {
                if (e.target.matches(".delete")) {
                    e.target.parentElement.remove();
                    window.localStorage.removeItem(
                        `${e.target.previousSibling.classList[1]}`
                    );
                }
            });
            x += 1;
            clickcounter += 1;
            window.localStorage.setItem(
                `Task${clickcounter}`,
                `${input.value}`
            );
        }
    });
}
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        add.click();
    }
});
//blanking the input value
add.addEventListener("click", (e) => {
    input.value = "";
});
