const kmRequired = Number(prompt('Quanti km desideri percorrere per il tuo viaggio?'));
const customerAge = Number(prompt('Quanti anni hai?'))
const ticketprice = (Math.round((kmRequired * 0.21)*100)/100).toFixed(2);
const finalPrice = document.getElementById("finalPrice");

if (isNaN(ticketprice)) {

    alert('I dati inseriti non sono validi')

} else {

    if (customerAge < 18) {
    
    const youngprice = (Math.round((ticketprice * 0.8)*100)/100).toFixed(2);

    finalPrice.innerHTML = `${youngprice}€`;

    } else if (customerAge >= 18 && customerAge <= 65) {

    finalPrice.innerHTML = `${ticketprice}€`;

    } else if (customerAge > 65) {

    const elderprice = (Math.round((ticketprice * 0.6)*100)/100).toFixed(2);

    finalPrice.innerHTML = `${elderprice}€`;

    } else {

    alert('I dati inseriti non sono validi');

    }
}