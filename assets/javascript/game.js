// // define all global and important variables first
//     var name = {
//         mario: 'Mario',
//         peach: 'Peach',
//         dk: 'Donkey Kong',
//         yoshi: 'Yoshi'
//     };
//     var img = {
//         mario: '../images/mario.png',
//         peach: '../images/Peach.png',
//         dk: '../images/donkey kong.png',
//         yoshi: '../images/yoshi.png',
//     }
//     var healthPoints = {
//         mario: 130,
//         peach: 120,
//         dk: 150,
//         yoshi: 115,
//     };
//     var attackPower = {
//         mario: 18,
//         peach: 21,
//         dk: 24,
//         yoshi: 16,
//     };

//     var attackName;
//     var attackImg;
//     var attackHealthPoints;
//     var attackPow;
//     var defCheck = 0;
    

// // function to select initial character and move the player clicked into the "attack" box


// function boxer(boxerNameDiv, boxerHpDiv, id,healthIdToAdd) {
//     attackHealthPoints = healthPoints[id];
//     attackPow = attackPower[id];
//     attackName = name[id];
//     attackImg = img[id];
//     $(boxerNameDiv).append(`<img id=${id} src="${attackImg}"><p>${attackName}</p>`);
//     $(boxerHpDiv).append(`<p id=${healthIdToAdd}>${attackHealthPoints}</p>`);
//     var arr = [healthPoints, img, name];
//     arr.map(x=> delete x[id]);
// };
// // display div to possibleDefender
// function possibleAttack(div) {
//     var healthPoints = [];
//     var boxersPP = [];
//     var attackImg = [];
//     var attackKey = [];
//     for (var key in healthPoints) {
//         healthPoints.push(healthPoints[key]);
//     }
//     for (var key in punchPower) {
//         boxersPP.push(punchPower[key]);
//     }
//     for (var key in boxerHp) {
//         name.push(name[key]);
//     }
//     for (var key in boxerHp) {
//         attackImg.push(img[key]);
//     }

//     for (var key in boxerHp) {
//         attackKey.push(key);
//     }

//     for(var i = healthPoints.length -1; i >= 0; i--) {
//         $(div).prepend(`<div id=${attackKey[i]} class="img possible-defenders"><img src="${boxersImage[i]}" ><p>${boxersName[i]}</p></div>`);
//     }
        
// };

// $('.select-challenger').on('click', function() {
//     boxer('#challenger-name','#challenger-hp', this.id, 'c-hp');
//     possibleDefenders($('#defenders'));
//     $('.select-challenger').remove();
//     //pick defender
//     $('.possible-defenders').on('click', function() {
//         $('.possible-defenders').remove();
//         boxer('#defender-boxer','#defender-hp', this.id, 'def-hp');
//         possibleDefenders($('#defenders'));
//         defCheck = 1;
//     });
// });

// // if one character has been clicked, move the next character to the defender box
// $('.').not(this).each(function(){
//     $(this).addClass('collapsiblockCollapsed');
//     $(this.target).animate({height:'hide', opacity:'hide'}, slidespeed);
//  });

// offer a propmt to select an enemy to defend against the attacker

// create a function to select and move the second clicked on characted into the defender box

function mario() {
    $("#mario").appendTo(".attack");
    clickCount = true
};
function peach() {
    $("#peach").appendTo(".attack");
    clickCount = true
};
function dk() {
    $("#dk").appendTo(".attack");
    clickCount = true
};
function yoshi() {
    $("#yoshi").appendTo(".attack");
    clickCount = true
};
$("#mario").on("click", mario);
$("#peach").on("click", peach);
$("#dk").on("click", dk);
$("#yoshi").on("click", yoshi);

$('.attack').not(this).each(function(){
    $(this).addClass('defender');
    $(this.target).animate({height:'hide', opacity:'hide'}, );
 });