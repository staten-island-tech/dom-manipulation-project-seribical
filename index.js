const DOMSelectors = {
    button: document.getElementById("btn"),
    box: document.getElementById("flexbox"),
    cardtitle: document.querySelector(`#cardtitle`),
    carddesc: document.querySelector(`#carddesc`),
    cardimg: document.querySelector(`#cardimg`)
  };
  
  DOMSelectors.button.addEventListener("click", function () {
    let cardtitle = DOMSelectors.cardtitle.value; // .value lets you get the values of an element, in this case something you typed in
    let carddesc = DOMSelectors.carddesc.value;
    let cardimg = DOMSelectors.cardimg.value;
  
    console.log(cardtitle,carddesc,cardimg);
  
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
        `
          <h2 class = '??'>${cardtitle}</h2>
          <p class = '/? '>${carddesc}</p>
          <img src='${cardimg}'>
        `
    );
  }); // this function will cause new HTML to be added when the input button is clicked.
  
  DOMSelectors.button.insertAdjacentHTML(
    "afterend",
    ``
  );
  // you can put multiple HTML tags in the same DOMSelector as if you were writing out regular HTML, you're also able to assigned classes and ids that can be used for styling the elements you add through js.
  