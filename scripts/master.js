let stream = 'https://api.radioking.io/widget/radio/radio-olympiades/track/current';
let retard = 10000;
let radio_is_live = false;
let default_cover = false;

let title_box =  document.getElementById("title-box");

let artist_box = document.getElementById("artist-box");

let cover_box = document.getElementById("cover-box");
let cover_box_device = document.getElementById("cover-device");

let track_title = "";
let track_artist = "";
let track_cover = "";

let track_start_time = null;
let track_end_time = null;
let track_duration = null;

let playHeadPosition = null;
let timeElapsed = null;
let timeRemain = null;

let timeline = document.getElementById("duration");
let playhead = document.getElementById("playhead");
playhead.style.width = 1 + "px";
let timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

let userInteract = false;

// setInterval variables
let updateTimeline;
let liveCheck;
let priseLive;
let multicolor;

// Last tracks
const last_tracks = [];

function nowPlaying(){
    fetch(stream)
    .then(response => response.json())
    .then(json => dispatchInfos(json))
    .catch(err => console.log(err)) 
}
colorizeTimeline();
nowPlaying();


function watchStream(){
    fetch(stream)
    .then(response => response.json())
    .then(json => streamState(json))
    .catch(err => console.log(err)) 
}

function streamState(state){
    if (state.is_live !== radio_is_live){
        if(state.is_live === true){
            console.log("Prise de Direct detectée");
        } else {
            console.log("Direct coupé");
        }
        nowPlaying();
    } else {
        if(radio_is_live === true){
            if(state.title !== track_title || state.cover !== track_cover || state.artist !== track_artist){
                nowPlaying();
            }
        }
        clearTimeout(liveCheck); 
        liveCheck = setTimeout(watchStream, 10000);
    }
}

function dispatchInfos(json){
    console.log(json);

    radio_is_live = json.is_live;
    default_cover = json.default_cover;

    track_title = json.title;
    track_artist = json.artist; 
    track_cover = json.cover;
    console.log(track_title + " • " + track_artist)

    track_start_time = json.started_at;
    track_end_time = json.end_at;
    track_duration = Date.parse(track_end_time) - Date.parse(track_start_time);

    let track_duration_sec = track_duration / 1000;

    if(radio_is_live === false){
        console.log("is not live");
        // Radio is streaming from library
        clearInterval(multicolor);
        clearTimeout(liveCheck); 
        liveCheck = setTimeout(watchStream, 30000);
        clearInterval(updateTimeline);

        if(track_duration_sec > 60){
            // Radio is streaming a song
            // We update information on DOM
            console.log("is a song");
            
            

            // song title
            
            title_box.innerHTML = track_title;
            
            setTimeout(function(){
                title_box.style = "opacity: 1;";
            }, 1000);
            
            
            if(track_title.length >= 20){
                title_box.classList.add('reduce-font-size');
            } else {
                title_box.classList.remove('reduce-font-size');
            }

            // artist name
            artist_box.innerHTML = track_artist;

            setTimeout(function(){
                artist_box.style = "opacity: 1;";
            }, 1000);

            // song cover
            if(default_cover === false){
                cover_box_device.style = "background-image: none!important;";
                cover_box.innerHTML = "<img id=\"big-cover-img\" src=\"" + track_cover + "\" crossorigin=\"anonymous\">";
                cover_box_device.innerHTML = "<img id=\"cover-device-img\" src=\"" + track_cover + "\">";
                
                if(track_artist === "Prince"){
                    playhead.style = "background:rgb(176 20 214)!important;";
                    
                } else {
                    setTimeout(pickColor, 500);
                }
                
            } else {
                cover_box.style = "background-image: url(\'https://images.unsplash.com/photo-1579285116824-28d564f1f051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80\');background-size:cover;background-position: center;";
                cover_box.innerHTML = "<img id=\"big-logo-img\" src=\"/images/logo-RO-solo.jpg\" style=\"width:700px!important;height:initial!important;mix-blend-mode: screen;filter:invert(1);\">";
            }

            // browser window title
            document.title = track_title + " • " + track_artist + " | Radio Olympiades";
            
            updateTimeline = setInterval(movePlayHead, 20);

        } else {
            // Radio is streaming a jingle
            // We check the stream until it return a song
            console.log("on jingle");
            clearTimeout(liveCheck);
            nowPlaying();
        }

    } else if (radio_is_live === true){
        // Radio is streaming live from studio
        clearInterval(priseLive); 
        clearInterval(multicolor); 
        clearInterval(updateTimeline);
        // Stop rendering playhead moves
        
        console.log("Radio is en DIRECT");
        // playhead.style = "transition: background 2s ease-in-out;";
        
        // song title
        title_box.innerHTML = track_title;

        if(track_title.length >= 30){
            title_box.classList.add('reduce-font-size');
        } else {
            title_box.classList.remove('reduce-font-size');
        }

        if(track_title.length >= 30){
            title_box.classList.add('reduce-font-size');
        } else {
            title_box.classList.remove('reduce-font-size');
        }

        // artist name
        if(track_artist){
            artist_box.innerHTML = track_artist;
        }
        
        
            cover_box.style = "background-image: url(\'" + track_cover + "');background-size:cover;background-position: center;";
            cover_box.innerHTML = "<img id=\"big-logo-img\" src=\"/images/logo-RO-solo.jpg\" style=\"width:700px!important;height:initial!important;mix-blend-mode: screen;filter:invert(1);\">";
            
            cover_box_device.style = "background-image: url(\'" + track_cover + "');display:flex;align-items:center;justify-content:center;height:706px;margin-top:60px;background-size:cover;background-position: center;";
            cover_box_device.innerHTML = "<img id=\"big-logo-img\" src=\"/images/logo-RO-solo.jpg\" style=\"text-align:center;height:230px!important;width:400px!important;mix-blend-mode: screen;filter:invert(1);\">";
            
        // Check if Radio is still streaming live every minutes
        console.log("setTimeout liveCheck");
        liveCheck = setTimeout(watchStream, 30000);
        multicolor = setInterval(colorizeTimeline, 1000);
    }
}

function colorizeTimeline(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    playhead.style = "background:#" + randomColor + "!important;width:100%!important;transition: background 2s ease-in-out;";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function pickColor(){
    let colorThief = new ColorThief();
    //console.log(colorThief);
    let image = document.getElementById("big-cover-img");
    let coverColor;
    let randomIndex = getRandomInt(2);
    // Make sure image is finished loading
    if (image.complete) {
      coverColor = colorThief.getColor(image);
      console.log(coverColor);
      console.log("rgb(" + coverColor[0] + "," + coverColor[1] + "," + coverColor[2] + ")");
      playhead.style = "background:rgb(" + coverColor[0] + "," + coverColor[1] + "," + coverColor[2] + ")!important;width:100%!important;filter:brightness(1) saturate(2);";
    } else {
        image.addEventListener('load', function() {
        colorThief.getColor(image);
        console.log(coverColor);

      playhead.style = "background:rgb(" + coverColor[0] + "," + coverColor[1] + "," + coverColor[2] + ")!important;width:100%!important;filter:brightness(1) saturate(2);";
      });
    }
}

function movePlayHead(){
    playHeadPosition = Date.now();
    timeElapsed = playHeadPosition - (Date.parse(track_start_time) + retard);
    timeRemain = Date.parse(track_end_time) - playHeadPosition;
    
    let playWidth = (timelineWidth * (timeElapsed / track_duration));
    let playPercent = (100 * (timeElapsed / track_duration));

    if(playPercent >= 100){
        title_box.style = "opacity: 0;";
        artist_box.style = "opacity: 0;";
        
        let keepTracks = {
            title: track_title,
            artiste: track_artist,
            cover: track_cover
        }

        
        console.log(last_tracks);

        clearInterval(updateTimeline);
        last_tracks.push(keepTracks);
        getLastTracks();
        playWidth = 0;
        // change playhead color
        //setTimeout(colorizeTimeline, 50);
        //setTimeout(pickColor, 50);
        setTimeout(nowPlaying, 50);
    }

    playhead.style.width = playPercent + "%";
}

function getLastTracks(){
    document.getElementById("last-tracks").innerHTML = "";
    if(last_tracks.length != 0){
        if(last_tracks.length == 4){
        last_tracks.splice(0, 1);
        }
        last_tracks.forEach(function(track, index){
            let TR = document.createElement("div");
            document.getElementById("last-tracks").appendChild(TR);
            TR.innerHTML = "<div class=\"a-track-cover\" style=\"background-image:url(\'" + track.cover + "\');\"></div>" + 
                            "<div class=\"a-track-details\"><h2>" + 
                            track.title + "</h2><h3>" + 
                            track.artiste + "</h3></div>";
        });
    }
}

function visual(){
    const c = document.getElementById("canvas");
    let w = document.getElementById("visualizer");
    c.setAttribute("width", w.offsetWidth);
    
    let wave = new Wave();

    wave.fromElement("player","canvas", {
        stroke: 2,
        type: "bars",
        colors: ["black"]
    });

}

function affichZero(nombre) {
    // cette fonction prend en paramètre un nombre
    // si ce nombre est inférieur à 10, on affiche 0 + ce nombre
    // Ex: il est 07h00
    return nombre < 10 ? '0' + nombre : nombre;
    
}
    
function giveTime(){
    let moment = new Date();
    //console.log(heure + ":" + minutes);
    let heure = document.getElementById("time-hours");
    let minutes = document.getElementById("time-minutes");
    
    // let test = 9;
    heure.innerHTML = moment.getHours();
    minutes.innerHTML = moment.getMinutes();
    
    let welcome = document.getElementById("bonjour-h1");

    if(radio_is_live === true){
        welcome.innerHTML = "<span class=\"h-space\"></span>• live •";
    } else {
        welcome.innerHTML = "<span class=\"h-space\"></span>";
        // let time = moment.getHours();
        
        // if(time >= 0 && time < 7){
        //     welcome.innerHTML = "<span class=\"h-space\"></span>La Dalle La Nuit";
        // } else if (time >= 7 && time < 18){
        //     welcome.innerHTML = "<span class=\"h-space\"></span>Bonjour la Dalle !";
        // } else {
        //     welcome.innerHTML = "<span class=\"h-space\"></span>Bonsoir la Dalle !";
        // }
    }
    
    

}

    
window.onload = function() {
    let giveMeTime = setInterval(giveTime, 1000);   
}


( function( d ) {
'use strict';

    var test = true,
        statusPlay = d.querySelector('#play-button'),
        statusPause = d.querySelector('#pause-button'),
        but = d.querySelector( '#button' ),
        aud = d.querySelector( '#player' );
        aud.classList.add( 'remove' );
        d.querySelector( '#button-container' ).classList.remove( 'hide' );

    but.addEventListener('click',
    function() {
        if(userInteract === false){
            visual();
            userInteract = true;
        }

        if ( test === true ) {


            but.classList.add( 'pause' );
            but.classList.remove( 'play' );
            statusPlay.classList.add('hide');
            statusPause.classList.remove('hide');
            test = false;
            aud.load();
            aud.play();
        }
        else {
            changeBTNS();
            aud.pause();
            aud.load();

        }
    }, false );

    aud.addEventListener( 'ended',
    function() {
        changeBTNS();
        aud.load();
        }, false );

    function changeBTNS() {
    but.classList.remove( 'pause' );
    but.classList.add( 'play' );
    statusPlay.classList.remove('hide');
    statusPause.classList.add('hide');
    test = true;
    }
}( document ));
