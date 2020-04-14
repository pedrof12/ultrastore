$("#section-minecraft").hide();
$("#section-discord").hide();
$("#section-jogos").hide();
$("#section-conexao").hide();

$(".card").on("hover", () => {
    alert("teste");
});

$('.selector').on('click', function(e) {
    let actived = $('.productSelection .actived').attr('id');
    let selector = actived.split('-')[1];
    
    $("#"+actived).removeClass('actived');
    $("#section-"+selector).hide();
    
    $(this).addClass('actived');  
    
    let clicked = $(this).attr('id'); 
    let selected = clicked.split('-')[1];
    
    $('#'+clicked).addClass('actived');  
    $('#section-'+selected).show();
});  