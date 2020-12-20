import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import './TinderChats.css'
function TinderChatScreen() {
    const [ input , setInput ] = useState('')
    const [message, setMessage ] = useState([
        {
            name: 'Wael',
            image: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/121729404_10158940173761660_972098462541713918_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=LDu7RynnjAgAX-N2MQC&_nc_ht=scontent-frt3-2.xx&oh=74aa95238893f67a8199095d25bf0554&oe=5FFB29B1',
            message: 'whats up'
        },
        {
            name: 'Wael',
            image: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/121729404_10158940173761660_972098462541713918_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=LDu7RynnjAgAX-N2MQC&_nc_ht=scontent-frt3-2.xx&oh=74aa95238893f67a8199095d25bf0554&oe=5FFB29B1',
            message: 'How it going'
        },
        {
            message: 'Hi How are you ?'
        }
    ])
    const handleSubmit = e => {
        e.preventDefault();
        setMessage([...message, {message: input}]);
        setInput('');
    }
    return (
        <div className="chat__screen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH WAEL ON 10/08/2020</p>
            {message.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar
                     className="chatScreen__image"
                     alt={message.name}
                     src={message.image} />
                   <p className="chatScreen__text">{message.message}</p>
               </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
            <div >
                <form className="chatScreen__input">
                    <input 
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        type="text" 
                        className="chatScreen__inputField"
                        palceholder="Type a message..." />
                    <button type="submit" className="chatScreen__Button" onClick={handleSubmit}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default TinderChatScreen
