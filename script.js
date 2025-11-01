

document.addEventListener("DOMContentLoaded", function() {
  window.onscroll = function () {
    // Se la posizione dello scroll è maggiore di 50 pixel, aggiungi la classe "fixed" alla navbar
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("navbar").classList.add("fixed");
    } else {
      // Altrimenti, rimuovi la classe "fixed"
      document.getElementById("navbar").classList.remove("fixed");
    }
    const scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };
});


function popUpOpen() {
  moralPopup.classList.remove("hidden");
}



// ------------------------------------------------------------------------------------------------ //

function openModal(modalId) {
  if (window.innerWidth < 768 && (modalId === 'modal1' || modalId === 'modal4')) {
    document.getElementById(modalId).style.display = "block";
  } else {
    document.getElementById(modalId).style.display = "flex";
  }
  document.body.classList.add('modal-open');
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.classList.remove('modal-open');
}

window.onclick = function (event) {
  var modals = document.getElementsByClassName("modal");
  for (var i = 0; i < modals.length; i++) {
    var modal = modals[i];
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove('modal-open');
    }
  }
};


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({behavior : "smooth"});
}


// -----

function imgFullScreen(elem) {
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById("img01");
  modal.style.display = "flex";   
  modalImg.src = elem.src;
}

function closeImg() {
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}

function expand() {
  var content = document.getElementById('content-ex');
  var readMore = document.getElementById('readMore');
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    readMore.textContent = 'Continua a leggere';
  } else {  
    content.classList.add('expanded');
    readMore.textContent = 'Mostra meno';
  }
}



// Gestione del loader
window.addEventListener('load', handleLoad);

function handleLoad() {
  hideLoader();
  enableBody();
  checkCurrentPage();
}

function hideLoader() {
  const loader = document.getElementsByClassName('loader')[0];
  loader.style.display = 'none';
}

function enableBody() {
  const body = document.querySelectorAll('body');
  body[0].style.userSelect = 'auto';
  body[0].style.overflow = 'auto';
  body[0].style.pointerEvents = 'auto';
}

function checkCurrentPage() {
  const currentPage = window.location.href;
  if (currentPage.includes('animali.html')) {
    handleAnimaliPage(currentPage);
  }
}

function handleAnimaliPage(currentPage) {
  const itemId = getItemId(currentPage);
  const collapser = `collapse${itemId}`;
  const heading = `heading${itemId}`;
  console.log(heading);
  const collapse = new bootstrap.Collapse(document.getElementById(collapser), {
    toggle: false
  });
  collapse.show();
  scrollToSection(heading);
}

function getItemId(currentPage) {
  const itemIndex = currentPage.indexOf('?item=');
  return currentPage.slice(itemIndex + 6);
}

function fullScreen() {
  var modal = document.getElementById('carouselModal');
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  modal.style.overflow = "hidden";
}

function closeCarousel() {
  var modal = document.getElementById('carouselModal');
  modal.style.display = "none";
}

function download(url) {
  fetch(url)
    .then(response => {
      if (response.ok) {
        const a = document.createElement('a');
        a.href = url;
        a.download = url.split('/').pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        console.error(`Failed to download file: ${url}`);
        alert(`Download del file (${url}) fallito. \n Riprova più tardi`);
      }
    })
    .catch(error => console.error(`Error fetching file: ${error}`));
}


