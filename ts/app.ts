import "../css/style.css";
import "../css/colors/custom.css";
declare global{
interface JQuery{
    scrollspy(opt:{offset:number}):void;
    isotope(opt: {
        filter: string,
        layoutMode?: string,
        animationOptions: {
            animationDuration?: number,
            duration?: number,
            easing: string,
            queue?:boolean
        }
    }): void;
    magnificPopup(obj: {
        type:string,
        closeOnContentClick?:boolean, 
        mainClass: 'mfp-fade',
        gallery?: {
            enabled:boolean, 
            navigateByImgClick: boolean,
            preload: number[]
        },
        disableOn?:number, 
        removalDelay?: number,
        preloader?: false,
        fixedContentPos?: false
    }):void;
    owlCarousel(opt: {
        autoPlay: number,
            stopOnHover: boolean,
            navigation: boolean,
            paginationSpeed: number,
            goToFirstSpeed: number,
            singleItem: boolean,
            autoHeight: boolean
    }):any;
}
}
export class App{
    public initStickyMenu(){
        $(window).on("scroll", () => {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    }
    public initSmoothLink(){
        $('.navbar-nav a').on('click', (event) => {
            var $anchor = $(event.target).closest('a');
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        $('a.smooth-scroll').on('click', (event) => {
            var $anchor = $(event.target).closest('a');
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }
    public initScrollSpy(){
        
        $("#navbarCollapse").scrollspy({
            offset: 20
        });
    }
    public initCounterUp(){
        var a = 0;
        $(window).on("scroll", () => {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each((idx, element) => {
                    var $this = $(element),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: parseFloat($this.text())
                    }).animate({
                            countNum: countTo
                        },

                        {

                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                });
                $('.counter-value').each((idx, element)=> {
                    var $this = $(element),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: parseFloat($this.text())
                    }).animate({
                            countNum: countTo
                        },

                        {

                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                });
                a = 1;
            }
        });
        
    }
    public initPortfolioFilter(){
        $(window).on('load', function () {
            //PORTFOLIO FILTER 
            var $container = $('.projects-wrapper');
            var $filter = $('#filter');
            // Initialize isotope 
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            // Filter items when filter link is clicked
            $filter.find('a').on("click",function() {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });
    }
    public initMagnificPopup(){
        $('.mfp-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });
        $('.video-play-icon-trigger').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
    public initTestimonial(){
        $("#testi").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true
        });
    }

    public init(){
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollSpy();
        this.initCounterUp();
        this.initPortfolioFilter();
        this.initMagnificPopup();
        this.initTestimonial();
    }
    
}

(() => {
    new App().init();
})();