$(document).ready(function () {

    onScreen('animateOnScreen', 'fadeInDown');

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

const onScreen = (elementsClassName, animationName) => {
    $(`.${elementsClassName}`).each(function () {
        const $elem = $(this);
        const top = $elem.offset().top;
        const bottom = top + $elem.height();
        const pageHeight = $(window).height();
        let pageScroll = $('body').scrollTop();
        let pageScrollFull = pageScroll + pageHeight;
        if (top > pageScroll && bottom < pageScrollFull + 150) {
            $elem.addClass(`animated ${animationName}`);
        }
        $(document).on('scroll', function () {
            pageScroll = $(this).scrollTop();
            pageScrollFull = pageScroll + pageHeight;
            if (top > pageScroll && bottom < pageScrollFull + 150) {
                if (!$elem.hasClass('animated')) {
                    $elem.addClass(`animated ${animationName}`);
                }
            }
        });
    });
}