var imageNames = ["image1", "image2", "image3", "image4"];
var blankImagePath = "/HW6/imgs/image 3.png";
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;


var player = {"firstname":"", "lastname":"", "age":0, "score":0};

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

function flipImage()
{
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];
    }
    else if(firstNumber < 0)
    {
        firstNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];
    }

    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        setTimeout(imageDisappear, 1000);
    }
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        allFound++;
        
        firstNumber = -1;
        secondNumber = -1;
        if(allFound == actualImages.length/2)
        {  
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "MemMatch-End.html";
        }
    }
}

function imageDisappear()
{
    console.log(firstNumber);
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
   
    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "MemMatch.html";
}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
    "Age: " + player.age + "<br>" +
    "Score: " + player.score;
    if(document.getElementById("endInformation") != null)
    {
        document.getElementById("endInformation").innerHTML = str;
    }
}