//const signupBtn= document.querySelector(".signupBtn");
const loginId= document.querySelector(".loginId");
const loginPw=document.querySelector(".loginPw");

//정규식
let regPassword = /^[a-zA-Z0-9]{4,12}$/


function regexCheck(reg, what, message) {
        if(reg.test(what.value)) {
            return true;
        }
        alert(message);
        what.value = "";
        what.focus();
        //return false;
}


function handleLoginBtnClick(){ //로그인 버튼 눌렀을 때

    const form = document.querySelector(".loginForm");
    const data = new FormData(form);

    if(loginId.value===""){
        //아이디 비어있는지 검사
        alert("아이디를 입력해주세요.");
        loginId.focus();
        return false;
    }
    if(loginPw.value===""){
        //패스워드 비어있는지 검사
        alert("패스워드를 입력해주세요.")
        loginPw.focus();
        return false;
    }

    if(!regexCheck(regPassword,"비밀번호는 4~12자의 영문 대소문자와 숫자로만 입력 가능합니다.")){
        //패스워드 유효성 검사
        return false;
    }

    fetch("/login", {
      method :"POST",
      headers: {},
      body: data
    }).then((response) => {
        if(response.status===200){
            alert("로그인되었습니다")
            location.href=response.url
        }
    })  
}

//회원 가입버튼을 눌렀을 때 실행
function logining() {
    const loginBtn= document.querySelector(".loginBtn");
    if(loginBtn){
    loginBtn.addEventListener("click", handleLoginBtnClick)
    }
}

logining()


