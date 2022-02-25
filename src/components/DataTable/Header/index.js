import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Input, Typography, Button} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';

const useStyles = makeStyles({
    paper:{
        marginTop: 20,
        marginBottom: 20,
        background: "red"
    },
});


const Header = (props) => {
    const classes = useStyles();
    return (
     <div className="grid grid-cols-2">
            <div className=" p-2 rounded">
                <Paper >
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h6"
                        component="div"
                        style={{margin: 5}}
                    >Search
                    </Typography>
                    
                    <div className="grid grid-cols-2">
                        <div className="p-3 rounded bg-red">
                            <Input
                                placeholder="Please input search"
                                className="flex flex-1"
                                disableUnderline
                                fullWidth
                                value={props.keyword}
                                inputProps={{
                                    'aria-label': 'Search'
                                }}
                                onChange={ev => props.setKeyword(ev.target.value)}
                            />
                        </div>
                        <div className="p-3 rounded bg-red">
                            <Button onClick={() => props.searchFunction()} className="whitespace-no-wrap"   variant="contained">
                                <span>Cari</span>
                            </Button>
                        </div>
                    </div>
                </Paper>
            </div>
            <div className="p-6 rounded">
                <div className="p-2 rounded bg-red">
                    {/* <FormControl style={{minWidth: 120}}> */}
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Gender
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                            name: 'genre',
                            id: 'uncontrolled-native',
                            }}
                            value={props.gender}
                            onChange={ev => props.setGender(ev.target.value)}
                        >
                            <option value="">All</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </NativeSelect>
                    {/* </FormControl> */}
                </div>
                <div className="p-3 rounded bg-red">
                        <Button onClick={() => props.emptyFilter()} className="whitespace-no-wrap"   variant="contained">
                            <span>Reset Filter</span>
                        </Button>
                </div>
            </div>
    </div>
    );
};

export default Header;