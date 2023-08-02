import React from 'react';
import {ProfitsData} from "../constants/mockedReportData";
import ReportTableHeader from "../components/Tables/ReportTableHeader";
import ReportTableBody from "../components/Tables/ReportTableBody";

const ReportTable = () => {
    return (
        <>
            <table>
                <ReportTableHeader headerMetaData={ProfitsData.header}/>
                <ReportTableBody data={ProfitsData.data}/>
            </table>
        </>
    );
};

export default ReportTable;