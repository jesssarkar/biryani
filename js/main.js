//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getBiryani)

function getBiryani(){

  fetch("https://biriyani.anoram.com/get")
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src=data.image

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}