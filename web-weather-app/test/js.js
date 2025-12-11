// fetch("https://pokeapi.co/api/v2/pokemon/Charizard") // here e getting Charizard data if u change it it will an error, if i console.log(response) and i checked the ok it will ok : false, not true
//     // so i have to throe an error if our data not ok (ok : false)
// // .then(response => console.log(response)) // i displayed the data but not readble so i have to convert it to a json 
//     .then(response => response.json())  // here i convert the data using json method
//     .then(data => console.log(data.name))  // then take the data and displayed it // then u can accses to the data by data.name,heght
//     .catch(error => console.log(error));
    


    // fetch('https://pokeapi.co/api/v2/pokemon/Weedle')
    // .then(response =>{
    //     if(!response.ok){
    //         throw new Error('could not fetch the data') // here if the response not ok then throw an error
    //     }
    //     return response.json();
    // })
    // .then(data => console.log(data)) // here display pokimon id
    // .catch(error => console.error(error))

    async function fetchData(){
        const input = document.querySelector('.input').value
        const search = document.querySelector('.search')
        const img = document.querySelector('.img');
        try{
            
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
            if (!response.ok) {
                throw new Error('could not fetch the data');
            }
            const data = await response.json();
            console.log(data);

            let picture = data.sprites.other["official-artwork"].front_default;

        // If official artwork doesn't exist, use the normal front image
        if (!picture) {
            picture = data.sprites.front_default;
        }

        // Apply the image
        img.src = picture;


        }
        catch(error){
            console.error(error)
        }
        
    }

document.querySelector('.search').addEventListener('click', fetchData);

    //fetchData()

