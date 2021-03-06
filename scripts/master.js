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

// Last tracks
const last_tracks = [];

function nowPlaying(){
    fetch(stream)
    .then(response => response.json())
    .then(json => dispatchInfos(json))
    .catch(err => console.log(err)) 
}

nowPlaying();

function dispatchInfos(json){
    console.log(json);

    radio_is_live = json.is_live;
    default_cover = json.default_cover;

    track_start_time = json.started_at;
    track_end_time = json.end_at;
    track_duration = Date.parse(track_end_time) - Date.parse(track_start_time);

    let track_duration_sec = track_duration / 1000;

    if(radio_is_live === false){
        // Radio is streaming from library
        clearInterval(liveCheck);

        track_title = json.title;
        track_artist = json.artist; 
        track_cover = json.cover;
        console.log(track_title + " • " + track_artist)

        if(track_duration_sec > 60){
            // Radio is streaming a song
            // We update information on DOM

            // song title
            title_box.innerHTML = track_title;

            if(track_title.length >= 20){
                title_box.classList.add('reduce-font-size');
            } else {
                title_box.classList.remove('reduce-font-size');
            }

            // artist name
            artist_box.innerHTML = track_artist;

            // song cover
            if(default_cover === false){
                cover_box.innerHTML = "<img id=\"big-cover-img\" src=\"" + track_cover + "\">";
                cover_box_device.innerHTML = "<img id=\"cover-device-img\" src=\"" + track_cover + "\">";
            } else {
                cover_box.style = "background-image: url(\'https://images.unsplash.com/photo-1579285116824-28d564f1f051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80\');background-size:cover;background-position: center;";
                cover_box.innerHTML = "<img id=\"big-logo-img\" src=\"/images/logo-RO-solo.jpg\" style=\"width:400px!important;height:initial!important;mix-blend-mode: screen;filter:invert(1);\">";
            }

            // browser window title
            document.title = track_title + " • " + track_artist + " | Radio Olympiades";
            
            updateTimeline = setInterval(movePlayHead, 20);

        } else {
            // Radio is streaming a jingle
            // We check the stream until it return a song
            nowPlaying();
        }

    } else {
        // Radio is streaming live from studio
        // Stop rendering playhead moves
        clearInterval(intervalCheck);
        // Check if Radio is still streaming live every minutes
        liveCheck = setInterval(nowPlaying, 60000);
    }
}

function movePlayHead(){
    playHeadPosition = Date.now();
    timeElapsed = playHeadPosition - (Date.parse(track_start_time) + retard);
    timeRemain = Date.parse(track_end_time) - playHeadPosition;
    
    let playWidth = (timelineWidth * (timeElapsed / track_duration));
    let playPercent = (100 * (timeElapsed / track_duration));

    if(playPercent >= 100){
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
    
    let time = moment.getHours();
    let welcome = document.getElementById("bonjour-h1");
    if(time >= 0 && time < 7){
        welcome.innerHTML = "<span class=\"h-space\"></span>La Dalle La Nuit";
    } else if (time >= 7 && time < 18){
        welcome.innerHTML = "<span class=\"h-space\"></span>Bonjour la Dalle !";
    } else {
        welcome.innerHTML = "<span class=\"h-space\"></span>Bonsoir la Dalle !";
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
