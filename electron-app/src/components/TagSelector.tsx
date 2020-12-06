import React, {useState} from "react";
import {createUseStyles} from "react-jss";
import {Button, createStyles, FormControl, InputLabel, makeStyles, Select, Theme} from '@material-ui/core';
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

const TagSelector: React.FC = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string)
    };
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">tag</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Eye</MenuItem>
                    <MenuItem value={20}>Mouth</MenuItem>
                    <MenuItem value={30}>Nose</MenuItem>
                </Select>
            </FormControl>
        </div>
        )


};
export default TagSelector;
