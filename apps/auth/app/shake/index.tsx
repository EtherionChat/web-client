// import React, { useEffect } from 'react'
// import { useSpring, animated } from 'react-spring';

// function Shake() {
//     const [{ x, y }, api] = useSpring(() => ({
//         from: { x: 0, y: 0 },
//     }));

//     const xInterpolate = x.to(
//         [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
//         [shakeXStart, shakeXEnd, shakeXStart, shakeXEnd, shakeXStart, shakeXEnd, shakeXStart, shakeXEnd],
//     );

//     const yInterpolate = y.to(
//         [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
//         [shakeYStart, shakeYEnd, shakeYStart, shakeYEnd, shakeYStart, shakeYEnd, shakeYStart, shakeYEnd],
//     );

//     // Update state when ready to shake
//     useEffect(() => {
//         if (errorState.shakeId && errorState.shakeId !== shakeState.id) {
//             api.start({
//                 from: { x: 0, y: 0 }, // this line here may be omitable, i'd see if it is for cleaner code.
//                 to: { x: 1, y: 1 }
//             })
//         }
//     }, [shakeState, errorState.shakeId]);

//     // component with transform using translate3d
//     return (
//         <animated.div
//             className='command_hub_container'
//             style={{ x: xInterpolate, y: yInterpolate }}
//         />
//     )
// }

// export default Shake
export { }