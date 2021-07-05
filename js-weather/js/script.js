
const country = document.getElementsByClassName("search")[0];
const btn = document.getElementsByClassName("searchbtn")[0];
const weather = document.getElementsByClassName("weather")[0];
const img = document.getElementsByClassName('weatherimg')[0];
console.log(country,btn);

country.addEventListener("change",()=>{
    var countryname = country.value;
    
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${countryname}&appid=ca0619ad3b4d67d9d594439e29943969`;

    fetch(url)
    .then(res => res.json())
    .then(json => getData(json));
})

btn.addEventListener("click",()=>{
    var countryname = country.value;
    
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${countryname}&appid=ca0619ad3b4d67d9d594439e29943969`;

    fetch(url)
    .then(res => res.json())
    .then(json => getData(json));
})

function  getData(data) {
    weather.innerHTML = " Weather :";
    document.getElementsByClassName("name")[0].innerHTML ="";
    document.getElementsByClassName("wind")[0].innerHTML = "Wind Speed :";
    document.getElementsByClassName("temp")[0].innerHTML ="Temperature :";
    const {main,icon,description} = data.weather[0];
    const {name} = data;
    const {temp}    = data.main;
    const {speed}   = data.wind;
    console.log(main);
    console.log(data);
    weather.innerHTML += description;
    img.src = `http://openweathermap.org/img/wn/${icon}.png`;
    document.getElementsByClassName("name")[0].innerHTML += name;
    document.getElementsByClassName("temp")[0].innerHTML += temp+" &#8451;";
    document.getElementsByClassName("wind")[0].innerHTML += speed
}