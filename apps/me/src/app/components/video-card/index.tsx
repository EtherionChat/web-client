import { useSpring, animated } from 'react-spring'
import { useDrag } from '@use-gesture/react'

function VideoCard() {
    const [{ x, y, scale }, set] = useSpring(() => ({ x: 0, y: 0, scale: 1 }))
    const bind = useDrag(({ down, movement: [x, y] }) => {
        set({ x: down ? x : 0, y: down ? y : 0, scale: down ? 1.2 : 1 })
    })

    return (
        <animated.div {...bind()} style={{
            x, y, scale,
            position: 'absolute',
            zIndex: 9999,
            top: 50,
            left: 50,
            width: 80,
            height: 80,
            background: "hotpink",
            borderRadius: 16,
        }} />
    )
}

export default VideoCard