// Load NES ROMs from JSON file
fetch('Data/version.json')
  .then(response => response.json())
  .then(roms => {
    const romsContainer = document.getElementById('roms');
    const sortSelect = document.getElementById('sort');
    const platformFilter = document.getElementById('platform-filter');

    const state = {
      roms: roms,
      displayedRoms: roms,
      sortProperty: 'title',
      sortDirection: 'asc',
      platformFilter: 'all',
      searchKeyword: '',
    };

    // Initialize the page with the unsorted, unfiltered ROMs
    renderRoms(state.displayedRoms);

    // Handle sorting ROMs when the select element changes
    sortSelect.addEventListener('change', () => {
      const property = sortSelect.value;
      const direction = state.sortDirection === 'asc' ? 'desc' : 'asc';
      sortRoms(state, property, direction);
      renderRoms(state.displayedRoms);
    });

    // Handle filtering ROMs when the select element changes
    platformFilter.addEventListener('change', () => {
      const platform = platformFilter.value;
      filterRomsByPlatform(state, platform);
      renderRoms(state.displayedRoms);
    });
  })
  .catch(error => console.error('Error loading ROMs:', error));

// Sort ROMs by property and direction
const sortRoms = (state, property, direction) => {
  state.sortProperty = property;
  state.sortDirection = direction;

  const compareFn = (a, b) => {
    let aValue = a[property];
    let bValue = b[property];

    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (aValue < bValue) {
      return direction === 'asc' ? -1 : 1;
    } else if (aValue > bValue) {
      return direction === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  };

  state.displayedRoms.sort(compareFn);
};

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
