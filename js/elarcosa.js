// let audio = document.querySelector('.audio');
function hitungUmur(){
    var audio = document.getElementById("myAudio");

    audio.play();

    var dob = document.getElementById('dob').value;
    if(dob===""){
        alert("Please select your date of birth!");
        return;
    }
var dobDate= new Date(dob);
var today = new Date();
var year= today.getFullYear()- dobDate.getFullYear();
var month= today.getMonth() - dobDate.getMonth();
var date = today.getDate()- dobDate.getDate();
if (date < 0 ){
    month --;
    date += 30;
}
if (month < 0 ){
year --;
month += 12;
}
var hasilUmur = "" + year + " year (s), " + month + " month (s), " + date + " day (s)" ;
document.getElementById('hasilUmur').innerHTML = hasilUmur;

}
