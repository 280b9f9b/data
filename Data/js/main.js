// Load NES ROMs from JSON file
fetch('Data/version.json')
  .then(response => response.json())
  .then(roms => {
    const state = {
      roms: roms,
      displayedRoms: roms,
      sortProperty: 'title',
      sortDirection: 'asc',
      platformFilter: 'all',
      searchKeyword: '',
    };

    const sortSelect = document.getElementById('sort');
    const platformFilter = document.getElementById('platform-filter');
    const searchInput = document.getElementById('search');

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

    // Handle filtering ROMs when the input element changes
    searchInput.addEventListener('input', () => {
      const keyword = searchInput.value;
      filterRomsBySearch(state, keyword);
      sortRoms(state, state.sortProperty, state.sortDirection);
      renderRoms(state.displayedRoms);
    });
  })
  .catch(error => console.error('Error loading ROMs:', error));
