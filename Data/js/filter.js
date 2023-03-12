// Filter ROMs by platform
const filterRomsByPlatform = (state, platform) => {
  state.platformFilter = platform;

  if (platform === 'all') {
    state.displayedRoms = state.roms;
  } else {
    state.displayedRoms = state.roms.filter(rom => rom.platform === platform);
  }
};

// Filter ROMs by search keyword
const filterRomsBySearch = (state, keyword) => {
  state.searchKeyword = keyword;

  if (keyword === '') {
    state.displayedRoms = state.roms;
  } else {
    state.displayedRoms = state.roms.filter(rom => {
      const titleMatch = rom.title.toLowerCase().includes(keyword.toLowerCase());
      const yearMatch = rom.year.toString().includes(keyword.toLowerCase());
      return titleMatch || yearMatch;
    });
  }
};
