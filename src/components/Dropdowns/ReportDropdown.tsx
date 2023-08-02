import React from 'react';
import s from "./report-dropdown.module.scss";

interface Props {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ReportDropdown: React.FC<Props> = ({onChange}) => {
    return (
        <>
            <select onChange={onChange} className={s.select}>
                <option defaultValue="" disabled>Choose a Report</option>
                <option value="profits">Profits Report</option>
                <option value="expenses">Expenses Report</option>
                <option value="employees">Employees Report</option>
            </select>
        </>
    );
};

export default ReportDropdown;