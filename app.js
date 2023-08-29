const getJokeBtn = document.querySelector('#btn');

window.addEventListener('load', () => {
  getNewJoke();
});

const getNewJoke = () => {
  // HTTPS Request
  const xhr = new XMLHttpRequest();
  // Get Data From Api
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  // fetching data
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      const para = document.querySelector('#jokes');
      para.innerHTML = `<strong>${data.value}</strong>`;
    }
  };
  xhr.send();
};

getJokeBtn.addEventListener('click', getNewJoke);
