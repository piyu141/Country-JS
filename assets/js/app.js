let cl = console.log;
 
var countrydiv = document.getElementById('coutryId');
let result = '';
countries.forEach((country) => {
    result +=
     `<div class="col">
    <div class="card">
        <div class="imgdiv">
            <img src="${country.flag}">
        </div>
        <h3><b>${country.name}</b></h3>
        <p><b>Capital</b> : ${country.capital}</p>
        <p><b>Languages</b> : ${country.languages}</p>
        <p><b>Population</b> : ${country.population}</p>
    </div>
</div>`
})
countrydiv.innerHTML = result;

