// An array of Objects with the quote and source as properties
var quotes = [
    {
        quote: "In the end, it’s not the years in your life that count. It’s the life in your years",
        source: "Abraham Lincoln",

    },
    {
        quote: "Don’t gain the world and lose your soul, wisdom is better than silver or gold",
        source: "Bob Marley",

    },
    {
        quote: "Lighten up, just enjoy life, smile more, laugh more, and don’t get so worked up about things",
        source: "Kenneth Branagh",

    },
    {
        quote: "Don’t cry because it’s over, smile because it happened",
        source: "Ludwig Jacobowski",

    },
    {
        quote: "Do stuff. Be clenched, curious. Not waiting for inspiration’s shove or society’s kiss on your forehead. Pay attention. It’s all about paying attention. Attention is vitality. It connects you with others. It makes you eager. Stay eager",
        source: "Susan Sontag",

    }
];

let generateQuote = function (){

	return Math.floor(Math.random() * quotes.length);
} 



document.querySelector('#button-container').addEventListener('click',(e)=>{
	const btnIds = ['generate-quote','red', 'blue', 'green', 'yellow'] ;
	if (btnIds.includes(e.target.id)) {
		if ( btnIds[0] == e.target.id ) {
			let a = quotes[generateQuote()];
			console.log(a);
			let ptagSource = document.createElement('span');
			let br = document.createElement('br');
			ptagSource.textContent = ' - '+ a.source;
			
			ptagSource.classList.add('author')
			console.log(ptagSource);

			let ptagOfQuote = document.getElementsByClassName('quotebox')[0].firstElementChild
			
			ptagOfQuote.textContent = a.quote;
			ptagOfQuote.appendChild(br);
			ptagOfQuote.appendChild(ptagSource);

			return;



		}

	}

});
