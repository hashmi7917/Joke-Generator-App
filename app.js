const getJokeBtn = document.querySelector('#btn');
const para = document.querySelector('#jokes');
const getNewJoke = () => {
  // HTTPS Request
  const xhr = new XMLHttpRequest();
  // Get Data From Api
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  // fetching data
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText).value;
      para.innerHTML = data;
    } else {
      para.innerHTML = 'Something went wrong! 404';
    }
  };
  xhr.send();
};

window.addEventListener('load', () => {
  getNewJoke();
});
getJokeBtn.addEventListener('click', getNewJoke);
