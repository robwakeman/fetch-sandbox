// Add event listeners
document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);

// handle errors
function handleErrors(res) {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
}

// Get Text button
function getText() {
  fetch('sample.txt')
    .then(handleErrors)
    .then(res => res.text())
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log('Catch Error', err));
}

// Get JSON button
function getUsers() {
  fetch('users.json')
    .then(handleErrors)
    .then(res => res.json())
    .then(data => {
      let output = '<h2 class="mb-4">Users</h2>';
      data.forEach(function(user) {
        output += `
      <ul class="list-group mb-3">
        <li class="list-group-item">ID: ${user.id}</li>
        <li class="list-group-item">Name: ${user.name}</li>
        <li class="list-group-item">Email: ${user.email}</li>
      </ul>
    `;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log('Catch Error', err));
}

// Get API DATA button
function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(handleErrors)
    .then(res => res.json())
    .then(data => {
      let output = '<h2 class="mb-4">Posts</h2>';
      data.forEach(function(post) {
        output += `
      <div class="card card-body mb-3">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </div>
    `;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log('Catch Error', err));
}

// Form with Title and Body fields
function addPost(e) {
  e.preventDefault();

  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ title: title, body: body })
  })
    .then(handleErrors)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('Catch Error', err));
}
