let increment = 5;
function getValue(){
//This part is strictly for testing, do not push until fully fuctional
let artistArr = [];
let artInput;

let songArr = [];
let songInput;

let durArr = [];
let durInput;

    for(let i = 1; i <= 5; i++){
        artInput = document.getElementById(`artist-input${i}`).value;
        artistArr.push(artInput);
    }
    for(let i = 1; i <= 5; i++){
        songInput = document.getElementById(`song-input${i}`).value;
        songArr.push(songInput);
    }
    for(let i = 1; i <= increment; i++){
        durInput = document.getElementById(`duration-input${i}`).value;
        if(durInput != ""){
            durArr.push(durInput);
        } else {
            break;  
        }
    }
    console.log(`${artistArr} \n ${songArr} \n ${durArr}`);
    
    var input;
let minutes;
let minArr = [];
let secArr = [];
let remainder;
let timeStamps = `3:45, 2:58, 9:54`;

//getting value
    input = durArr.toString();
    console.log(input);

let timeArr = input.split(/[\:,]+/);




console.log(timeArr);

for(let i = 0; i < timeArr.length; i++){
    console.log(timeArr[i]);
}


//Finds the minutes and puts them all in an array
for(let i = 0; i < timeArr.length; i++){
    minutes = timeArr[i];
    //console.log(minutes);
    minArr.push(minutes)
    i++;
}

//changing all the numbers in the array from strings to num

for(var i = 0; i < minArr.length; i++){
    minArr[i] = parseInt(minArr[i]);
} 
console.log(minArr)
//calculate all the minutes together
function getMinutes(a){
    let total = 0;
    for(let i in a){
        total += a[i]
    }
    return total
}

let totalMinutes = getMinutes(minArr);
console.log(`The total amount of minutes are: ${totalMinutes} minutes`);

//Now I need to find the seconds

for(let i = 0; i < timeArr.length; i++){
    i++;
    seconds = timeArr[i];
    //console.log(seconds);
    secArr.push(seconds);
}

//and now i need to change all the seconds into num

for(var i = 0; i < secArr.length; i++){
    secArr[i] = parseInt(secArr[i]);
} 
console.log(secArr);

//Now i add up all the seconds
function getSeconds(a){
    let total = 0;
    for(let i in a){
        total += a[i]
    }
    return total
}

let totalSeconds = getSeconds(secArr);
console.log(`The total amount of minutes are: ${totalSeconds} seconds`);

//Now we add both seconds and minutes together
let temp;
function getTime(){
    if(totalSeconds >= 60){
        temp = Math.floor(totalSeconds / 60);
        totalMinutes = totalMinutes + temp;
        totalSeconds = totalSeconds % 60;
    }
    console.log(temp);
    //console.log(remainder);
    console.log(`${totalMinutes}:${totalSeconds}`)
    document.getElementById("output").textContent = (`${totalMinutes}:${totalSeconds} (${totalMinutes} minutes and ${totalSeconds} seconds)`)
}

getTime();

}

function addRows(){
    let rowNum = document.getElementById('rowCount').value;
    console.log(rowNum);
        for(i = 0; i < rowNum; i++){
            increment++;
        let table = document.getElementById('table');
        let template = `<tr>
                            <td>${increment}</td>
                            <td><input id="artist-input${increment}" class="small-input" type="text"></td>
                            <td><input id="song-input${increment}" class="small-input" type="text"></td>
                            <td><input id="duration-input${increment}" class="small-input" type="text"></td>
                        </tr>`
        tbody.innerHTML += template;
        }
}


var input;
let minutes;
let minArr = [];
let secArr = [];
let remainder;
let timeStamps = `3:45, 2:58, 9:54`;

//getting value
function getInput(){
    input = document.getElementById("input").value;
    console.log(input);

let timeArr = input.split(/[\:,]+/);

//console.log(timeArr);

for(let i = 0; i < timeArr.length; i++){
    console.log(timeArr[i]);
}


//Finds the minutes and puts them all in an array
for(let i = 0; i < timeArr.length; i++){
    minutes = timeArr[i];
    //console.log(minutes);
    minArr.push(minutes)
    i++;
}

//changing all the numbers in the array from strings to num

for(var i = 0; i < minArr.length; i++){
    minArr[i] = parseInt(minArr[i]);
} 
console.log(minArr)
//calculate all the minutes together
function getMinutes(a){
    let total = 0;
    for(let i in a){
        total += a[i]
    }
    return total
}

let totalMinutes = getMinutes(minArr);
console.log(`The total amount of minutes are: ${totalMinutes} minutes`);

//Now I need to find the seconds

for(let i = 0; i < timeArr.length; i++){
    i++;
    seconds = timeArr[i];
    //console.log(seconds);
    secArr.push(seconds);
}

//and now i need to change all the seconds into num

for(var i = 0; i < secArr.length; i++){
    secArr[i] = parseInt(secArr[i]);
} 
console.log(secArr);

//Now i add up all the seconds
function getSeconds(a){
    let total = 0;
    for(let i in a){
        total += a[i]
    }
    return total
}

let totalSeconds = getSeconds(secArr);
console.log(`The total amount of minutes are: ${totalSeconds} seconds`);

//Now we add both seconds and minutes together
let temp;
function getTime(){
    if(totalSeconds >= 60){
        temp = Math.floor(totalSeconds / 60);
        totalMinutes = totalMinutes + temp;
        totalSeconds = totalSeconds % 60;
    }
    console.log(temp);
    //console.log(remainder);
    console.log(`${totalMinutes}:${totalSeconds}`)
    document.getElementById("output").textContent = (`${totalMinutes}:${totalSeconds} (${totalMinutes} minutes and ${totalSeconds} seconds)`)
}

getTime();


//reset

function resetCode(){
    totalSeconds = 0;
    totalMinutes = 0;
    input = "";
    minArr = [];
    secArr = [];
}

resetCode();
}

function resetPage(){
    if (confirm("Are you sure you want to reset?")) {
        location.reload();
    } else {
        return;
    }
}