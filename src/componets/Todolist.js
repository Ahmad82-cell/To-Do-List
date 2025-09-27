import Container from '@mui/material/Container';
import Header from './Header';
import Grid from '@mui/material/Grid';
import Main from './Main';
import Footer from './Footer';
import { useMemo,useContext , useEffect, useState, } from 'react';
import { Toisting } from '../Context/ToistingContext';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useTodos } from '../Context/TodosContext';
const Todolist = () => {
    //  this is Hooks

    // const { todos2, settodos } = useContext(TodosContext)
    const { showGideToast } = useContext(Toisting);
    const [titleInput, settitleInput] = useState("");
    const [showDelete, setshowDelete] = useState(false);
    const [dailogTodo, setdailogTod] = useState(null);
    const [showEdit, setshowEdit] = useState(false);
    const {todos, dispatch} = useTodos();
    // ###############//  this is Hooks################

    // Add-Click
    function HandleAddClick() {
        settitleInput("")
        showGideToast("تم الاضافة بنجاح")
        dispatch({
            type: "added",
            payload: {
                newTitle: titleInput,
            }
        })
    }
    useEffect(() => {
        dispatch({type:"get"})
    }, []);


    // check is completed && is Notcompleted
    const [displayTodosType, setdisplayTodosType] = useState("all")
    function changedisplayType(e) {
        setdisplayTodosType(e.target.value)
    }

    const completedTodos = useMemo(() => {
        return todos.filter((t) => {
            return t.isCompleted
        })
    }, [todos])


    const notcompletedTodos = useMemo(() => {
        return todos.filter((t) => {
            return !t.isCompleted
        })
    }, [todos])


    let todosToperendered = todos;
    if (displayTodosType == "completed") {
        todosToperendered = completedTodos;
    }
    else if (displayTodosType == "notcompleted") {
        todosToperendered = notcompletedTodos;
    }
    else {
        todosToperendered = todos
    }


    // check is completed && is Notcompleted

    // HANDLERS for delete
    function HandleCloesDialog() {
        setshowDelete(false)
    }


    function showDeleteDialog(todo) {
        setshowDelete(true)
        setdailogTod(todo)
    }

    function HandleDeleteConfirm() {
        dispatch({
            type: "delete",
            payload: dailogTodo
        })
        
        setshowDelete(false)
        showGideToast("تم الحذف بنجاح")
    }
    //################# HANDLERS for delete ################

    // HANDLERS for Edit

    function HandleCloesDialogEdit() {
        setshowEdit(false)
    }
    function showEditDialog(todo) {
        setdailogTod(todo)
        setshowEdit(true)
    }
    function HandleEdit() {
        dispatch({type:"updet",payload:dailogTodo})
        setshowEdit(false)
        showGideToast("تم التحديث بنجاح")
    }

    const todosjs = todosToperendered.map((t) => {
        return <Main key={t.id} todo={t} showDeleteDialog={showDeleteDialog} showEditDialog={showEditDialog}  />
    })
    return (
        <>
            {/*updet  */}
            <Dialog dir='rtl'
                style={{ width: '100%' }}
                open={showEdit}
                onClose={HandleCloesDialogEdit}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" >
                    <TextField
                        style={{ textAlign: "right" }}
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        label="عنوان المهمة"
                        type="text"
                        fullWidth
                        variant="standard"
                        // value={dailogTodo.title}
                        onChange={(e) => setdailogTod({ ...dailogTodo, title: e.target.value })}
                    />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div >
                            <TextField
                                style={{ textAlign: "right" }}
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                label="التفاصيل"
                                type="text"
                                fullWidth
                                variant="standard"
                                // value={dailogTodo.body}
                                onChange={(e) => setdailogTod({ ...dailogTodo, body: e.target.value })}
                            />
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={HandleCloesDialogEdit}>اغلاق</Button>
                    <Button autoFocus onClick={HandleEdit}>تأكيد</Button>


                </DialogActions>
            </Dialog>
            {/*Edit  */}
            {/* Delete */}
            <Dialog
                open={showDelete}
                onClose={HandleCloesDialog}
                aria-labelledby="alert-dialog-title"

                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    هل انت متاكد من حذف المهمة؟
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div style={{ color: "red", fontWeight: "500" }}>
                            <span style={{ color: "red", fontWeight: "500", fontSize: "20px" }}>ملاحظة:</span>
                            لا يمكنك التراجع عن الحذف

                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={HandleCloesDialog}>اغلاق</Button>
                    <Button onClick={HandleDeleteConfirm} autoFocus>    نعم قم بالحذف</Button>


                </DialogActions>
            </Dialog>
            {/* Delete */}

            <Container maxWidth="xl" style={{ background: "#ffffff", minHeight: "80vh", overflowY: "scroll",minWidth:"90vw" }}>
            <Grid size={12}>    
                <Header displayTodosType={displayTodosType} changedisplayType={changedisplayType} />
                {todosjs}
                <Footer HandleAddClick={HandleAddClick} titleInput={titleInput} settitleInput={settitleInput} />
              </Grid>
            </Container>
        </>

    );
}

export default Todolist;
