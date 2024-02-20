// console.log('collegato');

// connect variables to inputs

const input_km = document.getElementById('user_km'); // input for km

const input_age = document.getElementById('user_age'); // input for age



// connect button to send data to console / document page

document.getElementById('btn').addEventListener('click',  // button to send data
    function () {

        const kmNumber = Number(input_km.value);

        const ageNumber = Number(input_age.value);

        let total_price = kmNumber * 0.21; // standard price

        if (ageNumber < 18) {

            total_price = total_price / 100 * 80; // 20% discounted price


        } else if (ageNumber > 65) {

            total_price = total_price / 100 * 60; // 40% discounted price

        }

        // console.log(kmNumber, ageNumber);
        // console.log('Il prezzo del tuo biglietto è: ' + total_price.toFixed(2) + ' \u20AC' );

        let totalPrice = document.getElementById('total_price').innerHTML = ( total_price.toFixed(2) + ' \u20AC' );
    })
