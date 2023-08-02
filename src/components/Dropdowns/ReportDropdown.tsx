import React from 'react';

interface Props {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ReportDropdown: React.FC<Props> = ({onChange}) => {
    return (
        <>
            <select onChange={onChange}>
                <option defaultValue="" disabled>Choose a Report</option>
                <option value="profits">Profits Report</option>
                <option value="expenses">Expenses Report</option>
                <option value="employees">Employees Report</option>
            </select>
        </>
    );
};

export default ReportDropdown;