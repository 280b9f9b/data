const romsContainer = document.getElementById('roms');

// Render a single ROM element
const renderRom = (rom) => {
  const romElem = document.createElement('div');
  romElem.classList.add('rom');

  const imageLinkElem = document.createElement('a');
  imageLinkElem.href = rom.file;
  romElem.appendChild(imageLinkElem);

  const imageElem = document.createElement('img');
  imageElem.src = rom.image;
  imageElem.alt = rom.title;
  imageLinkElem.appendChild(imageElem);

  const titleElem = document.createElement('h2');
  titleElem.textContent = rom.title;
  romElem.appendChild(titleElem);

  const yearElem = document.createElement('p');
  yearElem.textContent = `${rom.year} - ${rom.platform} - ${rom.publisher} - ${rom.developer} - ${rom.plot}`;
  yearElem.classList.add('year');
  romElem.appendChild(yearElem);

  romsContainer.appendChild(romElem);
};

// Render an array of ROM elements
const renderRoms = (roms) => {
  romsContainer.innerHTML = '';
  for (const rom of roms) {
    renderRom(rom);
  }
};
