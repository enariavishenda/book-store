import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="page-footer font-small pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Электронные книги</h5>
                            <span>Читайте в любом месте в удобное время</span>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3"/>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Контакты</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://github.com/enariavishenda">GitHub</a>
                                </li>
                                <li>
                                    <a href="mailto:mattco@mail.ru">Почта</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list">
                                <li>
                                    <a href="#">Instagram</a>
                                </li>
                                <li>
                                    <a href="#">Facebook</a>
                                </li>
                                <li>
                                    <a href="#">Twitter</a>
                                </li>
                                <li>
                                    <a href="#">VK</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright Enaria Vishenda</div>
            </div>
        </div>
    )
}
export default Footer