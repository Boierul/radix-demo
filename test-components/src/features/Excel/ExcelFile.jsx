import React, {useEffect, useState} from "react";
import * as XLSX from "xlsx";

function ExcelFile({ data }) {
    const [excelData, setExcelData] = useState([]);

    useEffect(() => {
        setExcelData(data)
    }, []);

    const handleExport = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workbook, worksheet, "Installation_Report");
        XLSX.writeFile(workbook, "turbines_reports.xlsx");
    };

    return (
        <div>
            <button onClick={handleExport}>Export to Excel</button>
        </div>
    );
}

export default ExcelFile;
