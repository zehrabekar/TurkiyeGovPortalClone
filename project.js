// Sayfa kaydırıldığında butonun görünürlüğünü kontrol et
window.addEventListener('scroll', function () {
    let newButton = document.getElementById('newButton');
    if (window.scrollY > 340) { // 443px kaydırıldığında
      newButton.style.display = 'inline'; // Butonu göster
    } else {
      newButton.style.display = 'none'; // Butonu gizle
    }
  });

// Navbar toggle butonuna tıklandığında header'ı genişlet
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    let header = document.getElementById('header');
    header.classList.toggle('expand');  // 'expand' sınıfını ekler veya çıkarır
});

  