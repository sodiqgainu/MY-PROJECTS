

function rollDice(){
     const numOfDice = document.getElementById('input').value;
     const diceResult = document.getElementById('dice-text');
     const diceImages = document.getElementById('dice-images');
     const values = [];
     const images = [];


     for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/dice ${value}.png" >`);
     }

     diceResult.innerHTML = `<strong>Dice</strong>: ${values.join(', ')}`;

     diceImages.innerHTML = images.join(" ")   
}