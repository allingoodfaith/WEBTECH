var imageTags = ["image1","image2","image3","image4",]

var blankImagePath = "/HW5/imgs";

var actualImages = new Array();

function printCards()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
}

function createRandomImageArray()
{
    var actualImagesPath = ["HW3/imgs/image 1","HW3/imgs/image 2",];
    var count = [0,0];

    while(actualImages.length < 4)
    {
        var randomNumber = Math.floor(Math.random() * actualImagesPath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagesPath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src = actualImages[number];
}