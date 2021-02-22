

function cardFun() {
  var cardNumber = document.getElementById("creditCard").value;
  var numberAnswer = document.getElementById("numberAnswer");
  var numError = document.getElementById("numError");

  if (cardNumber == "" || cardNumber.length < 15 || cardNumber.length >15) {
    numError.innerHTML = "** Length Must be 15 ";
    numberAnswer.innerHTML = "";
    return false;
  } else {
    var printCard = cardNumber.slice(10,14);
    numberAnswer.innerHTML = "Card Number = ***********" + printCard;
    numError.innerHTML = "";
    return true;
  }
}

// let potato1 = "potato";
// let potato2 = "potatopotato";
// let potato3 = "potatopotatopotato";

// for (let index = 0; index < 2; index++) {
//     var potato = potato1.slice(0,potato1.length);
//         console.log(potato);
// }


function salaryFun() {
  var salary = parseInt(document.getElementById("salary").value);
  var salaryAnswer = document.getElementById("salaryAnswer");

  if (salary <= 10000) {
    var hra = parseInt(salary * (20 / 100));
    var da = parseInt(salary * (80 / 100));
    var totalSalary = salary + hra + da;        
    salaryAnswer.innerHTML = "Total Salary = " + totalSalary;
  }
   else if (salary <= 20000) {
    var hra = parseInt((salary * 25) / 100);
    var da = parseInt((salary * 90) / 100);
    var totalSalary = salary + hra + da;
    salaryAnswer.innerHTML =  "Total Salary = " + totalSalary;
  } else if (salary > 20000) {
    var hra = parseInt((salary * 30) / 100);
    var da = parseInt((salary * 95) / 100);
    var totalSalary = salary + hra + da;
    salaryAnswer.innerHTML =  "Total Salary = " + totalSalary;
    salaryError.innerHTML = "";
  }   
}


function electFun() {
    var electUnits = parseInt(document.getElementById("electUnits").value);
    var electUnitsAnswer = document.getElementById("electUnitsAnswer");
    var electUnitsError = document.getElementById("electUnitsError");
  
    if (electUnits <= 50) {
        totalBill = parseInt(electUnits * 0.55)
        electUnitsAnswer.innerHTML = "Total Bill = " + totalBill;
    }
    else if (electUnits > 50 && electUnits <=150) {
        totalBill = parseInt(electUnits * 0.75)
        electUnitsAnswer.innerHTML = "Total Bill = " + totalBill;
    } 
    else if (electUnits > 150 && electUnits <=250) {
        totalBill = parseInt(electUnits * 1.20)
        electUnitsAnswer.innerHTML = "Total Bill = " + totalBill;
    } 
    else if (electUnits > 250) {
        totalBill = parseInt(electUnits * 1.50)
        electUnitsAnswer.innerHTML = "Total Bill = " + totalBill;
    } 
  }
  


document
  .getElementById("submitCard")
  .addEventListener("click", function (eventArray) {
    eventArray.preventDefault();
  });

document
  .getElementById("submitsalary")
  .addEventListener("click", function (eventSalary) {
    eventSalary.preventDefault();
  });

  document
  .getElementById("submitElectUnits")
  .addEventListener("click", function (eventElect) {
    eventElect.preventDefault();
  });


  const countp = () => {
    const pstring = document.getElementById("pstring");
    //   alert(value);
    if (pstring.value == "") {
      alert("Please enter a string");
    } else {
      const str = pstring.value;
      const rvalue = (str.match(/potato/g) || []).length;
      // console.log(str);
      // console.log(rvalue);
      document.getElementById("presult").innerText = `
      no of potatoes = ${rvalue}
    `;
      pstring.value = "";
      return rvalue;
    }
  };

  // function amountChecker(str, letter) 
  // {
  //  var letterCount = 0;
  //  for (var position = 0; position < str.length; position++) 
  //  {
  //     if (str.charAt(position) == letter) 
  //       {
  //       letterCount += 1;
  //       }
  //   }
  //   return letterCount;
  // }
  
  // console.log(amountChecker('potatopotato', 'p'));
  