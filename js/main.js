window.onload = (event) => {

    var image_names = [
        "img/1.JPG",
        "img/2.JPG",
        "img/3.JPG",
        "img/4.JPG",
        "img/5.JPG",
        "img/6.JPG",
    ]

    function attach_listeners() {
        var heading = document.querySelector("#title")
        heading.onclick = set_image
    }

    function set_image() {
        var image = document.querySelector("#splash-image")
        var random_image = Math.floor(Math.random() * Math.floor(image_names.length));
        image.src = image_names[random_image]
    }

    attach_listeners()
    set_image()
};