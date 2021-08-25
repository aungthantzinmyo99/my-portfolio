
    

    let currentHeight=$(window).height();

    $(window).scroll(function(){
        let currentPosition=$(this).scrollTop();
        if(currentPosition>=currentHeight){
            $(".site-nav").addClass("site-nav-scroll");
        }
        else{
            $(".site-nav").removeClass("site-nav-scroll");
            setActive("home");
        }
       
    })

    $(".navbar-toggler").click(function(){
        let result=$(".navbar-collapse").hasClass("show");

        if(result){
            $(".menu-icon").addClass("fa-bars").removeClass("fa-times");
        }else{
            $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
        }
    })

    function setActive(current){
        $(".nav-link").removeClass("current-section");
        $(`.nav-link[href='#${current}']`).addClass('current-section');
        
    }

    function navScroll(){
        let currentSection=$("section[id]");
        currentSection.waypoint(function(direction){
            if(direction=="down"){
                let currentSectionId=$(this.element).attr("id");
                setActive(currentSectionId);
            }
        })
        currentSection.waypoint(function(direction){
            if(direction=="up"){
                let currentSectionId=$(this.element).attr("id");
                setActive(currentSectionId);
            }
        },{offset:"150px"})
    }

    navScroll();


    $(window).on("load",function(){
        $(".loader-container").fadeOut(500,function(){
            $(this).remove();
        })
    })


    $(".counter").counterUp({
        delay:5,
        time:700
    })
    new WOW().init();