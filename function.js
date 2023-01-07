var myKey = "677dc62a3ff9227ae5d3bf923a99551c"
var myDate = new Date()
var today = myDate.toDateString()
// myDate.setDate(myDate.getDate()+10) 
// console.log(myDate.getDay())
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
                currentDayTemp.innerHTML =`${responseFetchedConverted.main.temp}<sup>0</sup>c`

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
        // forecast for weekdays
        var weekdays =[]
        var dayCode
        var dayName
        for (let index = 0; index <7; index++) {
            myDate.setDate(myDate.getDate()+1) 
            console.log(myDate.toDateString())
            dayCode = myDate.getDay()
            console.log(dayCode)
            if (dayCode==0) {
                dayName = "Sun."
            }
            if (dayCode==1) {
                dayName = "Mon."
            }
            if (dayCode==2) {
                dayName = "Tue."
            }
            if (dayCode==3) {
                dayName= "Wed."
            }
            if (dayCode==4) {
                dayName= "Thur."
            }
            if (dayCode==5) {
                dayName = "Fri."
            }
            if (dayCode==6) {
                dayName = "Sat."
            }

            let newDay ={
                code:dayCode,
                dayName:dayName
            }   
    
            weekdays.push(newDay)
        }
        console.log(weekdays)
        next1.innerHTML = `${weekdays[0].dayName}`
        next2.innerHTML = `${weekdays[1].dayName}`
        next3.innerHTML = `${weekdays[2].dayName}`
        next4.innerHTML = `${weekdays[3].dayName}`
        next5.innerHTML = `${weekdays[4].dayName}`
        next6.innerHTML = `${weekdays[5].dayName}`
        next7.innerHTML = `${weekdays[6].dayName}`     
      
    }else{
        alert("Geolocation feature is not supported by your browser!")
    } 
}
// location search function
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
            currentDayTemp.innerHTML = `${searchRresponseFetchedConverted.main.temp}<sup>0</sup>c`
    
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
