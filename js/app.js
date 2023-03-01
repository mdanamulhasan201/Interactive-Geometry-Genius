let count = 0;

// ****************first card*******************
document.getElementById('btn-triangle').addEventListener('click', function () {
  count += 1;
  const triangleTitle = document.getElementById('triangle-title').innerText;

  const firstInputField = document.getElementById('first-input');
  const firstInputFieldString = firstInputField.value;
  const newFirstField = parseInt(firstInputFieldString);

  const secondInputField = document.getElementById('second-input');
  const secondInputFieldString = secondInputField.value;
  const newSecondField = parseInt(secondInputFieldString);

  const totalArea = 0.5 * newFirstField * newSecondField;
  const total = totalArea.toFixed(2);

  firstInputField.value = "";
  secondInputField.value = "";
  // validations
  if (isNaN(totalArea)) {
    if (firstInputFieldString == '' || secondInputFieldString == '' || firstInputFieldString <= 0 || secondInputFieldString <= 0 || typeof firstInputFieldString == "string" || typeof secondInputFieldString == "string") {
      alert('Please enter any valid number');
      return;
    }
  }

  displayData(triangleTitle, total, count);

});



// **************second card******************
document.getElementById('rectangle-btn').addEventListener('click', function () {
  count += 1;
  const title = document.getElementById('rectangle-title').innerText;


  const firstInputField = document.getElementById('rectangle-first-input');
  const firstInputFieldString = firstInputField.value;
  const newFirstField = parseInt(firstInputFieldString);


  const secondInputField = document.getElementById('rectangle-second-input');
  const secondInputFieldString = secondInputField.value;
  const newSecondField = parseInt(secondInputFieldString);


  const totalArea = newFirstField * newSecondField;
  const total = totalArea.toFixed(2);


  firstInputField.value = "";
  secondInputField.value = "";
  if (isNaN(totalArea)) {
    if (firstInputFieldString == '' || secondInputFieldString == '' || firstInputFieldString <= 0 || secondInputFieldString <= 0 || typeof firstInputFieldString == "string" || typeof secondInputFieldString == "string") {
      alert('Please enter any valid number');
      return;
    }
  }

  displayData(title, total, count);



});

// **********third card***************

document.getElementById('parallelogram-btn').addEventListener('click', function () {
  count += 1;
  const parallelogramTitle = document.getElementById('parallelogram-title').innerText;
  const parallelogramFirstValue = document.getElementById('parallelogram-first-value').innerText;
  const parallelogramSecondValue = document.getElementById('parallelogram-second-value').innerText;

  const totalArea = parseFloat(parallelogramFirstValue) * parseInt(parallelogramSecondValue);

  const total = totalArea.toFixed(2)

  // show the data
  displayData(parallelogramTitle, total, count)
  

});


// 4th card
document.getElementById('rhombus-btn').addEventListener('click', function () {
  count += 1;
  // get the data from html using id
  showData('rhombus-title', 'rhombus-first-value', 'rhombus-second-value')

});


// 5th card 
document.getElementById('pentagon-btn').addEventListener('click', function () {
  count += 1;
  // get the data from html using id
  showData('pentagon-title', 'pentagon-first-value', 'pentagon-second-value')
  
});


// 6th card 

document.getElementById('ellipse-btn').addEventListener('click', function () {
  count += 1;
  // get the data from html using id
  const title = document.getElementById('ellipse-title').innerText;
  const firstValue = document.getElementById('ellipse-first-value').innerText;
  const secondValue = document.getElementById('ellipse-second-value').innerText;
  const totalArea = Math.PI * parseFloat(firstValue) * parseInt(secondValue);

  const total = totalArea.toFixed(2);

  // show the data
  displayData(title, total, count)


});



