import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { Toisting } from '../Context/ToistingContext';
import { useTodos } from '../Context/TodosContext';



const Main = ({ todo, showDeleteDialog, showEditDialog }) => {
    const { todos, dispatch } = useTodos();
    const { showGideToast } = useContext(Toisting)
    function HandleCheckClick() {
        dispatch({
            type: "togg",
            payload: todo,
        })
        showGideToast("تم التعديل بنجاح")
    }

    function HandleOpenDialog() {
        showDeleteDialog(todo)
    }


    function HandleOpenDialogEdit() {
        showEditDialog(todo)
    }

    return (
        <div style={{ marginTop: "30px", paddingBottom: "30px" }}>
            <Card sx={{ minWidth: 275 }} style={{ background: "#023f7bff", color: "#ffffff", }} className='card' >
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={8}>
                            <Typography variant="h5" sx={{ textAlign: "right", textDecoration: todo.isCompleted ? "line-through" : "" }}>
                                {todo.title}
                            </Typography>
                            <Typography variant="h6" sx={{ textAlign: "right" }}>
                                {todo.body}
                            </Typography>
                        </Grid>
                        <Grid size={4} >
                            <Typography variant="body2" >
                                <IconButton onClick={HandleOpenDialog} aria-label="delete" style={{ color: "red", background: "white", border: "solid red 3px" }} className='iconButtom'>
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                                <IconButton onClick={() => {
                                    HandleCheckClick()
                                }} aria-label="checked" style={{ color: todo.isCompleted ? "white" : "#8bc34a", background: todo.isCompleted ? "#8bc34a" : "white", border: "solid #8bc34a 3px" }} className='iconButtom'>
                                    <CheckOutlinedIcon />
                                </IconButton>
                                <IconButton onClick={HandleOpenDialogEdit} aria-label="Edit" style={{ color: "#1769aa", background: "white", border: "solid #1769aa 3px" }} className='iconButtom'>
                                    <ModeEditOutlinedIcon />
                                </IconButton>
                                <br />
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
}

export default Main;
