import React from "react"
import { GridColumns, DataGrid } from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material"

export type StatisticsProps = {stat: {max: number; min: number; average: number}, title: string};

export const Statistics: React.FC<StatisticsProps> = ({stat, title}) => {
    const columns = React.useRef<GridColumns> ([
        {field: 'min', headerName: 'Minimal Value', headerClassName: 'header', flex: 1, headerAlign: 'center' , align: 'center'},
        {field: 'max', headerName: 'Maximal Value', headerClassName: 'header', flex: 1, headerAlign: 'center' , align: 'center'},
        {field: 'average', headerName: 'Average Value', headerClassName: 'header', flex: 1, headerAlign: 'center' , align: 'center'}
    ])

    return <Box>
        <Typography align='center'>{title}</Typography>
     
        <Box sx={{height: '80vh', width: '80vw'}}>
            <DataGrid columns={columns.current} rows={[{id: 'id', ...stat}]}/>
        </Box>
    </Box>

}


// 1.	Introduce new functional component Statistics (folder “components”, not “pages”) 
// that gets some props from a parent component (Think of which props a parent component should pass) 
// and presents DataGrid table with following columns “Minimal Value”, “Maximal Value”, “Average Value”. 
// Along with a table there should be a relevant title, like “Age Statistics” 