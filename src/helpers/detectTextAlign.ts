import {HeaderType} from "../types";

export const detectTextAlign = (metadata: HeaderType) => {
    if (metadata.align) {
        return metadata.align;
    } else if (metadata.type === "string") {
        return "left";
    } else if (metadata.type === "float") {
        return "right";
    } else {
        return "center";
    }
};