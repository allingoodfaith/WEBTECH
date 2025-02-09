function getAnswer1()
{
    var myAnswer = document.getElementById("answer1").value;
    var myQuestion = document.getElementById("question");
    if(myAnswer === "Left")
    {
        document.getElementById("answer1").style.display= "none";
        document.getElementById("btnSumbit").style.display= "none";

        document.getElementById("answer2").style.display= "block";
        document.getElementById("btnSumbit2").style.display= "block";

        myQuestion.innerHTML = "Oh neat thanks. Next!";
    }
    else if(myAnswer === "Right")
    {
        document.getElementById("choice").style.display= "none";
        document.getElementById("btnSumbit").style.display= "none";

        document.getElementById("choice3").style.display= "block";
        document.getElementById("btnSumbit3").style.display= "block";

        myQuestion.innerHTML = "Oh neat thanks. Next!";
    }
    else
    {
        myQuestion.innerHTML = "Invalid answer";
    }
}

function getAnswer2()
{
    var answer = document.getElementById("answer2").value;
    var myQuestion = document.getElementById("question");
    if(answer === "yes")
    {
        document.getElementById("image").src = "image.jpg"
        myQuestion.innerHTML = "Oh neat thanks. Next!";
    }
    else if(answer === "no")
    {
        myQuestion.innerHTML = "Oh neat thanks. Next!";
    }        
}

function getAnswer3()
{
    var answer = document.getElementById("answer2").value;
    var myQuestion = document.getElementById("question");
    if(answer === "yes")
    {
        document.getElementById("image").src = "image2.jpg"
        myQuestion.innerHTML = "Oh neat thanks. Next!";
    }
    else if(answer === "no")
    {
        myQuestion.innerHTML = "text text text4";
    }        
}

function getAnswer4()
{
    var answer = document.getElementById("answer2").value;
    var myQuestion = document.getElementById("question");
    if(answer === "yes")
    {
        document.getElementById("image").src = "image3.jpg"
        myQuestion.innerHTML = "text text text";
    }
    else if(answer === "no")
    {
        myQuestion.innerHTML = "text text text5";
    }        
}

function getAnswer5()
{
    var answer = document.getElementById("answer2").value;
    var myQuestion = document.getElementById("question");
    if(answer === "yes")
    {
        document.getElementById("image").src = "image4.jpg"
        myQuestion.innerHTML = "text text text";
    }
    else if(answer === "no")
    {
        myQuestion.innerHTML = "text text text5";
    }        
}