$(document).ready(function(){

    //Event for Contact PopOver
    $('.headerContactIcon a').click(function(e) {
        e.preventDefault()
        $(this).toggleClass('active');
        $('.contactInfoPopOver').toggleClass('opened')
    });
    
    //Event forSEarch Icon
    $('.siteSearchInput a').click(function(e) {
        e.preventDefault();
        $('.siteSearchInput').toggleClass('expand')
    });


    //Event for Account PopOver
    $('.accountIcon').click(function(e) {
        e.preventDefault()
        $(this).toggleClass('active');
        $('.deskTopAccountDD').toggleClass('opened')
    });
    $('.accountButtonIcon').click(function(e) {
        e.preventDefault()
        $(this).toggleClass('active');
        $('.mobAccountDD').toggleClass('opened');
    });
    $('.accountMenuLink').click(function(e) {
        e.preventDefault()
        $(this).siblings('.accountSubMenu').slideToggle();
    })


    //Event For Mobile Hamburger Menu
    $('.mobHamMenuLink').click(function(e) {
        e.preventDefault()
        $('.hamMenuSection').addClass('opened')
    })
    $('.hamMenuLinks .subMenuLink').click(function(e) {
        e.preventDefault()
        $(this).siblings('.subMenuSection').addClass('opened')
    })
    $('.subMenuBC > a').click(function(e) {
        e.preventDefault();
        $(this).parents('.subMenuSection').removeClass('opened')
    })
    $('.closeHamMenu').click(function(e) {
        e.preventDefault();
        $(this).parents('.hamMenuSection').removeClass('opened')
    })


    $(document).mouseup(function(e) {
        //Hide Account DropDown
        var accountDropDown = $(".deskTopAccountDD");
        if ( (!accountDropDown.is(e.target) && accountDropDown.has(e.target).length === 0) ) {
            accountDropDown.removeClass('opened');
        }

        //Hide Contact Info PopOver 
        var contactInfoPopOver = $(".contactInfoPopOver");
        if ( (!contactInfoPopOver.is(e.target) && contactInfoPopOver.has(e.target).length === 0) ) {
            contactInfoPopOver.removeClass('opened');
        }

        //Hide Contact Info PopOver 
        var headerSearch = $(".siteSearchInput");
        if ( (!headerSearch.is(e.target) && headerSearch.has(e.target).length === 0) ) {
            headerSearch.removeClass('expand');
        }

    });
    

    //Owlo Carousel Function
    const initiateOwlCarosel = function (ele, options) {
        const carouselOption = Object.assign({}, options);
        // console.log('carouselOption', carouselOption)
        $(ele).owlCarousel(carouselOption);
    }

    //Philosophy List Carousel
    initiateOwlCarosel('.philosophyLists ul', {
        items: 3,
        autoWidth: true,
        loop:true,
        center: false,
        margin:24,
        nav: true,
        dots: true,
    })
    //Awards List Carousel
    initiateOwlCarosel('.awardsLists ul', {
        items: 2,
        autoWidth: true,
        loop:true,
        center: false,
        margin:24,
        dots: true,
        nav: true,
        navContainer: '#awardCarouselNav',
        dotsContainer: '#awardCarouselDot',
    })
    //Awards List Carousel
    initiateOwlCarosel('.activitySecList ul', {
        items: 2,
        autoWidth: true,
        loop:true,
        center: false,
        margin:24,
        dots: true,
        nav: true,
        navContainer: '#activityCarouselNav',
        dotsContainer: '#activityCarouselDot',
    })
    //Social Media Carousel
    initiateOwlCarosel('.socialSectionList ul', {
        items: 3,
        autoWidth: true,
        loop:true,
        center: false,
        margin:24,
        dots: false,
        nav: true,
    })


    //Board Of Director Content Event
    $('.bodList .bodImage').click( function(e) {
        e.preventDefault();
        var bodContentID = $(this).attr('data-bod');
        var bodContentEl = "[data-bod='" + bodContentID + "']";
        $('html, body').animate({
            scrollTop: $(bodContentEl).offset().top + 400
        }, 400);
        $(this).parent('li').hide();
        $('.bodDetailContent').removeClass('contentVisible');
        $(".bodContentWrap").find(bodContentEl).addClass('contentVisible'); 
    });
    
})