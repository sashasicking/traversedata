// ANALYZER DATA START CODE

// Load Data From Files
let surveyData = await loadTextFile("data/survey-results.txt");
let ageData = await loadTextFile("data/age-data.txt");
let numberData = await loadTextFile("data/number-data.txt");

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  let Yes = 0;
  let No = 0;
  let Maybe = 0;
  let i = 0;
  for(i = 0; i < surveyData.length; i++){
    if(surveyData[i] == "Yes"){Yes++}
    else if(surveyData[i] == "No"){No++}
    else if(surveyData[i] == "Maybe"){Maybe++}
  }

  outputEl.innerHTML = `Survey Data: Yes:${Yes}, No:${No},Maybe:${Maybe}`;
  console.log(surveyData);

}

function traverseAgeData() {
  // Traverse the ageData array to:
  let i = 0;
  let young = 0;
  let adult = 0;
  let middleAge = 0;
  let senior = 0;
  // Count the number of ages under 18,
  for(i = 0; i < ageData.length; i++){
    if(ageData[i] < 18){young++}
    else if(ageData[i]< 35){adult++} 
    else if(ageData[i]< 65){middleAge++}
    else{senior++}
  } 



  outputEl.innerHTML = `Age Data: under 18:${young}, 18-35:${adult}, 36-65:${middleAge}, above 65:${senior}`;
}

function traverseNumberData() {

  let even = 0;
  let odd = 0;
  let i = 0;
  for(i = 0; i < numberData.length; i++){
  if(numberData[i]%2){odd++}
  else{even++}
  }


  outputEl.innerHTML = `Number Data:Even numbers:${even}, Odd numbers:${odd}`;
  console.log(numberData);
  console.log(even);
  console.log(odd);
}
