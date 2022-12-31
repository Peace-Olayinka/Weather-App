var myKey = "677dc62a3ff9227ae5d3bf923a99551c"
var today = new Date().toDateString()
const getCurrentDetails=()=>{
    if (navigator.geolocation) {
        // window.navigator.geolocation.watchPosition()
        window.navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position)
            let myLat = position.coords.latitude
            let myLon = position.coords.longitude
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`)
            // if information is  fetched successfully then do this:
            .then((responseFetched)=>responseFetched.json())
            .then((responseFetchedConverted)=>{
                console.log(responseFetchedConverted)
                citybox.innerHTML = `${responseFetchedConverted.name}`
                datebox.innerHTML = `${today}`
                tempbox.innerHTML = `${responseFetchedConverted.main.temp}<sup>0</sup>c`
                descriptionbox.innerHTML = `${responseFetchedConverted.weather[0].description}`
                minmaxbox.innerHTML =`${responseFetchedConverted.main.temp_min}<sup>0</sup>c / ${responseFetchedConverted.main.temp_max}<sup>0</sup>c`

                // for more deteials in the dropdown section
                dropCity.innerHTML = `${responseFetchedConverted.name}`
                dropCountry.innerHTML = `${responseFetchedConverted.sys.country}`
                dropLat.innerHTML = `${responseFetchedConverted.coord.lat}`
                dropLon.innerHTML = `${responseFetchedConverted.coord.lon}`
                dropTemp.innerHTML = `${responseFetchedConverted.main.temp}<sup>0</sup>c`
                dropWeather.innerHTML = `${responseFetchedConverted.weather[0].description}`
                dropHumidity.innerHTML = `${responseFetchedConverted.main.humidity}`
                dropWind.innerHTML = `${responseFetchedConverted.wind.deg}<sup>0</sup>`
                
            })
            // if error occur do this:
            .catch((error)=>{
                console.log(error)
            })
        })

    }else{
        alert("Geolocation feature is not supported by your browser!")
    } 
}
// location search funcrion
const searchNewLocation=()=>{
    let searchLocation = inpLocation.value
    if (inpLocation.value =="") {
        alert("Enter Lacation in the search field!")
        getCurrentDetails()
    }
    else{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${myKey}&units=metric`)
        // if information is  fetched successfully then do this:
        .then((searchRresponseFetched)=>searchRresponseFetched.json())
        .then((searchRresponseFetchedConverted)=>{
            console.log(searchRresponseFetchedConverted)
            citybox.innerText = `${searchRresponseFetchedConverted.name}`
            datebox.innerText = `${today}`
            tempbox.innerHTML = `${searchRresponseFetchedConverted.main.temp}<sup>0</sup>c`
            descriptionbox.innerText = `${searchRresponseFetchedConverted.weather[0].description}`
            minmaxbox.innerHTML =`${searchRresponseFetchedConverted.main.temp_min}<sup>0</sup>c / ${searchRresponseFetchedConverted.main.temp_max}<sup>0</sup>c`
    
            // for more deteials in the dropdown section
            dropCity.innerHTML = `${searchRresponseFetchedConverted.name}`
            dropCountry.innerHTML = `${searchRresponseFetchedConverted.sys.country}`
            dropLat.innerHTML = `${searchRresponseFetchedConverted.coord.lat}`
            dropLon.innerHTML = `${searchRresponseFetchedConverted.coord.lon}`
            dropTemp.innerHTML = `${searchRresponseFetchedConverted.main.temp}<sup>0</sup>c`
            dropWeather.innerHTML = `${searchRresponseFetchedConverted.weather[0].description}`
            dropHumidity.innerHTML = `${searchRresponseFetchedConverted.main.humidity}`
            dropWind.innerHTML = `${searchRresponseFetchedConverted.wind.deg}<sup>0</sup>`
        })
        // if error occur do this:
        .catch((error)=>{
            console.log(error)
        }) 
    }
    inpLocation.value=""
}





      



//const myFunc=()=>{
    // loading page : we could use bootsrap spinner to display loading gif
    // loadingDiv.innerHTML = "....Loading"
    // fetch(endpoint2)
    // .then((response)=>response.json())
    // .then((convertedResponse)=>{
    //     console.log(convertedResponse)
    //     loadingDiv.innerHTML = ""
    // })
    // .catch() is used to catch error
    // .catch((error)=>{
    //     console.log(error)
    // })
//}