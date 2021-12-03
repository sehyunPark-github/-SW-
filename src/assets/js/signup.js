const signupBtn= document.querySelector(".signupBtn");

const signupId= document.querySelector(".id");
const signupPw1=document.querySelector(".pw1");
const signupPw2=document.querySelector(".pw2");
const signupName= document.querySelector(".name");
const signupPn = document.querySelector(".pn");
const signupEmail=document.querySelector(".email");

//정규식
let regPassword = /^[a-zA-Z0-9]{4,12}$/
let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; 
let regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;


//회원가입 진행 함수
function handleSignUpBtnClick(){ //회원가입 버튼 눌렀을 때
    if(signupPw1.value===""){
        //패스워드1 비어있는지 검사
        alert("패스워드를 입력해주세요.");
        signupPw1.focus()
        return false;
    }

    if(signupPw2.value===""){
        //패스워드2 비어있는지 검사
        alert("확인 비밀번호를 입력해주세요.");
        signupPw2.focus()
        return false;
        }

    if (signupPw1.value!==signupPw2.value){
        //패스워드 1,2 동일성 검사
        alert("패스워드가 다릅니다. 다시 확인해주세요.");
        signupPw2.value="";
        signupPw2.focus();
        return false;
    }

    if(!regexCheck(regPassword,signupPw1,"비밀번호는 4~12자의 영문 대소문자와 숫자로만 입력 가능합니다.")){
        //패스워드1 유효성 검사
        return false;
    }

    if(signupName.value===""){
        //이름이 비어있는지 검사
        alert("이름을 입력해주세요.");
        signupName.focus()
        return false;
    }
    if(!regexCheck(regPhone,signupPn,"정확한 휴대폰 번호를 입력해주세요.")){
        //폰 번호 유효성 검사
        return false;
    }
    if(signupEmail.value===""){
        //이메일이 비어있는지 검사
        alert("이메일을 입력해주세요.");
        signupEmail.focus()
        return false;
    }
    if(!regexCheck(regEmail,signupEmail,"적합하지 않는 이메일 형식입니다.")){
        return false;
    }

    let data={
        id: signupId.value,
        password:signupPw1.value,
        phoneNumber: signupPn.value,
        email:signupEmail.value,
        name:signupName.value, 
    }
    fetch({
      type:"POST",
      url:"/auth/api/signUp", //url 채우기
      data:JSON.stringify(data),
      contentType: "application/json;charset=utf-8",
      dataType: "json"
    }).done(function(res){
        if(res.status===500){
            alert("회원가입에 실패하였습니다.")
        }else{
            alert("회원가입에 성공하였습니다..")
            location.href=response.url
        }
    }).fail(function (e){
        alert(JSON.stringify(e));
    })
}


//회원 가입버튼을 눌렀을 때 실행
function signup() { //함수로 묶어서 버튼이 있으면 적용되도록
    if(signupBtn){
        signupBtn.addEventListener("click",handleSignUpBtnClick)
    }
}

