import React, {useEffect, useState} from 'react';

import {Button, Grid, TextField} from "@mui/material";

import {socket} from "../Global/Header";
import ResponsiveAppBar from "../layouts/dashboard/header/ResponsiveAppBar";



export default function JoinGame() {

   const[nickname,setNickname] = useState('');
    const[pin,setPin] = useState('');
    const[message,setMessage] = useState('');
    const[disabled,setDisabled] = useState(false);


/*       useEffect(() => {
           socket.on("NICKNAME_TAKEN", () => {
               setMessage("Nickname taken");

               setTimeout(() => setMessage(''), 3000);
           });

           socket.on("PIN_NOT_FOUND", () => {
               setMessage("Not found");

               setTimeout(() => setMessage(''), 3000);
           });

       }, []); */

    const handleSubmit = (event) => {
        event.preventDefault();
        socket.emit("PLAYER_JOINED", { nickname, pin });
   /*     setDisabled(false); */
    };

    let error;

    if (message === "Not found") {
        error = <div>We didn't recognise the game pin.Please check and try again.</div>;
    } else if (message === "Nickname taken") {
        error = <div>Sorry, that nickname is taken.</div>;
    }
        return (
            <div spacing={2}>
                <ResponsiveAppBar/>
                <Grid component="form"
                      sx={{
                          '& .MuiTextField-root': {m: 1, width: '25ch'},
                      }}
                      noValidate
                      autoComplete="off"
                >
                    <div onSubmit={handleSubmit}>

                        <TextField
                            id="outlined-required"
                            placeholder="NICKNAME"
                            name="nickname"
                            value={nickname || ''}
                            onChange={(event) => setNickname(event.target.value)}
                            margin="dense"
                            variant="outlined"
                            required
                            fullWidth
                        />
                        <TextField
                            id="outlined-number"
                            type="number"
                            InputLabelProps={{ shrink: true }}
                            placeholder="GAME PIN"
                            name="pin"
                            value={pin || ''}
                             onChange={(event) => setPin(event.target.value)}
                            margin="dense"
                            variant="outlined"
                            required
                            fullWidth
                        />
                        <Button
                            style={{
                                fontSize: "1.6rem",
                                textAlign: "center",
                                fontWeight: "bold",
                                margin: "1rem 0"
                            }}
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={disabled}

                        >
                            Enter
                        </Button>

                    </div>
                    <div style={{minHeight: "6rem", margin: "1rem 0"}}>
                        {error}
                    </div>

                </Grid>
            </div>
        )
    }

