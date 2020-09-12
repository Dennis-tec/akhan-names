<script>
function akhan(){
  var birthDate=document.getElementById('date').value;
  var gender=document.getElementById('gender').value;
  birthDate.toString();
  if (!birthDate) {
    alert("You entered an invalid date")

  }
  var centuryYear;
  var birthYear;
  var birthMonth;
  var birthDay;
  var year;
  centuryYear=parseInt(birthDate.slice(0, 2));
  birthYear=parseInt(birthDate.slice(2, 4));
  birthMonth=parseInt(birthDate).slice(5, 7);
  birthDay=parseInt(birthDate).slice(8, 10);
  year=parseInt(birthDate.slice(0, 4);
  if ((birthDay<= || birthDay>31) || (birthMonth<=0 || birthMonth>12)){
    alert("You entered an invalid date");
  }
  var weekDay;
  var maleNames;
  var femaleNames;
  weekDay=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"];
  femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var dayOfTheWeek;
  var day;
  dayOfTheWeek=( ( (centuryYear/4) -2*centuryYear-1) + ((5*birthYear/4) ) + ((26*(birthMonth+1)/10)) + birthDay ) % 7;
  if (dayOfTheWeek<0) {
    day=Math.round(dayOfTheWeek)+7;
  }else {
    day=Math.trunc(dayOfTheWeek);
  }
  var akanName;
  var dayName;
  if (gender==="male") {
    akanName=maleNames[day]
    dayName=weekDay[day];
  }else {
    akhanName=femaleNames[day];
    dayName=weekDay[day];
  }
  document.getElementById('output').innerHTML='Your akhan name is: ' + akanName +'meaning you were born on' +dayName +'.'
}
</script>
