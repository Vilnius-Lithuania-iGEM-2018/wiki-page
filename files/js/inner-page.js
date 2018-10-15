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
        active: false
    },
    {
        id: 3,
        name: "Modeling",
        display: "Modeling",
        active: false,
        content: [
            {
                id: 1,
                name: "Edinburgh model",
                display: "Edinburgh model",
                active: false,
                inner: true
            },
            {
                id: 2,
                name: "Groeningen model",
                display: "Groeningen model",
                active: false,
                inner: true
            },
            {
                id: 3,
                name: "COMSOL model",
                display: "COMSOL model",
                active: false,
                inner: true
            },
            {
                id: 4,
                name: "Thermo Switches model",
                display: "Thermo Switches model",
                active: false,
                inner: true
            },
        ]
    },
    {
        id: 4,
        name: "Proof",
        display: "Proof of Concept",
        active: false
    },
    {
        id: 5,
        name: "Interlab",
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
        name: "BasicParts",
        display: "Basic Parts",
        active: false
    },
    {
        id: 3,
        name: "CompositeParts",
        display: "Composite Parts",
        active: false
    },
    {
        id: 4,
        name: "PartCollection",
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
        display: "Human Practices Overview",
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
                display: "Siver",
                active: false
            }            
        ]
    },
    {
        id: 2,
        name: "Public_Engagement",
        display: "Public Engagement",
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

function getPageName(url) {
    var index = url.lastIndexOf("/") + 1;
    var filenameWithExtension = url.substr(index);
    var filename = filenameWithExtension.split(".")[0];
    return filename;
}

$(document).ready(function () {

    directoryTree.forEach(function (element) {
        element.content.forEach(function (innerElement) {
            if (innerElement.name.toLowerCase().includes(getPageName(window.location.href).toLowerCase())) {
                var concatenatedString = "#" + element.name + "-list-item";
                $(concatenatedString).find(".image-container").addClass("is-active")
                element.active = true
                innerElement.active = true
            }
        })
    })

    directoryTree.forEach(function (element) {
        if (element.active) {
            $('.pagination').html("")
            element.content.forEach(function (inner) {
                $('.pagination').append(`<div class="pagination-item-wrapper">
                    <a class="pagination-anchor">
                        <div class="pagination-item"></div>
                        <span class="pagination-text">`+ inner.name + `</span>
                    </a>
                </div>`)

                if (inner.content && inner.active) {
                    inner.content.forEach(function(innerMost) {
                        $('.pagination').append(`<div class="pagination-item-wrapper sub-page">
                        <a class="pagination-anchor">
                            <div class="pagination-item"></div>
                            <span class="pagination-text">`+ innerMost.name + `</span>
                        </a>
                    </div>`)
                    })
                }
            })

            element.content.forEach(function (inner) {
                if (inner.active) {
                    console.log(inner.name + "is : " + inner.active)
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
                    if (evt.currentTarget.innerText.indexOf(inner.name) !== -1) {
                       window.location.replace(inner.name + ".html")
                    }
                })
            }
        })
    } else {
        $(".modal").css("visibility","visible")
        $(".modal").addClass("active")
        $('.modal').animate({
            scrollTop: $("#edinburgh_model").offset().top
        }, 2000);
        $(this).find(".pagination-item").addClass("active-item")
    }
    })

    $(".carrot-anchor").click(function (e) {
        e.preventDefault()
        directoryTree.forEach(function (element) {
            if (element.active) {
                element.content.forEach(function (inner) {
                    if (inner.active && inner.id != element.content.length && !inner.content) {
                        window.location.replace(element.content[inner.id].name + ".html")
                    } else {
                        if (inner.content) {
                            
                        }
                    }
                })
            }
        })
    })


    $(".read-more-button").click(function () {
        var e = $('.modal');
        e.css("visibility", "visible")
        e.addClass("active")
    })

    $(".modal-close").click(function () {
        var e = $(this)
        e.parent().removeClass("active")
        e.parent().css("visibility", "hidden")
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