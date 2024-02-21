let data=document.getElementById('main')

async function loadagain() {
    const responce =await fetch("https://api.quotable.io/random");
    const quote=await responce.json();
    console.log(quote);
    data.innerHTML=`
    <p class="card-text"> <i>"${quote.content} </i>"--${quote.author} </p>
    `
}
loadagain(); 