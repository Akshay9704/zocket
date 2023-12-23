import Crown from '../assets/crown.png'
import Bell from '../assets/notification.png'
import Avatar from '../assets/avatar.png'
import Translate from '../assets/translate.png'
import Gift from '../assets/gift.png'

const Header = () => {
    return (
        <header id="header">
            <nav id="navbar">
                <h5>Free trial ends in 2 days</h5>
                <button className='plan'>
                    {/* Buy Plan */}
                    <img src={Crown}></img>
                    <h5>Buy Plan</h5>
                </button>
                <div className='gift'>
                    {/* Gift */}
                    <img src={Gift}></img>
                </div>
                <div className='bell'>
                    {/* Bell */}
                    <img src={Bell}></img>
                </div>
                <div className='profile'>
                    {/* Avatar */}
                    <div>
                        <img src={Avatar}></img>
                    </div>
                    <h4>Mukund cake shop</h4>
                </div>
                <div>
                    {/* Translate */}
                    <img src={Translate}></img>
                </div>
            </nav>
            <div id="divider"></div>
        </header>
    )
}

export default Header