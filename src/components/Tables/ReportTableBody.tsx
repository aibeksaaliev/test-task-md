import React from 'react';
import {DataObjectType, DataType, HeaderType} from "../../types";
import {generateUniqueKey} from "../../helpers/generateUniqueKey";
import s from "../../containers/report-table.module.scss";
import clsx from "clsx";
import {detectTextAlign} from "../../helpers/detectTextAlign";

interface Props {
    data: DataType[];
    metadata: HeaderType[];
}

const ReportTableBody: React.FC<Props> = ({data, metadata}) => {
    return (
        <>
            <tbody className={clsx(s.tbody, s.tbody_tr)}>
            {data.map((rowData, index) => {
                return (
                    <tr key={generateUniqueKey(index)}>
                        <td></td>
                        {rowData.map((cellData, cellIndex) => {
                            const alignProps = detectTextAlign(metadata[cellIndex]);
                            const cellAlignProps = s[alignProps];
                            const detectedCellData = cellData as string | boolean | null | number | DataObjectType;
                            if (typeof detectedCellData === "object" && detectedCellData !== null && "d" in detectedCellData) {
                                return <td
                                    className={clsx(cellAlignProps)}
                                    key={generateUniqueKey(cellIndex)}
                                >
                                    {detectedCellData.d}
                                </td>;
                            } else if (detectedCellData === null) {
                                if (metadata[cellIndex].type === "float") {
                                    return <td
                                        className={clsx(cellAlignProps)}
                                        key={generateUniqueKey(cellIndex)}
                                    >
                                        0
                                    </td>;
                                } else {
                                    return <td
                                        className={clsx(cellAlignProps)}
                                        key={generateUniqueKey(cellIndex)}
                                    >
                                        empty
                                    </td>;
                                }
                            } else {
                                return <td
                                    className={clsx(cellAlignProps)}
                                    key={generateUniqueKey(cellIndex)}
                                >
                                    {detectedCellData.toString()}
                                </td>;
                            }
                        })}
                        <td></td>
                    </tr>
                )
            })}
            </tbody>
        </>
    );
};

export default ReportTableBody;