let xhttp = new XMLHttpRequest();

//--------------------- get header elm -------------------//

let header= document.getElementById("header");
let typoSelector = document.getElementById("typoContainer")
let pdfButtonContainer = document.getElementById("pdfButtonContainer")
let countdownContainer = document.getElementById("countdownContainer")
let bookingIcon = document.getElementById("bookingIcon")
let bookingButton = document.getElementById("bookingButton")

//------------------- get concerts elm --------------------//

let concertsContainer = document.getElementById("concertsContainer")
let concertsTitleContainer = document.getElementById("concertsTitleContainer")
let concertImg1 = document.getElementById("concertImg1")
let concertImg2 = document.getElementById("concertImg2")
let concertImg3 = document.getElementById("concertImg3")
let concertImg4 = document.getElementById("concertImg4")

//------------------- get concerts elm --------------------//

let conferencesContainer = document.getElementById("conferencesContainer")
let conferencesTitleContainer = document.getElementById("conferencesTitleContainer")
let conferenceImg1 = document.getElementById("conferenceImg1")
let conferenceImg2 = document.getElementById("conferenceImg2")
let conferenceImg3 = document.getElementById("conferenceImg3")

//------------------- get others elm ----------------------//

let contentContainer = document.getElementById("contentContainer")
let displayMoreButton = document.getElementById("displayMoreButton")

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

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: -80,
    depth: 100,
    modifier: 1,
    slideShadows: false,
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

//---------------------- Display More Button --------------//

displayMoreButton.addEventListener("click", (e) => {
  contentContainer.innerHTML += `<div id="exposContainer">
                                      <div id="exposTitleContainer">
                                        Expositions
                                      </div>
                                      <div id="exposSwiper">
                                          <div class="swiper">
                                              <div class="swiper mySwiper">
                                                  <div class="swiper-wrapper">
                                                      <div class="swiper-slide">
                                                          <img src="https://cdn.pixabay.com/photo/2021/11/16/08/01/animal-6800387_960_720.jpg" id="exposImg1">
                                                      </div>
                                                      <div class="swiper-slide">
                                                          <img src="https://cdn.pixabay.com/photo/2020/05/01/16/42/palacio-nacional-de-mafra-5118010_960_720.jpg" id="exposImg2">
                                                      </div>
                                                      <div class="swiper-slide">
                                                          <img src="https://cdn.pixabay.com/photo/2021/12/10/15/15/coleus-6860722_960_720.jpg" id="exposImg3">
                                                      </div>
                                                      <div class="swiper-slide">
                                                      </div>
                                                  </div>
                                              </div>

                                          </div>
                                      </div>
                                    </div>
                                    
                                    <div id="workshopContainer">
                                      <div id="workshopTitleContainer">
                                        Workshops
                                      </div>
                                      <div id="workshopSwiper">
                                          <div class="swiper">
                                              <div class="swiper mySwiper">
                                                  <div class="swiper-wrapper">
                                                      <div class="swiper-slide">
                                                          <img src="https://cdn.pixabay.com/photo/2021/11/16/08/01/animal-6800387_960_720.jpg" id="workshopImg1">
                                                      </div>
                                                      <div class="swiper-slide">
                                                          <img src="https://cdn.pixabay.com/photo/2020/05/01/16/42/palacio-nacional-de-mafra-5118010_960_720.jpg" id="workshopImg2">
                                                      </div>
                                                      <div class="swiper-slide">
                                                          <img src="https://cdn.pixabay.com/photo/2021/12/10/15/15/coleus-6860722_960_720.jpg" id="workshopImg3">
                                                      </div>
                                                      <div class="swiper-slide">
                                                      </div>
                                                  </div>
                                              </div>

                                          </div>
                                      </div>
                                    </div>
                                    
                                    <div id="performanceContainer">
                                      <div id="performanceTitleContainer">
                                        Performances
                                      </div>
                                      <div id="performanceSwiper">
                                          <div class="swiper">
                                              <div class="swiper mySwiper">
                                                  <div class="swiper-wrapper">
                                                      <div class="swiper-slide">
                                                          <img src="https://cdn.pixabay.com/photo/2021/11/16/08/01/animal-6800387_960_720.jpg" id="performanceImg1">
                                                      </div>
                                                      <div class="swiper-slide">
                                                          <img src="https://cdn.pixabay.com/photo/2020/05/01/16/42/palacio-nacional-de-mafra-5118010_960_720.jpg" id="performanceImg2">
                                                      </div>
                                                      <div class="swiper-slide">
                                                          <img src="https://cdn.pixabay.com/photo/2021/12/10/15/15/coleus-6860722_960_720.jpg" id="performanceImg3">
                                                      </div>
                                                      <div class="swiper-slide">
                                                      </div>
                                                  </div>
                                              </div>

                                          </div>
                                      </div>
                                    </div>`
})