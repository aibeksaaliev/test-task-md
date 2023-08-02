import React from 'react';
import {ProfitsData} from "../constants/mockedReportData";
import {DataObjectType} from "../types";

const ReportTable = () => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    {ProfitsData.header.map((metadata) => {
                        return <th key={metadata.id}>{metadata.caption}</th>;
                    })}
                </tr>
                </thead>
                <tbody>
                {ProfitsData.data.map((rowData, index) => {
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
            </table>
        </>
    );
};

export default ReportTable;