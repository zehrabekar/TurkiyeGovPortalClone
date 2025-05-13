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


// Ad ve Soyad alanına sadece text girilebilir ve en az 3 karakter girilmeli
// TC alanına sadece sayı girilebilecek ve 11 karakter sınırlaması olacak

const Form = document.getElementById("addUserForm");
Form.addEventListener("submit",submitForm);

function submitForm(e){
  e.preventDefault();

  //error mesajlarını seçiyoruz
  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const tcError = document.getElementById("tcError");

  //ad ve soyad alanlarını seçiyoruz
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let tcNo = document.getElementById("tc").value.trim();

  //ad alanına min 3 karakter harf girilmesi için :
  if (firstName.length < 3) {
    firstNameError.textContent = "En az 3 karakter girilmelidir";
    firstNameError.style.display = "block";
    return;
  } else if (!/^[a-zA-ZğüşöçıİĞÜŞÖÇ]+$/.test(firstName)) {
    firstNameError.textContent = "Bu alana sadece harf girilebilir";
    firstNameError.style.display = "block";
    return;
  } else {
    firstNameError.style.display = "none";
  }

  if (lastName.length < 3) {
    lastNameError.textContent = "En az 3 karakter girilmelidir";
    lastNameError.style.display = "block";
    return;
  } else if (!/^[a-zA-ZğüşöçıİĞÜŞÖÇ]+$/.test(lastName)) {
    lastNameError.textContent = "Bu alana sadece harf girilebilir";
    lastNameError.style.display = "block";
    return;
  } else {
    lastNameError.style.display = "none";
  }

  // TC kimlik validasyonu
  if (tcNo.length !== 11) {
    tcError.textContent = "Lütfen 11 haneli TC kimlik numaranızı giriniz.";
    tcError.style.display = "block";
    return;
  } else if (!/^\d{11}$/.test(tcNo)) { // Sadece rakam olmalı
    tcError.textContent = "Bu alana sadece rakam girilebilir";
    tcError.style.display = "block";
    return;
  } else {
    tcError.style.display = "none";
  }
};

// inputlara girilen hatalı değerler düzeltildiği an error mesajının gizlenmesi için :

const firstNameInput = document.getElementById("firstName");
firstNameInput.addEventListener("input", function () {
  const value = firstNameInput.value.trim();
  if (value.length >= 3) {
    document.getElementById("firstNameError").style.display = "none";
  }
});

const lastNameInput = document.getElementById("lastName");
lastNameInput.addEventListener("input", function () {
  const value = lastNameInput.value.trim();
  if (value.length >= 3) {
    document.getElementById("lastNameError").style.display = "none";
  }
});

const tcInput = document.getElementById("tc");
tcInput.addEventListener("input", function(){
  const tcValue = tcInput.value.trim();
  if (tcValue.length === 11){
    document.getElementById("tcError").style.display = "none";
  }
})

