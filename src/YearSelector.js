import { Grid, TextField, Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function YearSelector() {
    const { selectedYear, setSelectedYear } = useContext(AppContext);
    const YearState = '2565';
    // console.log(selectedYear)
    // console.log(YearState)
    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    return (
        <>
            <Grid container spacing={1} sx={{ justifyContent: 'center', alignItems: 'center' }} marginBottom={2}>
                <Grid item xs={12} md={3} >
                    <div style={{ alignItems: 'center', justifyContent: 'center', position: 'relative', display: 'flex' }}  >
                        {/* <label style={{ position: 'absolute', marginTop: '-60px', fontSize: '16px', marginLeft: '-160px', color: 'grey' }}>งบประมาณประจำปี พ.ศ.</label> */}
                        <TextField
                            label="งบประมาณประจำปี พ.ศ."
                            fullWidth
                            // placeholder="งบประมาณประจำปี"
                            id="outlined-basic"
                            size='small'
                            // variant="outlined"
                            variant="outlined"
                            type="number"
                            value={selectedYear}
                            onChange={handleYearChange}
                            sx={{ marginRight: '10px', background: 'white', borderRadius: '5px', minWidth: '220px' }}
                        // InputLabelProps={{
                        //     shrink: false,
                        // }}
                        />
                        <Button disabled={YearState === selectedYear ? true:false } variant="contained" color='primary' sx={{ width: "100px", background: '#FF5CA1' }} > ยืนยัน </Button>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}