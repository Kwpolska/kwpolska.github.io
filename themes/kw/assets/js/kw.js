// Kw’s JS
// Copyright © 2013 Kwpolska.

$('#kw-navbar-collapse').on('show.bs.collapse', function () {
    $('#kw-navbar-collapse-icon').html('<i class="icon-chevron-up"></i>');
});

$('#kw-navbar-collapse').on('hide.bs.collapse', function () {
    $('#kw-navbar-collapse-icon').html('<i class="icon-chevron-down"></i>');
});