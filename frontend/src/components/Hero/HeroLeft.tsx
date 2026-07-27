import HeroButtons from "./HeroButtons";

function HeroLeft(){

    return(

        <div className="hero-left">

            <span className="hero-tag">

                EVENT MEMORIES PLATFORM

            </span>

            <h1>

                Todos los recuerdos
                <br/>
                de tu evento,
                <br/>
                en un solo lugar.

            </h1>

            <p>

                Kuxol permite que todos los invitados
                suban fotografías y videos mediante
                un código QR.

                Todo queda organizado automáticamente.

            </p>

            <HeroButtons/>

        </div>

    );

}

export default HeroLeft;