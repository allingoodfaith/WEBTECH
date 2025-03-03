var myViewFinderArray = new Array();

class ViewFrinder
{
    constructor(title)
    {
        this.title = title;
    }

    toString()
    {
        return "Title: " + this.title;
    }

    get theTitle()
    {
        return this.title;
    }
}

function initializeArray()
{
    var myViewFinderArray = new ViewFrinder("the moon");
    var myViewFinderArray1 = new ViewFrinder("the sun");

    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
}