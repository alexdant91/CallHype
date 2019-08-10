$(document).ready(function () {
    // CONFIGURATION
    const _url = "";
    const _method = "POST"

    // INIT
    onScreen('animateOnScreen', 'fadeInDown');

    // Const elements
    const $contactUs = $('#contact-us');
    $contactUs.on('submit', function () {
        const data = new FormData(this);
        $.ajax({
            url: _url,
            cache: false,
            processData: false,
            contentType: false,
            method: _method,
            data: data,
            success: function (data) {
                // Handle the result and display the correct message
            },
            error: function (a, b, c) {
                // Handle the result and display an error message
            }
        });
    });

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
    let offset = 150;
    $(`.${elementsClassName}`).each(function () {
        const $elem = $(this);
        let $offset = $elem.data('offset');
        // Find the data option
        offset = $offset != undefined ? $offset : offset;
        animationName = $elem.data('animation') != undefined ? $elem.data('animation') : animationName;
        // END data option
        const top = $elem.offset().top;
        const bottom = top + $elem.height();
        const pageHeight = $(window).height();
        let pageScroll = $('body').scrollTop();
        let pageScrollFull = pageScroll + pageHeight;
        if (top > pageScroll && bottom < pageScrollFull + offset) {
            $elem.addClass(`animated ${animationName}`);
        }
        $(document).on('scroll', function () {
            pageScroll = $(this).scrollTop();
            pageScrollFull = pageScroll + pageHeight;
            if (top > pageScroll && bottom < pageScrollFull + offset) {
                if (!$elem.hasClass('animated')) {
                    $elem.addClass(`animated ${animationName}`);
                }
            }
        });
    });
}