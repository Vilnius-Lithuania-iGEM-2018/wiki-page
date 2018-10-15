var dict = [{
    key: 0,
    value: ".sub-menu__project-sub-menu",
    hovered: false
},
{
    key: 1,
    value: ".sub-menu__parts-sub-menu",
    hovered: false
},
{
    key: 2,
    value: ".sub-menu__notebook-sub-menu",
    hovered: false
},
{
    key: 3,
    value: ".sub-menu__humanpractices-sub-menu",
    hovered: false
},
{
    key: 4,
    value: ".sub-menu__team-sub-menu",
    hovered: false
}];

var inverted = false;

$(document).ready(function () {
    $('.navigation-list-item-anchor').mouseover(function () {
        var childIndex = $(this.parentElement).index();
        toggleSubMenu(childIndex, true);
    })

    $('.navigation-list-item-anchor').mouseleave(function () {
        var child = $(this.parentElement).index();
        setTimeout(function () { toggleSubMenu(child, false) }, 5000);
    })

    $('.sub-menu-li > a').mouseover(function () {
        var item = $(this).parent().attr("name");
        $('.liposome-exposition').attr('src', '/files/images/Expositions/' + item + '.mp4');
        $('.liposome-video')[0].load();
        $('.liposome-video')[0].play();
    })

    $('.invert-image').click(function () {
        inverted = !inverted;

        if (inverted) {
            $("body").css("background-color", "#332f2f");
            $("nav").css("filter", "invert(100%)");
            $(".text-wall-area-box").css("filter", "invert(100%)");
            $(".pagination .pagination-text").css("filter", "invert(100%)");
            $("section").css("filter", "invert(100%)");
            $("#back").css("filter", "invert(100%)");
            $(".carrot-next-icon").css("filter", "invert(100%)");
            $(".invert-image").css("background-color", "#332f2f");
            $(".invert-image").css("filter", "invert(0%)");
            $(".invert-text").css("color", "#fff");

            $(".liposome-exposition").attr("src", "/files/images/invertedExpositions/Attributions.mp4")
            $('.liposome-video')[0].load();
            $(".static-image").attr("src", "/files/images/invertedExpositions/static.jpg")
            $(".static-image").attr("srcset", "/files/images/invertedExpositions/static.jpg")
            $('.sub-menu-li').unbind()
            $('.sub-menu-li').mouseover(function () {
                var item = $(this).attr("name");
                $('.liposome-exposition').attr('src', '/files/images/invertedExpositions/' + item + '.mp4');
                $('.liposome-video')[0].load();
                $('.liposome-video')[0].play();
            })


        } else {
            $("body").css("background-color", "#e7e7e8");
            $("nav").css("filter", "invert(0%)");
            $("section").css("filter", "invert(0%)");
            $(".text-wall-area-box").css("filter", "invert(0%)");
            $(".pagination .pagination-text").css("filter", "invert(0%)");
            $("#back").css("filter", "invert(0%)");
            $(".carrot-next-icon").css("filter", "invert(0%)");
            $(".invert-image").css("background-color", "#e7e7e8");
            $(".invert-image").css("filter", "invert(0%)");
            $(".invert-text").css("color", "#000");

            $(".liposome-exposition").attr("src", "/files/images/Attributions.mp4")
            $('.liposome-video')[0].load();
            $(".static-image").attr("src", "/files/images/Expositions/static.png")
            $(".static-image").attr("srcset", "/files/images/Expositions/static.png")
            $('.sub-menu-li').unbind()
            $('.sub-menu-li').mouseover(function () {
                var item = $(this).attr("name");
                $('.liposome-exposition').attr('src', '/files/images/Expositions/' + item + '.mp4');
                $('.liposome-video')[0].load();
                $('.liposome-video')[0].play();
            })

        }
    });
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
    $(dict[childIndex].value).css('visibility', 'visible');
    $(dict[childIndex].value).css('opacity', '1');
    $(dict[childIndex].value).css('transform', 'translateY(0)');
}

function hideMenu(childIndex) {
    var isHovered = $(dict[childIndex].value).is(":hover");
    if (!isHovered) {
        $(dict[childIndex].value).css('visibility', 'hidden');
        $(dict[childIndex].value).css('opacity', '0');
        $(dict[childIndex].value).css('transform', 'translateY(30vh)');
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
}