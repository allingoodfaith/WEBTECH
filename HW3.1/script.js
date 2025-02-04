document.addEventListener("DOMContentLoaded",function()
{
    document.getElementById("start-button").addEventListener("click", startAdenture);
});


//opener
function startAdenture()
{
    let story = document.getElementById("story");
    let choices = document.getElementById("choices");

    story.innerHTML = "<img scr = '/HW3.1/imgs/book.jpg' alt= 'Books' style='height:200px'> <br> Before you on a table, there is a book laying closed.<br> It's worn and maybe a little old. <br> Do you open it?";
    choices.innerHTML = 
    `
        <button onclick ="choosePath('read')"> You flip open the pages and thumb through them </button>
        <button onclick ="choosePath('not read')"> You leave the book on the table and go on about your day </button>  
    `;
}

// story chioces
function choosePath(choice)
{
    let story = document.getElementById("story");
    let choices = document.getElementById("choices");

    if(choice ==="readmore")
    {
        story.innerHTML = "<img scr = '/HW3.1/imgs/book.jpg' alt= 'Books' style='height:200px'><br>You skim through the text. Words blur by. Continue:";
        chioces.innerHTML=
        `
            <button onclick ="readmore('readmore')"> Read More </button>
            <button onclick ="readmore('stopreading')"> Close the Book </button>
        `;
    }

    else if(choice ==="yes")
        {
            story.innerHTML = "<img scr = '/HW3.1/imgs/book.jpg' alt= 'Books' style='height:200px'><br>You skim through the text. Words blur by. Continue:";
            chioces.innerHTML=
            `
                <button onclick ="readmore('readmore2')"> Read More </button>
                <button onclick ="readmore('stopreading')"> Close the Book </button>
            `;
        }

    else if(choice ==="yes")
        {
            story.innerHTML = "<img scr = '/HW3.1/imgs/book.jpg' alt= 'Books' style='height:200px'><br>You notice a hand written note in the margin. Take a closer look? Continue:";
            chioces.innerHTML=
            `
                <button onclick ="readmore('readmore3')"> Read More </button>
                <button onclick ="readmore('stopreading')"> Close the Book </button>
            `;
        } 
else if(choice ==="yes")
        {
            story.innerHTML = "<img scr = '/HW3.1/imgs/book.jpg' alt= 'Books' style='height:200px'><br>Thank you for reading my story. Continue:";
            chioces.innerHTML=
            `
                <button onclick ="finishread('finished reading')"> Finish Reading </button>
            `;
        }        
}

//ending
function finalChoice(choice) 
{
    let story = document.getElementById("story");
    let choices = document.getElementById("choices");

    if (choice === 'not read')
    {
        story.innerHTML = "<img scr = '/HW3.1/imgs/book.jpg' alt= 'Books' style='height:200px'><br>You leave the book on the table and go on about you day";
    }

    else if
    (choice === 'stop reading')
    {
        story.innerHTML = "<img scr = '/HW3.1/imgs/book.jpg' alt= 'Books' style='height:200px'><br>The Book sits on the table now nelegected... How sad.";
    }

    else
    (choice === 'finished reading')
    {
        story.innerHTML = "<img scr = '/HW3.1/imgs/book.jpg' alt= 'Books' style='height:200px'><br>What a pleasent read"
    }

    chioces.innerHTML = `<button onclick="location.reload()">Play Again</button>`;

}
