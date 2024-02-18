// Example: Fetching data from a fake JSON placeholder API
let apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(apiUrl)
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        console.log(data); // Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
    })
    .catch(error => console.error('Error:', error));
