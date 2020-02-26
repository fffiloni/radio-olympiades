function randombg(){
  var random= Math.floor(Math.random() * 24) + 0;
  var bigSize = ["url('https://images.unsplash.com/photo-1579285116824-28d564f1f051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3667&q=80')",
                 "url('https://images.unsplash.com/photo-1579287162052-a3f4f09986ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3675&q=80')",
                 "url('https://images.unsplash.com/photo-1579365977469-f2fab151363b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3675&q=80')",
                 "url('https://images.unsplash.com/photo-1572467957324-9f7314f8cd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3667&q=80')",
                 "url('https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/70013357_2099363410371514_3909392486811828224_o.jpg?_nc_cat=104&_nc_ohc=a539Qu5HmEUAX-6CNcD&_nc_ht=scontent-cdg2-1.xx&oh=da9d2787ad0c3110c0ded30f3dbb2c21&oe=5EF7C0DD')",
                 "url('https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/69751901_2099363467038175_150003893181349888_o.jpg?_nc_cat=108&_nc_ohc=9jmJC6Y-blgAX83xbnq&_nc_ht=scontent-cdg2-1.xx&oh=24a05e0d906a350a2e06673cf21be7af&oe=5EF7945B')",
                 "url('https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/69805300_2099363367038185_6366654610995675136_o.jpg?_nc_cat=110&_nc_ohc=c8IvCi8k3jAAX9CMBRm&_nc_ht=scontent-cdg2-1.xx&oh=2a23bf39fb6716d6ac4dc780a1f3ef84&oe=5EEFC645')",
                 "url('https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/69650981_2099362330371622_8024765227113381888_o.jpg?_nc_cat=104&_nc_ohc=LIJqOFti_KsAX_2lJwc&_nc_ht=scontent-cdg2-1.xx&oh=0a016d2af64f30f5c963cb15f9a47b0d&oe=5EF47FAE')",
                 "url('https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/70833519_2099361570371698_6183875384291885056_o.jpg?_nc_cat=108&_nc_ohc=Z41xXSf6FngAX-N964V&_nc_ht=scontent-cdg2-1.xx&oh=33e049b17641bd9995cdf664e2a9f32e&oe=5EF4CF13')",
                 "url('https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/69933766_2099361423705046_3703371401068019712_o.jpg?_nc_cat=100&_nc_ohc=15z6QwRBFKsAX_POJ2L&_nc_ht=scontent-cdg2-1.xx&oh=cf350fb5896ad7c898fde45e8b8d3db7&oe=5EC3B14A')",
                 "url('https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/70548379_2099362453704943_6481673092153212928_o.jpg?_nc_cat=101&_nc_ohc=Khm9o2EfvMYAX_mtxGL&_nc_ht=scontent-cdt1-1.xx&oh=4158215be19bc10dce756b6aee7cc861&oe=5EF3B42F')",
                 "url('https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/71083768_2099362963704892_8228395149944684544_o.jpg?_nc_cat=106&_nc_ohc=aYjrmguhwc0AX_mLtUU&_nc_ht=scontent-cdt1-1.xx&oh=3155423f1f86fc7fe74b068d7be44e2a&oe=5EBFA8C6')",
                 "url('https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/69968969_2099363037038218_2297643061947138048_o.jpg?_nc_cat=107&_nc_ohc=SDoO5ejrUb4AX_AYHqz&_nc_ht=scontent-cdg2-1.xx&oh=4841c86c30a6e7801b0cc59d20543c43&oe=5EC0062D')",
                 "url('https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/69770657_2099368767037645_564089601518469120_o.jpg?_nc_cat=103&_nc_ohc=o26aF3zxUtIAX-jx5Ow&_nc_ht=scontent-cdt1-1.xx&oh=e08d3c2fbebd055a50d722000af4c03c&oe=5F032D59')",
                 "url('https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/69770657_2099368767037645_564089601518469120_o.jpg?_nc_cat=103&_nc_ohc=o26aF3zxUtIAX-jx5Ow&_nc_ht=scontent-cdt1-1.xx&oh=e08d3c2fbebd055a50d722000af4c03c&oe=5F032D59')",
                 "url('https://www.paristoric.com/images/iconographie/Arrond-13/paris_13_dalle_olympiades_2.jpg')",
                 "url('https://img.over-blog-kiwi.com/0/92/37/67/20140208/ob_990ff6_dsc04176.JPG')",
                 "url('https://lh4.googleusercontent.com/proxy/4rYCQaPUd6emg6xOlvph9YZu2PpjyC7h6nFBK49xHLWRAsu4nA5I-mWznCD19sZKWUETQtAq_pN1_M-agPIOTA3XcNxh2ombWFwMZ6nSjRFs1nBj1spnAMzHH_x3V3uMvW8')",
                 "url('https://cdn-www.konbini.com/fr/files/2015/11/Konbini-Xport-7-sur-17-810x455.jpg')",
                 "url('https://live.staticflickr.com/7764/18129569918_cdcd530e42_b.jpg')",
                 "url('/images/Olympiades-1.jpg')",
                 "url('/images/Olympiades-2.jpg')",
                 "url('/images/Olympiades-3.jpg')",
                 "url('https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/80422265_601627277252149_8204709706326923222_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=0gZmNg3BE9EAX8zBp4G&oh=37ce5f8bf2654d5ebfc29a35f1566f7c&oe=5E8C14A3')"];
  document.getElementById("bg").style.backgroundImage=bigSize[random];
  $('#bg').fadeIn(1000);
}

function changeBackgroundSmoothly() {
    $('#bg').fadeOut(500, randombg); //this is new, will fade out smoothly
}




function affichZero(nombre) {
// cette fonction prend en paramètre un nombre
// si ce nombre est inférieur à 10, on affiche 0 + ce nombre
// Ex: il est 07h00
return nombre < 10 ? '0' + nombre : nombre;
}
function dateEtHeure() {
// Cette fonction fait deux choses :
// 1 - Elle construit une constante avec l'objet Date()
// qui renvoie (année, mois, jour, heure, minutes, seconde, millisecondes)
// tout ça est dans l'objet infos

const infos = new Date();

// 2 - La fonction attribue du texte au div id="heure_exacte"
// ce texte n'est autre que l'heure contenue dans l'objet infos
// on ne souhaite afficher que l'heure et les minutes avec infos.getHours()
// et infos.getMinutes(), On Sépare par ":" Ex: il est 07:00.

document.getElementById('heure_exacte').innerHTML = ' ' + affichZero(infos.getHours()) + ':' + affichZero(infos.getMinutes());
}// Fin fonction dateEtHeure

// Pour actualiser l'heure chaque minutes, on rappelle la fonction dateEtHeure()
// toutes les 100 millisecondes, donc toutes les secondes



function buttonClickGET() {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=c1757c27d772cee9f41b55ded018a08f&units=metric&lang=fr";

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        //alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });
}

var callBackGetSuccess = function(data) {
  let meteoIcon = "Ciel";
  
  var element = document.getElementById("zone_meteo");

    if (data.weather[0].icon == "01d"){
      element.innerHTML = "<i class=\"fas fa-sun\"></i> " + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    } else if (data.weather[0].icon == "02d"){
      element.innerHTML = "<i class=\"fas fa-clouds-sun\"></i> "  + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    } else if (data.weather[0].icon == "03d"){
      element.innerHTML = "<i class=\"fas fa-cloud\"></i> "  + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    } else if (data.weather[0].icon == "04d" || data.weather[0].icon == "04n"){
      element.innerHTML = "<i class=\"fas fa-clouds\"></i> "  + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    } else if (data.weather[0].icon == "09d"){
      element.innerHTML = "<i class=\"fas fa-cloud-showers\"></i> "  + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    } else if (data.weather[0].icon == "10d"){
      element.innerHTML = "<i class=\"fas fa-cloud-sun-rain\"></i> "  + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    } else if (data.weather[0].icon == "11d" || data.weather[0].icon == "11n"){
      element.innerHTML = "<i class=\"fas fa-thunderstorm\"></i> "  + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    } else if (data.weather[0].icon == "13d" || data.weather[0].icon == "13n"){
      element.innerHTML = "<i class=\"fas fa-snowflakes\"></i> "  + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    } else if (data.weather[0].icon == "50d" || data.weather[0].icon == "50n"){
      element.innerHTML = "<i class=\"fas fa-fog\"></i> "  + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    } else if (data.weather[0].icon == "01n"){
      element.innerHTML = "<i class=\"fas fa-moon\"></i> "  + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    } else if (data.weather[0].icon == "02n"){
      element.innerHTML = "<i class=\"fas fa-cloud-moon\"></i> "  + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    } else if (data.weather[0].icon == "03n"){
      element.innerHTML = "<i class=\"fas fa-clouds-moon\"></i> "  + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    } else if (data.weather[0].icon == "09n"){
      element.innerHTML = "<i class=\"fas fa-cloud-moon-rain\"></i> "  + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    } else if (data.weather[0].icon == "10n"){
      element.innerHTML = "<i class=\"fas fa-cloud-moon-rain\"></i> "  + " &nbsp;" + data.weather[0].description + ", " + Math.floor(data.main.temp) + "°C ";
    }
  
    
  
    //element.innerHTML = "<i class=\"fas " + meteoIcon + "\"></i> " + "  " + Math.floor(data.main.temp) + "°C";
  //element.innerHTML = "<img src=\"https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png\" />" + "  " + Math.floor(data.main.temp) + "°C ";
  //element.innerHTML = data.weather[0].description + ",  " + Math.floor(data.main.temp) + "°C ";
}

window.onload = function() {
setInterval(dateEtHeure, 100);
setInterval(changeBackgroundSmoothly, 60000);
};
buttonClickGET();
setInterval(buttonClickGET, 100*60*10);
