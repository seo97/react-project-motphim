import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export const RegisterForm = () => {
    return (
        <form action="" className="form">
            <div className="form__heading">
                <h2 className="form__title">Đăng Ký</h2>
                <span className="form__close">
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </div>
            <div className="form__group">
                <input type="email" placeholder="Nhập địa chỉ email..." />
            </div>
            <div className="form__group">
                <input type="text" placeholder="Nhập mật khẩu" />
            </div>
            <div className="form__group">
                <input type="text" placeholder="Nhập lại mật khẩu" />
            </div>
            <div className="form__group">
                <button className="btn btn__submit">Đăng Ký</button>
            </div>
            <div className="form__group">
                <span className="have__acc">Bạn đã có tìa khoản?</span>
                <button className="btn btn__options">Đăng Nhập</button>
            </div>
        </form>
    )
}
export const LoginForm = () => {
    return (
        <form action="" className="form">
            <div className="form__heading">
                <h2 className="form__title">Đăng Nhập</h2>
                <span className="form__close">
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </div>
            <div className="form__group">
                <input type="email" placeholder="Nhập địa chỉ email..." />
            </div>
            <div className="form__group">
                <input type="number" placeholder="Nhập mật khẩu" />
            </div>
            <div className="form__group">
                <button className="btn btn__submit">Đăng Nhập</button>
            </div>
            <div className="form__group">
                <span className="have__acc">Bạn chưa có tài khoản?</span>
                <button className="btn btn__options">Đăng Ký</button>
            </div>
        </form>
    )
}