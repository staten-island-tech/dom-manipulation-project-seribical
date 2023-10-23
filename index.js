/* const DOMSelectors={
    button:document.getElementById("btn"),
    text:document.querySelector("#text"),
    box: document.getElementById("big-black-box"),
    points: document.querySelectorAll(".point"),
};

function backgroundAndText(background,text){
    background.style.backgroundColor = "red";
    text.textContent = "This is now red die";
    text.style.fontSize = "40px"
}


DOMSelectors.button.addEventListener("click",function(){
    backgroundAndText(DOMSelectors.box,DOMSelectors.text);
});

function changeLi(){
    let pointIndex = 1;
    DOMSelectors.points.forEach((point)=>{
        point.addEventListener("click",function(){
            point.textContent = `Hello i am point ${pointIndex}`;
            pointIndex++;
        });
    });
}
changeLi(); */

const DOMSelectors = {
    button:document.getElementById("btn"),
    box:document.getElementById("container-box"),
    input:document.querySelector(`#input`),
}