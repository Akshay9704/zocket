import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tick from "../assets/tick.png";
import Calendar from "../assets/calendar.png";
import Bag from "../assets/bag.png";
import Lamp from "../assets/lamp.png";
import Phone from "../assets/phone.png";
import Message from "../assets/message.png";
import Person from "../assets/person.png";
import People from "../assets/people.png";
import Eye from "../assets/eye.png";
import Click from "../assets/click.png";
import Shop from "../assets/shop.png";
import Save from "../assets/save.png";
import Note from "../assets/note.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import user from "../assets/user.png";
import cake1 from "../assets/cake1.png";
import cake2 from "../assets/cake2.png";
import cake3 from "../assets/cake3.png";
import cake4 from "../assets/cake4.png";
import Data from "../data/products.json";

const CreateCampaign = ({ campaigns, setCampaigns, product, setProduct, campaignList, setCampaignList, settings, setSettings }) => {
    const [products, setProducts] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [showLocation, setShowLocation] = useState(true);
    const [showRadius, setShowRadius] = useState(false);

    const navigate = useNavigate();

    const getProducts = () => {
        setProducts(Data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handleContinue = (e) => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        } else { }
        e.preventDefault();
        if (currentStep === 4) {
            setCampaignList((prevData) => {
                return [...prevData, { campaigns, product, settings, id: new Date().getTime() }];
            });
            navigate("/");
        }
    };

    const optionHandler = (campaignType) => {
        setCampaigns(campaignType);
    }

    const productHandler = (selectedProduct) => {
        setProduct(selectedProduct);
    }   

    const settingsHandler = (e) => {
        if (e.target.id === 'start') {
            setSettings({ ...settings, start: e.target.value });
        } else if (e.target.id === 'end') {
            setSettings({ ...settings, end: e.target.value });
        } else if (e.target.id === 'location-input') {
            setSettings({ ...settings, location: e.target.value });
        }
    };
            
    const locationHandler = () => {
        setShowLocation(true);
        setShowRadius(false);
    };

    const radiusHandler = () => {
        setShowLocation(false);
        setShowRadius(true);
    };

    return (
        <div className="create-campaign">
            <div className='campaign-top'>
                <div>
                    <h1>Your Ad Campaign</h1>
                    <p>Launch your ad in just 4 easy steps</p>
                </div>
            </div>
            <div className='progress-container'>
                <div className={`progress-step ${currentStep >= 1 ? 'completed' : ''}`}>
                    <div>
                        <img src={Lamp} alt="/" className='progress-icon' />
                    </div>
                    <p>What you want to do</p>
                </div>
                <div className={`progress-step ${currentStep >= 2 ? 'completed' : ''}`}>
                    <div>
                        <img src={Bag} alt="/" className='progress-icon' />
                    </div>
                    <p>Choose product</p>
                </div>
                <div className={`progress-step ${currentStep >= 3 ? 'completed' : ''}`}>
                    <div>
                        <img src={Calendar} alt="/" className='progress-icon' />
                    </div>
                    <p>Campaign settings</p>
                </div>
                <div className={`progress-step ${currentStep === 4 ? 'completed' : ''}`}>
                    <div>
                        <img src={Tick} alt="/" className='progress-icon' />
                    </div>
                    <p>Ready to go</p>
                </div>
            </div>
            <div className="create-steps">
                {currentStep === 1 && (
                    <div>
                        <h3>What you want to do? <span>(Step 1 of 4)</span></h3>
                        <div className="create-box">
                            {/* Row 1 */}
                            <div onClick={() => optionHandler('google')} className="create-options">
                                <img src={Phone} alt="phone" />
                                <div>
                                    <h3>Get Leads as calls</h3>
                                    <p>Reach broad audience and get leads through calls</p>
                                </div>
                            </div>
                            <div onClick={() => optionHandler('facebook')} className="create-options">
                                <img src={Message} alt="message" />
                                <div>
                                    <h3>Get Leads as facebook messages</h3>
                                    <p>Get more FB messages from Leads</p>
                                </div>
                            </div>
                            <div onClick={() => optionHandler('facebook')} className="create-options">
                                <img src={Person} alt="person" />
                                <div>
                                    <h3>Increase page followers</h3>
                                    <p>Encourage customers to follow your page</p>
                                </div>
                            </div>
                            {/* Row 2 */}
                            <div onClick={() => optionHandler('facebook')} className="create-options">
                                <img src={People} alt="people" />
                                <div>
                                    <h3>Get Customer Leads</h3>
                                    <p>Encourage customers to take action</p>
                                </div>
                            </div>
                            <div onClick={() => optionHandler('youtube')} className="create-options">
                                <img src={Eye} alt="eye" />
                                <div>
                                    <h3>Get more youtube views</h3>
                                    <p>Increase organic views by obtaining user attention</p>
                                </div>
                            </div>
                            <div onClick={() => optionHandler('instagram')} className="create-options">
                                <img src={Click} alt="click" />
                                <div>
                                    <h3>Get more website traffic</h3>
                                    <p>Get the right people to visit your website</p>
                                </div>
                            </div>
                            {/* Row 3 */}
                            <div onClick={() => optionHandler('google')} className="create-options">
                                <img src={Shop} alt="shop" />
                                <div>
                                    <h3>Increase Live store traffic</h3>
                                    <p>Drive visits to local stores, restaurants & Dealerships</p>
                                </div>
                            </div>
                            <div onClick={() => optionHandler('youtube')} className="create-options">
                                <img src={Save} alt="save" />
                                <div>
                                    <h3>Increase your App installs</h3>
                                    <p>Get more installs, interactions for your app</p>
                                </div>
                            </div>
                            <div onClick={() => optionHandler('google')} className="create-options">
                                <img src={Note} alt="note" />
                                <div>
                                    <h3>Increase the catalogue sales</h3>
                                    <p>Drive the sales of your catalogue and get more leads</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {currentStep === 2 && (
                    <div>
                        <h3>Choose product <span>(Step 2 of 4)</span></h3>
                        <div className="create-box">
                            {products.map((item, index) => (
                                <div className="create-options" key={index} onClick={() => productHandler({ image: item.image, name: item.product, price: item.price })}>
                                    <img src={item.image} alt="item" />
                                    <div>
                                        <h3 className="product">{item.product}</h3>
                                        <p className="price">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {currentStep === 3 && (
                    <div>
                        <h3>Campaign Setting <span>(Step 3 of 4)</span></h3>
                        <div className="settings">
                            <div className='settings-top'>
                                <img src={one} alt="1" />
                                <h4>Budget and dates info</h4>
                            </div>
                            <p>Budget Timeline</p>
                            <div>
                                <button className='budget-active'>Lifetime</button>
                                <button className='budget-btn'>Daily</button>
                            </div>
                            <div className='dates'>
                                <div>
                                    <p>Start Date</p>
                                    <input type="date" id="start" onChange={settingsHandler} value={settings.start} />
                                </div>
                                <div>
                                    <p>End Date</p>
                                    <input type="date" id="end" onChange={settingsHandler} value={settings.end} />
                                </div>
                            </div>
                            <div>
                                <p>Enter campaign budget</p>
                                <input type="number" />
                            </div>
                            <div className='settings-top'>
                                <img src={two} alt="2" />
                                <h4>Location info</h4>
                            </div>
                            <p>Location Type</p>
                            <div>
                                <button
                                    style={{
                                        zIndex: showLocation ? 2 : 1,
                                        backgroundColor: showLocation ? 'hsla(216, 100%, 53%, 1)' : 'hsla(0, 0%, 94%, 1)',
                                        color: showLocation ? 'white' : 'hsla(0, 0%, 60%, 1)'
                                    }}
                                    className='location-active'
                                    onClick={locationHandler}
                                >
                                    Location
                                </button>
                                <button
                                    style={{
                                        zIndex: showRadius ? 2 : 1,
                                        backgroundColor: showRadius ? 'hsla(216, 100%, 53%, 1)' : 'hsla(0, 0%, 94%, 1)',
                                        color: showRadius ? 'white' : 'hsla(0, 0%, 60%, 1)'
                                    }}
                                    className='location-btn'
                                    onClick={radiusHandler}
                                >
                                    Radius
                                </button>
                            </div>

                            {showLocation && !showRadius && (
                                <div className='location'>
                                    <p>Select Location</p>
                                    <input type="text" id='location-input' onChange={settingsHandler} value={settings.location} placeholder='Select a place name, address or coordinates' />
                                </div>
                            )}
                            {showRadius && !showLocation && (
                                <div>
                                    <p>Select target radius</p>
                                    <input type="number" />
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {currentStep === 4 && (
                    <div>
                        <h3>Ready to go <span>(Step 4 of 4)</span></h3>
                        <div className="ready">
                            <div className='ready-card'>
                                <div className='card-top'>
                                    <img src={user} alt="user" />
                                    <div>
                                        <h3>Mukund Cake Shop</h3>
                                        <p>Sponsored</p>
                                    </div>
                                </div>
                                <h5>We are the best bakery around you. Please like my page to get updates on exciting offers and discounts</h5>
                                <img src={cake1} alt="cake1" />
                                <div className='edit'>
                                    <button className='edit-btn'>Change Image</button>
                                    <button className='edit-btn'>Edit Task</button>
                                </div>
                            </div>
                            <div className='ready-card'>
                                <div className='card-top'>
                                    <img src={user} alt="user" />
                                    <div>
                                        <h3>Mukund Cake Shop</h3>
                                        <p>Sponsored</p>
                                    </div>
                                </div>
                                <h5>We are the best bakery around you. Please like my page to get updates on exciting offers and discounts</h5>
                                <img src={cake2} alt="cake2" />
                                <div className='edit'>
                                    <button className='edit-btn'>Change Image</button>
                                    <button className='edit-btn'>Edit Task</button>
                                </div>
                            </div>
                            <div className='ready-card'>
                                <div className='card-top'>
                                    <img src={user} alt="user" />
                                    <div>
                                        <h3>Mukund Cake Shop</h3>
                                        <p>Sponsored</p>
                                    </div>
                                </div>
                                <h5>We are the best bakery around you. Please like my page to get updates on exciting offers and discounts</h5>
                                <img src={cake3} alt="cake3" />
                                <div className='edit'>
                                    <button className='edit-btn'>Change Image</button>
                                    <button className='edit-btn'>Edit Task</button>
                                </div>
                            </div>
                            <div className='ready-card'>
                                <div className='card-top'>
                                    <img src={user} alt="user" />
                                    <div>
                                        <h3>Mukund Cake Shop</h3>
                                        <p>Sponsored</p>
                                    </div>
                                </div>
                                <h5>We are the best bakery around you. Please like my page to get updates on exciting offers and discounts</h5>
                                <img src={cake4} alt="cake4" />
                                <div className='edit'>
                                    <button className='edit-btn'>Change Image</button>
                                    <button className='edit-btn'>Edit Task</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <button className="create-btn" onClick={handleContinue}>
                {currentStep < 4 ? 'Continue' : 'Submit'}
            </button>
        </div>
    );
}

export default CreateCampaign;
