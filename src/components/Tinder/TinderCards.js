import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import database from '../../Firebase'
import './TinderCards.css' 
function TinderCards() {
  const [ people, setPeople] = useState([])
        //
      useEffect(() => {
         database
            .collection('people')
            .onSnapshot((snapshot) => {
              setPeople(snapshot.docs.map((doc) => doc.data()))
            })
              }, [people])
  return (
    <div>
       <div className="TinderCards__cardContainer">
      {people.map(person => (
         <TinderCard className="swipe" key={person.id}>
           <div
              style={{backgroundImage: `url(${person.url})`}} 
              className="card"
           >
            <h1>{person.name}</h1>
           </div>
         </TinderCard>
       ))}
      </div>
    </div>
  )
}
export default TinderCards
