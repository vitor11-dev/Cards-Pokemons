async function getData() {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    let names = [];
    let description = [];

    const response = await fetch(url);
    const data = await response.json();

    if (!data.results) {
        throw new Error("API connection error!");
    }

    const pokemons = data.results;
    pokemons.map((element) => {
        names.push(element.name);
        description.push(element.url);
    });

    return { names, description };
}

setTimeout(async () => {
    const span = document.getElementById("span");
    const pList = document.querySelectorAll("p");
    const link = document.querySelectorAll("a");

    const { names, description } = await getData();

    names.map((element, index) => {
        pList[index].innerText = element;
    });

    description.map((element, index) => {
        link[index].href = element;
        link[index].innerText = "Descrição";
    });

    span.style.display = "none";
}, 2000);
