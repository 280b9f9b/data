// Sort ROMs by property and direction
const sortRoms = (state, property, direction) => {
  // Check if the property exists on the ROM object
  if (!state.displayedRoms[0].hasOwnProperty(property)) {
    throw new Error(`Invalid property: ${property}`);
  }

  // Check if the direction is valid
  if (direction !== 'asc' && direction !== 'desc') {
    throw new Error(`Invalid direction: ${direction}`);
  }

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
