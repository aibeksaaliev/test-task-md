import React from 'react';
import ReportTableHeader from "../components/Tables/ReportTableHeader";
import ReportTableBody from "../components/Tables/ReportTableBody";
import {MockedDataType} from "../types";
import s from "./report-table.module.scss";

interface Props {
    report: MockedDataType;
}

const ReportTable: React.FC<Props> = ({report}) => {
    return (
        <>
            <table className={s.table}>
                <ReportTableHeader headerMetaData={report.header}/>
                <ReportTableBody data={report.data} metadata={report.header}/>
            </table>
        </>
    );
};

export default ReportTable;