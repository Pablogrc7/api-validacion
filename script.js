document.getElementById("search").addEventListener('click', ()=> {
    displayFruit();
    });
    
    async function displayFruit(){
    const characterName = document.getElementById("character").value;
    const character = await getFruit(characterName);
    addFruitUI  (character);
    }
    
    async function getFruit(number){
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${number}`)
            if (response.status === 404) {
                alert("No se encontró el personaje");
                return;
            }
            return await response.json();
    } catch (error) {
        alert("No hay internt pa");
    }
}
    function addFruitUI(character){
    const characterList = document.getElementById("character_container");
    const element = document.createElement("div");
   
    element.innerHTML= `
    <strong id: ></strong> ${character.id}
    <strong name: ></strong> ${character.name}
    `;
    characterList.appendChild(element);
    }
