import './Contacto.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const Contacto = () => {

    const customIcon = new L.Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png", // Reemplaza con la URL de tu imagen
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });
    const position = [-33.323400544304995, -62.04190369018065]; 

    return (
        <>
            <article className='title'>
                <h2>Contacto</h2>
                <figure className='divider tl'></figure>
            </article>
            <section className="containerCont">
                <div className="phone box">
                    <p className='textCh'>Telefono</p>
                    <figure className='divider ch'></figure>
                    <p className='textCont'>Julieta Nocino: +54 9 3468 54 8922</p>
                    <p className='textCont'>Lucia Ghigardi: +54 9 3468 58 8305</p>
                    <p className='textCont'>Luciano Barberis: +54 9 3468 59 6107</p>
                </div>
                <div className="mail box">
                    <p className='textCh'>Emails</p>
                    <figure className='divider ch'></figure>
                    <p className='textCont'>julietanocino@gmail.com</p>
                    <p className='textCont'>luciaghirardi@gmail.com</p>
                    <p className='textCont'>barberisluciano58@gmail.com</p>
                </div>
                <div className="ubic box">
                    <p className='textCh'>Ubicación</p>
                    <figure className='divider ch'></figure>
                    <p className='textCont'>9 de julio 922, Chañar Ladeado, Santa Fe, Argentina</p>
                    <MapContainer center={position} zoom={16} style={{height:"300px" , width: "100%" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
                        <Marker position={position}>
                            <Popup>
                                ¡Aquí estoy!
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </section>
        </>
    )
}

export default Contacto