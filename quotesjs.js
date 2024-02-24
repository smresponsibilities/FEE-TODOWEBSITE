const quotes = ["Be yourself, everyone else is already taken.",
                    "Where the senses fail us, reason must step in.",
                    "Two truths cannot contradict one another.",
                    "Knowing thyself, that is the greatest wisdom.",
                    "Important principles may, and must, be inflexible.",
                    "The best thing to hold onto in life is each other.",
                    "You can't soar with the eagles as long as you hang out with the turkeys.",
                    "Face your fears and you will be able to conquer them.",
                    "How long should you try? Until.",
                    "Any fool can know. The point is to understand.",
                    "One may smile, and smile, and be a villain.",
                    "Inspiration does exist, but it must find you working.",
                    "The most precious thing that we all have with us is time.",
                    "To live is to suffer, to survive is to find some meaning in the suffering.",
                    "That which does not kill us makes us stronger",
                    "By failing to prepare, you are preparing to fail.",
                    "The secret of getting ahead is getting started.",
                    "A single sunbeam is enough to drive away many shadows.",
                    "Tomorrow is always fresh, with no mistakes in it.",
                    "The time is always right to do what is right.",
                    "Do one thing every day that scares you.",

];
const authors=["Oscar Wilde",
                    "Galileo Galilei",
                    "Galileo Galilei",
                    "Galileo Galilei",
                    "Abraham Lincoln",
                    "Audrey Hepburn",
                    "Joel Osteen",
                    "Bohdi Sanders",
                    "Jim Rohn",
                    "Albert Einstein",
                    "William Shakespeare",
                    "Pablo Picasso",
                    "Steve Jobs",
                    "Friedrich Nietzsche",
                    "Friedrich Nietzsche",
                    "Benjamin Franklin",
                    "Mark Twain",
                    "Francis of Assisi",
                    "L.M. Montgomery",
                    "Martin Luther King",
                    "Eleanor Roosevelt",

]
let randomquotes=quotes[Math.floor(Math.random() * 21)];

let htmloutputquotes=document.getElementById("quotesjsfetcher");
htmloutputquotes.innerHTML=randomquotes;

