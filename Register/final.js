//////// focus 이동 /////////////////////////////////////
const firstPhone = () => {
  const phone1 = document.getElementById("first-input").value;
  //next
  if (phone1.length === 3) document.getElementById("second-input").focus();
};
const secondPhone = () => {
  const phone2 = document.getElementById("second-input").value;
  //next
  if (phone2.length === 4) document.getElementById("third-input").focus();
};
const thirdPhone = () => {
  const phone1 = document.getElementById("first-input").value;
  const phone2 = document.getElementById("second-input").value;
  const phone3 = document.getElementById("third-input").value;
  if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4)
    document.querySelector(".sendBtn").removeAttribute("disabled");
};

/////////////////////////////////////////////////////////////////////////

///////token 생성//////////////////////////////////////////
const makeToken = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.querySelector(".token").innerText = token;
};
