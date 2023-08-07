const pageTitle = document.querySelector(".page-title");

loadName();
function loadName() {
	getUser();
	pageTitle.innerHTML = `
	<div class="my-info-wrap">
        <h2>마이페이지</h2>
        <a href="/auth/mypage_modify" class="my-info">개인정보수정</a>
    </div>
    <p>` + getUser().user_name + `님, 경주월드를 방문해주셔서 감사해요!</p>
	`;
}