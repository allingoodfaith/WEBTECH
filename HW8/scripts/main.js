var ImageScolector= "#image";
var allImages = new Array();
class ImageInfo
{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }
    get theSelector()
    {
        return this.selector;
    }
    get theImagePath()
    {
        return this.imagePath;
    }
    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray()
{
    var image = new ImageInfo("#image","images/image 1.png")
    allImages.push(image);
}

$(document).ready(function()
{
    initializeArray();
    console.log(allImages.length);
    console.log(allImages[0].toString());
    console.log(allImages.theSelector);
    console.log(allImages.theImagePath);

    $(allImages[0].theSelector).attr("src", allImages[0].theImagePath);

    $("button").click(function()
    {
        $("stuff").fadeOut();

        $("third").toggle();
            setInterval(moveSquare, 1000);
        $(allImages[0].theSelector).fadeOut().fadeIn();    
    })
});

function moveSquare()
{
    $("square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}