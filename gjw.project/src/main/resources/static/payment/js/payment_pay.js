
function showlist(num) {
    const listUl = document.querySelectorAll(".list ul");
    const list = document.querySelectorAll(".list");

    if(list[num].className == "list on") {
        list[num].classList.remove("on");
    }else if (list[num].className == "list") {
        list[num].classList.add("on");
    }
}
