/* project 2 */
var clac = () => {
    var i1 = document.getElementById('i1').value;
    var i2 = document.getElementById('i2').value;
    var i3 = document.getElementById('i3').value;
    var i4 = document.getElementById('i4').value;

    let totalgrad = Number(i1) + Number(i2) + Number(i3) + Number(i4);
    console.log(totalgrad);

    let per = (totalgrad) / 400 * 100;

    let grade = "";
    if (per <= 100 && per >= 80) {
        grade = "A"
    }
    else if (per <= 79 && per >= 60) {
        grade = "B"

    }
    else if (per <= 59 && per >= 40) {
        grade = "C"


    }
    else {
        grade = "F"
    }


    if (per >= 39.5) {
        document.getElementById('showdata').innerHTML = `out of 400 your total is ${totalgrad} and percentage is ${per} <br> your grade is ${grade}% . You are pass`
    }


    else {
        document.getElementById('showdata').innerHTML = `out of 400 your total is ${totalgrad} and percentage is ${per} <br> your grade is ${grade}% . You are fail`
    }



}