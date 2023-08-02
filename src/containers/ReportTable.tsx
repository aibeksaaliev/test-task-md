import React from 'react';
import ReportTableHeader from "../components/Tables/ReportTableHeader";
import ReportTableBody from "../components/Tables/ReportTableBody";
import {MockedDataType} from "../types";

interface Props {
    report: MockedDataType;
}

const ReportTable: React.FC<Props> = ({report}) => {
    return (
        <>
            <table>
                <ReportTableHeader headerMetaData={report.header}/>
                <ReportTableBody data={report.data}/>
            </table>
        </>
    );
};

export default ReportTable;