import styles from '../styles/Servicios.module.css'
import cuerpo from '../styles/cuerpo.module.css'
import styleDos from '../styles/Contacto.module.css'
import barra from '../styles/barra.module.css'

const Servicios = () => {
    return (
        <div className={cuerpo.cuerpo}>

            <div className={cuerpo.articulo}>
                <p className={styleDos.titulosN}>Nuestros servicios son:</p>
                <p className={styles.txtServicios}>•  Representación procesal ante los <b>Juzgados y Tribunales de toda la provincia de Sevilla</b> en todo tipo de procedimientos.</p>
                <br/>
                <p className={styles.txtServicios}>•  Seguimiento exhaustivo del procedimiento <b>notificando al letrado el mismo día en que se recibe la notificación</b> por parte del Juzgado.</p>
                <br/>
                <p className={styles.txtServicios}>•  Cumplimentación y diligenciamiento de todo tipo de <b>exhortos, oficios y mandamientos.</b></p>
                <br/>
                <p className={styles.txtServicios}>•  Publicación de <b>Edictos y anuncios oficiales.</b></p>
                <br/>
                <p className={styles.txtServicios}>•  <b>Subastas judiciales.</b></p>
                <br/>
                <p className={styles.txtServicios}>•  <b>Embargos.</b></p>
                <br/>
                <p className={styles.txtServicios}>•  Lanzamientos para <b>ejecución de sentencias de desahucio.</b></p>
                <br/>
                <p className={styles.txtServicios}>•  <b>Informes patrimoniales y de solvencia</b> para determinación de bienes y solvencia económica.</p>
                <br/>
                <p className={styles.txtServicios}>•  Ejecución: gestión e impulso de la <b>ejecución de Sentencias judiciales y otros Títulos judiciales.</b></p>
                <br/>
                <p className={styles.txtServicios}>•  <b>Gestiones de carácter extrajudicial en representación del cliente:</b> obtención de documentación ante Registros (Registro Civil, Registro de la Propiedad y Registro Mercantil), Gestiones ante Notarías, Archivos, Administraciones Públicas, Organismos Oficiales, Agencia Tributaria, Tráfico, Oficina Española de Patentes y Marcas, Agencia Española de Protección de Datos, etc.</p>
                <br/>
                <p className={styles.txtServicios}>•  <b>Asesoramiento procesal:</b> Ayudamos al abogado en escoger la mejor estrategia procesal para obtener los mejores resultados.</p>
                <br/>
                <p className={styles.txtServicios}>•  Preparación y presentación de escritos de trámite.</p>
                <br/>
                <p className={styles.txtServicios}>•  <b>Control y seguimiento de asuntos:</b> Llevamos a cabo un estricto orden y control de nuestra agenda con recordatorios diarios de plazos y señalamientos, mediante emails y llamada teléfonica.</p>
                <br/>
                <p className={styles.txtServicios}>•  <b>Tramitación de despachos judiciales:</b> Tramitamos todo tipo de despachos judiciales: exhortos, edictos, oficios, mandamientos en registros de la propiedad y mercantil, etc. </p>
                <br/>
                <p className={styles.txtServicios}>•  <b>Ejecución de resoluciones judiciales: </b>Estudiamos junto con el abogado la mejor estrategia para que la ejecución sea lo más eficaz y menos costosa posible</p>
                <br/>
                <p className={styles.txtServicios}>•  Participamos en <b>embargos, subastas judiciales y lanzamientos en juicios de desahucio.</b></p>
            </div>

            <div className={barra.fundaBarra}>
                <hr className={barra.barra} />
            </div>

        </div>

    )
}

export default Servicios