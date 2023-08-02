import React, {useState} from 'react';
import ReportDropdown from "./components/Dropdowns/ReportDropdown";
import ReportTable from "./containers/ReportTable";
import {MockedDataType} from "./types";
import {EmployeesData, ExpensesData, ProfitsData} from "./constants/mockedReportData";

const initialState = ProfitsData;

function App() {
    const [reportData, setReportData] = useState<MockedDataType>(initialState);

    const handleReportData = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedReport = e.target.value;
        switch (selectedReport) {
            case 'profits':
                setReportData(ProfitsData);
                break;
            case 'expenses':
                setReportData(ExpensesData);
                break;
            case 'employees':
                setReportData(EmployeesData);
                break;
            default:
                setReportData(ProfitsData);
        }
    };

    return (
        <div>
            <ReportDropdown onChange={handleReportData}/>
            <ReportTable report={reportData}/>
        </div>
    );
}

export default App;
