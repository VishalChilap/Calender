
let date = new Date();
let currMonth = date.getMonth();
// console.log(currMonth+1);
let currYear = date.getFullYear();
// console.log(currYear);
// let currDate = date.getDate();



function calender(year, month, input){
    let lastDateOfMonth = new Date(year, month+1, 0).getDate();
    console.log(lastDateOfMonth);
    let firstDayOfMonth = new Date(year, month, 1).getDay();
    console.log(firstDayOfMonth);
    
    let ans = document.getElementsByClassName("ans");
    // console.log(ans[0].cells[6].className);
    
    for(let i=0;i<6;i++){
        for(let j=0;j<7;j++){
            ans[i].cells[j].innerText = "";
        }
    }

    let count = 1;
    let row = 0;
    let col = firstDayOfMonth;
    while(count<=lastDateOfMonth){
        ans[row].cells[col].innerText = count;
        if(count===input){
            if(ans[row].cells[col].className=="inactive"){
                ans[row].cells[col].className = "active";
            }
            else{
                ans[row].cells[col].className = "inactive";
            }
        }
        count++;
        col++;
        if(col===7){
            col = 0
            row++;
        }
    }
}

calender(currYear, currMonth)


let monthRef = document.getElementById("month");
let yearRef = document.getElementById("year");
let btnRef = document.getElementById("btn");

btnRef.addEventListener("click", clickHandler);

function clickHandler(){
    let inputRef = document.getElementById("input").value;
    let month = parseInt(monthRef.value);
    let year = parseInt(yearRef.value);
    let input = parseInt(inputRef)

    if(monthRef.value==="select" && yearRef.value==="select"){
        calender(currYear, currMonth, input);
    }
    else if(monthRef.value==="select" && yearRef.value!="select"){
        calender(year, currMonth, input);
    }
    else if(monthRef.value!="select" && yearRef.value==="select"){
        calender(currYear, month, input);
    }
    else{
        calender(year, month, input);
    }
}