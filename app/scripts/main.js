'use strict';
(function($) {
    $(document).ready(function() {
        $('.nav-region > li > a').on('click', function(e) {
            e.preventDefault();
            $(this).closest('.nav-region').find('> li').removeClass('active');
            $(this).parent().addClass('active');

            $(this).closest('.city-picker').find('.nav-city').html($(this).next().html());
        });

        $('.city-picker').on('click', '.nav-city > li > a', function(e) {
            e.preventDefault();
            $(this).closest('.nav-city').find('> li').removeClass('active');
            $(this).parent().addClass('active');
        });

        $('[data-toggle="region"]').on('click', function(e) {
            e.preventDefault();

            var region = $(this).find('.region').text();
            $(this).nextAll('.city-picker-wraper').toggle();
            var cityPicker = $(this).nextAll('.city-picker-wraper').find('.city-picker');

            cityPicker.find('.nav-region, .nav-city').find('li').removeClass('active');

            cityPicker.find('[data-region="' + region + '"]').parent().addClass('active');

            cityPicker.find('.nav-city').html(cityPicker.find('[data-region="' + region + '"]').next().html());

            var city = $(this).next().find('.city').text();
            cityPicker.find('.nav-city [data-city="' + city + '"]').parent().addClass('active');
        });
    });
})(jQuery);
