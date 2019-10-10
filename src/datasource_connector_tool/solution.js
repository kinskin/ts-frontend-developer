// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).



let getPrices = ()=>{
    fetch(`https://pastebin.com/raw/KCJm3Kzb`)
        .then(response => response.json())
        .then(data => console.log(data))
}

getPrices()