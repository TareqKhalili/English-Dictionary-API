const defintions = document.getElementsByClassName("definitions")[0];
const getDef = document.getElementsByClassName("get-definition")[0];
const input = document.getElementsByClassName("input")[0];

getDef.addEventListener('click', () => {
    let word = input.value;
    defintions.innerHTML = "<tr><th>Speech Part</th><th>Definition</th></td>";
    fetch(`https://english-dictionary-api.herokuapp.com/${word}`)
        .then(res => res.json())
        .then(data => {
            for (element of data) {
                let speechPart = document.createElement('td');
                speechPart.textContent = element.speech_part;
                let definition = document.createElement('td');
                definition.textContent = element.def;
                let row = document.createElement('tr');
                row.appendChild(speechPart);
                row.appendChild(definition);
                defintions.appendChild(row);
            }
        })
});



