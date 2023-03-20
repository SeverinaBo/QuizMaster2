import React, { useState } from 'react';

import {Select, MenuItem, InputLabel} from '@mui/material';

function TimeSelector({ defaultValue, onTimeChange }) {
    const [timePerQuestion, setTimePerQuestion] = useState(defaultValue);

    const handleTimerChange = (event) => {
        setTimePerQuestion(event.target.value);
        onTimeChange(event.target.value);
    };

    return (
        <>
            <InputLabel id="select-label">Set Time</InputLabel>
            <Select
                labelId="select-label"
                id="select"
                value={timePerQuestion}
                onChange={handleTimerChange}
                name="time"
                placeholder="Set timer"
                fullWidth
            >
                <MenuItem value={20}>20 sec</MenuItem>
                <MenuItem value={25}>25 sec</MenuItem>
                <MenuItem value={30}>30 sec</MenuItem>
                <MenuItem value={40}>40 sec</MenuItem>
            </Select>
        </>
    );
}

export default TimeSelector;
