var questionAnswers = "";
var yes = document.getElementById("yes");
var no = document.getElementById("no");
var restart = document.getElementById("restart");


yes.addEventListener("click", function() 
{
    questionAnswers = questionAnswers + "1";
    updateText(questionAnswers);
    console.log(questionAnswers);
}
);

no.addEventListener("click", function()
{
    if (questionAnswers != 0)
    {
        questionAnswers = questionAnswers + "0";
    }
    updateText(questionAnswers);
    console.log(questionAnswers);
}
);

restart.addEventListener("click", function() 
{
    questionAnswers = "";
    changeText("Are you ready to play?");
}
);

function updateText()
{
    switch (questionAnswers)
    {
        case "1":
            changeText
            (
                "Before you on a table, there is a book laying closed.<br> It's worn and maybe a little old. <br> Do you open it?"
            );
            break;

        case "10":
            changeText
            (
                "You flip open the pages and thumb through them. Keep turning the pages?"
            );
            break;

            case "11":
            changeText
            (
                "You leave the book on the table and go on about you day. Do you return to the book?"
            );
            break;

            case "100":
            changeText
            (
                "You leave the book there."
            );
            break;

            case "101":
            changeText
            (
                "You skim through the text. Words blur by. Continue?"
            );
            break;

            case "111":
                changeText
                (
                    "Go back the begin?"
                );
                break;
            
            case "110":
            changeText
            (
                "You notice a hand written note in the margin. Take a closer look?"
            );
            break;
    }
}

function changeText(text)
{
    document.getElementById("text").innerHTML = text;
}