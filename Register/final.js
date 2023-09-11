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
  const phone3 = document.getElementById("third-input").value;
  document.querySelector(".sendBtn").removeAttribute("disabled");
};
