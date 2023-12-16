var quotes=[
    {
        quote: "“Be yourself; everyone else is already taken.”," ,
        auther:' Oscar Wilde,'
    },
    {
        quote:" “A room without books is like a body without a soul.”,",
        auther:" Marcus Tullius Cicero,"
    },
    {
        quote: "“So many books, so little time.”,",
        auther:"― Frank Zappa,"
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”,",
        auther:"Albert Einstein,"
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”,",
        auther: "Ahmed tito"
    },
    {
        quote: " How much did you sell me a4ry !!!!!",
        auther:" ebrahim el Abyd"
    },
    {
        quote: "“Always forgive your enemies; nothing annoys them so much.”,",
        auther:" Oscar Wilde,"
    },
    {
        quote: " this is no time two waste in this course",
        auther:" TitooOo"
    }
]

function generateUniqueRandom() {
    var Random = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML =quotes[Random].quote;
    document.getElementById('auther').innerHTML =quotes[Random].auther;
    console.log(Random)
}