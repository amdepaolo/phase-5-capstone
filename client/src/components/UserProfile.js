import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import UpdateUser from './UpdateUser'

function UserProfile(){
    const user = useSelector(state => state.users)
    const [showEdit, setShowEdit] = useState(false)

    const hostedGames = user.games.filter(game => game.user_hosting)
    const joinedGames = user.games.filter(game => !game.user_hosting)

    const hostedGamesList = hostedGames.map(game => <li key={game.id}><Link to={'/games/'+game.id}>{game.game_name}</Link></li>)
    const joinedGamesList = joinedGames.map(game => <li key={game.id}><Link to={'/games/'+game.id}>{game.game_name}</Link></li>)

    return(
        <div>
            <h2>{user.name}</h2>
            <button onClick={() => setShowEdit(!showEdit)}>User Options</button>
            {showEdit? <UpdateUser user={user} setShowEdit={setShowEdit}/>: ''}
            <h3>Jump Back In To A Game</h3>
            <ul>Your Hosted Games:
                {hostedGamesList}
            </ul>
            <ul>Your Joined Games:
                {joinedGamesList}
            </ul>
        </div>
    )

}

export default UserProfile