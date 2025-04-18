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

