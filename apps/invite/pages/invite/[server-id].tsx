
const Invite = ({ serverId }) => {
    return <p>{serverId}</p>
}

Invite.getInitialProps = async ({ query }) => {
    const { "server-id": serverId } = query

    return { serverId }
}

export default Invite