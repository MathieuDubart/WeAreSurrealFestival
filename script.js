let xhttp = new XMLHttpRequest();

//--------------------- get header elm -------------------//

let header= document.getElementById("header");
let typoSelector = document.getElementById("typoContainer")
let pdfButtonContainer = document.getElementById("pdfButtonContainer")
let pdfDownload = document.getElementById("pdfDownload")
let countdownContainer = document.getElementById("countdownContainer")
let countdown = document.getElementById("countdown")
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

//------------------- get expos elm --------------------//

let exposContainer = document.getElementById("exposContainer")
let exposTitleContainer = document.getElementById("exposTitleContainer")
let exposImg1 = document.getElementById("exposImg1")
let exposImg2 = document.getElementById("exposImg2")
let exposImg3 = document.getElementById("exposImg3")

//------------------- get booking elm --------------------//

let bookingContainer = document.getElementById("bookingContainer")
let bookingTitleContainer = document.getElementById("bookingTitleContainer")
let passSelect = document.getElementById("pass-select")
let quantitySelect = document.getElementById("quantity-select")
let addToCart = document.getElementById("addToCart")
//------------------- get workshop elm --------------------//

let workshopContainer = document.getElementById("workshopContainer")
let workshopTitleContainer = document.getElementById("workshopTitleContainer")
let workshopImg1 = document.getElementById("workshopImg1")
let workshopImg2 = document.getElementById("workshopImg2")
let workshopImg3 = document.getElementById("workshopImg3")

//------------------- get performance elm --------------------//

let performanceContainer = document.getElementById("performanceContainer")
let performanceTitleContainer = document.getElementById("performanceTitleContainer")
let performanceImg1 = document.getElementById("performanceImg1")
let performanceImg2 = document.getElementById("performanceImg2")
let performanceImg3 = document.getElementById("performanceImg3")

//------------------- get performance elm --------------------//

let instagramContainer = document.getElementById("instagramContainer")
let instagramTitleContainer = document.getElementById("instagramTitleContainer")
let instagramImg1 = document.getElementById("instagramImg1")
let instagramImg2 = document.getElementById("instagramImg2")
let instagramImg3 = document.getElementById("instagramImg3")

//------------------- get others elm ----------------------//

let pageContainer = document.getElementById("pageContainer")
let contentContainer = document.getElementById("contentContainer")
let displayMoreButton = document.getElementById("displayMoreButton")
let displayMoreIcon = document.getElementById("displayMoreIcon")
let surrealText = document.getElementById("surrealText")
let displayLessButton = document.getElementById("displayLessButton")
let displayLessIcon = document.getElementById("displayLessIcon")
// ------------------ Get URL Parameters ------------------//

let str = window.location.href;
let url = new URL(str);
let search_params = new URLSearchParams(url.search); 
if(search_params.has('version')) {
  let version = search_params.get('version');
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response_V1=this.responseText;
            let infos = JSON.parse(response_V1);
            pageContainer.style.backgroundColor = infos.colorOne

//------------------------- header elm -------------------------//
            pdfDownload.href = infos.pdf
            typoSelector.style.fontFamily = infos.fontFamily
            header.style.backgroundImage = infos.backgroundImage
            surrealText.style.color = infos.colorYellow

//------------------------- pdfButton elm -------------------------//
            pdfButtonContainer.style.backgroundColor = infos.colorOne
            pdfButtonContainer.style.color = infos.colorTwo
            pdfButtonContainer.style.fontFamily = infos.fontFamily
//------------------------- countdown elm -------------------------//
            countdown.style.fontFamily = infos.fontFamily
            countdown.style.top = infos.countdownTop

//------------------------- concerts elm -------------------------//
            contentContainer.style.fontFamily = infos.fontFamily
            concertsContainer.style.backgroundColor = infos.colorOne
            concertsTitleContainer.style.backgroundColor = infos.colorTwo

//------------------------- conferences elm -------------------------//
            conferencesContainer.style.backgroundColor = infos.colorOne
            conferencesTitleContainer.style.backgroundColor = infos.colorTwo
            conferencesContainer.style.backgroundColor = infos.colorOne

//------------------------- booking elm -------------------------//
            bookingContainer.style.backgroundColor = infos.colorTwo
            passSelect.style.fontFamily = infos.fontForBilling
            quantitySelect.style.fontFamily = infos.fontForBilling
            bookingTitleContainer.style.backgroundColor = infos.colorOne
            bookingTitleContainer.style.color = infos.colorTwo
            bookingTitleContainer.style.border = infos.border

//------------------------- expos elm -------------------------//
            exposContainer.style.backgroundColor = infos.colorOne
            exposTitleContainer.style.backgroundColor = infos.colorTwo
            exposTitleContainer.style.color = infos.colorOne

//------------------------- workshop elm -------------------------//
            workshopContainer.style.backgroundColor = infos.colorOne
            workshopTitleContainer.style.backgroundColor = infos.colorTwo

//------------------------- performance elm -------------------------//
            performanceContainer.style.backgroundColor = infos.colorOne
            performanceTitleContainer.style.backgroundColor = infos.colorTwo

            performanceImg1.src = infos.NatashaZuppan

//------------------------- instagram   elm -------------------------//
            instagramContainer.style.backgroundColor = infos.colorOne
            instagramTitleContainer.style.backgroundColor = infos.colorTwo
            instagramTitleContainer.style.color = infos.colorOne
          }
    };
    
    xhttp.open("GET", `version_${version}/data.json`, true);
    xhttp.send();
  }

// ------------------ Swiper  ------------------//

let swiper = new Swiper(".mySwiper", {
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
  autoplay: {
    delay: 5000,
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

//------------------------- display more icon --------------------//

displayMoreButton.addEventListener('mouseenter', (e) => {
  displayMoreIcon.src = "commonFiles/img/addIconWhite.png"
}, false)

displayMoreButton.addEventListener('mouseleave', (e) => {
  displayMoreIcon.src = "commonFiles/img/addIcon.png"
}, false)

//------------------------- display less icon --------------------//

displayLessButton.addEventListener('mouseenter', (e) => {
  displayLessIcon.src = "commonFiles/img/removeIconWhite.png"
}, false)

displayLessButton.addEventListener('mouseleave', (e) => {
  displayLessIcon.src = "commonFiles/img/removeIcon.png"
}, false)

//---------------------- Display More Button --------------//

displayMoreButton.addEventListener("click", (e) => {
        exposContainer.style.display = "block"
        workshopContainer.style.display = "block"
        performanceContainer.style.display = "block"
        displayMoreButton.style.display = "none"
        displayLessButton.style.display = "block"
})

//---------------------- Display More Button --------------//

displayLessButton.addEventListener("click", (e) => {
  exposContainer.style.display = "none"
  workshopContainer.style.display = "none"
  performanceContainer.style.display = "none"
  displayMoreButton.style.display = "block"
  displayLessButton.style.display = "none"
})