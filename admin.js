document.getElementById("importBtn").addEventListener("click", function() {
    let files = document.getElementById("fileInput").files;
    if (files.length === 0) return;

    let gameList = document.getElementById("gameList");
    gameList.innerHTML = ""; 

    for (let file of files) {
        if (!file.name.endsWith(".sb3")) continue;
        let storedGames = JSON.parse(localStorage.getItem("jeux")) || [];
        storedGames.push({
            nom: file.name.replace(".sb3", ""),
            fichier: URL.createObjectURL(file), 
            auteur: "Admin"
        });
        localStorage.setItem("jeux", JSON.stringify(storedGames));

        let li = document.createElement("li");
        li.textContent = file.name;
        gameList.appendChild(li);
    }
});
