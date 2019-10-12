// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).


class Datasource {



    getPrices(){
        console.log('hello world')
        fetch('https://pastebin.com/raw/KCJm3Kzb', {
            method: 'GET',
            mode: 'no-cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {return response.text()})
        .then((data) => {
            console.log(data ? JSON.parse(data.data.prices) : {})
        })
        .catch((error) => {
            console.log(error)
        })
    }
}


let ds = new Datasource();

ds.getPrices()