export interface HeaderType {
    id: string;
    type: string;
    caption: string;
    align?: "left" | "right" | "center";
}

export type DataType = (string | number | DataObjectType)[];

export interface DataObjectType {
    d: number;
    color: string;
}

export interface MockedDataType {
    header: HeaderType[];
    data: DataType[];
}