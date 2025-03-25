let character = 
{
    
    "race": "Half-Orc",
    "class":
    {
        "class1": "Paladin",
        "class2": "Warlock"
    },
    "subclass":
    [
        "Oath of Ancients",
        "Pack of Fathoms"
    ]
    
}

$(function () {
    $("button").click(function () {
        showCharacterInfo();
    });

});

function showCharacterInfo()
{
    $("#CharacterInfo").html("Race: " + CharacterData.race
        +"<br>Class:" + CharacterData.class 
        +"<br> Class 1;" + CharacterData.class.class1 
        +"<br> Class 2;"+ CharacterData.class.class2 
        +"<br> Subclas: <br>" + CharacterData.subclass[0] + "<br>" + haracterData.subclass[1]
    );
}