$(document).ready(function () {
    // Agregar la clase 'active' al #sidebar al cargar la página
    $('#sidebar').addClass('active');

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});
