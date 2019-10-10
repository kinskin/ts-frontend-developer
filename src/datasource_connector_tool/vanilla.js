// let ds = new Datasource();

let getPrices = ()=>{

    fetch('https://pastebin.com/raw/KCJm3Kzb')
        .then(response =>  response.json())
        .then(data => console.log(data))
}

// ds.getPrices()
//     .then(prices => {
//         prices.forEach(price => {
//             console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
//         });
//     }).catch(error => {
//         console.err(error);
//     });