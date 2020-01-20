$(document).ready(() => {
    //urls
    // let myRequestData = 'http://localhost:3000/items';
    // let myRequestBrands = 'http://localhost:3000/brands';
    // let myRequestTypes = 'http://localhost:3000/screen_types';
    // let myRequestSizes = 'http://localhost:3000/screen_sizes';
    // let myRequestResolutions = 'http://localhost:3000/resolutions';
    // let myRequestVolts = 'http://localhost:3000/voltages';

    
    // const data =  fetch(myRequestData).then(response=> response.json()).then((data)=> {
    //         console.log(data)
    //     })

    // const brands = fetch(myRequestBrands).then(response=> response.json())

    // //requests from fetch[ITEMS]
    // const types = fetch(myRequestTypes).then(response=> response.json())

    // //requests from fetch[ITEMS]
    // const sizes = fetch(myRequestSizes).then(response=> response.json())

    // //requests from fetch[ITEMS]
    // const resolutions = fetch(myRequestResolutions).then(response=> response.json())

    // //requests from fetch[ITEMS]
    // const volts = fetch(myRequestVolts).then(response=> response.json())

    const brands = [{"brand":"Samsung"},{"brand":"LG"},{"brand":"Sony"}];
    const types = [{"screen_type":"LED"},{"screen_type":"OLED"}];
    const sizes = [{"screen_size":"50\""},{"screen_size":"55\""},{"screen_size":"32\""},{"screen_size":"43\""},{"screen_size":"65\""},{"screen_size":"70\""}];
    const resolutions = [{"resolution":"Ultra HD 4k"},{"resolution":"FullHD"}];
    const volts = [{"voltage":"110v"},{"voltage":"220v"}];
    const data = [{"id":1,"title":"TV LEDLEDg 50RU7100 UltraHD 4k","brand":"Samsung","screen_type":"LED","screen_size":"50\"","resolution":"UltraHD 4k","voltage":"110v"},{"id":2,"title":"TV LED Samsung 55RU7100 UltraHD 4k","brand":"Samsung","screen_type":"LED","screen_size":"55\"","resolution":"UltraHD 4k","voltage":"220v"},{"id":3,"title":"TV LED Samsung 32J4290 FullHD","brand":"Samsung","screen_type":"LED","screen_size":"32\"","resolution":"FullHD","voltage":"110v"},{"id":4,"title":"TV OLED Samsung OLED55C9 UltraHD 4k","brand":"Samsung","screen_type":"OLED","screen_size":"55\"","resolution":"UltraHD 4k","voltage":"220v"},{"id":5,"title":"TV LED LG 43LM6300 FullHD","brand":"LG","screen_type":"LED","screen_size":"43\"","resolution":"FullHD","voltage":"110v"},{"id":6,"title":"TV LED LG 32LM620 FullHD","brand":"LG","screen_type":"LED","screen_size":"32\"","resolution":"FullHD","voltage":"110v"},{"id":7,"title":"TV OLED LG OLED65B9 UltraHD 4k","brand":"LG","screen_type":"OLED","screen_size":"65\"","resolution":"UltraHD 4k","voltage":"220v"},{"id":8,"title":"TV OLED LG 70UM7370 UltraHD 4k","brand":"LG","screen_type":"OLED","screen_size":"70\"","resolution":"UltraHD 4k","voltage":"220v"},{"id":9,"title":"TV LED Sony KD-55X755F UltraHD 4k","brand":"Sony","screen_type":"LED","screen_size":"55\"","resolution":"UltraHD 4k","voltage":"110v"},{"id":10,"title":"TV OLED Sony XBR-65A8F UltraHD 4k","brand":"Sony","screen_type":"OLED","screen_size":"65\"","resolution":"UltraHD 4k","voltage":"220v"},{"id":11,"title":"TV OLED Sony XBR-55A8F UltraHD 4k","brand":"Sony","screen_type":"OLED","screen_size":"55\"","resolution":"UltraHD 4k","voltage":"110v"},{"id":12,"title":"TV LED Sony KDL-50W665F FullHD","brand":"Sony","screen_type":"LED","screen_size":"50\"","resolution":"FullHD","voltage":"11OLED"}]

    
    //items div principal loop pra search
    var divItems = document.getElementById('div-items');
    for (var i = 0; i < data.length; i++) {
        var item = 
        '<div class="col-4 mb-3" id="div-item">' +
            '<div class="cz-product-item">' +
                '<img class="cz-product-item__img mb-4" src="/assets/images/default-tv.png" alt=""/>' +
            '<h2>'+ data[i].title +'</h2>' +
            '<div class="cz-product-item__row"><span>Marca:</span><span> ' + data[i].brand +'</span></div>' +
            '<div class="cz-product-item__row"><span>Tipo:</span><span> '+ data[i].screen_type +'</span></div>' +
            '<div class="cz-product-item__row"><span>Tamanha:</span><span> '+ data[i].screen_size +'</span></div>' +
            '<div class="cz-product-item__row"><span>Resolução:</span><span> '+ data[i].resolution +'</span></div>' +
            '<div class="cz-product-item__row"><span>Voltagem:</span><span> '+ data[i].voltage +'</span></div>' +
            '<h2 class="mt-3">Informações adicionais</h2>' +
            '<div class="cz-product-item__row"><span>Modelo:</span><span>USZ990055XD</span></div>' +
            '<div class="cz-product-item__row"><span>Saídas:</span><span>2 HDMI, 1 USB</span></div>' +
            '<div class="cz-product-item__row mb-4"><span>HDTV:</span><span>Sim</span></div>' +
            '<button class="btn btn-primary" type="button">Comprar</button>' +
            '</div>' +
        '</div>';
        divItems.innerHTML += item;   
    }
    //keyup
    document.getElementById('inp-search').addEventListener("keyup", function(){
        var busca = document.getElementById('inp-search').value.toLowerCase();

        for(var i = 0; i< divItems.childNodes.length; i++){
            var achou = false;
            var item = divItems.childNodes[i];
            var itemFilhos = item.childNodes;

            for(var j = 0; j< itemFilhos.length; j++){
                var value = itemFilhos[j].childNodes[1].textContent.toLowerCase();
                if(value.indexOf(busca) >= 0) {
                    achou = true;
                }
            }

            if (achou) {
                $(item).show();
            } else {
                $(item).hide();
            }
        }
    });
    
    const divMarca = document.getElementById('div-marca');
    for (var i = 0; i < brands.length; i++) {
        var item = 
        
        '<div class="custom-control custom-checkbox mb-1">' +
            '<input  class="custom-control-input chb" value="'+brands[i].brand+'" id="'+brands[i].brand+'" type="checkbox"/>' +
            '<label class="custom-control-label" for="'+brands[i].brand+'">'+brands[i].brand+'</label>' +
        '</div>'; 

        divMarca.innerHTML += item;
        
        // var applyId = document.getElementById('brand'+brands[i].brand);


    }

    const divType = document.getElementById('div-type');
    for (var i = 0; i < types.length; i++) {
        var type_item = 
        
        '<div class="custom-control custom-checkbox mb-1">' +
            '<input class="custom-control-input chb" value="'+types[i].screen_type+'" id="'+types[i].screen_type+'" type="checkbox"/>' +
            '<label class="custom-control-label" for="'+types[i].screen_type+'">'+types[i].screen_type+'</label>' +
        '</div>'; 

        divType.innerHTML += type_item;
        
        // var applyId = document.getElementById('brand'+brands[i].brand);


    }

    const divSize = document.getElementById('div-size');
    for (var i = 0; i < sizes.length; i++) {
        var size_item = 
        
        '<div class="custom-control custom-checkbox mb-1">' +
            '<input class="custom-control-input chb" value="'+sizes[i].screen_size+'" id="'+sizes[i].screen_size+'" type="checkbox"/>' +
            '<label class="custom-control-label" for="'+sizes[i].screen_size+'">'+sizes[i].screen_size+'</label>' +
        '</div>'; 

        divSize.innerHTML += size_item;
        
        // var applyId = document.getElementById('brand'+brands[i].brand);


    }

    const divResolution = document.getElementById('div-reso');
    for (var i = 0; i < resolutions.length; i++) {
        var resolution_item = 
        
        '<div class="custom-control custom-checkbox mb-1">' +
            '<input class="custom-control-input chb" value="'+resolutions[i].resolution+'" id="'+resolutions[i].resolution+'" type="checkbox"/>' +
            '<label class="custom-control-label" for="'+resolutions[i].resolution+'">'+resolutions[i].resolution+'</label>' +
        '</div>'; 

        divResolution.innerHTML += resolution_item;
        
        // var applyId = document.getElementById('brand'+brands[i].brand);


    }

    const divVolt = document.getElementById('div-volts');
    for (var i = 0; i < volts.length; i++) {
        var volt_item = 
        
        '<div class="custom-control custom-checkbox mb-1">' +
            '<input class="custom-control-input chb" value="'+volts[i].voltage+'" id="'+volts[i].voltage+'" type="checkbox"/>' +
            '<label class="custom-control-label" for="'+volts[i].voltage+'">'+volts[i].voltage+'</label>' +
        '</div>'; 

        divVolt.innerHTML += volt_item;
        
        // var applyId = document.getElementById('brand'+brands[i].brand);


    }

        
    //filtro loop on click
    $('.chb').click(function(){
        var aChk = document.getElementsByClassName("chb"); 
        var filtro = '';
        for (var i=0;i<aChk.length;i++){ 
            if (aChk[i].checked == true){ 
                var filtro = filtro + ' ' + aChk[i].value;
                
                // console.log(aChk[i].value + " marcado.");
                // console.log('concatenados:',filtro)
            }  else {
                // CheckBox Não Marcado... Faça alguma outra coisa...
                // console.log(aChk[i].value + " nao marcado.");
            }
    
        }

        for(var i = 0; i< divItems.childNodes.length; i++){
            var achou = false;
            var item = divItems.childNodes[i];
            var itemFilhos = item.childNodes;

            for(var j = 0; j< itemFilhos.length; j++){
                var value = itemFilhos[j].childNodes[1].textContent;
                // console.log(itemFilhos[j].childNodes[1].textContent)
                if(value.indexOf(filtro) >= 0) {
                    achou = true;
                }
            }

            if (achou) {
                $(item).show();
            } else {
                $(item).hide();
            }   
        }
    })

    


    
});