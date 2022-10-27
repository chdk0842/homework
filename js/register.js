const userid = document.querySelector('#userid');
const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submitbutton = document.querySelector('#submit_button');

submitbutton.addEventListener('click', function(){

    let chkArray = [idConfirm(),pwd1Confirm(),pwd2Confirm(),
    fullnameConfirm(),emailConfirm(),telConfirm()]

    let chkFlag = true

    for(const chk of chkArray) {
      if (!chk) { //함수의 리턴값이 false
        chkFlag = false
      }
    }

    if (chkFlag) {
      document.signup.submit()
    }

    /*
    //아이디 : 공백여부, 중복여부
    const idConf = idConfirm()
    //비밀번호 : 공백여부, 특수문자, 문자, 숫자 포함 형태의 8~15자리 입력 안내
    const pwd1Conf =  pwd1Confirm()
    //비밀번호 확인 : 공백여부 / 비밀번호와 동일한지
    const pwd2Conf = pwd2Confirm()
    //이름 : 공백여부
    const fullnameConf = fullnameConfirm()
    //메일주소 : 공백여부 / 메일형식과 맞는지
    const emailConf = emailConfirm()
    //연락처 : 연락처 형식에 맞는지
    const telConf = telConfirm()
    */

    // if (idConf && pwd1Conf && pwd2Conf && fullnameConf && emailConf && telConf){
    //     document.signup.submit();
    // }
})

function idConfirm() {
    const mustId = document.querySelector(".must_id")
    const overlap = document.querySelector(".overlap")

    //텍스트가 남아있는 걸 방지
    mustId.style.display = "none"
    overlap.style.display = "none"

    //null, undefind, "", 0 은 false
    //userid가 공백이라면
    if (!userid.value.replace(/ /g, "")) {
        mustId.style.display = "block" 
        return false
    } else {
       if(!idCheck(userid.value)){ //아이디가 중복이라면
        overlap.style.display = "block" 
        return false
    }
}
  return true
}

function pwd1Confirm() {
    const mustPwd1 = document.querySelector(".must_pwd1")
    const regPwd = document.querySelector(".reg_pwd")
    
    mustPwd1.style.display = "none"
    regPwd.style.display = "none"

    //pwd1 빈문자열 이라면
    if(!pwd1.value) {
        mustPwd1.style.display = "block" 
        return false
    }else{
        if(!pwdCheck(pwd1.value)){ //정규표현식에 맞지 않으면
         regPwd.style.display =  "block"
         return false
        }
    }
    return true
}

function pwd2Confirm() {
    const mustPwd2 = document.querySelector(".must_pwd2")
    const same = document.querySelector(".same")

    mustPwd2.style.display = "none"
    same.style.display = "none"

    if(!pwd2.value) {
        mustPwd2.style.display =  "block"
        return false
    }else{
        if (pwd1.value && pwd2.value) { 
            if (pwd1.value !== pwd2.value) {
                same.style.display = "block"
                return false
            }
        }
    }
    return true
}

function fullnameConfirm() {
    const mustFullname = document.querySelector(".must_fullname")
    mustFullname.style.display = "none"

    if(!fullname.value.replace(/ /g, "")){
        mustFullname.style.display = "block"
        return false
    }
     return true
}

function emailConfirm() {
    const mustEmail = document.querySelector(".must_email")
    const regEmail = document.querySelector(".reg_email")

    mustEmail.style.display = "none"
    regEmail.style.display = "none"

    if(!email.value) {
        mustEmail.style.display="block"
        return false
    }else{
        if(emailCheck(email.value)){
            regEmail.style.display = "block"
            return false
        }
    }
    return true
}

function telConfirm() {
    const regTel = document.querySelector(".reg_tel")
    regTel.style.display = "none"
    //전화번호가 있고 유효성 체크에 통과하지 못했을때
    if (!telCheck(tel.value && tel.value)){
        regTel.style.display = "block"
        return false
    }
    return true
}

//중복된 아이디 체크
function idCheck(id) {
    return true;
}

function pwdCheck(pwd) {
    //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(pwd);
  }
  
  function telCheck(tel) {
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel);
  }
  
  function emailCheck(email) {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
  }