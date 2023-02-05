fetch('segaMD.json')
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
        <div class="GameBox"><a href="${gamex.game}"><img class="GameCover" src="${gamex.photo}"></a>
        <h2 class="GameText">${gamex.name}</h2></div>
        `;
}

function appendData(data) {
        var mainContainer = document.getElementById("segaMD").innerHTML = `
        <h1 class="GameHeader">EmulatorJS (${data.length})</h1>
        ${data.map(gameTemplate).join("")}
        <p class="GameFooter">These ${data.length} Games were added recently. Check back soon for updates.</p>
        `;
}
