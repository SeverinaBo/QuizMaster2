import React, {Component, useEffect, useState} from 'react';

import {Button, Grid, TextField} from "@mui/material";
import {socket} from '../Global/Header';


export default function JoinGame(props) {

   const[nickname,setNickname] = useState(null);
    const[pin,setPin] = useState(null);
    const[message,setMessage] = useState(null);
    const[disabled,setDisabled] = useState(null);

       useEffect(() => {
           socket.on("NICKNAME_TAKEN", () => {
               setMessage("Nickname taken");

               setTimeout(() => setMessage(null), 3000);
           });

           socket.on("GAME_NOT_FOUND", () => {
               setMessage("Not found");

               setTimeout(() => setMessage(null), 3000);
           });

           socket.on("PLAYER_JOINED_SUCCESSFULLY", (data) => {
               props.history.push(`/instructions?nickname=${nickname}&pin=${pin}`);
           });

           return () => {
               socket.off("NICKNAME_TAKEN");
               socket.off("GAME_NOT_FOUND");
               socket.off("PLAYER_JOINED_SUCCESSFULLY");
           };
       }, [nickname, pin, props.history]);

    const handleSubmit = (event) => {
        event.preventDefault();
        socket.emit("PLAYER_JOINED", { nickname, pin });
        setDisabled(true);
    };

    let error;

    if (message === "Not found") {
        error = <div>We didn't recognise the game pin.Please check and try again.</div>;
    } else if (message === "Nickname taken") {
        error = <div>Sorry, that nickname is taken.</div>;
    }
        return (
            <div spacing={2}>
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
                            disabled={(event) => disabled(event.target.value)}
                            fullWidth
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

