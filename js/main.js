$('#mobile_button').on('click', () => {
    let mobileMenuElement = $('#mobile_menu');
    if(mobileMenuElement.css('display') === 'none'){
        $('#mobile_menu').css('display', 'block');
    }
    else{
        $('#mobile_menu').css('display', 'none');
    }
});
