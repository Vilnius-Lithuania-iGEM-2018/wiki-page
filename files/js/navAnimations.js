var dict = [{          
    key:   0,
    value: ".sub-menu__project-sub-menu",
    hovered: false
},
{          
    key:   1,
    value: ".sub-menu__parts-sub-menu",
    hovered: false
},
{          
    key:   2,
    value: ".sub-menu__notebook-sub-menu",
    hovered: false
},
{          
    key:   3,
    value: ".sub-menu__humanpractices-sub-menu",
    hovered: false
},
{          
    key:   4,
    value: ".sub-menu__team-sub-menu",
    hovered: false
}];

$(document).ready(function() {
    $('.nav__nav-items>li>a').mouseover(function() {
        var childIndex = $(this.parentElement).index();
        toggleSubMenu(childIndex,true);
    })

    $('.nav__nav-items>li>a').mouseleave(function() {
        var child = $(this.parentElement).index();
        setTimeout(function(){toggleSubMenu(child,false)},5000);
    })
})

function toggleSubMenu(childIndex, show) {
    if (show) {
        checkOtherHoveredIcons(childIndex);
        dict[childIndex].hovered = true;
        showMenu(childIndex);
    } else {
        hideMenu(childIndex);
    }
}

function showMenu(childIndex) {
    $(dict[childIndex].value).css('visibility','visible');
    $(dict[childIndex].value).css('opacity','1');
    $(dict[childIndex].value).css('transform','translateY(0)');
}

function hideMenu(childIndex) {
    var isHovered = $(dict[childIndex].value).is(":hover");
    if (!isHovered)
    {
        $(dict[childIndex].value).css('visibility','hidden');
        $(dict[childIndex].value).css('opacity','0');
        $(dict[childIndex].value).css('transform','translateY(30vh)');
    }
}

function checkOtherHoveredIcons(index) {
    dict.forEach(element => {
        if (element.key != index) {
            if (element.hovered) {
                hideMenu(element.key)
                element.hovered = false;
            }
        }
    });

    $('.sub-menu-li').mouseover(function() {
        var item = $(this).attr("name");
        $('.liposome-exposition').attr('src', '/files/images/' + item+'.mp4');
        $('.liposome-video')[0].load();
        $('.liposome-video')[0].play();
    })
}