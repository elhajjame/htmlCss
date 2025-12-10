const apiKey = "48a9906362b2165e031a77addaa5ece7";
const city = 'beni mellal';
const url = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+apiKey+'&units=metric'

fetch(url).then(Response => Response.json())
.then(data =>{

    console.log(data);
}
)
.catch(error => {
    console.log("erogfd",error)
})

