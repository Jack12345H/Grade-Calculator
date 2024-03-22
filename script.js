// CS10 Grade Calculator

document.getElementById("btn").addEventListener("click", btnToGrade);

function btnToGrade() {
  //input
  let Client1 = +document.getElementById("ClientSide1").value;
  let Structured1 = +document.getElementById("Structured1").value;
  let Structured2 = +document.getElementById("Structured2").value;
  let Client2 = +document.getElementById("ClientSide2").value;
  let Project = +document.getElementById("ProjectA").value;

  //process
  let grade = Client1 + Client2 + Structured1 + Structured2 + Project;

  let OverallGrade = grade / 5;

  //output
  document.getElementById("output").innerHTML = OverallGrade;
}
