const DOMSelectors = {
    button: document.getElementById("btn"),
    box: document.getElementById("flexbox"),
    cardtitle: document.querySelector(`#cardtitle`),
    carddesc: document.querySelector(`#carddesc`),
    cardimg: document.querySelector(`#cardimg`)
  };
  
  DOMSelectors.button.addEventListener("click", function () {
    let cardtitle = DOMSelectors.cardtitle.value;
    let carddesc = DOMSelectors.carddesc.value;
    let cardimg = DOMSelectors.cardimg.value;
  
    console.log(cardtitle,carddesc,cardimg);
  
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
        `
        <div id="card">
        <h2 class = '??'>${cardtitle}</h2>
        <img src='${cardimg}' class="img">
        <p class = '/? '>${carddesc}</p>
    </div>
        `
    );
  });