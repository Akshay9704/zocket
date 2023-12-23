import Logo from "../assets/logo.png"
import Home from "../assets/house.png"
import Campaign from "../assets/campaign.png"
import Product from "../assets/product.png"
import Customer from "../assets/customer.png"

const Sidebar = () => {
    return (
        <div id="sidebar">
            <div>
                <img id="logo" src={Logo} alt="logo" />
            </div>
            <div id="sidebar_list">
                <div className="listbox">
                    <img src={Home} alt="" />
                    <a>Home</a>
                </div>
                <div className="listbox">
                    <img src={Campaign} alt="" />
                    <a href="/">Campaign</a>
                </div>
                <div className="listbox">
                    <img src={Product} alt="" />
                    <a>Products</a>
                </div>
                <div className="listbox">
                    <img src={Customer} alt="" />
                    <a>Customers</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;