import React from 'react';
import './styles.css'

const Footer = () => {

    const nova = "_blank"

    return (
        <>

            <div style={{ background: "#DCDCDC" }}>
                <br />
                <div className="adiv2">

                    <a href="/avisoslegais" target={nova} className="ml-5 tst">
                        Avisos Legais
                    </a>
                    <a href="/politicaDePrivacidade" target={nova} className="ml-5 tst">
                        Privacidade
                    </a>
                    <a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1663026784&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f0%2f%3fstate%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC9pbmJveC9pZC9BUVFrQURBd0FUWmlabVlBWkMwd05XWTJMV0UzTUdRdE1EQUNMVEF3Q2dBUUFQRUw3eEd3Yy85UHY1dDFaMWdzZzNjPS8%26nlp%3d1%26RpsCsrfState%3d189e4627-f3aa-9e4a-048f-3378ba6c54ce&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015" target={nova} className="ml-5 tst">
                        E-mail: josesantanadeveloper@gmail.com
                    </a>
                    <a href="https://web.whatsapp.com/" target={nova} className="ml-5 tst">
                        Whatsapp: +55 (75) 998239680
                    </a>
                </div>
                <br />
                <div className="mrg">
                    <a href="https://www.linkedin.com/in/jos%C3%A9-santana-de-jesus-8949b3124/" target={nova}>
                        <img src="linkedin.png" alt="img" className="icon" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCk8HdZCe8RFMkZqVIQ0mL3g" target={nova}>
                        <img src="youtube.png" alt="img" className="icon" />
                    </a>
                    <a href="https://github.com/Laudier2?tab=repositories" target={nova}>
                        <img src="github.png" alt="img" className="icon" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100008967008790" target={nova}>
                        <img src="facebook.png" alt="img" className="icon" />
                    </a>
                </div>
                <br />
                <div className="adiv tst">&copy; Desenvolvido em 2021 - José Santana de Jesus - Social:

                </div>
                <br />
            </div>
        </>
    );
}

export default Footer;