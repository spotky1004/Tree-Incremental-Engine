declare const errMsg: {
    game: {
        nonResourceExist: (id: string) => string;
        noResourceTypeMatch: (id: string, type: string) => string;
        nonContentExist: (id: string) => string;
        noContentTypeMatch: (id: string, type: string) => string;
        notInit: () => string;
        duplicatedId: (ids: string[]) => string;
        onlySaveExist: (id: string) => string;
    };
    cost: {
        nonExistResource: (id: string) => string;
    };
    dynamic: {
        missingParam: (paramName: string) => string;
    };
};
export default errMsg;
