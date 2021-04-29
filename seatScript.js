let seats = [];
class Seat {
    constructor(id) {
        this.id = id,
        this.status = 'available'
    }
    select(){
        this.status = 'occupied'
    }
    remove(){
        this.status = 'available'
    }
}
function getLetter(calc) {
    switch(calc) {
        case 0:
            return 'A';
        case 1:
            return 'B';
        case 2:
            return 'C';
        case 3:
            return 'D';
        case 4:
            return 'E';
        case 5:
            return 'F';
        case 6:
            return 'G';
        case 7:
            return 'H';
        case 8:
            return 'I';
        case 9:
            return 'J';
        default:
            return 'Z';
    }
}
for (let i = 0; i<40; i++){
    let letter;
    letter = getLetter(Math.trunc(i/4));
    let centerSeats = `<div onclick='selectSeat(this.id)' id="${letter}${(i%4)+3}">${letter}${(i%4)+3}</div>`
    $('.row2').append(centerSeats); 
    seats.push(new Seat(letter + ((i%4)+3)));
    if (i < 20){
        letter = getLetter(Math.trunc(i/2));
        let leftSeats = `<div onclick='selectSeat(this.id)' id="${letter}${(i%2)+1}">${letter}${(i%2)+1}</div>`
        $('.row1').append(leftSeats); 
        let rightSeats = `<div onclick='selectSeat(this.id)' id="${letter}${(i%2)+7}">${letter}${(i%2)+7}</div>`
        $('.row3').append(rightSeats); 
        seats.push(new Seat(letter + ((i%2)+1)));
        seats.push(new Seat(letter + ((i%2)+7)));
    }
}

$(window).on('load', function(){
    console.log(seats);
    for (let seat of seats) {
        if (localStorage.getItem(seat.id) == 'occupied') {
            $(`#${seat.id}`).addClass('occupied');
            seat.select();
        }
    }
});
let x = 0;
function selectSeat(id) {
    if ($(`#${id}`).attr('class') == 'occupied') {}
    else {
        if ($(`#${id}`).attr('class') == 'selected') {
            $(`#${id}`).removeClass('selected');
            localStorage.removeItem(id);
            getPrice('remove');
        }else{
            console.log(id);
            $(`#${id}`).addClass('selected');
            localStorage.setItem(id,'occupied');
            getPrice('add');
        }
    }
}
$('.moviePrice').text(' $' + 20);
$('.numSeats').text(0);
$('.total').text(' $' + 0);

function getPrice(state) {
    state == 'add' ? x++ : x--; 
    $('.numSeats').text(' ' + x);
    $('.total').text(' $' + (x*20));
}

$('.row1').on('mouseenter', function(){
    $('.container').addClass('perspective1');
    $('.screen').addClass('screenleft');
    $('body').addClass('bodyperspective1');
    $('.container').removeClass('perspective2');
    $('.screen').removeClass('screenright');
    $('body').removeClass('bodyperspective2');
    $('.container').css({'margin-left':'200px','margin-right':'0'});
    $('.screen').css({'margin-left':'120px','margin-right':'0'});
});

$('.row3').on('mouseenter', function(){
    $('.container').addClass('perspective2');
    $('.screen').addClass('screenright');
    $('body').addClass('bodyperspective2');
    $('.container').removeClass('perspective1');
    $('.screen').removeClass('screenleft');
    $('body').removeClass('bodyperspective1');
    $('.container').css({'margin-right':'200px','margin-left':'0'});
    $('.screen').css({'margin-right':'120px','margin-left':'0'});
});

$('.row2').on('mouseenter', function(){
    $('.container').removeClass('perspective1');
    $('.screen').removeClass('screenleft');
    $('body').removeClass('bodyperspective1');
    $('.container').removeClass('perspective2');
    $('.screen').removeClass('screenright');
    $('body').removeClass('bodyperspective2');
    $('.container').css({'margin':'0'});
    $('.screen').css({'margin':'0'});
});

$('.container').on('mouseleave',function() {
    $('.container').removeClass('perspective1');
    $('.screen').removeClass('screenleft');
    $('body').removeClass('bodyperspective1');
    $('.container').removeClass('perspective2');
    $('.screen').removeClass('screenright');
    $('body').removeClass('bodyperspective2');
    $('.container').css({'margin':'0'});
    $('.screen').css({'margin':'0'});
})
