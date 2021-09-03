const API_KEY = `d98e0aabdd1a36528dfc1e019a191b82`

const searchTemp = () =>{
    const city = document.getElementById('city-name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    // console.log(url)


    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}

const setInnerText = (id,text) =>{
    document.getElementById(id).innerText = text
}

const displayTemp = temperature =>{
    console.log(temperature)

    setInnerText('city', temperature.name)
    setInnerText('temp', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main)

    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const icon = document.getElementById('wicon').setAttribute('src', url)

}