import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import database from '../../firebase'
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Luffy',
            url: 'https://cdnb.artstation.com/p/assets/images/images/025/523/763/large/flat-bunnyy-luffy.jpg?1586079511'
        },
        {
            name: 'Zoro',
            url: 'https://cdna.artstation.com/p/assets/images/images/025/524/306/large/flat-bunnyy-zoro.jpg?1586081431'
        },
        {
            name: 'Chopper',
            url: 'https://cdnb.artstation.com/p/assets/images/images/025/524/349/large/flat-bunnyy-chopper.jpg?1586081662'
        },
        {
            name: 'Sanji',
            url: 'https://cdna.artstation.com/p/assets/images/images/025/524/272/large/flat-bunnyy-sanji.jpg?1586081294'
        },
    ])

    // useEffect(()=>{
    //     database
    //     .collection('people')
    //     .onSnapshot((snapshot) => 
    //         setPeople(snapshot.docs.map(doc => doc.data()))
    //     )
    // }, [])

    const swiped = (direction, nameToDelete) =>{
        console.log("removing" + nameToDelete) 
        // setLastDirection(direction)
    }

    const outOfFrame = (name) =>{
        console.log(name + " left the screen!")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person=>(
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={dir=> swiped(dir, person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}
                    >
                        <div 
                            style={{ backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
