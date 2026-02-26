const calculate = () => {
  let p = document.getElementById("principle").value;
  let r = document.getElementById("rate").value;
  let t = document.getElementById("time").value;
  let simpleInterest = (p * r * t) / 100;
  let amount = p - simpleInterest;

  let result = document.getElementById("result");
  script.js:3 Uncaught TypeError: Cannot read properties of null (reading 'value')
    at calculate (script.js:3:47)
    at HTMLButtonElement.onclick ((index):31:58)


  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};
