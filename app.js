
var sections = document.querySelectorAll('.section');

var continueBtn=document.querySelector('#continueBtn');

var checkBtn=document.querySelector('#checkBtn');

var inputName=document.querySelector('#inputName');

var userNameDOM = document.querySelector('#userName');

var inputDate=document.querySelector('#inputDate');

var output = document.querySelector('#output');

var monthDays=[31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var leapYearMessage="Your birth year is a leap year!";
var notLeapYearMessage ="Your birth year is not a leap year!"
var error= "Enter a valid date in the format DD/MM/YYYY";



continueBtn.addEventListener('click', continueBtnHandler);
checkBtn.addEventListener('click', checkBtnHandler);

function continueBtnHandler(){
    if(inputName.value)
    {
    var userNameJS= inputName.value;
    sections[0].style.display="none";
    sections[1].style.display="block";
    userNameDOM.innerText= userNameJS;
    console.log(userNameJS);
    }
    else{
        alert("Please enter your name and then click on Continue");
    }
}

function checkBtnHandler(){
    var date = inputDate.value;
    var isLeapYearMessage;

    if(date){
        var dateArray= date.split(/[/,-]/,2);
        var dd=dateArray[0];
        var mm=dateArray[1];
        var yy=dateArray[2];

        if(isNaN(dd) || isNaN(mm) || isNaN(yy)){
            output.innerText = error;
        }
        else if(!Number.isInteger(Number(dd)) || !Number.isInteger(Number(mm)) || !Number.isInteger(Number(yy))){
            output.innerText = error;
        }
        else if(mm>12 || dd>31 || yy>2020 || mm<=0 || dd<=0 || yy<=0){
            output.innerText = error;
        }
        else if(dd>monthDays[mm-1]){
            output.innerText = error;
        }
        else{           
            
            if(mm==2 && dd==29){
                if(isLeapYear(yy))
                output.innerText = leapYearMessage;

                else 
                output.innerText = error;
            }
            else{
                if(isLeapYear(yy))
                output.innerText = leapYearMessage;

                else 
                output.innerText = notLeapYearMessage;
            }
        }
    }
}


function isLeapYear(Year){
    if(Year%4===0){  
        if(Year%100===0){
          if(Year%400===0){
            return true;
          }
          else{
            return false;
          }
        }
    
        else{
          return true;
        }
    }
    return false;
}



