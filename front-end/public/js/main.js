$(document).ready(() => {
    let myRequestItems = 'http://localhost:3000/items';
    let myRequestFilters = 'http://localhost:3000/filters';

    //Items//---------------------------------------------//------------------------------------------------
    function updateItems() {
        
        let searchTerm = document.getElementById('inp-search').value.toLowerCase();
        let selectedFilters = {};
        // console.log(searchTerm);
        console.log('selected filters front : ',selectedFilters);
        
        $.each($('#form_filters').serializeArray(), function(){
            selectedFilters[this.name] = selectedFilters[this.name] || [];
            selectedFilters[this.name].push(this.value);
        });

        //pega determinada div by id e retorna na var divX
        var divItems = document.getElementById('div-items');
        divItems.innerHTML = '';

        var dirImg = '/assets/images/default-tv.png';

        var postData = {
            search: searchTerm, 
            filters: selectedFilters, 
        };

        $.ajax({
            url: myRequestItems,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(postData),
        }).done(function(data) {
            //build items na div principal
            for (var i = 0; i < data.length; i++) {  
                var item = 
                '<div class="col-4 mb-3" id="div-item">' +
                    '<div class="cz-product-item">' +
                        '<img class="cz-product-item__img mb-4" src="'+dirImg+'" alt="/assets/images/default-tv.png"/>' +
                    '<h2>'+ data[i].title +'</h2>' +
                    '<div class="cz-product-item__row"><span>Marca:</span><span> ' + data[i].brand +'</span></div>' +
                    '<div class="cz-product-item__row"><span>Tipo:</span><span> '+ data[i].screen_type +'</span></div>' +
                    '<div class="cz-product-item__row"><span>Tamanha:</span><span> '+ data[i].screen_size +'</span></div>' +
                    '<div class="cz-product-item__row"><span>Resolução:</span><span> '+ data[i].resolution +'</span></div>' +
                    '<div class="cz-product-item__row"><span>Voltagem:</span><span> '+ data[i].voltage +'</span></div>' +
                    '<h2 class="mt-3">Informações adicionais</h2>' +
                    '<div class="cz-product-item__row"><span>Modelo:</span><span>'+ data[i].value +'</span></div>' +
                    '<div class="cz-product-item__row"><span>Saídas:</span><span>'+ data[i].key +'</span></div>' +
                    '<div class="cz-product-item__row mb-4"><span>HDTV:</span><span>Sim</span></div>' +
                    '<button class="btn btn-primary" type="button">Comprar</button>' +
                    '</div>' +
                '</div>';
                divItems.innerHTML += item;  //concatena os itens da div 
            }
        });
        // console.log(Object.keys(selectedFilters))
    }
    updateItems();

    //filtros//---------------------------------------------//------------------------------------------------
    function updateFilters() {

        let searchTerm = document.getElementById('inp-search').value.toLowerCase();
        let selectedFilters = {};
        // console.log(selectedFilters);

        $.each($('#form_filters').serializeArray(), function(){
            selectedFilters[this.name] = selectedFilters[this.name] || [];
            selectedFilters[this.name].push(this.value);
        });

        //pega determinada div by id e retorna na var divX
        const divMarcas = document.getElementById('div-marca');
        const divTypes = document.getElementById('div-type');
        const divSizes = document.getElementById('div-size');
        const divResolutions = document.getElementById('div-reso');
        const divVolt = document.getElementById('div-volt');
        divMarcas.innerHTML = '';
        divTypes.innerHTML = '';
        divSizes.innerHTML = '';
        divResolutions.innerHTML = '';
        divVolt.innerHTML = '';

        $.ajax({
            url: myRequestFilters,
            method: 'POST',
            data: {
                search: searchTerm, 
                filters: selectedFilters, 
            },
        }).done(function(data) {
            // buildFilters();
            
            //brands
            for (var i = 0; i < data.brands.length; i++) {
                // var l = data[0].childNodes[i]; 
                let checked = (selectedFilters['brand'] ||  []).indexOf(data.brands[i]) >= 0;
                
                var filter = 
                '<div class="custom-control custom-checkbox mb-1">' +
                    '<input  class="custom-control-input chb-filter" value="'+data.brands[i]+'" id="chb-filter-'+data.brands[i]+'" type="checkbox" name="brand" '+(checked ? 'checked="checked"' :  '')+'/>' +
                    '<label class="custom-control-label" for="chb-filter-'+data.brands[i]+'">'+data.brands[i]+'</label>' +
                '</div>'; 

                divMarcas.innerHTML += filter;
            }  

            //scren_type
            for (var i = 0; i < data.screen_type.length; i++) {
                // var l = data[0].childNodes[i]; 
                let checked = (selectedFilters['screen_type'] ||  []).indexOf(data.screen_type[i]) >= 0;
                
                var filter = 
                '<div class="custom-control custom-checkbox mb-1">' +
                    '<input  class="custom-control-input chb-filter" value="'+data.screen_type[i]+'" id="chb-filter-'+data.screen_type[i]+'" type="checkbox" name="screen_type" '+(checked ? 'checked="checked"' :  '')+'/>' +
                    '<label class="custom-control-label" for="chb-filter-'+data.screen_type[i]+'">'+data.screen_type[i]+'</label>' +
                '</div>'; 

                divTypes.innerHTML += filter;
            }

            //scren_size
            for (var i = 0; i < data.screen_size.length; i++) {
                // var l = data[0].childNodes[i]; 
                let checked = (selectedFilters['screen_size'] ||  []).indexOf(data.screen_size[i]) >= 0;
                
                var filter = 
                '<div class="custom-control custom-checkbox mb-1">' +
                    '<input  class="custom-control-input chb-filter" value="'+data.screen_size[i]+'" id="chb-filter-'+data.screen_size[i]+'" type="checkbox" name="screen_size" '+(checked ? 'checked="checked"' :  '')+'/>' +
                    '<label class="custom-control-label" for="chb-filter-'+data.screen_size[i]+'">'+data.screen_size[i]+'</label>' +
                '</div>'; 

                divSizes.innerHTML += filter;
            }

            //resolution
            for (var i = 0; i < data.resolution.length; i++) {
                // var l = data[0].childNodes[i]; 
                let checked = (selectedFilters['resolution'] ||  []).indexOf(data.resolution[i]) >= 0;
                
                var filter = 
                '<div class="custom-control custom-checkbox mb-1">' +
                    '<input  class="custom-control-input chb-filter" value="'+data.resolution[i]+'" id="chb-filter-'+data.resolution[i]+'" type="checkbox" name="resolution" '+(checked ? 'checked="checked"' :  '')+'/>' +
                    '<label class="custom-control-label" for="chb-filter-'+data.resolution[i]+'">'+data.resolution[i]+'</label>' +
                '</div>'; 

                divResolutions.innerHTML += filter;
            }

            //voltage
            for (var i = 0; i < data.voltage.length; i++) {
                // var l = data[0].childNodes[i]; 
                let checked = (selectedFilters['voltage'] ||  []).indexOf(data.voltage[i]) >= 0;
                
                var filter = 
                '<div class="custom-control custom-checkbox mb-1">' +
                    '<input  class="custom-control-input chb-filter" value="'+data.voltage[i]+'" id="chb-filter-'+data.voltage[i]+'" type="checkbox" name="voltage" '+(checked ? 'checked="checked"' :  '')+'/>' +
                    '<label class="custom-control-label" for="chb-filter-'+data.voltage[i]+'">'+data.voltage[i]+'</label>' +
                '</div>'; 

                divVolt.innerHTML += filter;
            }
        });
        // console.log(Object.keys(selectedFilters))
    }
    updateFilters();

    

    //click search
    document.getElementById('btn-search').addEventListener("click", function(){
        updateItems();
        updateFilters();
    });


    $('#form_filters').on("change", 'input', function(){
        updateItems();
        updateFilters();
    });
    
});