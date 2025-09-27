import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import style from './../../node_modules/dom-helpers/esm/css';

const Footer = ({ HandleAddClick, titleInput, settitleInput }) => {
    return (
        <div style={{ paddingBottom: "20px" }}>
            <Grid container spacing={2} >
                <Grid size={8} display={"flex"} justifyContent={"space-around"} alignContent={"center"}>
                    <TextField value={titleInput} onChange={(e) => { settitleInput(e.target.value)}}
                        id="outlined-basic" label="عنوان الاضافة" variant="outlined" style={{ width: "100%" }} />
                </Grid>
                <Grid size={4} display={"flex"} justifyContent={"space-around"} alignContent={"center"} >
                    <Button disabled={titleInput.length==0 } onClick={() => { HandleAddClick() }} variant="contained" style={{ width: "100%" }}>اضافة</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
