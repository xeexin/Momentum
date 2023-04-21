const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);

function handleH1Click(){
    h1.classList.toggle("clicked"); 
}


//MDL : https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement

h1.addEventListener("click", handleH1Click);
//h1.onclick = handleh1Click;
