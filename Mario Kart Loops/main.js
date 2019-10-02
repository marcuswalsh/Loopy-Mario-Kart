// Global Variables
let totalItems = 0;
let item;
let bulletCount = 0;

// Checks for user input
document.getElementById('oneItemBtn').addEventListener('click', generateItem);
document.getElementById('customBtn').addEventListener('click', generateManyItems);
document.getElementById('fiveItemBtn').addEventListener('click', generateFiveItems);
document.getElementById('tenBulletBtn').addEventListener('click', tenBullets);

function generateItem() {
    // Gathers necessary information to generate item
    let racerPosition = document.getElementById('racerPosition').value;
    let randNum = Math.random();
    //Racer positions 1-6
    if(racerPosition<=6 && racerPosition>=1){
        if(randNum<=0.01) {
            item = 'BulletBill';
            bulletCount ++;
        } else if(randNum>0.01 && randNum<=0.05){
            item = 'GoldenMushroom';
        } else if(randNum>0.05 && randNum<=0.20){
            item ='Star';
        } else if(randNum>0.20 && randNum<=0.55){
            item = 'GreenShell';
        } else if(randNum>0.55){
            item = 'Banana';
        }
        totalItems += 1;
    //Racer positions 7-12
    } else if (racerPosition<=12 && racerPosition>6){
        if(randNum<=0.05) {
            item = 'Banana';
        } else if(randNum>0.05 && randNum<=0.1){
            item = 'GreenShell';
        } else if(randNum>0.1 && randNum<=0.35){
            item ='Star';
        } else if(randNum>0.35 && randNum<=0.7){
            item = 'GoldenMushroom';
        } else if(randNum>0.7){
            item = 'BulletBill';
            bulletCount ++;
        }
        totalItems += 1;
    // Discounts racer positions greater than 12 or less than 1
    } else {
        alert('Invalid Racer Position');
    }
    document.getElementById('totalItems').innerHTML = totalItems;
    document.getElementById('itemDisplay').innerHTML += '<img src = \'images/' + item + '.png\'>';
}

function generateFiveItems() {
    for(let i=0; i<5; i++){
        generateItem();
    }
}

function tenBullets() {
    let racerPosition = document.getElementById('racerPosition').value;
    let bulletCount = 0;
    // Prevents infinte loops
    if(racerPosition < 1 || racerPosition > 12){
        bulletCount = 10;
    }
    while(bulletCount < 10){
        generateItem();
        if(item == 'BulletBill'){
            bulletCount ++;
        }
    }
}

function generateManyItems(){
    let itemAmount = document.getElementById('customItemAmount').value;
    for(let i=0; i<itemAmount; i++){
        generateItem();
    }
}