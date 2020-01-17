$(document).ready(() => {
    
$(function() {
    $.ajax({
        url: 'filters/',
        type: 'GET',
        dataType: 'json',
        success: (data) => {
            $.each(data, function(i, val){
                console.log(data.brand)
                $('#div-marca').html('\
                <div class="custom-control custom-checkbox mb-1">\
                <input class="custom-control-input" id="samsungUnchecked1" type="checkbox"/>\
                <label class="custom-control-label" for="samsungUnchecked1">'+ data.brand +'</label>\
                </div>\
                ');
            });
        }
    });
});

    $('#btn-search').click(() => { 
        const requestURL = 'items/' + $('#inp-search').val();
        console.log('the request', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                console.log('Objeto encontrado: ', data);
                $.each(data, function(i, val){
                $('#div-item').html('\
                <div class="cz-product-item"><img class="cz-product-item__img mb-4" src="/assets/images/default-tv.png" alt=""/>\
                <h2>'+ data.title +'</h2>\
                <div class="cz-product-item__row"><span>Marca:</span><span>'+ data.brand +'</span></div>\
                <div class="cz-product-item__row"><span>Tipo:</span><span>'+ data.screen_type +'</span></div>\
                <div class="cz-product-item__row"><span>Tamanha:</span><span>'+ data.screen_size +'</span></div>\
                <div class="cz-product-item__row"><span>Resolução:</span><span>'+ data.resolution +'</span></div>\
                <div class="cz-product-item__row"><span>Voltagem:</span><span>'+ data.voltage +'</span></div>\
                <h2 class="mt-3">Informações adicionais</h2>\
                <div class="cz-product-item__row"><span>Modelo:</span><span>USZ990055XD</span></div>\
                <div class="cz-product-item__row"><span>Saídas:</span><span>2 HDMI, 1 USB</span></div>\
                <div class="cz-product-item__row mb-4"><span>HDTV:</span><span>Sim</span></div>\
                <button class="btn btn-primary" type="button">Comprar</button>\
              </div>'
              );
            });
            }
        });
    });
});