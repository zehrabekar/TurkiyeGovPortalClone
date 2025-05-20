// Sayfa kaydırıldığında newButton butonunun görünürlüğünü kontrol et
window.addEventListener('scroll', function () {
    let newButton = document.getElementById('newButton');
    if (window.scrollY > 340) { // 340px kaydırıldığında
      newButton.style.display = 'inline'; // Butonu göster
    } else {
      newButton.style.display = 'none'; // Butonu gizle
    }
  });

  // Sayfa kaydırıldığında newButton2 butonunun görünürlüğünü kontrol et
window.addEventListener('scroll', function () {
  let newButton2 = document.getElementById('newButton2');
  if (window.scrollY > 340) { 
    newButton2.style.display = 'inline'; 
  } else {
    newButton2.style.display = 'none'; 
  }
});

window.addEventListener('scroll', function() {
  const header = document.getElementById('header');

  // Sayfa kaydırma miktarı 50px'in üzerine çıktığında arka plan rengini değiştir
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});



document.querySelector('#newButton a').addEventListener('click', function(event) {
  event.preventDefault(); // Sayfanın kaymasını engelle
});


document.querySelector('#newButton2 a').addEventListener('click', function(event) {
  event.preventDefault(); // Sayfanın kaymasını engelle
});

// Navbar toggle butonuna tıklandığında header'ı genişlet
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    let header = document.getElementById('header');
    header.classList.toggle('expand');  // 'expand' sınıfını ekler veya çıkarır
});

// Header yüksekliğini sayfa genişliğine göre ayarla
window.addEventListener('resize', function() {
  let header = document.getElementById('header');
  if (window.innerWidth > 576) {  // Eğer sayfa genişliği 576px'i geçtiyse
    header.classList.remove('expand');  // Header'ı 80px yap
  }
});

window.addEventListener('resize', updateLayout);
window.addEventListener('load', updateLayout);

function updateLayout() {
  let actionsBlock = document.getElementById('actions-block');
  let actionsList = document.getElementById('actions-list');
  let actionsList2 = document.getElementById('actions-list2');
  let windowWidth = window.innerWidth;

  if (windowWidth <= 576) {
    actionsBlock.style.height = '410px';
    actionsList.style.display = 'none';
    actionsList2.style.display = 'flex';
  } else {
    actionsBlock.style.height = '140px';
    actionsList.style.display = 'flex';
    actionsList2.style.display = 'none';
  }
}

updateLayout();


// Sayfa kaydırma pozisyonunu kaydet
window.onload = function() {
  if (sessionStorage.scrollPosition) {
    window.scrollTo(0, sessionStorage.scrollPosition);
  }
};


// Sayfa kaydırma pozisyonunu her kaydırma değişikliğinde güncelle
window.onscroll = function() {
  sessionStorage.scrollPosition = window.scrollY;
};



let validationStarted = false;

// formu ve input alanlarını seçme :
const form = document.getElementById("addUserForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const passwordInput = document.getElementById("password");
const tcInput = document.getElementById("tc");

// uyarı mesajlarını seçme :
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const passwordError = document.getElementById("passwordError");
const tcError = document.getElementById("tcError");

// validasyon fonksiyonları

function validateFirstName(){
  const firstNameValue = firstNameInput.value.trim();
  if(firstNameValue.length < 3){
    firstNameError.textContent = "Bu alana 3 karakterden az girilemez."
    firstNameError.style.display = "block";
    return false;
  }
  else if(!/^[a-zA-ZğüşöçıİĞÜŞÖÇ]+$/.test(firstNameValue)){
    firstNameError.textContent = "Bu alana sadece harf girilebilir."
    firstNameError.style.display = "block";
    return false;
  }else{
    firstNameError.style.display = "none";
    return true;
  }
}

function validateLastName(){
  const lastNameValue = lastNameInput.value.trim();
  if(lastNameValue.length < 3){
    lastNameError.textContent = "Bu alana 3 karakterden az girilemez."
    lastNameError.style.display = "block";
    return false;
  }
  else if(!/^[a-zA-ZğüşöçıİĞÜŞÖÇ]+$/.test(lastNameValue)){
    lastNameError.textContent = "Bu alana sadece harf girilebilir."
    lastNameError.style.display = "block";
    return false;
  }else{
    lastNameError.style.display = "none";
    return true;
  }
}

function validateTC() {
  const tcValue = tcInput.value.trim();

  if (!/^\d+$/.test(tcValue)) {
    tcError.textContent = "Bu alana sadece rakam girilebilir.";
    tcError.style.display = "block";
    return false;
  } else if (tcValue.length !== 11) {
    tcError.textContent = "TC Kimlik numarası 11 haneli olmalıdır.";
    tcError.style.display = "block";
    return false;
  } else {
    tcError.style.display = "none";
    return true;
  }
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();

  if (passwordValue.length < 6) {
    passwordError.textContent = "Şifre en az 6 karakter olmalıdır.";
    passwordError.style.display = "block";
    return false;
  } else if (passwordValue.length > 24) {
    passwordError.textContent = "Şifre en fazla 24 karakter olabilir.";
    passwordError.style.display = "block";
    return false;
  } else {
    passwordError.style.display = "none";
    return true;
  }
}


//form submit edildiğinde :

form.addEventListener("submit", function(e){
  e.preventDefault();
  validationStarted = true; 

  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isTCValid = validateTC();
  const isPasswordValid = validatePassword();

  if (isFirstNameValid && isLastNameValid && isTCValid && isPasswordValid) {
    console.log("Form geçerli. Gönderilebilir.");
  }
});


// INPUTLARA HER YAZILDIĞINDA (ama sadece submit'ten sonra çalışır)
firstName.addEventListener("input", function () {
  if (validationStarted) validateFirstName();
});

lastName.addEventListener("input", function () {
  if (validationStarted) validateLastName();
});

tc.addEventListener("input", function () {
  if (validationStarted) validateTC();
});

passwordInput.addEventListener("input", function () {
  if (validationStarted) validatePassword();
});

