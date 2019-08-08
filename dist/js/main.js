$(document).ready(function () {



});

const scrollSpy = ($target, offset = 0) => {
    let lastElemId = '';
    $('[scrollspy]').each(function () {
        const $elem = $(this);
        const top = $elem.offset().top;
        const bottom = top + $elem.height();
        $(document).on('scroll', function () {
            let pageScroll = $(this).scrollTop();
            let elemId = $elem.attr('id');
            if (pageScroll >= top - offset && pageScroll <= bottom - offset && lastElemId != elemId) {
                lastElemId = elemId;
                // Scroll is here
                $target.find('a').removeClass('active');
                $target.find(`[href="#${elemId}"]`).addClass('active');
            }
        });
    });
}
