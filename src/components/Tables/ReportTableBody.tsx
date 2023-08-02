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
                            const detectedCellData = cellData as string | number | DataObjectType;
                            if (typeof detectedCellData === "object" && "d" in detectedCellData) {
                                return <td key={generateUniqueKey(cellIndex)}>{detectedCellData.d}</td>;
                            } else {
                                return <td key={generateUniqueKey(cellIndex)}>{detectedCellData}</td>;
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