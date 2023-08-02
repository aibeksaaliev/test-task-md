import {MockedDataType} from "../types";

export const ProfitsData: MockedDataType = {
    header: [
        {id: "project_name", type: "string", caption: "Project name", align: "left"},
        {id: "total_by_project", type: "float", caption: "Total by project"},
        {id: "project_type", type: "string", caption: "Project type", align: "center"},
        {id: "jan", type: "float", caption: "Jan"},
        {id: "feb", type: "float", caption: "Feb"},
        {id: "mar", type: "float", caption: "Mar"},
        {id: "apr", type: "float", caption: "Apr"},
        {id: "may", type: "float", caption: "May"},
    ],
    data: [
        ["Online-School", 1024.3, "commercial", 2048.2, 4096.0, 1058.1, 941.7, 4519.4],
        ["City-Scope", 2345.1, "internal", 3465.3, {d: 12.5, color: "selected"}, 547.0, 5416.1, 1654.8],
        ["Spotify", 54.4, "commercial", {d: 5489.1, color: "selected"}, 564.8, 4652.3, {d: 654.7, color: "selected"}, 2014.5],
        ["Twitter", 555.5, "commercial", 444.4, 333.3, 222.2, 111.1, 999.9],
        ["Glovo", 987.6, "commercial", 543.2, {d: 789.1, color: "selected"}, 234.5, 657.8, 123.4],
        ["YouTube", 1234.5, "internal", {d: 876.5, color: "selected"}, 543.2, 987.6, 345.2, 1111.1],
    ]
};

export const ExpensesData: MockedDataType = {
    header: [
        {id: "project_name", type: "string", caption: "Project name"},
        {id: "total_by_project", type: "float", caption: "Total by project", align: "center"},
        {id: "project_type", type: "string", caption: "Project type"},
        {id: "jan", type: "float", caption: "Jan"},
        {id: "feb", type: "float", caption: "Feb"},
        {id: "mar", type: "float", caption: "Mar"},
        {id: "apr", type: "float", caption: "Apr"},
        {id: "may", type: "float", caption: "May"},
        {id: "jun", type: "float", caption: "June"},
        {id: "jul", type: "float", caption: "July"},
    ],
    data: [
        ["Online-School", 23010.0, "commercial", 2048.2, 4096.0, 1058.1, 941.7, 4519.4, 2013.1, 513.1],
        ["City-Scope", 5120.0, "internal", 3465.3, {d: 12.5, color: "selected"}, 547.0, 5416.1, 1654.8, 987.4, 500.0],
        ["Spotify", 15361.5, "commercial", {d: 5489.1, color: "selected"}, 564.8, 4652.3, {d: 654.7, color: "selected"}, 2014.5, 3333.3, 1111.1],
        ["Twitter", 10254.2, "commercial", 444.4, 333.3, 222.2, 111.1, 999.9, 555.5, 444.4],
        ["Glovo", 50314.0, "commercial", 543.2, {d: 789.1, color: "selected"}, 234.5, 657.8, 123.4, 666.6, {d: 4567.1, color: "selected"},],
        ["YouTube", 40012.0, "internal", 543.2, 987.6, 345.2, {d: 548.5, color: "selected"}, 1111.1, 444.4, 333.3],
    ]
};

export const EmployeesData: MockedDataType = {
    header: [
        {id: "project_name", type: "string", caption: "Project name", align: "center"},
        {id: "total_by_project", type: "float", caption: "Total by project", align: "center"},
        {id: "project_type", type: "string", caption: "Project type", align: "center"},
        {id: "jan", type: "float", caption: "Jan"},
        {id: "feb", type: "float", caption: "Feb"},
        {id: "mar", type: "float", caption: "Mar"},
        {id: "apr", type: "float", caption: "Apr"},
        {id: "may", type: "float", caption: "May"},
        {id: "jun", type: "float", caption: "June"},
        {id: "jul", type: "float", caption: "July"},
        {id: "aug", type: "float", caption: "August"},
    ],
    data: [
        ["Online-School", 1024.3, "commercial", 2048.2, 4096.0, 1058.1, 941.7, 4519.4, 2013.1, 513.1, 907.3],
        ["City-Scope", 2345.1, "internal", 3465.3, {d: 12.5, color: "selected"}, 547.0, 5416.1, 1654.8, 987.4, 500.0, 789.5],
        ["Spotify", 54.4, "commercial", {d: 5489.1, color: "selected"}, 564.8, 4652.3, {d: 654.7, color: "selected"}, 2014.5, 3333.3, 1111.1, 2345.6],
        ["Twitter", 555.5, "commercial", 444.4, 333.3, 222.2, 1111.1, 999.9, 555.5, 444.4, 222.2],
        ["Glovo", 987.6, "commercial", 543.2, {d: 789.1, color: "selected"}, 234.5, 657.8, 123.4, 666.6, 222.2, 555.5],
        ["YouTube", 1234.5, "internal", {d: 876.5, color: "selected"}, 543.2, 987.6, 345.2, 1111.1, 444.4, 333.3, 333.3],
        ["GoDee", 6543.2, "commercial", 987.6, 765.4, {d: 987.6, color: "selected"}, 876.5, 654.3, 543.2, 432.1, 321.0],
        ["Enji", 10000.0, "commercial", 2000.0, 3000.0, 4000.0, 5000.0, 6000.0, {d: 7000.0, color: "selected"}, {d: 8000.0, color: "selected"}, {d: 9000.0, color: "selected"}],
    ]
};

