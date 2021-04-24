$(function() {
    // trackScrollOpacity();
});

function trackScrollOpacity() {
    let $window = $(window);
    let $trackables = $('.opacity-on-scroll');

    let putScroll = (node, windowTop) => {
        let scrolled = windowTop - node.offset().top + 160;
        let nodeHeight = node.height();
        let scrollOpacity = (nodeHeight - scrolled) / nodeHeight;

        // node.css('--scroll-opacity', clamp(0, scrollOpacity, 1));
    }

    $window.on('scroll', function() {
        let windowTop = $window.scrollTop();
        $trackables.each(function() {
            putScroll($(this), windowTop);
        });
    }).trigger('scroll');
}

function clamp( min, it, max ) {
    if( it < min ) return min;
    if( it > max ) return max;
    return it;
}