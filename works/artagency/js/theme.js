(function ($) {
    'use strict';

    /*--------------------------------------------------------
     / 1. All Revolution Slider
     /--------------------------------------------------------*/
    var revapi = jQuery('#rev_slider_1').show().revolution({
        delay: 5000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        sliderLayout: 'fullscreen',
        navigation: {
            arrows: {
                enable: false
            },
            bullets: {
                enable: true,
                hide_onleave: false,
                direction: 'vertical',
                style: 'custom',
                container: "slider",
                h_align: "right",
                v_align: "center",
                h_offset: 50,
                v_offset: 0,
                space: 20
            }
        }
    });
    var revapi2 = jQuery('#rev_slider_2').show().revolution({
        delay: 5000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        sliderLayout: 'fullscreen',
        navigation: {
            arrows: {
                enable: true,
                style: 'uranus',
                hide_onmobile: false,
                hide_over: 9999,
                hide_onleave: false,
                hide_under: 0,
                left: {
                    container: "slider",
                    h_align: "left",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                },
                right: {
                    container: "slider",
                    h_align: "right",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        }
    });

    /*--------------------------------------------------------
     / 2. All Suffle
     /--------------------------------------------------------*/
    $(window).on('load', function () {
        if ($(".shafull_container").length > 0)
        {
            var $grid = $('.shafull_container');
            $grid.shuffle({
                itemSelector: '.shaf_item',
                sizer: '.shaf_sizer'
            });
            /* reshuffle when user clicks a filter item */
            $('.shaf_filter li').on('click', function () {
                // set active class
                $('.shaf_filter li').removeClass('active');
                $(this).addClass('active');
                // get group name from clicked item
                var groupName = $(this).attr('data-group');
                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        }
    });
    /*--------------------------------------------------------
     / 3. All Skills
     /--------------------------------------------------------*/
    if ($(".cmskill").length > 0) {
        $('.single_team_1').on('mouseenter', function () {
            $(".cmskill", $(this)).each(function () {
                var pint = $(this).attr('data-skills');
                var decs = pint * 100;
                var grs = $(this).attr('data-gradientstart');
                var gre = $(this).attr('data-gradientend');

                $(this).circleProgress({
                    value: pint,
                    startAngle: -Math.PI / 4 * 2,
                    fill: {gradient: [[grs, 1], [gre, .2]], gradientAngle: Math.PI / 4 * 2},
                    thickness: 5,
                    animation: {duration: 1800},
                    size: 60,
                    emptyFill: "rgba(0, 0, 0, 0)",
                    lineCap: "square"
                }).on('circle-animation-progress', function (event, progress) {
                    $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
                });
            });
        });
    }

    if ($(".completeRate").length > 0) {
        var kpr = true;
        $('.completeRate').appear();
        $('.completeRate').on('appear', function () {
            if (kpr == true) {
                $(".completeRate").each(function () {
                    var pint = $(this).attr('data-skills');
                    var decs = pint * 100;
                    var grs = $(this).attr('data-gradientstart');
                    var gre = $(this).attr('data-gradientend');

                    $(this).circleProgress({
                        value: pint,
                        startAngle: -Math.PI / 4 * 2,
                        fill: {gradient: [[grs, 1], [gre, .2]], gradientAngle: Math.PI / 4 * 2},
                        lineCap: 'square',
                        thickness: 3,
                        animation: {duration: 1800},
                        size: 262,
                        emptyFill: "rgba(248, 248, 248, 1)"
                    });
                });
                kpr = false;
            }
        });
    }

    if ($(".astcs_1").length > 0) {
        var ast1 = true;
        $('.astcs_1').appear();
        $('.astcs_1').on('appear', function () {
            if (ast1 == true) {
                $(".astcs_1").each(function () {
                    var pint = $(this).attr('data-skills');
                    var decs = pint * 100;
                    var grs = $(this).attr('data-gradientstart');
                    var gre = $(this).attr('data-gradientend');

                    $(this).circleProgress({
                        value: pint,
                        startAngle: -Math.PI / 4 * 2,
                        fill: {gradient: [[grs, 1], [gre, .2]], gradientAngle: Math.PI / 4 * 2},
                        lineCap: 'square',
                        thickness: 3,
                        animation: {duration: 1800},
                        size: 180,
                        emptyFill: "rgba(248, 248, 248, 1)"
                    }).on('circle-animation-progress', function (event, progress) {
                        $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
                    });
                });
                ast1 = false;
            }
        });
    }

    var ssa = true;
    $('.ast_tab_2_control a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if (target == '#ast_tc_3' && ssa == true) {
            $(target + " .ss_area").each(function () {
                var datacount = $(this).attr("data-skill");
                $(".ssa_inner", this).animate({'width': datacount + '%'}, 4000);
                $(this).find('span').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 4000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
            });
            ssa = false;
        }
    });

    if ($(".ss_area").length > 0) {
        $('.ss_area').appear();
        $('.ss_area').on('appear', function () {
            if (ssa == true) {
                $(".ss_area").each(function () {
                    var datacount = $(this).attr("data-skill");
                    $(".ssa_inner", this).animate({'width': datacount + '%'}, 4000);
                    $(this).find('span').each(function () {
                        var $this = $(this);
                        $({Counter: 0}).animate({Counter: datacount}, {
                            duration: 4000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter) + '%');
                            }
                        });
                    });
                });
                ssa = false;
            }
        });
    }
    /*--------------------------------------------------------
     / 4. All Testimonial and slider
     /--------------------------------------------------------*/
    if ($('.team_slider_1').length > 0) {
        $('.team_slider_1').owlCarousel({
            loop: false,
            margin: 30,
            responsiveClass: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    if ($('.featureSlide').length > 0) {
        $('.featureSlide').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            smartSpeed: 1000,
            dots: false,
            nav: false,
            navText: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1400: {
                    items: 5
                }
            }
        });
    }

    if ($('.wwd_slide').length > 0) {
        $('.wwd_slide').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            smartSpeed: 700,
            dots: false,
            nav: false,
            navText: false
        });
    }

    if ($('.client_slider_1').length > 0) {
        $('.client_slider_1').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    }

    if ($('.ab_slider').length > 0) {
        $('.ab_slider').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            items: 1,
            navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>']
        });
    }

    if ($('.work_loop_slider').length > 0) {
        $('.work_loop_slider').owlCarousel({
            loop: true,
            margin: 2,
            dots: false,
            nav: true,
            autoWidth: true,
            items: 3,
            navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                760: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.team_slider_2').length > 0) {
        $('.team_slider_2').owlCarousel({
            loop: false,
            margin: 2,
            responsiveClass: true,
            dots: false,
            nav: true,
            navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.testimonial_slider_2').length > 0) {
        $('.testimonial_slider_2').owlCarousel({
            loop: false,
            margin: 30,
            responsiveClass: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.client_slider_2').length > 0) {
        $('.client_slider_2').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                767: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }

    if ($('.service_slider').length > 0) {
        $('.service_slider').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            dots: true,
            nav: false,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                992: {
                    items: 3,
                    dots: true
                }
            }
        });
    }

    if ($('.work_loop_slider_2').length > 0) {
        $('.work_loop_slider_2').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: false,
            nav: true,
            navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    if ($('.testimonial_slider_3').length > 0) {
        $('.testimonial_slider_3').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: true,
            nav: false,
            items: 1
        });
    }

    if ($('.client_slider_3').length > 0) {
        $('.client_slider_3').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: false,
            nav: true,
            navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    }

    if ($('.team_slider_4').length > 0) {
        $('.team_slider_4').owlCarousel({
            loop: false,
            margin: 0,
            responsiveClass: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.team_slider_5').length > 0) {
        $('.team_slider_5').owlCarousel({
            loop: false,
            margin: 0,
            responsiveClass: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        });
    }

    if ($('.boxicon_slide').length > 0) {
        $('.boxicon_slide').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 300,
            slideSpeed: 500,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                767: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1199: {
                    items: 5
                }
            }
        });
    }

    if ($('.work_loop_slider_3').length > 0) {
        $('.work_loop_slider_3').owlCarousel({
            loop: false,
            margin: 0,
            responsiveClass: true,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ['<i class="arrowicon-arrows-4"></i>', '<i class="arrowicon-arrows-3"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1199: {
                    items: 4
                },
                1600: {
                    items: 5
                }
            }
        });
    }

    if ($('.service_slider_2').length > 0) {
        $('.service_slider_2').owlCarousel({
            loop: false,
            margin: 30,
            responsiveClass: true,
            autoplay: false,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.bpRelateSlide').length > 0) {
        $('.bpRelateSlide').owlCarousel({
            loop: false,
            margin: 30,
            smartSpeed: 300,
            slideSpeed: 500,
            responsiveClass: true,
            autoplay: true,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.team_slider_6').length > 0) {
        $('.team_slider_6').owlCarousel({
            loop: false,
            margin: 30,
            responsiveClass: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });
    }

    $('.work_loop_slider_2').on('mouseover', '.owl-item', function () {
        var $this = $(this);
        var hover_index = $this.index();
        $($this).addClass('expandCurrent').addClass('hovernow');
        $('.work_loop_slider_2 .owl-item').eq(hover_index - 1).addClass('squize_left');
        $('.work_loop_slider_2 .owl-item').eq(hover_index + 1).addClass('squize_right');

    });

    $('.work_loop_slider_2').on('mouseout', '.owl-item', function () {
        var $this = $(this);
        $this.removeClass('expandCurrent').removeClass('hovernow');
        $('.work_loop_slider_2 .owl-item').removeClass('squize_left').removeClass('squize_right');

    });

    /*--------------------------------------------------------
     / 5. Inner Column Inside
     /--------------------------------------------------------*/
    function tw_stretch() {
        var i = $(window).width();
        $(".row .tw-stretch-element-inside-column").each(function () {
            var $this = $(this),
                    row = $this.closest(".row"),
                    cols = $this.closest('[class^="col-"]'),
                    colsheight = $this.closest('[class^="col-"]').height(),
                    rect = this.getBoundingClientRect(),
                    l = row[0].getBoundingClientRect(),
                    s = cols[0].getBoundingClientRect(),
                    r = rect.left,
                    d = i - rect.right,
                    c = l.left + (parseFloat(row.css("padding-left")) || 0),
                    u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
                    p = s.left,
                    f = i - s.right,
                    styles = {
                        "margin-left": 0,
                        "margin-right": 0
                    };
            if (Math.round(c) === Math.round(p)) {
                var h = parseFloat($this.css("margin-left") || 0);
                styles["margin-left"] = h - r;
            }
            if (Math.round(u) === Math.round(f)) {
                var w = parseFloat($this.css("margin-right") || 0);
                styles["margin-right"] = w - d;
            }
            $this.css(styles);
        });
    }
    tw_stretch();

    /*--------------------------------------------------------
     / 6. Work Toggle and Scroll Off
     /--------------------------------------------------------*/
    var wn2 = $('.work_nav_2');
    if (wn2.length > 0) {
        $('.work_nav_2 h6').on('click', function () {
            wn2.toggleClass('active');
        });
    }

    $('.scrollOff').on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000);
        return false;
    });

    /*--------------------------------------------------------
     / 7. Typeping Animation
     /--------------------------------------------------------*/
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };
    window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap{border-right: 10px solid #fff;}";
        document.body.appendChild(css);
    };

    /*--------------------------------------------------------
     / 8. Fun Fact Count
     /----------------------------------------------------------*/
    var skl = true;
    $('.funfact').appear();
    $('.funfact').on('appear', function () {
        if (skl)
        {
            $('.timer').each(function () {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 4000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '<span class="countSpan">' + '$1' + '</span>' + '$2');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });

    /*--------------------------------------------------------
     / 9. Back To Top and Preloader
     /----------------------------------------------------------*/
    var back = $("#backtotop"),
            body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
        {
            back.css({bottom: '50px', opacity: '1', visibility: 'visible'});
        } else
        {
            back.css({bottom: '-50px', opacity: '0', visibility: 'hidden'});
        }

    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });

    $(window).on('load', function () {
        if ($('.preloader').length > 0) {
            $('.preloader').delay(800).fadeOut('slow');
        }
    });

    /*--------------------------------------------------------
     / 10. Magnificant Popup
     /----------------------------------------------------------*/
    if ($('.popup_img').length > 0) {
        $('.popup_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            mainClass: 'mfp-zoom-in',
            tLoading: '',
            removalDelay: 500,
            callbacks: {
                imageLoadComplete: function () {
                    var self = this;
                    setTimeout(function () {
                        self.wrap.addClass('mfp-image-loaded');
                    }, 16);
                },
                close: function () {
                    this.wrap.removeClass('mfp-image-loaded');
                },
                beforeChange: function () {
                    this.items[0].src = this.items[0].src + '?=' + Math.random();
                }
            },
            closeBtnInside: false,
            closeOnContentClick: true,
            midClick: true
        });
    }

    $('.video_popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-zoom-in',
        tLoading: '',
        removalDelay: 500,
        callbacks: {
            imageLoadComplete: function () {
                var self = this;
                setTimeout(function () {
                    self.wrap.addClass('mfp-iframe-loaded');
                }, 16);
            },
            close: function () {
                this.wrap.removeClass('mfp-iframe-loaded');
            },
            beforeChange: function () {
                this.items[0].src = this.items[0].src + '?=' + Math.random();
            }
        },
        closeBtnInside: false,
        closeOnContentClick: true,
        midClick: true
    });

    /*--------------------------------------------------------
     / 11. Menu PopUp
     /---------------------------------------------------------*/
    $(document).on('ready', function () {
        $("#close-popup").on('click', function (e) {
            e.preventDefault();
            $("body").removeClass("menu__open show-overlay-nav")
        })
        $(".hamburger").on("click", function () {
            $(this).toggleClass("is_active"), $("body").toggleClass("menu__open")
        }), $(document).keyup(function (e) {
            27 === e.keyCode && $(".menu__open .hamburger").on('click')
        }), $("#open-overlay-nav").on("click", function () {
            $("body").toggleClass("show-overlay-nav")
        }), $(".dl-menu__wrap").dlmenu({
            animationClasses: {
                classin: "dl-animate-in-3",
                classout: "dl-animate-out-3"
            }
        });
    });


    /*--------------------------------------------------------
     / 12. Fixed Header
     /--------------------------------------------------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40)
        {
            $("#fix_nav, #fix_nav_2").addClass('fixedHeader animated fadeInUp');
        } else
        {
            $("#fix_nav, #fix_nav_2").removeClass('fixedHeader animated fadeInUp');
        }
        scroll_topmenu();
        scroll_dlmenu();
        scroll_sidemenu();
    });

    $('.mainmenu ul li.scroll > a, .menuMenu3 ul li.scroll > a, .mainMenu_4 ul li.scroll > a, .mainMenu_6 ul li.scroll > a').on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000);
        return false;
    });
    $('.dl-menu__wrap ul li.scroll > a').on('click', function () {

        if (!$(this).parent().hasClass('menu-item-has-children'))
        {
            $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000, 'easeInExpo', function () {
                $("body").removeClass("menu__open show-overlay-nav");
            });
            return false;
        } else {
            $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000, 'easeInExpo');
        }
    });

    /*--------------------------------------------------------
     / 13. Scroll Menu Function
     /--------------------------------------------------------*/
    function scroll_topmenu() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 120;
        var rangeBottom = 500;

        $('.mainmenu, .menuMenu3, .mainMenu_4, .mainMenu_6').find('.scroll > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.mainmenu li.scroll, .menuMenu3 li.scroll, .mainMenu_4 li.scroll, .mainMenu_6 li.scroll').removeClass('active').eq(i).addClass('active');
            }
        });
    }
    function scroll_dlmenu() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 120;
        var rangeBottom = 500;

        $('.dl-menu__wrap').find('.scroll > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.dl-menu__wrap li.scroll').removeClass('active').eq(i).addClass('active');
            }
        });
    }

    function scroll_sidemenu() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.mainMenu_5').find('.scroll > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.mainMenu_5 ul li.scroll').removeClass('active').eq(i).addClass('active');
            }
        });
    }

    /*--------------------------------------------------------
     / 14. Mobile Menu
     /--------------------------------------------------------*/
    $(window).on("load resize", function(e){
        if ($(window).width() < 991) {
            $('.mobileMenuBar a').on('click', function (e) {
                e.preventDefault();
                $('.mainmenu > ul, .mainMenu_4 > ul, .mainMenu_6 > ul').slideToggle();
            });
            $('.mainmenu ul li.menu-item-has-children, .mainMenu_4 ul li.menu-item-has-children, .mainMenu_6 ul li.menu-item-has-children').each(function () {
                var $this = $(this);
                $this.append('<span class="submenu_toggler"><i class="fa fa-caret-down"></i></span>');
            });
            $('.mainmenu ul li.menu-item-has-children > span.submenu_toggler, .mainMenu_4 ul li.menu-item-has-children > span.submenu_toggler, .mainMenu_6 ul li.menu-item-has-children > span.submenu_toggler').on('click', function () {
                var $this = $(this);

                if ($(this).hasClass('active-span')) {
                    $('i', $this).removeClass('fa-caret-up').addClass('fa-caret-down');
                } else {
                    $('i', $this).addClass('fa-caret-up').removeClass('fa-caret-down');
                }
                $(this).prev('ul.sub-menu').slideToggle();
                $(this).toggleClass('active-span');
            });
        };
    });

    /*--------------------------------------------------------
     / 15. Right Side Fixed Menu
     /----------------------------------------------------------*/
    $('.mainMenu_5 ul li.scroll > a').on('click', function () {
        if ($(this).parent().hasClass('has-child'))
        {
            $(this).parent().children('ul').slideToggle('slow');
        }
        $('html, body').animate({scrollTop: $(this.hash).offset().top + 10}, 1000);
        return false;
    });

    /*--------------------------------------------------------
     / 16. Contact Form Submission
     /--------------------------------------------------------*/
    $('#contact_form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);

        $('button[type="submit"]', this).attr('disabled', 'disabled');
        $('.ast_loader', this).fadeIn();

        var form_data = $this.serialize();

        var required = 0;
        $(".required", this).each(function () {
            if ($(this).val() === '')
            {
                $(this).addClass('reqError');
                required += 1;
            } else
            {
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });

        if (required === 0) {
            $.ajax({
                type: 'POST',
                url: 'ajax/mail.php',
                data: {form_data: form_data},
                success: function (data) {
                    $('button[type="submit"]', $this).removeAttr('disabled');
                    $('.ast_loader', $this).fadeOut();

                    $this.remove('.ast_con_message');
                    $('.ast_con_message', $this).fadeIn().html('Congratulation! Message successfully sent.');
                    setTimeout(function () {
                        $('.ast_con_message', $this).fadeOut().html('');
                    }, 5000);
                }
            });
        } else {
            $('button[type="submit"]', $this).removeAttr('disabled');
            $('.ast_loader', $this).fadeOut();
            $('.ast_con_message', $this).fadeOut().html('');
        }

    });
    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });


    $('.ast_tab_3_controll a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        if($(window).width() < 991){
            $('html, body').animate({scrollTop: $(target).offset().top - 150}, 1000);
        }
    });


})(jQuery);
