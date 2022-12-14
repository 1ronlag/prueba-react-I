import React from 'react'

const CharacterItem = ({ item }) => {

    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.img} alt='' />
                    <h1>{item.name}</h1>
                </div>
                <div className='card-back'>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {item.nickname}
                        </li>
                        <li>
                            <strong>Status:</strong> {item.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CharacterItem