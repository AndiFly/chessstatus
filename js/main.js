

fetch("https://lichess.org/api/users/status?ids=sipling")
  .then((response) => response.json())
  .then(data => {
    if(data[0].online){
        document.querySelector('h2').innerHTML = "Yes"
      }else document.querySelector('h2').innerHTML = "No"
    console.log(data)});
  



