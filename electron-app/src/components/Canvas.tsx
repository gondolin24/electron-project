import React from "react";
import {createUseStyles} from "react-jss";


const useStyles = createUseStyles({
    canvas: {
    }
})


const Canvas: React.FC = () => {
    const classes = useStyles()
        return (
            <div className={classes.canvas}>
                <img
                    src={""}
                    alt="Girl in a jacket"/>
            </div>
        )
};
export default Canvas;
