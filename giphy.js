let key = config.MY_API_KEY;
let queryResults = 20;

document.addEventListener("DOMContentLoaded", init);

function init() {
    
  document.getElementById("btnSearch").addEventListener("click", (ev) => {
     
    ev.preventDefault();
    
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=${queryResults}&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        console.log(content.data);
        
        for (var i = 0; i < content.data.length; i++) {
            
          let img = document.createElement("img");

          img.src = content.data[i].images.downsized.url;


          let src = document.getElementById("out");
          src.appendChild(img);
        }
      })
      .catch((err) => {
        console.log(err);
      });
     
  });
  document.getElementById("btnClear").addEventListener("click", () => {
    document.getElementById("search").reset();
})
}