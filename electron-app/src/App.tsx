import React from "react";
import Canvas from "./components/Canvas";
import TagSelector from "./components/TagSelector";
import {Button, createStyles, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appContainer:{
            marginLeft: '5em',
            marginRight: '5em'
        },
        buttonContainer: {
            display: 'flex',
            alignItems: 'row',
            justifyContent: 'space-around'
        },
        container: {
            display: 'flex',
            alignItems: 'row',
            justifyContent: 'space-between'
        },
        columnContainer: {
            display: 'flex',
            alignItems: 'column'}
    })
);


const App: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.appContainer}>
            <h1>Home page</h1>
            <div className={classes.container}>
                <Canvas/>
                <TagSelector/>
            </div>

            <div className={classes.buttonContainer}>
                <Button>back</Button>

                <Button>next</Button>

                <Button>submit</Button>
            </div>



        </div>
    );
};
export default App;


