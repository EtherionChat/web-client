import { Box, Input, InputWrapper } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import React, { useEffect, useRef, useState } from 'react'

function DragInput() {
    const valueRef = useRef(100);
    const [value, setValue] = useState(100);
    return (
        <InputWrapper label="X" sx={{
            position: "relative",
            display: "inline-block",
            backgroundColor: "white",
            borderRadius: 4,
            overflow: "hidden",
            cursor: "grab",
        }} onWheel={(e) => {
            if (e.deltaY < 0 && value > 0) {
                setValue(value - 1);
            } else if (e.deltaY > 0 && value < 100) {
                setValue(value + 1);
            }
        }}
            onDrag={(e) => {
                console.log(e);
            }}
        >
            <Input variant="unstyled" type="number" value={value} min="0" max="100" />
            <Box sx={{
                position: "absolute",
                bottom: `${value}%`,
                borderTop: "1px solid red",
                width: "100%",
            }}></Box>
        </InputWrapper>
    )
}

export default DragInput