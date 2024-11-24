import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import coffee from "../../assets/Rectangle12.svg";
import coffeePhoto from "../../assets/Rectangle 4.svg";
import coffeePhoto2 from "../../assets/Rectangle 4 (3).svg";
import coffeePhoto3 from "../../assets/Rectangle 4 (4).svg";
import coffeePhoto4 from "../../assets/Rectangle 14.svg";
import asdf from "../../assets/asdf.png";
import machine from "../../assets/machine.png";
import miniPhoto1 from "../../assets/Bg.png";

import { FaPlay } from "react-icons/fa";
function Header() {
  return (
    <div className="wrapper">
      <img src={coffee} alt="coffee" className="coffee" />
      <header className="header">
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservation</a>
            </li>
          </ul>
        </nav>
        <div className="logo__wrapper">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <ul className="header__right-links">
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">
              <FaSearch />
            </a>
          </li>
          <li>
            <a href="#">
              <RiShoppingBag3Fill />
            </a>
          </li>
        </ul>
      </header>
      <div className="main__content">
        <h1>Enjoy Your Morning Coffee.</h1>
        <p className="main__content-text">
          The Coffee Is Brewed By Fist Roasting The Green Coffee Beans Over Hot
          Coals In Braziers. Given To Opportunity
        </p>
        <button className="btn">Test Coffee</button>
        <button className="btnplay">
          <a href="#">
            <FaPlay />
          </a>
        </button>
        <p className="play">Play Video</p>
      </div>
      <div className="photo__one">
        <div className="photo__one-item">
          <img src={coffeePhoto} alt="coffee" />
          <h1>01</h1>
          <p>Best Coffee Flavour</p>
        </div>
        <div className="photo__one-item2">
          <img src={coffeePhoto2} alt="coffee" />
          <h1>02</h1>
          <p>Place to get lost</p>
        </div>
        <div className="photo__one-item3">
          <img src={coffeePhoto3} alt="coffee" />
          <h1>03</h1>
          <p>Proper roesting</p>
        </div>
      </div>
      {/* <section className="mid__content">
        <div className="mid__content-item-wrapper1">
          <h3 className="mid__content-item-subtitle">Our history</h3>
          <h1 className="mid__content-item-title">
            Create a new story with us
          </h1>
          <p className="mid__content-item-text">
            Mauris Rhoncus In Imperdiet Placerat. Vestibu Emismd Nisl Suscirpit
            Ligula Volutpat, A Feyguat Urna Maxmaus. Cars Massa Nibhtincidunt.
            Donec Et Nibh Maximus, Est Eu, Mattis Nuce. Preasent Ut Quam Quis
            Quam Venenatis Fringilla. Morbi Vastibulum Id Tells Mmodo Mattis.
            Aliauam Erat Volutpal.
          </p>
        </div>
        <div className="mid__content-item-wrapper">
          <img src={coffeePhoto2} alt="coffee" className="item1" />
          <img src={coffeePhoto} alt="coffee" className="item5" />
        </div>
        <div className="photo__item2">
          <img src={coffeePhoto4} alt="coffee" className="item2" />
        </div>
      </section> */}
      <div className="product__wrapper-wrapper">
        <div className="product__wrapper-wrapper-text">
          <p>Popular Products</p>
          <h1>Coffee popular Products</h1>
        </div>
        <div className="product__wrapper">
          <img src={asdf} alt="coffee" />
          <img src={asdf} alt="coffee" />
          <img src={asdf} alt="coffee" />
        </div>
        <div className="product__btn">
          <button className="btn">View All Product</button>
        </div>
      </div>
      <section className="section__wrapper">
        <div className="section__photo">
          <img src={machine} alt="coffee" />
        </div>
        <div className="section__wrapper-item">
          <h1>Coffee machine, buy for home</h1>
          <p>
            mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit
            ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt.
            donec et nib maximus, est eu, mattis nuce. preasent ut quam quis
            quam venenatis fringilla. morbi vastibulum id tells mmodo mattis.
            aliauam erat volutpal.
          </p>
          <button className="btn">Discover Now</button>
        </div>
      </section>
      <footer className="footer">
        <div className="footer__wrapper">
          <h4>Menu</h4>
          <h1>Coffee popular menu</h1>
        </div>
      </footer>
    </div>
  );
}

export default Header;
