import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const Header = ({displayTodosType,changedisplayType}) => {

    return (
        <div>
            <h1>مهامي</h1>
            <hr></hr>
            <div>
                <ToggleButtonGroup
                    value={displayTodosType}
                    exclusive
                    onChange={changedisplayType}
                    aria-label="text alignment"
                >
                    <ToggleButton value="all" aria-label="left aligned">
                        الكل
                    </ToggleButton>
                    <ToggleButton value="completed" aria-label="centered">
                        منجز
                    </ToggleButton>
                    <ToggleButton value="notcompleted" aria-label="right aligned">
                        غير منجز
                    </ToggleButton>

                </ToggleButtonGroup>
            </div>
        </div>
    );
}

export default Header;
