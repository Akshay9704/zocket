import React, { useEffect, useState } from 'react';
import add from '../assets/add-circle.png';
import search from '../assets/search.png';
import Vector from '../assets/Vector.png';
import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import Youtube from "../assets/youtube.png"
import Data from "../data/campaign.json";

const Campaign = ({ campaignList }) => {
    const [campaignPage, setCampaignPage] = useState([]);
    const [isOn, setIsOn] = useState(false);

    const getCampaign = () => {
        setCampaignPage(Data);
    };

    useEffect(() => {
        getCampaign();
    }, []);


    const handleToggle = () => {
        setIsOn((prevIsOn) => !prevIsOn);
    };

    const getStatusStyle = (status) => {
        if (status === 'Live Now') {
            return {
                backgroundColor: 'hsla(118, 100%, 94%, 1)',
                color: 'hsla(118, 46%, 33%, 1)',
            };
        } else if (status === 'Paused') {
            return {
                backgroundColor: 'hsla(46, 100%, 94%, 1)',
                color: 'hsla(46, 94%, 42%, 1)',
            };
        } else if (status === 'Exhausted') {
            return {
                backgroundColor: 'hsla(0, 100%, 94%, 1)',
                color: 'hsla(0, 97%, 62%, 1)'
            };
        } else {
            return {};
        }
    };

    const getPlatformIcon = (platform) => {
        if (platform === 'facebook') {
            return (
                <img src={Facebook} />
            );
        } else if (platform === 'youtube') {
            return (
                <img src={Youtube} />
            );
        } else if (platform === 'google') {
            return (
                <img src={Google} />
            );
        }
    }

    return (
        <div className='campaign'>
            <div className='campaign-top'>
                <div>
                    <h1>Your Ad Campaign</h1>
                    <p>Launch your ad in just 4 easy steps</p>
                </div>
                <div>
                    <button className='campaign-btn'><img src={add} alt='add' /><a className='campaign-link' href="/create">Create new campaign</a></button>
                </div>
            </div>
            <div className='campaign-list'>
                <div className='campaign-top-list'>
                    <div className="search-container">
                        <img src={search} alt='search' />
                        <input type="text" id="lname" name="lname" className="search-input" placeholder='Search for the campaign' />
                    </div>
                    <div className='dropdown'>
                        <div className='drop'>
                            <p>Platform:</p>
                            <button className='dropbtn'>All Platforms <img src={Vector} alt="" /></button>
                        </div>
                        <div className='drop'>
                            <p>Status:</p>
                            <button className='dropbtn'>All Status <img src={Vector} alt="" /></button>
                        </div>
                        <div>
                            <button className='dropbtn'>Last 30 days <img src={Vector} alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className='campaign-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" />
                                </th>
                                <th>On/Off</th>
                                <th>Campaign</th>
                                <th>Date Range</th>
                                <th>Clicks</th>
                                <th>Budget</th>
                                <th>Location</th>
                                <th>Platform</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaignPage.map((item, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className={`slider-button ${isOn ? 'on' : 'off'}`} onClick={handleToggle} id={`slider-${index}`}>
                                            <div className="slider-circle"></div>
                                        </div>
                                    </td>
                                    <td className='campaign-details'>
                                        <img src={item.image} alt="Campaign Image" />
                                        <div className='campaign-info'>
                                            <div className='campaign-name'>{item.campaign}</div>
                                            <div className='created'>{item.created}</div>
                                        </div>
                                    </td>
                                    <td>{item.range}</td>
                                    <td>{item.clicks}</td>
                                    <td>{item.budget}</td>
                                    <td>{item.location}</td>
                                    <td>{getPlatformIcon(item.platform)}</td>
                                    <td className="campaign-status">
                                        <div className='status' style={getStatusStyle(item.status)}>
                                            {item.status}
                                        </div>
                                    </td>
                                    <td>
                                        <button><img src={Edit} alt="" /></button>
                                        <button><img src={Delete} alt="" /></button>
                                    </td>
                                </tr>
                            ))}
                            {campaignList.map((item, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className={`slider-button ${isOn ? 'on' : 'off'}`} onClick={handleToggle} id={`slider-${index}`}>
                                            <div className="slider-circle"></div>
                                        </div>
                                    </td>
                                    <td className='campaign-details'>
                                        <img src={item.product.image} alt="Campaign Image" />
                                        <div className='campaign-info'>
                                            <div className='campaign-name'>{item.product.name}</div>
                                            <div className='created'>Created on July</div>
                                        </div>
                                    </td>
                                    <td>{`${item.settings.start}-${item.settings.end}`}</td>
                                    <td>100</td>
                                    <td>{item.product.price}</td>
                                    <td>{item.settings.location}</td>
                                    <td>{getPlatformIcon(item.campaigns)}</td>
                                    <td className="campaign-status">
                                        <div className='status' style={getStatusStyle("Live Now")}>
                                            Live Now
                                        </div>
                                    </td>
                                    <td>
                                        <button><img src={Edit} alt="" /></button>
                                        <button onClick={() => {
                                            removeHandler(item.id);
                                        }}
                                        ><img src={Delete} alt="" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Campaign;
