import React from 'react';
import {HeaderType} from "../../types";
import s from "../../containers/report-table.module.scss";
import {detectTextAlign} from "../../helpers/detectTextAlign";
import clsx from "clsx";

interface Props {
    headerMetaData: HeaderType[];
}

const ReportTableHeader: React.FC<Props> = ({headerMetaData}) => {
    return (
        <>
            <thead className={s.thead}>
            <tr>
                <th>mocked cell</th>
                {headerMetaData.map((columnMetaData) => {
                    const alignProps = detectTextAlign(columnMetaData);
                    const cellAlignProps = s[alignProps];
                    return <th className={clsx(cellAlignProps)} key={columnMetaData.id}>{columnMetaData.caption}</th>;
                })}
                <th>mocked cell</th>
            </tr>
            </thead>
        </>
    );
};

export default ReportTableHeader;