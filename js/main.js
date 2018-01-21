$(() => {
    $('.hero').addClass('fadeInUp');


    $('#form').on('submit', e => {
        console.log(e);
        e.stopImmediatePropagation();
        e.stopPropagation();
        console.log($('#email').text());
    });
});
