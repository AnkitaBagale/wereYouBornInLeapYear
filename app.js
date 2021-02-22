
const sections = document.querySelectorAll('.section');

const continueBtn=document.querySelector('#continueBtn');

const checkBtn=document.querySelector('#checkBtn');

const inputName=document.querySelector('#inputName');

const userNameDOM = document.querySelector('#userName');

const inputDate=document.querySelector('#inputDate');

const output = document.querySelector('#output');

const monthDays=[31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const leapYearMessage="Your birth year is a leap year!";
const notLeapYearMessage ="Your birth year is not a leap year!"
const error= "Enter a valid date in the format DD/MM/YYYY";



continueBtn.addEventListener('click', continueBtnHandler);
checkBtn.addEventListener('click', checkBtnHandler);

function continueBtnHandler(){
    if(inputName.value)
    {
    const userNameJS= inputName.value;
    sections[0].style.display="none";
    sections[1].style.display="block";
    userNameDOM.innerText= userNameJS;
    }
    else{
        alert("Please enter your name and then click on Continue");
    }
}

function checkBtnHandler(){
    const date = inputDate.value;

    if(date){
        const dateArray= date.split(/[/,-]/);
        const dd=dateArray[0];
        const mm=dateArray[1];
        const yy=dateArray[2];

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



