function randombg(){
  var random= Math.floor(Math.random() * 20) + 0;
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
                 "url('http://www.paristoric.com/images/iconographie/Arrond-13/paris_13_dalle_olympiades_2.jpg')",
                 "url('https://img.over-blog-kiwi.com/0/92/37/67/20140208/ob_990ff6_dsc04176.JPG')",
                 "url('https://lh4.googleusercontent.com/proxy/4rYCQaPUd6emg6xOlvph9YZu2PpjyC7h6nFBK49xHLWRAsu4nA5I-mWznCD19sZKWUETQtAq_pN1_M-agPIOTA3XcNxh2ombWFwMZ6nSjRFs1nBj1spnAMzHH_x3V3uMvW8')",
                 "url('https://cdn-www.konbini.com/fr/files/2015/11/Konbini-Xport-7-sur-17-810x455.jpg')",
                 "url('https://live.staticflickr.com/7764/18129569918_cdcd530e42_b.jpg')",
                 "url('/images/Olympiades-1.jpg')",
                 "url('/images/Olympiades-2.jpg')",
                 "url('/images/Olympiades-3.jpg')"];
  document.getElementById("bg").style.backgroundImage=bigSize[random];
  $('#bg').fadeIn(1000);
}

function changeBackgroundSmoothly() {
    $('#bg').fadeOut(500, randombg); //this is new, will fade out smoothly
}

setInterval(changeBackgroundSmoothly, 60000);
