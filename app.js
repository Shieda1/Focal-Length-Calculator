// https://www.omnicalculator.com/other/focal-length

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const focallengthRadio = document.getElementById('focallengthRadio');
const objectdistanceRadio = document.getElementById('objectdistanceRadio');
const magnificationRadio = document.getElementById('magnificationRadio');

let focallength;
let objectdistance = v1;
let magnification = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

focallengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Object distance';
  variable2.textContent = 'Magnification';
  objectdistance = v1;
  magnification = v2;
  result.textContent = '';
});

objectdistanceRadio.addEventListener('click', function() {
  variable1.textContent = 'Focal length';
  variable2.textContent = 'Magnification';
  focallength = v1;
  magnification = v2;
  result.textContent = '';
});

magnificationRadio.addEventListener('click', function() {
  variable1.textContent = 'Focal length';
  variable2.textContent = 'Object distance';
  focallength = v1;
  objectdistance = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(focallengthRadio.checked)
    result.textContent = `Focal length = ${computefocallength().toFixed(2)}`;

  else if(objectdistanceRadio.checked)
    result.textContent = `Object distance = ${computeobjectdistance().toFixed(2)}`;

  else if(magnificationRadio.checked)
    result.textContent = `Magnification = ${computemagnification().toFixed(2)}`;
})

// calculation

// focallength = (objectdistance / ((1 / magnification) + 1)) * 1000

function computefocallength() {
  return (Number(objectdistance.value) / ((1 / Number(magnification.value)) + 1)) * 1000;
}

function computeobjectdistance() {
  return (Number(focallength.value) / 1000) * ((1 / Number(magnification.value)) + 1);
}

function computemagnification() {
  return 1 / ((Number(objectdistance.value) / (Number(focallength.value) / 1000)) - 1);
}