import React from "react";
import "./Footer.css"; // استيراد ملف CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                {/* الشعار والوصف */}
                <div className="footer-section">
                    <h2 className="logo">Alibaba</h2>
                    <p>أفضل المنتجات بأفضل الأسعار، تسوق بسهولة وأمان.</p>
                </div>

                {/* روابط سريعة */}
                <div className="footer-section">
                    <h3>روابط سريعة</h3>
                    <ul>
                        <li><a href="#">الرئيسية</a></li>
                        <li><a href="#">الفئات</a></li>
                        <li><a href="#">إنشاء منتج</a></li>
                        <li><a href="#">تواصل معنا</a></li>
                    </ul>
                </div>

                {/* معلومات التواصل */}
                <div className="footer-section">
                    <h3>تواصل معنا</h3>
                    <p>Email: support@alibaba.com</p>
                    <p>Phone: +1 123 456 7890</p>
                    <p>الموقع: دبي، الإمارات العربية المتحدة</p>
                </div>

                {/* أيقونات وسائل التواصل الاجتماعي */}
                <div className="footer-section social">
                    <h3>تابعنا</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            {/* حقوق الملكية */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Alibaba. جميع الحقوق محفوظة.</p>
            </div>
        </footer>
    );
};

export default Footer;
