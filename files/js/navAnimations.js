$(document).ready(function() {
    $('.nav__nav-items>li>a').mouseover(function() {
        var child = $(this.parentElement).index();
        showSubMenu(child,true);
    })

    $('.nav__nav-items>li>a').mouseleave(function() {
        var child = $(this.parentElement).index();
        if($(this).attr('clicked') != 'yes') {
            showSubMenu(child,false);
        }
    })

    $('.nav__nav-items>li>a').click(function() {
        var child = $(this.parentElement).index();
        $(this).css('animation','navClick 1s linear');
        $(this).attr('clicked', 'yes'); 
        showSubMenu(child,true);
    })
})

function showSubMenu(x, show) {

var dict = [{          
                key:   0,
                value: ".sub-menu__project-sub-menu"
            },
            {          
                key:   1,
                value: ".sub-menu__parts-sub-menu"
            },
            {          
                key:   2,
                value: ".sub-menu__notebook-sub-menu"
            },
            {          
                key:   3,
                value: ".sub-menu__humanpractices-sub-menu"
            },
            {          
                key:   4,
                value: ".sub-menu__team-sub-menu"
            }];

    if (show) {
        $(dict[x].value).css('visibility','visible');
        $(dict[x].value).css('opacity','1');
        $(dict[x].value).css('transform','translateY(0)');
    } else {
        $(dict[x].value).css('visibility','hidden');
        $(dict[x].value).css('opacity','0');
        $(dict[x].value).css('transform','translateY(30vh)');
    }
}