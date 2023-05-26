//import Modal from '@mui/base/Modal';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import StatefulCityModal from '../components/StatefulCityModal/StatefulCityModal';
import backgroundImage from '../citypage-background.png';
import MyFooter from "../components/footer.js";
import { makeStyles } from "@material-ui/core/styles";
import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(errorPageStyle);

function CityPage() {
    const [show, setShow] = useState(false) // czy potrzebne ? 
    const classes = useStyles();
    const {imgWidth, imgHeight} = useImageSize();
    console.log(`${imgWidth}, ${imgHeight}`)
    return (
        <div className="App">
            <Header /> 
            <div className="caption1" style={{paddingTop:`${0.15*imgHeight}px`}}>
                <text>
                Jesteśmy kołem naukowym Smart City PW. <br></br> 
                <br></br>
                Chcesz się dowiedzieć, jakie innowacje wprowadzilibyśmy do każdego miasta w Polsce? <br></br>
                <br></br>
                <b>Naciśnij pinezki!</b>
                </text>
            </div>
            <div className='container'>
                {/* <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>  */}
                        {/* <h1> CityPage </h1> */}

                <img className="background-image" src={backgroundImage}></img>        
                        <div className='energia' style={{position: 'absolute', top:`${0.08*imgHeight}px`, left:`${0.30*imgWidth}px`}}>
                            <StatefulCityModal title="Energia w mieście" >
                                <p> 
                                    <h4> Nasz projekt: Fotowoltaika </h4>
                                    <text> Projekt Fotowoltaika ma na celu stworzenie narzędzia umożliwiającego ocenę możliwości umieszczenia paneli słonecznych na dachach wybranych budynków komunalnych przyczyniając się do szerzenia idei pozyskiwania energii z OZE (odnawialnych źródeł energii) w miastach.  Zespół pracuje nad stworzeniem interfejsu, który będzie wykonywał analizy dla wybranych obszarów Warszawy z wykorzystaniem danych open source.
                                    <a href="https://github.com/FotowoltaikaSC/solar-estimator" target="_blank" className={classes.block}>
                                        Przeczytaj więcej o projekcie...
                                    </a>
                                    </text>
                                </p>
                            </StatefulCityModal>
                        </div> 

                        <div className='hydroponika' style={{position: 'absolute', top:`${0.17*imgHeight}px`, left:`${0.53*imgWidth}px`}}>
                            <StatefulCityModal title="Uprawa roślin">
                                <p> 
                                    <h4> Nasz projekt: Hydroponika </h4>
                                    <text> Hydroponika to projekt stworzony, by przybliżyć tematykę roślinności w mieście oraz alternatywnych metod ich hodowania. Skupiony jest na budowie ogrodu na bazie wody zamiast gleby, czujników oraz oświetlenia, a następnie skonstruowaniu ekologicznego systemu ładowania, który może mieć szerokie zastosowanie w miastach bez względu na ich położenie geograficzne i klimat. 
                                    </text>                                
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='samolot' style={{position: 'absolute', top:`${0.16*imgHeight}px`, left:`${0.80*imgWidth}px`}}>
                            <StatefulCityModal title="Airport city">
                                <p> 
                                    <text> Airport City to strefa miejska skupiona na funkcjonowaniu lotniska i zaspokajająca różne potrzeby, w szczególności biznesowe, logistyczne i turystyczne. Przykładem jest „Winged City” w Incheon (Korea Południowa), w którego skład wchodzą obiekty hotelowe, biura a nawet pole golfowe. 
                                    </text>                                
                                </p>
                            </StatefulCityModal>
                        </div>
                        
                        <div className='waste' style={{position: 'absolute', top:`${0.27*imgHeight}px`, left:`${0.4*imgWidth}px`}}>
                            <StatefulCityModal title="Gospodarka komunalna">
                                <p> 
                                <h4> Nasz projekt: Waste Manage </h4>
                                    <text> W ramach realizacji projektu „Sierpc 2.0 – Rozwiązania EcoSmart z zakresu zarządzania miastem” członkowie koła opracowują system zarządzania zbiórką odpadów komunalnych oraz ultradźwiękowe czujniki wypełnienia kontenerów na odpady. Rozwiązanie wdrożone w mieście Sierpce ma na celu zoptymalizowanie procesu odbioru odpadów, a tym samym ograniczenie zużycia paliwa i poprawę jakości powietrza w mieście.
                                    </text>                                 
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='ludzie' style={{position: 'absolute', top:`${0.31*imgHeight}px`, left:`${0.33*imgWidth}px`}}>
                            <StatefulCityModal title="Zbieranie opinii mieszkańców">
                                <p> 
                                    <text>
                                    W tworzeniu miasta Smart City bardzo ważne są opinie jego mieszkańców. Umożliwiają one tworzenie środowiska przyjaznego, ekologicznego i wygodnego dla wszystkich jego użytkowników. Władze miasta mogą podejmować dzięki nim działania bardziej efektywne i odpowiadające na rzeczywiste problemy mieszkańców. Coraz częściej wprowadza się także nowoczesne formy zbierania opinii jakimi są media społecznościowe lub dedykowane aplikacje.
                                    </text>                                
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='wyspy-ciepla' style={{position: 'absolute', top:`${0.32*imgHeight}px`, left:`${0.67*imgWidth}px`}}>
                            <StatefulCityModal title="Wyspy ciepła">
                                <p> 
                                    <text>
                                    We współczesnych miastach dużym problemem jest tak zwana miejska wyspa ciepła, czyli zauważalnie wyższa temperatura powietrza na terenach zurbanizowanych niż obszarach sąsiadujących. Efekt ten spowodowany jest używaniem na dużą skalę łatwo nagrzewających się materiałów, m.in. asfaltu i betonu. Sposobem na walkę z nim jest regulowanie temperatury otoczenia  zwiększając powierzchnie biologicznie czynne w miastach poprzez tworzenie alei drzew wzdłuż ulic lub zielonych torowisk, czy zakładanie ogrodów na dachach budynków. 
                                    </text>                                
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='iot-energia' style={{position: 'absolute', top:`${0.325*imgHeight}px`, left:`${0.87*imgWidth}px`}}>
                            <StatefulCityModal title="IoT zużycie energii">
                                <p> 
                                    <text>
                                    W budownictwie, zwłaszcza wielkoskalowym, ważne jest nie tylko pozyskiwanie energii z odnawialnych źródeł, ale także jej racjonalne wykorzystanie. Jednym z najbardziej efektywnych sposobów jest wykorzystanie algorytmów obliczeniowych wykorzystujących dane z siatki czujników zamontowanych w pomieszczeniach. Na ich podstawie system steruje termostatem oraz oświetleniem, czyniąc budynek bardziej energooszczędnym. 
                                    Czy wiesz, że obniżenie temperatury o 1°C to aż 6% oszczędności na ogrzewaniu?
                                    </text>                                
                                </p>
                            </StatefulCityModal>
                        </div>
                        
                        <div className='sciezka' style={{position: 'absolute', top:`${0.865*imgHeight}px`, left:`${0.6*imgWidth}px`}}>
                            <StatefulCityModal title="Infrastruktura rowerowa">
                                <p> 
                                    <text>
                                    Rozbudowa infrastruktury rowerowej jest najprostszym i najskuteczniejszym sposobem na zwiększenie liczby podróżujących rowerami. Przykładem tego jest Warszawa wykazująca wysoki współczynnik wzrostu natężenia ruchu rowerzystów w zależności od realizowanych inwestycji w tę infrastrukturę.
                                    </text>                                
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='lift' style={{position: 'absolute', top:`${0.6*imgHeight}px`, left:`${0.73*imgWidth}px`}}>
                            <StatefulCityModal title="Osoby niepełnosprawne w mieście">
                                <p> 
                                <h3> Nasz projekt: LIFT </h3>
                                    <text> 
                                    Poruszanie się po labiryncie podziemnych korytarzy Metra Warszawskiego to nie lada wyzwanie dla osób ze szczególnymi potrzebami, niepełnosprawnych, niewidomych. Windy nie zawsze są dobrze oznakowane i widoczne, a droga do nich potrafi być bardzo skomplikowana. Zespół LIFT w ramach projektu NCBiR tworzy aplikację mobilną wspomagającą osoby ze szczególnymi potrzebami w ich codziennych podróżach transportem szynowym.
                                    </text>                                 
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='iot' style={{position: 'absolute', top:`${0.635*imgHeight}px`, left:`${0.8*imgWidth}px`}}>
                            <StatefulCityModal title="IoT">
                                <p> 
                                    <text>
                                    Internet rzeczy (ang. Internet of things) jest ważnym elementem inteligentnego miasta. Wszechobecnie montowane czujniki zbierają aktualne dane m.in. o temperaturze powietrza, zanieczyszczeniu czy natężeniu ruchu. Największym wyzwaniem jest jednak ich analizowanie i wykorzystywanie, w czym mogą pomóc algorytmy sztucznej inteligencji.
                                    </text>                                
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='sklep' style={{position: 'absolute', top:`${0.485*imgHeight}px`, left:`${0.545*imgWidth}px`}}>
                            <StatefulCityModal title="Sąsiedztwo 20-minutowe">
                                <p> 
                                    <text>
                                    Idea miasta 20-minutowego ma zapewnić zaspokojenie wszystkich podstawowych potrzeb mieszkańców w promieniu 10-15 minut spacerem od ich miejsca zamieszkania. Daje ona też możliwość tworzyć miasta policentryczne i ograniczyć dalsze rutynowe podróże na terenach zurbanizowanych, oszczędzając czas i pieniądze mieszkańców.                                    
                                    </text>                                
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='sygnalizacja' style={{position: 'absolute', top:`${0.805*imgHeight}px`, left:`${0.53*imgWidth}px`}}>
                            <StatefulCityModal title="Sygnalizacja świetlna">
                                <p> 
                                    <text>
                                    Inteligentna sygnalizacja świetlna łączy tradycyjną architekturę świetlną połączoną z szeregiem czujników: GPS, czujniki pogodowe, ruchu czy nawet dane z naszych telefonów komórkowych oraz ze sztuczną inteligencją. Takie połączenie daje możliwość zdalnego sterowania przepływem pojazdów dostosowując się do aktualnych warunków na drodze, a nawet pogody, tworząc elastyczną i zmienna sieć miejską.                                    
                                    </text>                                
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='carsharing' style={{position: 'absolute', top:`${0.79*imgHeight}px`, left:`${0.68*imgWidth}px`}}>
                            <StatefulCityModal title="CarSharing">
                                <p> 
                                    <text>
                                    Usługi CarSharingu (czasowego wypożyczania samochodów) mogą być dobrą alternatywą dla osobistego samochodu, zmniejszając jednocześnie ilość pojazdów spalinowych w miastach. Szacuje się, że rozpowszechnienie tej idei przyczyni się to do zmniejszenia ilości CO2 w atmosferze nawet do 390 kg/osobę.
                                    </text>                                
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='hulajnogi' style={{position: 'absolute', top:`${0.72*imgHeight}px`, left:`${0.495*imgWidth}px`}}>
                            <StatefulCityModal title="Rowery i hulajnogi">
                                <p> 
                                    <text>
                                    Rowery i hulajnogi miejskie są wspomagającymi się wzajemnie ekologicznymi i nowoczesnymi systemami, które spotkamy już w większości miast w naszym kraju. Tworzą one tzw. tkankę mikromobilności, która wspiera, szczególnie w podróżach krótkodystansowych, często przepełnioną komunikację miejską.
                                    </text>                                
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='biletomat' style={{position: 'absolute', top:`${0.685*imgHeight}px`, left:`${0.45*imgWidth}px`}}>
                            <StatefulCityModal title="System biletowy">
                                <p> 
                                    <text>
                                    Nowoczesne systemy biletowe znacznie upraszczają korzystanie z transportu zbiorowego. Dzięki wykorzystywaniu nadajników Bluetooth oraz dedykowanych aplikacji możliwe jest automatyczne rejestrowanie przejazdów jednocześnie dobierając najkorzystniejszą taryfę biletową dla pasażera. System był już testowany m.in. w Porto w Portugalii.
                                    </text>                                
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='cpk' style={{position: 'absolute', top:`${0.905*imgHeight}px`, left:`${0.53*imgWidth}px`}}>
                            <StatefulCityModal title="Kolej">
                                <p> 
                                <h4> Nasz projekt: CPK </h4>
                                    <text> 
                                    Spóźnienia pociągów, czy długie postoje na trasie to szczególnie częste doświadczenia podróżnych w naszym kraju. Także Warszawa, będąca jedną z najszybciej rozwijających się metropolii  w Europie, nie jest wolna od problemów komunikacyjnych – autobusy bywając przepełnione, opóźnione, a nawet w ogóle nie przyjeżdżają. Problemami są także remonty dworców powodujące zamieszanie i zamęt wśród podróżnych. W projekcie CPK, odwołując się do rządowych planów rewolucji polskiego transportu, chcemy przyjrzeć się z bliska problemom pasażerów i ludzi wykluczonych transportowo oraz poszukać na ich rozwiązania.
                                    </text>                                 
                                </p>
                            </StatefulCityModal>
                        </div>
                <div className="caption1">
                    <text>
                    Jeśli chcecie ciekawi innych wiadomości o tematyce miast przyszłości oraz naszych działań w drodze do nich, zapraszamy do śledzenia naszej strony na Facebooku!
                    <a href="https://www.facebook.com/smartcitypw" target="_blank" className={classes.block} style={{color:`#00479B`}}>
                        <h3> MKN Smart City PW </h3>
                    </a> 
                    <br></br>
                    </text>
                </div>
                <text style={{fontSize:`0.75rem`}}>
                    Powyższa grafika została utworzona przy pomocy materiałów graficznych ze strony freepik.com
                </text>
                <MyFooter classes={classes}/>
            </div>
        </div>
    ); 
}

function useImageSize() {
    const [imageSize, setImageSize] = useState({
        imgWidth: undefined,
        imgHeight: undefined,
    });
    const image = document.querySelector('.background-image')
    useEffect(() => {
        const image = document.querySelector('.background-image')
        function handleResize() {
            setImageSize({
                imgWidth: image.clientWidth,
                imgHeight: image.clientHeight,
            });
        }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, ); 
    return imageSize;
  }

export default CityPage;
