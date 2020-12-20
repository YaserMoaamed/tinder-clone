import React from 'react'
import TinderChat from './TinderChat'

function TinderChats() {
    return (
         <div className="chats ">
             <TinderChat
               name="wael"
               message="hello Yaser are you fine 😀"
               timestamp="35 minuts ago"
               profilePic="https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/121729404_10158940173761660_972098462541713918_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=LDu7RynnjAgAX-N2MQC&_nc_ht=scontent-frt3-2.xx&oh=74aa95238893f67a8199095d25bf0554&oe=5FFB29B1" />
             <TinderChat
               name="ali"
               message="Are you here ?"
               timestamp="3 days ago"
               profilePic="https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/67597422_2370807293191516_5459944314245218304_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=GU4dWREWNSkAX_qy7GU&_nc_ht=scontent-frx5-1.xx&oh=75d88a97e1f30c4d41bf09b1ac006646&oe=5FFADF65" />
             <TinderChat
               name="ibrahim"
               message="Hello Yaser 🚀"
               timestamp="1 week ago"
               profilePic="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/121616787_3469803953076595_7221821469177533431_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=g-hftkDDBegAX_nB_kY&_nc_ht=scontent-frt3-1.xx&oh=2fe01f0d89e17974c440fe589fe013e4&oe=5FFA4A52" />
         </div>
    )
}

export default TinderChats
