import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-light col-md-12" style={{ background: "#40E0D0" }}>
        <div className="container-fluid">
          <h2 className="titoloNav mt-1">Conversor de moedas</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div></div>
      <div
        className="collapse bg-light btn-group-toggle p-2"
        id="navbarToggleExternalContent"
      >
        <br />
        <div className="bg-dark col-md-1"></div>
        <Link to="/" className="ml-1">
          <strong className="flt">
            <img src="https://cdn.pixabay.com/photo/2017/01/07/16/55/usa-1960922_960_720.jpg" alt="img" className="img3" />
            -USD
          </strong>

        </Link>
        <Link to="/eur" className="ml-1">
          <strong className="flt">
            <img src="https://cdn.pixabay.com/photo/2019/10/30/12/45/europe-4589473_960_720.jpg" alt="img" className="img3" />
            -EUR
          </strong>

        </Link>
        <Link to="/btc" className="ml-1">
          <strong className="flt">
            <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/09/Moeda-Dinheiro-Bitcoin-PNG-1024x585.png" alt="img" className="img3" />
            -BTC
          </strong>

        </Link>
        <Link to="/doge" className="ml-1">
          <strong className="flt">
            <img src="https://st2.depositphotos.com/54728104/49336/i/1600/depositphotos_493368808-stock-photo-qatar-flag-neon-light-effect.jpg" alt="img" className="img3" />
            -DOGE
          </strong>

        </Link>
        <Link to="/ars" className="text-info ml-1">
          <strong className="flt">

            <img src="https://img.freepik.com/vetores-gratis/ilustracao-de-bandeira-argentina_53876-27120.jpg?size=626&ext=jpg" alt="img" className="img3" />
            -ARS
          </strong>

        </Link>

        <Link to="/cad" className="ml-1">
          <strong className="flt">

            <img src="https://img.freepik.com/free-photo/american-canadian-flags-together_93675-23304.jpg?size=626&ext=jpg" alt="img" className="img3" />
            -CAD
          </strong>

        </Link>
        <Link to="/aud" className="ml-1">
          <strong className="flt">

            <img src="https://img.freepik.com/vetores-gratis/ilustracao-de-australia-bandeira_53876-27116.jpg?size=626&ext=jpg" alt="img" className="img3" />
            -AUD
          </strong>

        </Link>
        <Link to="/chf" className="ml-1">
          <strong className="flt">
            <img src="https://i.ytimg.com/vi/iJs-Qxf3LWY/maxresdefault.jpg" alt="img" className="img3" />
            -CHF
          </strong>

        </Link>
        <Link to="/cny" className="ml-1">
          <strong className="flt">

            <img src="https://media.istockphoto.com/photos/waving-china-flag-picture-id480742657?k=20&m=480742657&s=612x612&w=0&h=jDEGW6d161IxCjI2q4Rq4yqmj68bQRnFyznccjER33s=" alt="img" className="img3" />
            -CNY
          </strong>

        </Link>
        <Link to="/eth" className="ml-1">
          <strong className="flt">
            <img src="https://thumbs.dreamstime.com/b/s%C3%ADmbolo-de-ethereum-na-bandeira-futurista-do-hud-106345513.jpg" alt="img" className="img3" />
            -ETH
          </strong>

        </Link>
        <Link to="/gbp" className="ml-1">
          <strong className="flt">
            <img src="https://st3.depositphotos.com/13187256/18925/v/1600/depositphotos_189250904-stock-illustration-pound-sterling-symbol-on-background.jpg" alt="img" className="img3" />
            -GBP
          </strong>

        </Link>
        <Link to="/ils" className="ml-1">
          <strong className="flt">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/234px-Flag_of_Israel.svg.png" alt="img" className="img3" />
            -ILS
          </strong>

        </Link>
        <Link to="/jpy" className="ml-1">
          <strong className="flt">
            <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/bandeira-do-japao.jpg" alt="img" className="img3" />
            -JPY
          </strong>

        </Link>
        <Link to="/ltc" className="ml-1">
          <strong className="flt">
            <img src="https://media.istockphoto.com/photos/crypto-currency-gold-litecoin-on-dollar-banknote-on-black-digital-picture-id912790044?k=20&m=912790044&s=612x612&w=0&h=5kV6q-KT08deAgJ2uZwOnEqK90YLxllNQYGj25A2Ozk=" alt="img" className="img3" />
            -LTC
          </strong>

        </Link>
        <Link to="/xrp" className="ml-1">
          <strong className="flt">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0oyxJbVSnfo0Gs8Liz62VUO-AZBgnpwvVbZ0KZA0vKheflNgzjze9VKJvEWOFm6wCPs&usqp=CAU" alt="img" className="img3" />
            -XRP
          </strong>

        </Link>
      </div>
    </div>
  );
};

export default Nav;
