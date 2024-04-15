
import MainLayout from "../../layouts/MainLayout"


const Terminos = () => {
    return (
        <MainLayout size="lg">
            <div className="container mx-auto mt-10 text-justify mb-10">
                <h1 className="text-3xl text-center font-bold mb-10">
                    Términos y Condiciones
                </h1>
                <p>
                    Estos términos y condiciones ("Términos", "Acuerdo") son un acuerdo entre
                    usted ("Usuario", "usted") y Alibabeto ("Alibabeto", "nosotros", "nuestro" o
                    "nosotros"). Este Acuerdo establece los términos y condiciones generales de
                    su uso del sitio web de Alibabeto y cualquier producto o servicio comprado o
                    accedido a través del sitio web (colectivamente, el "Servicio").
                </p>
                <h2 className="font-bold mt-3 mb-3">Cuentas</h2>
                <p>
                    Cuando crea una cuenta con nosotros, debe proporcionarnos información
                    precisa, completa y actual en todo momento. No cumplir con este requisito
                    constituye una violación de los Términos, lo que puede resultar en la
                    terminación inmediata de su cuenta en nuestro Servicio.
                </p>
                <p>
                    Usted es responsable de proteger la contraseña que utiliza para acceder al
                    Servicio y de cualquier actividad o acción en su cuenta. Usted acepta no
                    divulgar su contraseña a terceros. Debe notificarnos inmediatamente al
                    descubrir cualquier violación de seguridad o uso no autorizado de su cuenta.
                </p>
                <h2 className="font-bold mt-3 mb-3">Propiedad Intelectual</h2>
                <p>
                    El Servicio y su contenido original, características y funcionalidad son y
                    seguirán siendo propiedad exclusiva de Alibabeto y sus licenciantes. El
                    Servicio está protegido por derechos de autor, marcas comerciales y otras
                    leyes de ambos Estados Unidos y extranjeras. Nuestras marcas comerciales y
                    marcas de servicio no pueden ser utilizadas en relación con ningún producto
                    o servicio sin el consentimiento previo por escrito de Alibabeto.
                </p>
                <h2 className="font-bold mt-3 mb-3">Enlaces a Otros Sitios Web</h2>
                <p>
                    Nuestro Servicio puede contener enlaces a sitios web o servicios de terceros
                    que no son propiedad ni están controlados por Alibabeto.
                </p>
                <p>
                    Alibabeto no tiene control ni asume responsabilidad alguna por el contenido,
                    las políticas de privacidad o las prácticas de los sitios web o servicios de
                    terceros. Además, reconoce y acepta que Alibabeto no será responsable ni
                    directa ni indirectamente, por cualquier daño o pérdida causada o
                    presuntamente causada por o en conexión con el uso o la confianza en dicho
                    contenido, bienes o servicios disponibles en o a través de tales sitios web
                    o servicios.
                </p>
                <h2 className="font-bold mt-3 mb-3">Cambios</h2>
                <p>
                    Nos reservamos el derecho, a nuestra sola discreción, de modificar o
                    reemplazar estos Términos en cualquier momento. Si se trata de una revisión
                    material, haremos todo lo posible para proporcionar al menos 30 días de
                    aviso antes de que entren en vigencia los nuevos términos. Lo que constituye
                    un cambio material se determinará a nuestra sola discreción.
                </p>
                <h2 className="font-bold mt-3 mb-3">Póngase en contacto con nosotros</h2>
                <p>
                    Si tiene alguna pregunta sobre estos Términos, póngase en contacto con
                    nosotros.
                </p>
            </div>

        </MainLayout>
    );

};

export default Terminos;