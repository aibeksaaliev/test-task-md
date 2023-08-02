export const generateUniqueKey = (index: number) => {
    return Math.floor(Math.random() * (100000 - index + 1)) + index;
};