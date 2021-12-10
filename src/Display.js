function Display(props) {
    let display
    if (props.currentBounty.name) {
        display = (
            <div className='showBounty'>
                <h2>{props.currentBounty.name}</h2>
                <h3>Wanted for: {props.currentBounty.wantedFor}</h3>
                <p>Last Seen: {props.currentBounty.lastSeen ? props.currentBounty.lastSeen : 'Unknown'}</p>
            </div>
        )
    } else {
        display = <p>Click 'More' to see more about a bounty.</p>

    }
    return (
        <>{display}</>
    )
}

export default Display