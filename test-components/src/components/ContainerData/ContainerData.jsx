import React from 'react';

import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {Box} from "@mui/material";

import {mockMonitorData} from "../../data/mockData.js";

/* Add this field to make the cells editable: cellClassName: "name-column--cell" */
const columns = [
    {
        field: "id",
        headerName: "Tree ID",
        flex: 2,
        headerAlign: 'center',
        align: "center"
    },
    {
        field: "projectId",
        headerName: "Project",
        flex: 0.7,
        headerAlign: 'center',
        align: "center"
    },
    {
        field: "field",
        headerName: "Field Nr.",
        flex: 0.8,
        type: "number",
        headerAlign: 'center',
        align: "center",
    },
    {
        field: "keeperName",
        headerName: "Keeper",
        flex: 1.5,
        headerAlign: 'center',
        align: "center"
    },
    {
        field: "dateTime",
        headerName: "Time / Date",
        flex: 2,
        headerAlign: 'center',
        align: "center"
    },
    {
        field: "geolocation",
        headerName: "Geolocation",
        flex: 2,
        headerAlign: 'center',
        align: "center"
    },
    {
        field: "kgCO2",
        headerName: "Kg / CO2",
        type: "number",
        flex: 0.9,
        headerAlign: 'center',
        align: "center"
    },
    {
        field: "hm",
        headerName: "H (m)",
        type: "number",
        flex: 0.5,
        headerAlign: 'center',
        align: "center"
    },
    {
        field: "dcm",
        headerName: "D (cm)",
        type: "number",
        flex: 0.7,
        headerAlign: 'center',
        align: "center"
    },
    {
        field: "treeSpecies",
        headerName: "Tree Species",
        flex: 1.2,
        headerAlign: 'center',
        align: "center"
    },
    {
        field: "notes",
        headerName: "Notes",
        flex: 2,
        headerAlign: 'center',
        align: "center"
    }
];

function ContainerData() {
    return (
        <>
            <Box
                m="2rem 0 0 0"
                p="0 5rem"
                height="70vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                        fontSize: "13px",
                    },
                    "& .MuiDataGrid-iconSeparator": {
                        color: '#f4f4f4'
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
                        borderRadius: "0.2em"
                    },
                    "& .MuiCheckbox-root": {
                        color: '#f4f4f4',
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `#000`,
                    }
                }}
            >
                <DataGrid
                    columns={columns}
                    density='comfortable'
                    rows={mockMonitorData}
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
        </>
    );
}

export default ContainerData;