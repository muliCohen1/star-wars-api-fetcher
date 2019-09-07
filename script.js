    document.getElementById('getText').addEventListener('click', getText);
    document.getElementById('getUsers').addEventListener('click', getUsers);
    document.getElementById('getPosts').addEventListener('click', getPosts);

    function getText() {
        fetch('sample.txt')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
           document.getElementById('output').innerHTML = data;
        })
        .catch(function(err) {
            console.log(err);
        });
       document.getElementsByTagName("IMG")[0].style.display = 'none';
    }

    function getUsers() {
        fetch('users.json')
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
           var output = '<h2 class="mb-4">Star-Wars Users</h2>' 
           data.forEach(function(user) {
               output += `
               <ul class="list-group mb-4">
                <li class="list-group-item">ID: ${user.id}</li>
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">Email: ${user.email}</li>
               </ul>
               `;
           });
        document.getElementById('output').innerHTML = output;
        });
       document.getElementsByTagName("IMG")[0].style.display = 'none';
    }    

    function getPosts() {
        fetch('https://swapi.co/api/films')
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
           var output = '<h2 class="mb-4">Star-Wars Movies\' Plots</h2>' 
           data.results.forEach(function(film) {
               output += `
               <div class="card card-body mb-4">
                <h3>${film.title}</h3>
                <p>${film.opening_crawl}</p>
               </div>
               `;
           });
        document.getElementById('output').innerHTML = output;
        });
       document.getElementsByTagName("IMG")[0].style.display = 'none';
    }  