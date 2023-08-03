function mais1(){
    fetch('https://ipapi.co/json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição. Verifique sua conexão com a internet.');
            }
            return response.json();
        })
        .then(dados => {
            // Atualizar a exibição com os dados recebidos
            var isp = document.querySelector("#i0")
            var regiao = document.querySelector("#d1")
            var pais = document.querySelector("#d2");
            isp.textContent = dados.org;
            regiao.textContent = dados.region;
            pais.textContent = dados.country_name;
            
            console.log(dados)
            mapa(dados)
        })
        .catch(error => {
            // Lidar com erros da requisição aqui
            console.log(error);
            //resultElement.innerText = 'Erro na requisição. Verifique sua conexão com a internet.';
        });
}








function mapa(dados){

    var latitude = dados.latitude;
    var longitude = dados.longitude;    
  
  
    var map = L.map('map').setView([latitude, longitude], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map);    

}