const DOMSelectors = {
    button: document.getElementById("btn"),
    button2: document.getElementById("rbtn"),
    box: document.getElementById("flexbox"),
    cardtitle: document.querySelector(`#cardtitle`),
    carddesc: document.querySelector(`#carddesc`),
    cardimg: document.querySelector(`#cardimg`)
};

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault;
  data();
});

function data(){
  const album = {
    cardtitle: DOMSelectors.cardtitle.value,
    carddesc: DOMSelectors.carddesc.value,
    cardimg: DOMSelectors.cardimg.value,
  }
  inject(album);
  clearentry();
};

function inject(album){
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
      `
      <div id="card">
      <h2 class = '??'>${album.cardtitle}</h2>
      <img src='${album.cardimg}' class="img">
      <p class = '/? '>${album.carddesc}</p>
      <button type="button" id="rbtn">Remove</button>
  </div>
      `
)};

function clearentry(){
  DOMSelectors.cardtitle.value = '';
  DOMSelectors.carddesc.value = '';
  DOMSelectors.cardimg.value = '';
};

DOMSelectors.button2.addEventListener("click", function () {
  remove()
});

function remove(){
  cardtitle.remove();
}