


/*-------------------------------------------------*/
/* =  Full-window section
/*-------------------------------------------------*/

var windowHeight = jQuery(window).height(),
    topSection = jQuery('.home-fullscreen');
topSection.css('height', windowHeight);

jQuery(window).resize(function() {
    var windowHeight = jQuery(window).height();
    topSection.css('height', windowHeight);
});


//sticky header on scroll
jQuery(window).load(function() {
    jQuery(".sticky").sticky({
        topSpacing: 0
    });
});

