import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Sidebar.css';

export default class Sidebar extends Component {
    mudandoCor(e) {
        const buttons = document.querySelectorAll('.link-router');
        buttons.forEach((button) => {
            button.classList.remove('active')

            if(button === e.target) {
                button.classList.add('active')
            }
        })
    }

    render() {
        return (
            <nav className="sidebar">
                <div className="section-sidebar">
                    <div className="nav-button home" onClick={this.mudandoCor}>
                        <Link className="link-router" to="/">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" fill="#D6D1D1"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="nav-button feed">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25006 6.14286C2.25006 5.23553 2.69232 4.5 3.23787 4.5H21.5123C22.0578 4.5 22.5001 5.23553 22.5001 6.14286V20.1071C22.5001 21.0145 22.0578 21.75 21.5123 21.75H3.23787C2.69232 21.75 2.25006 21.0145 2.25006 20.1071V6.14286ZM8.50005 8.68333C8.50005 9.75108 7.60462 10.6167 6.50005 10.6167C5.39548 10.6167 4.50005 9.75108 4.50005 8.68333C4.50005 7.61558 5.39548 6.75 6.50005 6.75C7.60462 6.75 8.50005 7.61558 8.50005 8.68333ZM9.40388 9C9.18084 9 9.00003 9.16789 9.00003 9.375C9.00003 9.58211 9.18084 9.75 9.40388 9.75H19.0962C19.3192 9.75 19.5 9.58211 19.5 9.375C19.5 9.16789 19.3192 9 19.0962 9H9.40388ZM9.00003 7.875C9.00003 7.66789 9.18319 7.5 9.40912 7.5H13.0909C13.3169 7.5 13.5 7.66789 13.5 7.875C13.5 8.08211 13.3169 8.25 13.0909 8.25H9.40912C9.18319 8.25 9.00003 8.08211 9.00003 7.875ZM5.26832 12C4.84401 12 4.50003 12.3198 4.50003 12.7143V18.7857C4.50003 19.1802 4.84401 19.5 5.26832 19.5H19.4817C19.9061 19.5 20.25 19.1802 20.25 18.7857V12.7143C20.25 12.3198 19.9061 12 19.4817 12H5.26832Z" fill="#D6D1D1"/>
                        </svg>
                    </div>
                </div>
                <div className="nav-button plus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                        <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
                <div className="section-sidebar">
                    <div className="nav-button explore" onClick={this.mudandoCor}>
                        <Link className="link-router" to="/explore">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9999 2.00012C17.5199 2.00012 21.9999 6.48012 21.9999 12.0001C21.9999 17.5301 17.5199 22.0001 11.9999 22.0001C6.46991 22.0001 1.99991 17.5301 1.99991 12.0001C1.99991 6.48012 6.46991 2.00012 11.9999 2.00012ZM15.8499 8.71012C15.9599 8.36012 15.6399 8.03012 15.2899 8.14012L10.1699 9.74012C9.95991 9.81012 9.78991 9.97012 9.72991 10.1801L8.12991 15.3101C8.01991 15.6501 8.34991 15.9801 8.68991 15.8701L13.7899 14.2701C13.9999 14.2101 14.1699 14.0401 14.2299 13.8301L15.8499 8.71012Z" fill="#D6D1D1"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="nav-button profile" onClick={this.mudandoCor}>
                        <Link className="link-router" to="/perfil">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739ZM12 2C14.9391 2 17.294 4.35402 17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2Z" fill="#D6D1D1"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}