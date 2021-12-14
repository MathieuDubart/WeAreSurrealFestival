let typoSelector = document.querySelector("#typoContainer")

let xhttp = new XMLHttpRequest();
let header= document.getElementById("header");
let bookingIcon = document.getElementById("bookingIcon")
let bookingButton = document.getElementById("bookingButton")

// ------------------ Get URL Parameters ------------------//

let str = window.location.href;
let url = new URL(str);
let search_params = new URLSearchParams(url.search); 
if(search_params.has('version')) {
  let version = search_params.get('version');
  if (version === "1") {
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response_V1=this.responseText;
            let baptisteInfos = JSON.parse(response_V1);
            header.style.backgroundImage = baptisteInfos.backgroundImage
            typoSelector.innerHTML = baptisteInfos.textForExample
        }
    };
    
    xhttp.open("GET", "version_1/baptiste.json", true);
    xhttp.send();
  }
  if (version === "2") {
      xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let response_V2=this.responseText;
        let killianInfos = JSON.parse(response_V2);
        header.style.backgroundImage = killianInfos.backgroundImage
        typoSelector.innerHTML = killianInfos.textForExample
    }
    };

    xhttp.open("GET", "version_2/killian.json", true);
    xhttp.send();
  }
  if (version === "3") {
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response_V3=this.responseText;
            let melisseInfos = JSON.parse(response_V3);
            header.style.backgroundImage = melisseInfos.backgroundImage
            typoSelector.innerHTML = melisseInfos.textForExample
        }
    };
    
    xhttp.open("GET", "version_3/melisse.json", true);
    xhttp.send();
  }
}


// ------------------ Swiper for concerts ------------------//

const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'horizontal',
loop: true,

pagination: {
    el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

autoplay: {
    delay: 4000,
    },

});

// ------------------ Countdown -------------------//

let countDownDate = new Date("Mar 18, 2022 18:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "j. " + hours + "h. "
  + minutes + "m. " + seconds + "s. ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Le festival a commencé";
  }
}, 1000);

//------------------------- booking icon --------------------//

bookingButton.addEventListener('mouseenter', (e) => {
  bookingIcon.src = "commonFiles/img/bookingIcon.png"
}, false)

bookingButton.addEventListener('mouseleave', (e) => {
  bookingIcon.src = "commonFiles/img/bookingIconBlack.png"
}, false)

