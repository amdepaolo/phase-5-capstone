import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function UserProfile(){
    const user = useSelector(state => state.users)
    console.log(user)

    const gamesList = user.games.map(game => <Link to={'/games/'+game.id} key={game.id}>{game.game_name}</Link>)

    return(
        <div>
            <h2>{user.name}</h2>
            {gamesList}
        </div>
    )

}

export default UserProfile