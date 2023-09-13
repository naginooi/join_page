//////// focus 이동 /////////////////////////////////////
const firstPhone = () => {
  const phone1 = document.getElementById('first-input').value;
  //next
  if (phone1.length === 3) document.getElementById('second-input').focus();
};
const secondPhone = () => {
  const phone2 = document.getElementById('second-input').value;
  //next
  if (phone2.length === 4) document.getElementById('third-input').focus();
};
const thirdPhone = () => {
  const phone1 = document.getElementById('first-input').value;
  const phone2 = document.getElementById('second-input').value;
  const phone3 = document.getElementById('third-input').value;
  if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4)
    document.querySelector('.sendBtn').removeAttribute('disabled');
};

///////token 생성//////////////////////////////////////////
const makeToken = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
  document.querySelector('.token').innerText = token;
  document.querySelector('.sendBtn').setAttribute('disabled', 'true');
  document.querySelector('.completeBtn').removeAttribute('disabled');
  fnTimer();
};

///////////////////타이머 설정///////////////////////////////////
let interval;
const fnTimer = () => {
  let timer = 180;
  interval = setInterval(() => {
    if (timer >= 0) {
      const min = Math.floor(timer / 60);
      const sec = timer % 60;
      document.querySelector('.timer').innerText = `${min}:${String(sec).padStart(2, '0')}`;
      timer--;
    } else {
      document.querySelector('.timer').innerText = '3:00';
      document.querySelector('.token').innerText = '000000';
      document.querySelector('.sendBtn').removeAttribute('disabled');
      document.querySelector('.completeBtn').setAttribute('disabled', 'true');

      clearInterval(interval);
    }
  }, 1000);
};

///////////////////인증 완료 버튼 클릭 이벤트/////////////////////////////
const completeBtn = () => {
  clearInterval(interval);
  document.querySelector('.completeBtn').setAttribute('disabled', 'true');
  document.querySelector('.completeBtn').innerText = '인증 완료';
  alert('인증이 완료되었습니다.');
  document.querySelector('.register').removeAttribute('disabled');
};

////////////////////유효성 검사////////////////////
const signUp = () => {
  const email = document.querySelector('.email').value;
  const name = document.querySelector('.name').value;
  const password = document.querySelector('.password').value;
  const rePassword = document.querySelector('.re-password').value;
  const region = document.querySelector('.region').value;
  const woman = document.querySelector('.female').checked;
  const man = document.querySelector('.male').checked;

  let isValid = true;
  if (email.includes('@') === false || email == '') {
    document.getElementById('email_error').innerText = '이메일이 올바르지 않습니다';
    isValid = false;
  } else document.getElementById('email_error').innerText = '';

  if (name == '') {
    document.getElementById('name_error').innerText = '이름을 입력해주세요';
    isValid = false;
  } else document.getElementById('name_error').innerText = '';

  if (password == '') {
    document.getElementById('pw_error').innerText = '비밀번호를 입력해주세요';
    isValid = false;
  } else document.getElementById('pw_error').innerText = '';
  if (rePassword == '' || rePassword !== password) {
    document.getElementById('re_pw_error').innerText = '비밀번호가 올바르지 않습니다';
    isValid = false;
  } else document.getElementById('re_pw_error').innerText = '';

  if (region == 'none') {
    document.getElementById('region_error').innerText = '지역을 선택하세요';
    isValid = false;
  } else document.getElementById('region_error').innerText = '';

  if (woman === false && man === false) {
    document.getElementById('gender_error').innerText = '성별을 선택하세요';
    isValid = false;
  } else document.getElementById('gender_error').innerText = '';

  if (isValid === true) alert('회원가입을 축하합니다!');
};
