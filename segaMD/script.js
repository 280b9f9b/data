fetch('version.json')
        .then(function (response) {
        return response.json();
})
        .then(function (data) {
        appendData(data);
})
        .catch(function (err) {
        console.log('error: ' + err);
});

function gameTemplate(gamex) {
        return `
        <li><div class="GameBox"><a href="roms/${gamex.name}.html"><img class="GameCover" src="${gamex.photo}"></a>
        <div class="GameText">${gamex.name}</div></div></li>
        `;
}

function appendData(data) {
        var mainContainer = document.getElementById("app").innerHTML = `
        <h1 class="GameHeader">Sega Genesis - Megadrive</h1>
        ${data.map(gameTemplate).join("")}
        <p class="GameFooter">These ${data.length} Games were added recently. Check back soon for updates.</p>
        `;
}