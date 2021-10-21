
window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
        });
    }

});


$(document).ready(function () {
    $('#closebtn').click(function () {
        $('#page-content').hide();
        $(".menus").removeClass("active");
    });

    $(".menus").click(function () {
        $(".menus").removeClass("active");
        $(this).addClass("active");
        $('#page-content').hide();
    })

    $("#event").click(function () {
        $(".menus").removeClass("active");
        $(this).addClass("active");
        $('#page-content').show();
    })



});



