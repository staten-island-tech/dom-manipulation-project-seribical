const DOMSelectors = {
    button: document.querySelector(`#btn`),
    box: document.getElementById("flexbox"),
    cardtitle: document.querySelector(`#cardtitle`),
    carddesc: document.querySelector(`#carddesc`),
    cardimg: document.querySelector(`#cardimg`),
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
    "afterbegin",
      `
      <div id="card">
      <h2 class = '??'>${album.cardtitle}</h2>
      <img src='${album.cardimg}' class="img">
      <p class = '/? '>${album.carddesc}</p>
      <button type="button" id="rbtn">Remove</button>
    </div>
      `);

    const card = document.querySelector(`#card`);
    remove(card);
};

function clearentry(){
  DOMSelectors.cardtitle.value = '';
  DOMSelectors.carddesc.value = '';
  DOMSelectors.cardimg.value = '';
};

function remove(card){
  const button = card.querySelector(`#rbtn`);

  button.addEventListener("click", function(event){
    card.remove();
  });
};