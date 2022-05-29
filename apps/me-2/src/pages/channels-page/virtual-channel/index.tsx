import React from 'react'
import phaserGame from '../../../PhaserGame'
import HelloWorldScene from './scenes/HelloWorldScene'

const handleClick = () => {
    const scene = phaserGame.scene.keys["helloworld"] as HelloWorldScene
    scene.createEmitter()
}

export default function VirtualChannel() {
    return (
        <div>index</div>
    )
}
