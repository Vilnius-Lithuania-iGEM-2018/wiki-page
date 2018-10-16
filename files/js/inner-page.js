
/* Page navigation state */

var directoryTree = [{
    id: 1,
    name: "project",
    content: [{
        id: 1,
        name: "Description",
        display: "Description",
        active: false
    },
    {
        id: 2,
        name: "Design",
        display: "Design",
        active: false,
        content: [
            {
                id: 1,
                name: "Liposomes",
                selector: "Liposomes",
                display: "Liposomes",
                active: false,
                abstract: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit modi aut eos repudiandae quod, illum iusto sunt soluta consectetur, ullam numquam nam, libero adipisci perspiciatis. Saepe enim sequi exercitationem accusamus? Aut, vel sunt, eos quidem distinctio mollitia molestiae quisquam nesciunt ea voluptate atque neque id harum cupiditate ab! Pariatur blanditiis quam recusandae excepturi quae? Perferendis, sequi. Ipsam dignissimos nesciunt delectus. Vel iusto neque, hic minima fuga cupiditate facilis debitis iste aliquam iure voluptatibus odio consequuntur molestiae quia possimus esse deleniti ut consectetur eveniet.",
                inner: true
            },
            {
                id: 2,
                name: "Ribosome modifications",
                selector: "Ribosome_modifications",
                display: "Ribosome modifications",
                active: false,
                abstract: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit modi aut eos repudiandae quod, illum iusto sunt soluta consectetur, ullam numquam nam, libero adipisci perspiciatis. Saepe enim sequi exercitationem accusamus? Aut, vel sunt, eos quidem distinctio mollitia molestiae quisquam nesciunt ea voluptate atque neque id harum cupiditate ab! Pariatur blanditiis quam recusandae excepturi quae? Perferendis, sequi. Ipsam dignissimos nesciunt delectus. Vel iusto neque, hic minima fuga cupiditate facilis debitis iste aliquam iure voluptatibus odio consequuntur molestiae quia possimus esse deleniti ut consectetur eveniet.",
                inner: true
            },
            {
                id: 3,
                name: "BAM complex",
                selector: "BAM_complex",
                display: "BAM complex",
                active: false,
                abstract: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit modi aut eos repudiandae quod, illum iusto sunt soluta consectetur, ullam numquam nam, libero adipisci perspiciatis. Saepe enim sequi exercitationem accusamus? Aut, vel sunt, eos quidem distinctio mollitia molestiae quisquam nesciunt ea voluptate atque neque id harum cupiditate ab! Pariatur blanditiis quam recusandae excepturi quae? Perferendis, sequi. Ipsam dignissimos nesciunt delectus. Vel iusto neque, hic minima fuga cupiditate facilis debitis iste aliquam iure voluptatibus odio consequuntur molestiae quia possimus esse deleniti ut consectetur eveniet.",
                inner: true
            },
            {
                id: 4,
                name: "RNA Thermoswitches",
                selector: "RNA_Thermoswitches",
                display: "RNA Thermoswitches",
                active: false,
                abstract: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit modi aut eos repudiandae quod, illum iusto sunt soluta consectetur, ullam numquam nam, libero adipisci perspiciatis. Saepe enim sequi exercitationem accusamus? Aut, vel sunt, eos quidem distinctio mollitia molestiae quisquam nesciunt ea voluptate atque neque id harum cupiditate ab! Pariatur blanditiis quam recusandae excepturi quae? Perferendis, sequi. Ipsam dignissimos nesciunt delectus. Vel iusto neque, hic minima fuga cupiditate facilis debitis iste aliquam iure voluptatibus odio consequuntur molestiae quia possimus esse deleniti ut consectetur eveniet.",
                inner: true
            },
            {
                id: 5,
                name: "Mistic fusion protein",
                selector: "Mistic_fusion_protein",
                display: "Mistic fusion protein",
                active: false,
                abstract: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit modi aut eos repudiandae quod, illum iusto sunt soluta consectetur, ullam numquam nam, libero adipisci perspiciatis. Saepe enim sequi exercitationem accusamus? Aut, vel sunt, eos quidem distinctio mollitia molestiae quisquam nesciunt ea voluptate atque neque id harum cupiditate ab! Pariatur blanditiis quam recusandae excepturi quae? Perferendis, sequi. Ipsam dignissimos nesciunt delectus. Vel iusto neque, hic minima fuga cupiditate facilis debitis iste aliquam iure voluptatibus odio consequuntur molestiae quia possimus esse deleniti ut consectetur eveniet.",
                inner: true
            },
            {
                id: 6,
                name: "Surface display system",
                selector: "Surface_display_system",
                display: "Surface display system",
                active: false,
                abstract: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit modi aut eos repudiandae quod, illum iusto sunt soluta consectetur, ullam numquam nam, libero adipisci perspiciatis. Saepe enim sequi exercitationem accusamus? Aut, vel sunt, eos quidem distinctio mollitia molestiae quisquam nesciunt ea voluptate atque neque id harum cupiditate ab! Pariatur blanditiis quam recusandae excepturi quae? Perferendis, sequi. Ipsam dignissimos nesciunt delectus. Vel iusto neque, hic minima fuga cupiditate facilis debitis iste aliquam iure voluptatibus odio consequuntur molestiae quia possimus esse deleniti ut consectetur eveniet.",
                inner: true
            }
        ]
    },
    {
        id: 3,
        name: "Model",
        display: "Model",
        active: false,
        content: [
            {
                id: 1,
                name: "Edinburgh model",
                selector: "Edinburgh_model",
                display: "Edinburgh model",
                active: false,
                abstract: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit modi aut eos repudiandae quod, illum iusto sunt soluta consectetur, ullam numquam nam, libero adipisci perspiciatis. Saepe enim sequi exercitationem accusamus? Aut, vel sunt, eos quidem distinctio mollitia molestiae quisquam nesciunt ea voluptate atque neque id harum cupiditate ab! Pariatur blanditiis quam recusandae excepturi quae? Perferendis, sequi. Ipsam dignissimos nesciunt delectus. Vel iusto neque, hic minima fuga cupiditate facilis debitis iste aliquam iure voluptatibus odio consequuntur molestiae quia possimus esse deleniti ut consectetur eveniet.",
                inner: true
            },
            {
                id: 2,
                name: "Groeningen model",
                selector: "Groeningen_model",
                display: "Groeningen model",
                abstract: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit modi aut eos repudiandae quod, illum iusto sunt soluta consectetur, ullam numquam nam, libero adipisci perspiciatis. Saepe enim sequi exercitationem accusamus? Aut, vel sunt, eos quidem distinctio mollitia molestiae quisquam nesciunt ea voluptate atque neque id harum cupiditate ab! Pariatur blanditiis quam recusandae excepturi quae? Perferendis, sequi. Ipsam dignissimos nesciunt delectus. Vel iusto neque, hic minima fuga cupiditate facilis debitis iste aliquam iure voluptatibus odio consequuntur molestiae quia possimus esse deleniti ut consectetur eveniet.",
                active: false,
                inner: true
            },
            {
                id: 3,
                name: "COMSOL model",
                selector: "COMSOL_model",
                display: "COMSOL model",
                abstract: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit modi aut eos repudiandae quod, illum iusto sunt soluta consectetur, ullam numquam nam, libero adipisci perspiciatis. Saepe enim sequi exercitationem accusamus? Aut, vel sunt, eos quidem distinctio mollitia molestiae quisquam nesciunt ea voluptate atque neque id harum cupiditate ab! Pariatur blanditiis quam recusandae excepturi quae? Perferendis, sequi. Ipsam dignissimos nesciunt delectus. Vel iusto neque, hic minima fuga cupiditate facilis debitis iste aliquam iure voluptatibus odio consequuntur molestiae quia possimus esse deleniti ut consectetur eveniet.",
                active: false,
                inner: true
            },
            {
                id: 4,
                name: "Thermo Switches model",
                selector: "Thermo_Switches_model",
                display: "Thermo Switches model",
                abstract: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit modi aut eos repudiandae quod, illum iusto sunt soluta consectetur, ullam numquam nam, libero adipisci perspiciatis. Saepe enim sequi exercitationem accusamus? Aut, vel sunt, eos quidem distinctio mollitia molestiae quisquam nesciunt ea voluptate atque neque id harum cupiditate ab! Pariatur blanditiis quam recusandae excepturi quae? Perferendis, sequi. Ipsam dignissimos nesciunt delectus. Vel iusto neque, hic minima fuga cupiditate facilis debitis iste aliquam iure voluptatibus odio consequuntur molestiae quia possimus esse deleniti ut consectetur eveniet.",
                active: false,
                inner: true
            },
        ]
    },
    {
        id: 4,
        name: "Demonstrate",
        display: "Proof",
        active: false
    },
    {
        id: 5,
        name: "InterLab",
        display: "InterLab",
        active: false
    },
    {
        id: 6,
        name: "Safety",
        display: "Safety",
        active: false
    },
    {
        id: 7,
        name: "Software",
        display: "Software",
        active: false
    }
    ],
    active: false
},
{
    id: 2,
    name: "parts",
    content: [{
        id: 1,
        name: "Overview",
        display: "Overview",
        active: false
    },
    {
        id: 2,
        name: "Basic",
        display: "Basic Parts",
        active: false
    },
    {
        id: 3,
        name: "Composite",
        display: "Composite Parts",
        active: false
    },
    {
        id: 4,
        name: "Collection",
        display: "Part Collection",
        active: false
    }
    ],
    active: false
},
{
    id: 3,
    name: "notebook",
    content: [{
        id: 1,
        name: "LabBook",
        display: "Lab Book",
        active: false
    },
    {
        id: 2,
        name: "Protocols",
        display: "Protocols",
        active: false
    },
    {
        id: 3,
        name: "Medals",
        display: "Medals",
        active: false
    }
    ],
    active: false
},
{
    id: 4,
    name: "hp",
    content: [{
        id: 1,
        name: "Human_Practices",
        display: "Overview",
        active: false,
        content: [
            {
                id: 1,
                name: "Gold",
                display: "Gold",
                active: false
            },
            {
                id: 2,
                name: "Silver",
                display: "Silver",
                active: false
            }            
        ]
    },
    {
        id: 2,
        name: "Public_Engagement",
        display: "Education",
        active: false
    },
    {
        id: 3,
        name: "Collaborations",
        display: "Collaborations",
        active: false
    }
    ],
    active: false
},
{
    id: 5,
    name: "team",
    content: [{
        id: 1,
        name: "Members",
        display: "Members",
        active: false
    },
    {
        id: 2,
        name: "Attributions",
        display: "Attributions",
        active: false
    },
    {
        id: 3,
        name: "Sponsors",
        display: "Sponsors",
        active: false
    }
    ],
    active: false
}
]

/* Get page name part and display active elements accordingly */
function getPageName(url) {
    var index = url.lastIndexOf("/") + 1;
    var filenameWithExtension = url.substr(index);
    var filename = filenameWithExtension.split(".")[0];
    return filename;
}

$(document).ready(function () {

    /* find active top navigation according page */
    directoryTree.forEach(function (element) {
        element.content.forEach(function (innerElement) {
            if (innerElement.name.toLowerCase().indexOf(getPageName(window.location.href).toLowerCase()) != -1) {
                var concatenatedString = "#" + element.name + "-list-item";
                $(concatenatedString).find(".image-container").addClass("is-active")
                element.active = true
                innerElement.active = true
            }
        })
    })

    /* display all third level navigaiton items for each 2nd level nav item */ 
    directoryTree.forEach(function (element) {
        if (element.active) {
            $('.pagination').html("")
            element.content.forEach(function (inner) {
                $('.pagination').append('<div class="pagination-item-wrapper">' +
                   ' <a class="pagination-anchor"> ' +
                       ' <div class="pagination-item"></div>' +
                        '<span class="pagination-text">'+ inner.display + '</span>' +
                    '</a>' +
                '</div>')

                if (inner.content && inner.active) {
                    inner.content.forEach(function(innerMost) {
                        $('.pagination').append('<div class="pagination-item-wrapper sub-page">' +
                        '<a class="pagination-anchor">' +
                            '<div class="pagination-item"></div>' + 
                            '<span class="pagination-text">'+ innerMost.display + '</span>' + 
                        '</a> '+ 
                    '</div>')
                    })
                }
            })

            element.content.forEach(function (inner) {
                if (inner.active) {
                    $(".pagination-item-wrapper:nth-child("+inner.id+")").find(".pagination-item").addClass("active-item")
                }
            })
        }
    })

    $(".pagination-item-wrapper").click(function (evt) {
        if (!$(this).hasClass("sub-page")) {
        var e = $(this).index()
        directoryTree.forEach(function (element) {
            if (element.active) {
                element.content.forEach(function(inner) {
                    if (evt.currentTarget.innerText.indexOf(inner.display) !== -1) {
                       window.location.replace(inner.name + ".html")
                    }
                })
            }
        })
    } else {
        subNavEnter(this)
    }
    })

    function subNavEnter(elem) {
        $(".pagination-item").removeClass("active-item")
        $(elem).find(".pagination-item").addClass("active-item")
        directoryTree.forEach(function(element) {
            if (element.active) {
                element.content.forEach(function(inner) {
                    if (inner.active) {
                        inner.content.forEach(function (innerMost) {
                            innerMost.active = false;
                            if(innerMost.name.indexOf($(elem).find(".pagination-text").text()) != -1) {
                               $(".text-wall-area-box-heading").fadeOut()
                               $(".text-content").fadeOut()
                               $(".text-wall-area-box-heading").html(innerMost.name)
                               $(".text-content").html(innerMost.content)                              
                               $(".text-wall-area-box-heading").fadeIn()
                               $(".text-content").fadeIn()
                               innerMost.active = true;

                               $(".read-more-button").unbind()
                               $(".read-more-button").click(function() {
                                    $(".modal").css("visibility","visible")
                                    $(".modal").addClass("active")
                                    $('.modal').animate({
                                        scrollTop: $("#" + innerMost.selector).offset().top
                                    }, 2000);
                               })
                            }
                        })
                    }
                })
            }
        })
    }

    $(".carrot-anchor").click(function (e) {

        e.preventDefault()
        directoryTree.forEach(function (element) {
            if (element.active) {
                element.content.forEach(function (inner) {
                    if (inner.active && inner.id != element.content.length && !inner.content) {
                        window.location.replace(element.content[inner.id].name + ".html")
                    } else {

                        if (inner.active && inner.content) {
                            const as = inner.content.filter(function(x) { return x.active == true})
                            if (as.length == 0) {
                            $(".pagination").find(".sub-page").each(function(element) {
                                if ($(this).find(".pagination-text").text() == inner.content[0].display) {
                                   $(this).find(".pagination-anchor").click()
                                   inner.content[0].active = true
                                }
                            })
                            } else {
                                inner.content.forEach(function(element) {
                                    element.active = false
                                })

                                const values = inner.content.map(function(x){ return x.id})
                                if (as[0].id != Math.max.apply(null,values)) {
                                $(".sub-page").each(function(element) {
                                    if (element == as[0].id) {
                                        $(this).click()
                                    }
                                })
                            } else {
                                if (inner.active && inner.id != element.content.length) {
                                    window.location.replace(element.content[inner.id].name + ".html")
                                } 
                            }
                            }
                        }
                    }
                })
            }
        })
    })

    $(".carrot-back").click(function (e) {

        e.preventDefault()
        directoryTree.forEach(function (element) {
            if (element.active) {

                var activeChild = element.content.filter(function(x){return x.active == true})
                    if (activeChild[0].id != 1) {
                        window.location.replace(element.content[activeChild[0].id-2].name + ".html")
                    }
            }
        });
    });



    $(".read-more-button").click(function () {
        var e = $('.modal');
        e.css("visibility", "visible")
        e.addClass("active")
    })

    $(".modal-close").click(function () {
        var e = $(this)
        e.parent().removeClass("active")
        e.parent().css("visibility", "hidden")

        $('.modal').animate({
            scrollTop: 0
        }, 100)
    })

    $(".img-expand").click(function() {
        $(this).parent().find(".item-modal").fadeIn().css("display", "flex")
    })

    $(".close-item-modal").click(function() {
        $(this).parent().fadeOut()
    })

    $(".back").show()

    $(".team-profile > img").hover(function(){
        $(this).attr("src", "./files/images/team/" + $(this).parent().attr("id") + "-sleeping.jpg")
    })
    $(".team-profile > img").mouseleave(function(){
        $(this).attr("src", "./files/images/team/" + $(this).parent().attr("id") + ".jpg")
    })
})