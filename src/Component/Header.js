import Logo from '../images/motchill.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUsers, faSignInAlt, faBookmark } from '@fortawesome/free-solid-svg-icons'
/* import { useState } from 'react'; */
/* import { LoginForm, RegisterForm } from './form.js' */



function HeaderView() {

    return (
        <header className="header">
            <div className="header__content container">
                <div className="header__logo">
                    <img src={Logo} alt="MotChill" />
                </div>
                <div className="header__search">
                    <div className="header__search-input">
                        <input type="text" placeholder="V.d: tên phim, tên diễn viên..." />
                        <span className="header__search-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </div>
                    <div className="header__search-desc">
                        <span>Công cụ tìm kiếm phim</span>
                    </div>
                </div>
                <div className="header__options">
                    <div className="header__options-login">
                        <FontAwesomeIcon icon={faSignInAlt} />
                        <span>Đăng Nhập</span>
                    </div>
                    <div className="header__options-login">
                        <FontAwesomeIcon icon={faUsers} />
                        <span>Đăng Ký</span>
                    </div>
                    <div className="header__options-login">
                        <FontAwesomeIcon icon={faBookmark} />
                        <span>Bookmark</span>
                    </div>
                </div>
            </div>
            <div className="header__categary container">
                <ul className="header__categary-list">
                    <li className="header__categary-item active"><a href="/#" className="header__categary-link">Trang Chủ</a></li>
                    <li className="header__categary-item"><a href="/#" className="header__categary-link">Thể loại</a></li>
                    <li className="header__categary-item"><a href="/#" className="header__categary-link">Quốc gia</a></li>
                    <li className="header__categary-item"><a href="/#" className="header__categary-link">Phim mới</a></li>
                    <li className="header__categary-item"><a href="/#" className="header__categary-link">Phim bộ</a></li>
                    <li className="header__categary-item"><a href="/#" className="header__categary-link">Phim lẻ</a></li>
                    <li className="header__categary-item"><a href="/#" className="header__categary-link">Phim thuyết minh</a></li>
                    <li className="header__categary-item"><a href="/#" className="header__categary-link">Phim chiếu rạp</a></li>
                    <li className="header__categary-item"><a href="/#" className="header__categary-link">TV Show</a></li>
                </ul>
            </div>
            <div className="form__authen">
                {/* <LoginForm /> */}
                {/*  <RegisterForm /> */}
            </div>
        </header>

    )
}

export default HeaderView