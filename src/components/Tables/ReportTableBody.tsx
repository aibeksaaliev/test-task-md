import React from 'react';
import {DataObjectType, DataType} from "../../types";
import {generateUniqueKey} from "../../helpers/generateUniqueKey";

interface Props {
    data: DataType[];
}

const ReportTableBody: React.FC<Props> = ({data}) => {
    return (
        <>
            <tbody>
            {data.map((rowData, index) => {
                return (
                    <tr key={generateUniqueKey(index)}>
                        {rowData.map((cellData, cellIndex) => {
                            const detectedCellData = cellData as string | boolean | null | number | DataObjectType;
                            if (typeof detectedCellData === "object" && detectedCellData !== null && "d" in detectedCellData) {
                                return <td key={generateUniqueKey(cellIndex)}>{detectedCellData.d}</td>;
                            } else if (detectedCellData === null) {
                                return <td key={generateUniqueKey(cellIndex)}>empty</td>;
                            } else {
                                return <td key={generateUniqueKey(cellIndex)}>{detectedCellData.toString()}</td>;
                            }
                        })}
                    </tr>
                )
            })}
            </tbody>
        </>
    );
};

export default ReportTableBody;