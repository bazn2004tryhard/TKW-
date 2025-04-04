$(document).ready(function () {
    const heroMap = new Map();
    heroMap.set(1, 'hero-first');
    heroMap.set(2, 'hero-second');
    heroMap.set(3, 'hero-third');
    heroMap.set(4, 'hero-fourth');
    heroMap.set(5, 'hero-fifth');
    heroMap.set(6, 'hero-sixth');
    heroMap.set(7, 'hero-seventh');

    function updateHeroSection(index) {
        let nextHero = heroMap.get(index);
        if (nextHero) {
            $('.hero-section').removeClass('active');
            $('#' + nextHero).addClass('active');
        } else {
            console.log('No hero found for index:' + index);

        }
    }

    $('#nextBtn').click(function () {
        let currentDot = $('.carousel-dot.active').removeClass('active');
        let nextDot = currentDot.next('.carousel-dot');
        nextDot = nextDot.length ? nextDot : $('.carousel-dot').first();
        nextDot.addClass('active');
        updateHeroSection(nextDot.index());
    })
    $('#prevBtn').click(function () {
        let currentDot = $('.carousel-dot.active').removeClass('active');
        let prevDot = currentDot.prev('.carousel-dot');
        prevDot = prevDot.length ? prevDot : $('.carousel-dot').last();
        prevDot.addClass('active');
        updateHeroSection(prevDot.index());
    })
});