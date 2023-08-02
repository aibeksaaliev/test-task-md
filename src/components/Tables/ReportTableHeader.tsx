import React from 'react';
import {HeaderType} from "../../types";

interface Props {
    headerMetaData: HeaderType[];
}

const ReportTableHeader: React.FC<Props> = ({headerMetaData}) => {
    return (
        <>
            <thead>
            <tr>
                {headerMetaData.map((columnMetaData) => {
                    return <th key={columnMetaData.id}>{columnMetaData.caption}</th>;
                })}
            </tr>
            </thead>
        </>
    );
};

export default ReportTableHeader;