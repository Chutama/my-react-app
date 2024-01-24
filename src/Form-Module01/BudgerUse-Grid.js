import React, { useState } from 'react';
import {
    randomId,
} from '@mui/x-data-grid-generator';

import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

function BudgetUseGrid() {
    const initialData = [
        {
            id: randomId(),
            data: '',
            data2: '',
            data3: '',
            data4: '',
            data5: '',
            data6: '',
            data7: '',
            data8: '',
        },
    ];
    const [data, setData] = useState(initialData);    
    const genId = Array.from({ length: data.length }, (_, index) => index + 1);
    
    const handleCellEdit = (id, field, newData) => {
        const updatedData = data.map((item) => {
            if (item.id === id) {
                return { ...item, [field]: newData };
            }
            return item;
        });
        setData(updatedData);
    };

    const handleAddRow = () => {
        const newRow = {
            id: randomId(),
            data: '',
            data2: '',
            data3: '',
            data4: '',
            data5: '',
            data6: '',
            data7: '',
            data8: '',
        };
        setData([...data, newRow]);
    };

    const handleDeleteRow = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    };

    return (
        <div>
            <TableContainer component={Paper} sx={{ padding: 'px' }}>
                <Table >
                    <TableHead>
                        <TableRow >
                            <TableCell rowSpan={2} sx={{ border: '1px solid lightgrey', fontSize: '16px', fontWeight: 'bold', fontFamily: 'Sarabun', textAlign: 'center', width: '5%', padding: '7px 0px' }}>ลำดับ</TableCell>
                            <TableCell rowSpan={2} sx={{ border: '1px solid lightgrey', fontSize: '16px', fontWeight: 'bold', fontFamily: 'Sarabun', textAlign: 'center', width: '20%', padding: '7px 0px' }}>รายการ</TableCell>
                            <TableCell rowSpan={2} sx={{ border: '1px solid lightgrey', fontSize: '16px', fontWeight: 'bold', fontFamily: 'Sarabun', textAlign: 'center', width: '10%', padding: '7px 0px' }}>ประเภท</TableCell>
                            <TableCell rowSpan={2} sx={{ border: '1px solid lightgrey', fontSize: '16px', fontWeight: 'bold', fontFamily: 'Sarabun', textAlign: 'center', width: '10%', padding: '7px 0px' }}>ราคา</TableCell>
                            <TableCell rowSpan={2} sx={{ border: '1px solid lightgrey', fontSize: '16px', fontWeight: 'bold', fontFamily: 'Sarabun', textAlign: 'center', width: '10%', padding: '7px 0px' }}>หน่วย</TableCell>
                            <TableCell colSpan={2} sx={{ border: '1px solid lightgrey', fontSize: '16px', fontWeight: 'bold', fontFamily: 'Sarabun', textAlign: 'center', width: '20%', padding: '7px 0px' }}>ช่วงที่ 1 (ภาคเรียนที่ 2/2563)</TableCell>
                            <TableCell colSpan={2} sx={{ border: '1px solid lightgrey', fontSize: '16px', fontWeight: 'bold', fontFamily: 'Sarabun', textAlign: 'center', width: '20%', padding: '7px 0px' }}>ช่วงที่ 2 (ภาคเรียนที่ 1/2564)</TableCell>
                            <TableCell rowSpan={2} sx={{ border: '1px solid lightgrey', fontSize: '16px', fontWeight: 'bold', fontFamily: 'Sarabun', textAlign: 'center', width: '5%', padding: '7px 0px' }}>ลบ</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell sx={{ border: '1px solid lightgrey', fontSize: '14px', fontWeight: 'bold', fontFamily: 'Sarabun', textAlign: 'center', padding: '5px 0px' ,width:'10%' }}>จำนวน</TableCell>
                            <TableCell sx={{ border: '1px solid lightgrey', fontSize: '14px', fontWeight: 'bold', fontFamily: 'Sarabun', textAlign: 'center', padding: '5px 0px' ,width:'10%' }}>ราคา</TableCell>
                            <TableCell sx={{ border: '1px solid lightgrey', fontSize: '14px', fontWeight: 'bold', fontFamily: 'Sarabun', textAlign: 'center', padding: '5px 0px' ,width:'10%' }}>จำนวน</TableCell>
                            <TableCell sx={{ border: '1px solid lightgrey', fontSize: '14px', fontWeight: 'bold', fontFamily: 'Sarabun', textAlign: 'center', padding: '5px 0px'  ,width:'10%'}}>ราคา</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={row.id}>
                                <TableCell sx={{ border: '1px solid lightgrey', fontSize: '16px', fontFamily: 'Sarabun', textAlign: 'center', padding: '10px 10px' }}>{genId[index]}</TableCell>
                                <TableCell
                                    sx={{ border: '1px solid lightgrey', fontSize: '16px', fontFamily: 'Sarabun', textAlign: 'center', padding: '10px 10px' }}
                                    contentEditable={true}
                                    onBlur={(e) => handleCellEdit(row.id, 'data', e.target.innerText)}
                                    suppressContentEditableWarning={true}
                                >
                                    {row.data}
                                </TableCell>
                                <TableCell
                                    sx={{ border: '1px solid lightgrey', fontSize: '16px', fontFamily: 'Sarabun', textAlign: 'center', padding: '10px 10px' }}
                                    contentEditable="true"
                                    suppressContentEditableWarning={true}
                                >
                                    {row.data2}
                                </TableCell>
                                <TableCell
                                    sx={{ border: '1px solid lightgrey', fontSize: '16px', fontFamily: 'Sarabun', textAlign: 'center', padding: '10px 10px' }}
                                    contentEditable={true}
                                    onBlur={(e) => handleCellEdit(row.id, 'data3', e.target.innerText)}
                                    suppressContentEditableWarning={true}
                                >
                                    {row.data3}
                                </TableCell>
                                <TableCell
                                    sx={{ border: '1px solid lightgrey', fontSize: '16px', fontFamily: 'Sarabun', textAlign: 'center', padding: '10px 10px' }}
                                    contentEditable={true}
                                    onBlur={(e) => handleCellEdit(row.id, 'data4', e.target.innerText)}
                                    suppressContentEditableWarning={true}
                                >
                                    {row.data4}
                                </TableCell>
                                <TableCell
                                    sx={{ border: '1px solid lightgrey', fontSize: '16px', fontFamily: 'Sarabun', textAlign: 'center', padding: '10px 10px' }}
                                    contentEditable={true}
                                    onBlur={(e) => handleCellEdit(row.id, 'data5', e.target.innerText)}
                                    suppressContentEditableWarning={true}
                                >
                                    {row.data5}
                                </TableCell>
                                <TableCell
                                    sx={{ border: '1px solid lightgrey', fontSize: '16px', fontFamily: 'Sarabun', textAlign: 'center', padding: '10px 10px' }}
                                    contentEditable={true}
                                    onBlur={(e) => handleCellEdit(row.id, 'data6', e.target.innerText)}
                                    suppressContentEditableWarning={true}
                                >
                                    {row.data6}
                                </TableCell>
                                <TableCell
                                    sx={{ border: '1px solid lightgrey', fontSize: '16px', fontFamily: 'Sarabun', textAlign: 'center', padding: '10px 10px' }}
                                    contentEditable={true}
                                    onBlur={(e) => handleCellEdit(row.id, 'data7', e.target.innerText)}
                                    suppressContentEditableWarning={true}
                                >
                                    {row.data7}
                                </TableCell>
                                <TableCell
                                    sx={{ border: '1px solid lightgrey', fontSize: '16px', fontFamily: 'Sarabun', textAlign: 'center', padding: '10px 10px' }}
                                    contentEditable={true}
                                    onBlur={(e) => handleCellEdit(row.id, 'data7', e.target.innerText)}
                                    suppressContentEditableWarning={true}
                                >
                                    {row.data8}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        border: '1px solid lightgrey',
                                        fontSize: '16px',
                                        fontFamily: 'Sarabun',
                                        textAlign: 'center',
                                        padding: '5px 5px',
                                    }}
                                >
                                    <Button
                                    size='small'
                                        variant="outlined"
                                        color="error"
                                        onClick={() => handleDeleteRow(row.id)}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button variant="contained" color="success" onClick={handleAddRow} startIcon={<AddCircleOutlineOutlinedIcon />} fullWidth size='small'>เพิ่มข้อมูล</Button>
            </TableContainer>
        </div>
    );
}

export default BudgetUseGrid;


