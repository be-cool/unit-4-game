function mario() {
    $("#mario").on("click", mar);
};

function mar() {
    $("#mario").appendTo(".attack");
};
mario()

function peach() {
    $("#peach").on("click", pea);

};

function pea() {
    $("#peach").appendTo(".attack");
};
peach()

function donkey() {
    $("#dk").on("click", dk);
};

function dk() {
    $("#dk").appendTo(".attack");
};
donkey()

function yoshi() {
    $("#yoshi").on("click", yos);
};

function yos() {
    $("#yoshi").appendTo(".attack");
};
yoshi()

// function appendTo(appendElement, element) {
// 	appendElement.appendTo(element)
// };

// $(‘#mario’).click(appendTo($(‘#mario’), '.attack');
// $(‘#peach’).click(appendTo($(‘#peach’), '.attack');
// $(‘#dk’).click(appendTo($(‘#dk’), '.attack');
// $(‘#yoshi’).click(appendTo($(‘#yoshi’), '.attack');