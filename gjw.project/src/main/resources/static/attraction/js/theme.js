const themeclick = document.querySelectorAll(".ThemeClick");
const click1 = document.querySelectorAll(".Click1");

function clickcourse() {
	for(let i=0; i < themeclick.length; i++) {
	themeclick[i].onclick = () => {
		location.href = "/course/" + (i+1);
		}
	}
}
clickcourse();

