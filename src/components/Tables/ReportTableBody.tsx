import React from 'react';
import {DataObjectType, DataType} from "../../types";

interface Props {
    data: DataType[];
}

const ReportTableBody: React.FC<Props> = ({data}) => {
    return (
        <>
            <tbody>
            {data.map((rowData, index) => {
                return (
                    <tr key={index}>
                        {rowData.map((cellData) => {
                            const detectedCellData = cellData as string | number | DataObjectType;
                            if (typeof detectedCellData === "object" && "d" in detectedCellData) {
                                return <td key={detectedCellData.d}>{detectedCellData.d}</td>;
                            } else {
                                return <td key={detectedCellData}>{detectedCellData}</td>;
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