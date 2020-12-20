import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'

import './SwipeButtons.css'

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeBttons__repeat">
            <ReplayIcon  fontSize="large"/>
            </IconButton>
            <IconButton className="swipeBttons__left">
            <CloseIcon  fontSize="large"/>
            </IconButton>
            <IconButton className="swipeBttons__star">
            <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeBttons__right">
            <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeBttons__lightning">
            <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export {
   SwipeButtons,

}
