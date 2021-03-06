

let bg;
let listings = [];
let i = 0;

// Movie Posters -----------------------------------------------------
async function getMovies() {
    let movies = await fetchMoviesJSON();
    console.log(movies.results[0].poster_path);
    bg = posterUrl+movies.results[0].poster_path;
    $('.div2').css({'background-image':`url(${bg})`,'background-size':'cover'});
    console.log(bg);
    for (i; i<8;i=i+2){
        
        $('.container1').append(`<img alt="img" onclick='openInfo(this.id)' id='poster${i}' src='${posterUrl+movies.results[i].poster_path}'>`);
        $('.container2').append(`<img alt="img" onclick='openInfo(this.id)' id='poster${i+1}' src='${posterUrl+movies.results[i+1].poster_path}'>`);
    };

    // Change movie by arrow click ---------------------------------------------------------------
    $('.arrow').on('click', function() {
        $('.container1').empty();
        $('.container2').empty();
        let amount = movies.results.length;
        let j = (i-6)%amount;
        for (i = j; i<j+8;i=i+2){
            $('.container1').append(`<img alt="img" onclick='openInfo(this.id)' id='poster${i%amount}' src='${posterUrl+movies.results[i%amount].poster_path}'>`);
            $('.container2').append(`<img alt="img" onclick='openInfo(this.id)' id='poster${(i+1)%amount}' src='${posterUrl+movies.results[(i+1)%amount].poster_path}'>`);
        }
    });
}
getMovies();

// Movie Information -------------------------------------------
$('.movieInfo').hide();
async function openInfo(id) {
    let i = id.replace( /^\D+/g, '');
    const movies = await fetchMoviesJSON();
    const movie = await fetchMovie(movies.results[i].id);
    const video = await fetchTrailer(movies.results[i].id);
    let movieTitle = movies.results[i].title;
    let trailer = `https://www.youtube.com/embed/${video}`
    localStorage.setItem('trailer',trailer);
    let rating = 'G';
    let runtime = movie.runtime;
    let synopsis = movies.results[i].overview;
    let genres = '';
    for (let genre of movie.genres) {
        console.log(genre.name);
        genres = genres + `<li>${genre.name}</li>`; 
    }
    let content = `
        <iframe id="trailer" src="${trailer}" frameborder="0" allowfullscreen></iframe>
        <h1>${movieTitle}</h1>
        <p class="p1">${rating}</p>
        <p class="p2">Run Time: ${runtime}</p>
        <p class="pp">Select Cinema:</p>
        <select class="selectCinema">
            <option value="downtown">Downtown</option>
            <option value="kitsilano">Kitsilano</option>
        </select>
        <h2 class="h2a">Synopsis</h2>
        <p class="p3">${synopsis}</p>
        <h2 class="h2b">Genres</h2>
        <ul>${genres}</ul>
        <h2 class="h2c">Available Hours</h2>
        <div class="p4"><button>9:30am</button><button>11:30am</button><button>1:00pm</button><button>5:30pm</button></div>
        <button id="buyBtn${i}" class="buyBtn" onclick="buySeats(this.id)">Buy Tickets</button>
        <i onclick='closeInfo()' class="fas fa-times"></i>
    `
    $('.movieInfo').empty();
    $('.mainContainer1').css({'filter':'blur(15px)','opacity':'0.3','z-index':'-1'});
    $('.mainContainer2').css({'filter':'blur(15px)','opacity':'0.3','z-index':'-1'});
    $('.arrow').css({'filter':'blur(15px)','opacity':'0.3','z-index':'-1'});
    $('a').css({'filter':'blur(15px)','opacity':'0.3','z-index':'-1'});
    $('.movieInfo').append(content);
    $('.movieInfo').show();
}

// Buy button ---------------------------------------------------
function buySeats(id) {
    for (let i = 0;i<20;i++) {
        localStorage.setItem(`movie${i}`,'inactive')
    }
    let j = id.replace( /^\D+/g, '');
    localStorage.setItem(`movie${j}`,'active')
    window.open('seats.html', "_self");
}

// Close Information -------------------------------------------------------------
function closeInfo() {
    console.log('hi');
    $('.movieInfo').hide();
    $('.mainContainer1').css({'filter':'blur(0)','opacity':'1','z-index':'0'});
    $('.mainContainer2').css({'filter':'blur(0)','opacity':'1','z-index':'0'});
    $('.arrow').css({'filter':'blur(0)','opacity':'1','z-index':'0'});
    $('a').css({'filter':'blur(0)','opacity':'1','z-index':'0'});
};

// Change movie by scroll --------------------------------------------------------
$('body').bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta /120 > 0) {
        $('.arrow').trigger('click');
    }
});


// Main menu ---------------------------------------------------------------------
$(window).on('load', function(){
    $('.loader').css("transform","translateY(-100vh)");
    $('.camara1').css("opacity","0");
    $('nav').css("opacity","1");
});

$('.info').hide();

// About ----------------------------------------------------------------
$('.about').on('click',function(){
    $('.info').show();
    $('.menu').hide();
});

$('.login').hide();

//  Log in ---------------------------------------------------------------------
$('.logIn').on('click',function(){
    $('.login').show();
    $('.menu').hide();
});
