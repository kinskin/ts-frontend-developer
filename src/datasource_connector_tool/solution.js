// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).


class Datasource {



    getPrices(){
        console.log('hello world')
        fetch('http://clickboard.herokuapp.com/lingdata', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
}


let ds = new Datasource();

ds.getPrices()