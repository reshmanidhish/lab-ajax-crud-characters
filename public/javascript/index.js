const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
    .then((characters) => {
      const charactersContainer = document.getElementById("characters-container");
      charactersContainer.innerHTML = "";
      for (const character of characters) {
        const characterInfo = document.createElement("div");
        characterInfo.classList.add("character-info");
        characterInfo.innerHTML = `
          <div class="name"> Character ID: ${character.id} </div> 
          <div class="name"> Character Name: ${character.name} </div> 
          <div class="occupation"> Character Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
        `;
        charactersContainer.appendChild(characterInfo);
      }
    })
    .error(console.log(error));
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterId = document.getElementById("character-id").value;
    console.log(characterId);
    charactersAPI
      .getOneRegister(characterId)
      .then((character) =>
        {
          const charactersContainer = document.getElementById("characters-container");
          charactersContainer.innerHTML = "";
          const characterInfo = document.createElement("div");
          characterInfo.classList.add("character-info");
          characterInfo.innerHTML = `
            <div class="name"> Character ID: ${character.id} </div> 
            <div class="name"> Character Name: ${character.name} </div> 
            <div class="occupation"> Character Occupation: ${character.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
            <div class="weapon">Character Weapon: ${character.weapon}</div>
          `;
          charactersContainer.appendChild(characterInfo);
        }
      )
      .catch((error) => {
        document.getElementById("characters-container").innerText = "";
          document.getElementById(
            "characters-container"
          ).innerHTML = "Not Found"
      });
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterId = document.getElementById("character-id-delete").value;
    charactersAPI
      .deleteOneRegister(characterId)
      .then()
      .catch((error) => console.log(error));
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const characterId = document.getElementById("chr-id").value;
    const characterInfo = {
      name: document.getElementById("name").value,
      occupation: document.getElementById("occupation").value,
      cartoon: document.getElementById("cartoon").value,
      weapon: document.getElementById("weapon").value,
    };
    charactersAPI
      .updateOneRegister(characterId, characterInfo)
      .then()
      .catch((error) => console.log(error));
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const characterInfo = {
      name: document.getElementById("name").value,
      occupation: document.getElementById("occupation").value,
      cartoon: document.getElementById("cartoon").value,
      weapon: document.getElementById("weapon").value,
    };
    charactersAPI
      .createOneRegister(characterInfo)
      .then()
      .catch((error) => console.log(error));
  });
});
