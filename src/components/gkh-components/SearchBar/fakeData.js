
const cityList = {
  innopolis: {
    id: 1,
    name: 'Иннополис',
  },
  praga: {
    id: 2,
    name: 'Прага',
  },
  vinece: {
    id: 3,
    name: 'Венеция',
  },
  amsterdam: {
    id: 4,
    name: 'Амстердам',
  }
};


const streetList = {
  innopolis: {
    innopolis1: {
      id: 1,
      name: 'Спортивная',
    },
  },

  praga: {
    praga1: {
      id: 1,
      name: 'Číslo popisné',
    },
    praga2: {
      id: 2,
      name: 'U Dvou slunců',
    }
  },

  vinece: {
    vinece1: {
      id: 1,
      name: 'Piazza San Marco',
    },
    vinece2: {
      id: 2,
      name: 'Fondamenta Ponte Piccolo',
    },
  },

  amsterdam: {
    amsterdam1: {
      id: 1,
      name: 'Red Light District',
    },
    amsterdam2: {
      id: 2,
      name: 'Damrak',
    },
  },
};

const houseList = {
  innopolis1: {
    1: {
      id: 1,
      name: 'inop_sport_007',
    },
  },

  praga1: {
    1: {
      id: 1,
      name: 'pr_cislo_1',
    },
    2: {
      id: 2,
      name: 'pr_cislo_2',
    },
  },

  praga2: {
    1: {
      id: 1,
      name: 'pr_dvou_1',
    },
    2: {
      id: 2,
      name: 'pr_dvou_2',
    },
  },

  vinece1: {
    1: {
      id: 1,
      name: 'vinece_piazza_theatre',
    },
  },

  vinece2: {
    1: {
      id: 1,
      name: 'ponte_piccolo_1',
    },
    2: {
      id: 2,
      name: 'ponte_piccolo_2',
    },
  },

  amsterdam1: {
    1: {
      id: 1,
      name: 'amster_redline_privateRoom№1',
    },
    2: {
      id: 2,
      name: 'amster_redline_privateRoom№2',
    },
  },

  amsterdam2: {
    1: {
      id: 1,
      name: 'amster_damrak_shop',
    },
  },
};


const displayProp = 'name';

const initialCity = undefined;
const initialStreet = undefined;
const initialHouse = undefined;

const cityPlaceholder = 'Выберете город';
const streetPlaceholder = 'Выберете улицу';
const housePlaceholder = 'Выберете дом';

const width = '250px';


export {
  displayProp,
  initialCity,
  initialStreet,
  initialHouse,
  cityList,
  streetList,
  houseList,
  cityPlaceholder,
  streetPlaceholder,
  housePlaceholder,
  width,
};
