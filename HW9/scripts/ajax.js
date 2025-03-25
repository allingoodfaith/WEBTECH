$(document).ready(function () {
    $("button").click(function () {
        $("#CharacterInformation").load("data/CharacterData.txt", fadeText);
    });
});

function fadeText()
{
    $("#CharacterInformation").fadeOut("slow").fadeIn("slow");
}