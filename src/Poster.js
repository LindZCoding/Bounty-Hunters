function Poster(props) {
    let status = props.bounty.captured ? 'In Custody' : 'At Large'

    return(
        <div className="Poster">
            <h2>{status}</h2>
            <h2>{props.bounty.name}</h2>
            <h2>{props.bounty.reward}</h2>
            <button onClick={() => props.changeCurrent(props.bounty)}>More</button>
        </div>
    )
}

export default Poster