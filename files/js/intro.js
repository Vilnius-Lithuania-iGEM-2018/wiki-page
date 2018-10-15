var clickedTimes = 0;
var buttonsStatus = [
    {
        name: "lipid_phase",
        status: false
    },
    {
        name: "water_phase",
        status: false
    },
    {
        name: "oil_phase",
        status: false
    },
]

function checkForStatuses(myArray) {
    var counter = 0;
    myArray.forEach(element => {
        if (element.status) {
            counter += 1;
        }
    })
    return counter;
}

function userInteraction() {
    clickedTimes++;
    if (clickedTimes == 1) {
        $(".pulsing-logo__image").css("display", "none")
        $(".pulsing-logo__image").css("width", "1.5em");
        $(".pulsing-logo__image").css("height", "3em");
        $(".pulsing-logo__project-text").fadeIn(4000);
        $(".pulsing-logo__project-text").css("display", "block");
        $(".pulsing-logo__project-text").css("color", "white")
    } else {
        if (clickedTimes == 2) {
            $(".pulsing-logo").fadeOut(100);
            if ($(window).width() > 500) {
                $(".canals__image").attr("src", "files/images/icons/intro/animation/kanalėliai-visi.gif");
            } else {
                $(".canals__image").attr("src", "files/images/icons/intro/animation/mobile-kanaleliai.gif");
            }
            $(".canals__image").css("display", "inline-block");
            setTimeout(function () {
                $(".buttons").css("opacity", "1")
                $(".buttons").css("z-index", "11")
            }, 2000)
        }
    }
}

$(document).ready(function () {

    $(window).click(function () {
        userInteraction();
    })
    $(window).keypress(function () {
        userInteraction();
    })

    $(".button-anchor").click(function () {

        var selectedElementName = $(this).find("img").attr("id");
        buttonsStatus.forEach(function (button) {
            if (button.name == selectedElementName) {
                if (!button.status) {
                    button.status = true;
                    $(".button-anchor").find("#" + selectedElementName).attr("src", "files/images/icons/intro/buttons/on-gif.gif");
                    if (selectedElementName == "lipid_phase") {
                        $(".canals__lipid-image").css("display", "block")

                        if ($(window).width() > 500) {
                            $(".canals__lipid-image").attr("src", "files/images/icons/intro/animation/pirmas.gif");
                        } else {
                            $(".canals__lipid-image").attr("src", "files/images/icons/intro/animation/pirmas-mobile.gif");

                        }
                    }
                    if (selectedElementName == "water_phase") {
                        $(".canals__water-image").css("display", "block")

                        if ($(window).width() > 500) {
                            $(".canals__water-image").attr("src", "files/images/icons/intro/animation/trečias.gif");
                        } else {
                            $(".canals__water-image").attr("src", "files/images/icons/intro/animation/antras-mobile.gif");

                        }
                    }
                    if (selectedElementName == "oil_phase") {
                        $(".canals__oil-image").css("display", "block")

                        if ($(window).width() > 500) {
                            $(".canals__oil-image").attr("src", "files/images/icons/intro/animation/antras.gif");
                        } else {
                            $(".canals__oil-image").attr("src", "files/images/icons/intro/animation/trečias-mobile.gif");

                        }                    }
                    setTimeout(function () {
                        $(".button-anchor").find("#" + selectedElementName).attr("src", "files/images/icons/intro/buttons/on-button.png")
                    }, 100);
                } else {
                    button.status = false;
                    $(".button-anchor").find("#" + selectedElementName).attr("src", "files/images/icons/intro/buttons/off-switch.gif");
                    setTimeout(function () {
                        $(".button-anchor").find("#" + selectedElementName).attr("src", "files/images/icons/intro/buttons/off-button.png")
                    }, 100);
                    if (selectedElementName == "lipid_phase") {
                        $(".canals__lipid-image").css("display", "none")
                        $(".canals__lipid-image").attr("src", "");
                    }
                    if (selectedElementName == "water_phase") {
                        $(".canals__water-image").css("display", "none")
                        $(".canals__water-image").attr("src", "");
                    }
                    if (selectedElementName == "oil_phase") {
                        $(".canals__oil-image").css("display", "none")
                        $(".canals__oil-image").attr("src", "");
                    }
                }
            }
        })
        if (checkForStatuses(buttonsStatus) == 3) {
            setTimeout(function () {
                $(".liposomes-first").attr("src", "files/images/icons/intro/animation/BEFONOLYPO.gif")
                setTimeout(function () {
                    $(".canals").css("transform", "translateY(-1000px)")
                    $(".logo").fadeOut()
                    $(".skip").fadeOut()
                    setTimeout(function () {

                        $("body").css("background-color", "#e7e7e8")
                        $(".buttons").hide()
                        setTimeout(function () {
                            $(".liposomes-first").css("display", "none")
                            window.location.replace("index.html");
                        }, 1000)
                    }, 1500)
                }, 6080)
            }, 3000)
        }
    })
})