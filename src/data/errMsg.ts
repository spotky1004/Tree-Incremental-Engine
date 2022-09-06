const errMsg = {
  game: {
    nonExist: (id: string) => `Resource '${id}' doesn't exists`,
    noResourceTypeMatch: (id: string, type: string) => `Resource '${id}' isn't type '${type}'`,
    noContentTypeMatch: (id: string, type: string) => `Content '${id}' isn't type '${type}'`,
    notInit: () => `The game must be inited to run\nRun game.init() once to initialize`,
    duplicatedId: (ids: string[]) => `There's duplicated id(s): ${ids.map(id => `'${id}'`).join(", ")}`
  },
  cost: {
    nonExistResource: (id: string) => `Resource '${id}' exists in cost, but it didn't connected to the game`
  },
  dynamic: {
    missingParam: (paramName: string) => `Although dynamic param is function, didn't recived param: '${paramName}'`
  }
};

export default errMsg;
