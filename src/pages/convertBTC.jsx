import React, { useState, useEffect, useContext } from 'react';
import MaskNumber from 'react-number-format';
import './styles.css';
import Marquee from 'react-fast-marquee'
import RecebeValoresContext from '../context/ConsumeContextData'

export default function Converso() {

  const { data } = useContext(RecebeValoresContext)
  const [values, setValues] = useState(1)
  const [btc, setBtc] = useState([])

  useEffect(() => {
    (async () => {
      const res = await data.BTC.ask
      setBtc(res)
    })()
  }, [data])

  return (
    <div className="container col-md-6">
      <div className="container">
        <img src="/img1.png" alt="img" className="img2" />
      </div>
      <br />
      <h5><Marquee gradientColor gradientWidth className="text-dark"><div className="ml-5"></div> Bitcoin/Real Brasileiro Atualizado a cada 30 segundos</Marquee> </h5>

      <br />
      <form>
        <div className="form-row">
          <div className="form-group col-md-6 text-primary h1">
            <label htmlFor="inputEmail4 h1-m"><img src="https://static.news.bitcoin.com/wp-content/uploads/2025/01/6595-bitcoin-mined-by-core-scientific-in-2024.jpg" alt="img" className="img mt-1" /></label>
            <div className="form-group input-group">
              <div className="input-grou-prepend align-self-center">
                <div className="input-group-text">
                  <i className="far fa-dollar-sign text-primary h6" />
                </div>
              </div>
              <input
                type="number"
                className="form-control h1-m mrg"
                placeholder='1,00'
                onChange={(e) => setValues(e.target.value)}
                autoFocus={true}
              />
            </div>
          </div>
          <div className="form-group col-md-6 text-primary h1">
            <label htmlFor="inputPassword4 h1 h1-m">
              <img src="https://img.freepik.com/vetores-gratis/ilustracao-de-bandeira-brasil_53876-27017.jpg?size=626&ext=jpg" alt="img" className="img mt-1" />
            </label>
            <div className="form-group input-group">
              <div className="input-grou-prepend align-self-center">
                <div className="input-group-text">
                  <i className="far fa-dollar-sign text-primary h6" />
                </div>
              </div>
              <MaskNumber
                type="text"
                thousandsGroupStyle="thousand"
                decimalSeparator="."
                displayType="input"
                thousandSeparator={true}
                allowNegative={true}
                decimalScale={3 || 4 || 5}
                placeholder="0,00"
                className="form-control h1-m mrg"
                value={values > 0 ? btc * values : values}
              />
            </div>
          </div>
        </div>
      </form>
      <br />
      <br />
      <ul>
                <li>
                    O cálculo efetuado tem caráter informativo e não substitui as disposições da norma cambial brasileira para casos específicos de conversão.
                    Conversões disponíveis para datas informadas a partir de 01/02/1999.
                    Para dias não úteis, assume-se a cotação do dia útil imediatamente anterior.
                    O Banco Central não assume qualquer responsabilidade pela não simultaneidade ou falta das informações prestadas, assim como por eventuais erros de paridades das moedas, ou qualquer outro, salvo a paridade relativa ao dólar dos Estados Unidos da América em relação ao Real, o mesmo se aplica a outra moéda monetaria estrageira. Igualmente, não se responsabiliza pelos atrasos ou indisponibilidade de serviços de telecomunicação, interrupção, falha ou pelas imprecisões no fornecimento dos serviços ou informações. Não assume, também, responsabilidade por qualquer perda ou dano oriundo de tais interrupções, atrasos, falhas ou imperfeições, bem como pelo uso inadequado das informações contidas na transação.
                </li>
                </ul>
    </div>
  );
}
