// console.log('collegato');

// connect variables to inputs

const input_km = document.getElementById('user_km'); // input for km

const input_age = document.getElementById('user_age'); // input for age

// connect button to send data to console

document.getElementById('btn').addEventListener('click',  // button to send data
function(){
    console.log(input_age.value, input_km.value);
})