let listings = [];
let i = 0;
for (i; i<8;i=i+2){
    $('.container1').append(`<img onclick='openInfo(this.id)' id='poster${i}' src='img${i}.jpg'>`);
    $('.container2').append(`<img onclick='openInfo(this.id)' id='poster${i+1}' src='img${i+1}.jpg'>`);
};
$('.arrow').on('click', function() {
    $('.container1').empty();
    $('.container2').empty();
    let j = (i-6)%8;
    for (i = j; i<j+8;i=i+2){
        $('.container1').append(`<img onclick='openInfo(this.id)' id='poster${i%8}' src='img${i%8}.jpg'>`);
        $('.container2').append(`<img onclick='openInfo(this.id)' id='poster${(i+1)%8}' src='img${(i+1)%8}.jpg'>`);
    }
});
$('.movieInfo').hide();
function openInfo(id) {
    let movieTitle = 'Mulan';
    let rating = 'G'
    let duration = '115 min';
    let synopsis = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere mauris vitae est bibendum posuere. Fusce tempus a mauris vitae pellentesque. Nullam id suscipit nulla. Donec ut dapibus turpis, eget dignissim mi. Ut eleifend lacinia feugiat. Vestibulum vel consequat augue. Aliquam erat volutpat. Proin ex est, efficitur a elit ut, pretium egestas diam. Nulla suscipit, turpis eu placerat elementum, nisl tellus consequat dolor, quis molestie lectus tortor dictum dui.';
    let cast = '<li>Juan</li><li>Paco</li><li>Pedro</li>';
    let director = 'Mulan';
    let content = `
        <video controls muted loop id="trailer">
            <source src="Video.mp4" type="video/mp4">
        </video>
        <h1>${movieTitle}</h1>
        <p class="p1">${rating}</p>
        <p class="p2">Duration: ${duration}</p>
        <h2 class="h2a">Synopsis</h2>
        <p class="p3">${synopsis}</p>
        <h2 class="h2b">Cast</h2>
        <ul>${cast}</ul>
        <h2 class="h2c">Director</h2>
        <p class="p4">${director}</p>
        <a class="buyBtn" href="seats.html">Buy Tickets</a>
        <i onclick='closeInfo()' class="fas fa-times"></i>
    `
    $('.movieInfo').empty();
    $('.mainContainer1').css({'filter':'blur(15px)','opacity':'0.3','z-index':'-1'});
    $('.mainContainer2').css({'filter':'blur(15px)','opacity':'0.3','z-index':'-1'});
    $('.arrow').css({'filter':'blur(15px)','opacity':'0.3','z-index':'-1'});
    $('.movieInfo').append(content);
    $('.movieInfo').show();
}

function closeInfo() {
    console.log('hi');
    $('.movieInfo').hide();
    $('.mainContainer1').css({'filter':'blur(0)','opacity':'1','z-index':'0'});
    $('.mainContainer2').css({'filter':'blur(0)','opacity':'1','z-index':'0'});
    $('.arrow').css({'filter':'blur(0)','opacity':'1','z-index':'0'});
};

$('body').bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta /120 > 0) {
        $('.arrow').trigger('click');
    }
});
