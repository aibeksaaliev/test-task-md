import React, {useState} from 'react';
import {MockedDataType} from "../../types";
import {EmployeesData, ExpensesData, ProfitsData} from "../../constants/mockedReportData";

const initialState = ProfitsData;

const ReportDropdown = () => {
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
        <>
            <select onChange={handleReportData}>
                <option defaultValue="" disabled>Choose a Report</option>
                <option value="profits">Profits Report</option>
                <option value="expenses">Expenses Report</option>
                <option value="employees">Employees Report</option>
            </select>
        </>
    );
};

export default ReportDropdown;