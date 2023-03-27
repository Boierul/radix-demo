import React from 'react';

import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {Box} from "@mui/material";

import {mockContainerData} from "../../data/mockContainerData.js";

/* Add this field to make the cells editable: cellClassName: "name-column--cell" */
const columns = [
    {
        field: "id",
        headerName: "UDI",
        flex: 0.7,
        headerAlign: 'center',
        align: "center"
    },
    {
        field: "productID",
        headerName: "Product ID",
        flex: 1.1,
        headerAlign: 'center',
        align: "center"
    },
    {
        field: "type",
        headerName: "Type",
        flex: 0.7,
        headerAlign: 'center',
        align: "center",
    },
    {
        field: "airTemperature",
        headerName: "Air Temperature [K]",
        flex: 1.2,
        headerAlign: 'center',
        align: "center",
    },
    {
        field: "processTemperature",
        headerName: "Process Temperature [K]",
        flex: 1.2,
        headerAlign: 'center',
        align: "center",
    },
    {
        field: "rotationalSpeed",
        headerName: "Rotational Speed [rpm]",
        flex: 1.2,
        headerAlign: 'center',
        align: "center",
    },
    {
        field: "torque",
        headerName: "Torque [N/m]",
        flex: 0.8,
        headerAlign: 'center',
        align: "center",
    },
    {
        field: "toolWear",
        headerName: "Tool Wear [min]",
        flex: 0.8,
        headerAlign: 'center',
        align: "center",
    },
    {
        field: "target",
        headerName: "Target",
        flex: 0.6,
        headerAlign: 'center',
        align: "center",
    },
    {
        field: "failureType",
        headerName: "Failure Type",
        flex: 0.8,
        headerAlign: 'center',
        align: "center",
    }
];

function ContainerData() {
    return (
        <>
            <Box
                m="2.5rem 0 0 0"
                p="0 5rem"
                height="70vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                        fontSize: "13px",
                    },
                    "& .MuiDataGrid-iconSeparator": {
                        color: '#f4f4f4',
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: '#f4f4f4',
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: '#000',
                        color: '#f4f4f4',
                        borderBottom: "none",
                        borderRadius: "0.2em",
                        fontSize: "15px"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: '#f5f5f5',
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: '#f4f4f4',
                        color: '#000',
                        borderRadius: "0.2em",
                        border: '1.5px solid #D9D9D9;'
                    },
                    "& .MuiCheckbox-root": {
                        color: '#f4f4f4',
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `#000`,
                    },
                    "& .MuiSvgIcon-fontSizeSmall" : {
                        color: `#fff`,
                        opacity: 1
                    }
                }}
            >
                <DataGrid
                    columns={columns}
                    density='standard'
                    rows={mockContainerData}
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
        </>
    );
}

export default ContainerData;