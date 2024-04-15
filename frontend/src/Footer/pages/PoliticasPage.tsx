
import MainLayout from "../../layouts/MainLayout"


const Politicas = () => {

    return (
        <MainLayout size="lg">
            <div className="container mx-auto mt-10">
                <h1 className="text-3xl text-center font-bold mb-10">Políticas y Privacidad</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="mr-10 text-justify">
                        <div className="mr-10 text-center mb-5">
                            <h2 className="font-bold">Política de Privacidad</h2>
                        </div>
                        <p>
                            En Alibabeto, tu privacidad es nuestra principal preocupación. Nos comprometemos a proteger la información que nos proporcionas mientras navegas y realizas compras en nuestra plataforma.
                            Utilizamos tus datos personales únicamente para mejorar tu experiencia de compra y procesar tus pedidos de manera eficiente. Nunca compartiremos tu información con terceros sin tu consentimiento.
                        </p>
                        <p>
                            Además, implementamos medidas de seguridad avanzadas para proteger tus datos contra accesos no autorizados. Sin embargo, te recomendamos que tomes precauciones adicionales, como mantener segura tu contraseña y no compartir información confidencial en lugares públicos.
                        </p>
                    </div>
                    <div className="mr-10 text-justify">
                        <div className="mr-10 text-center mb-5">
                            <h2 className="font-bold">Términos de Servicio</h2>
                        </div>
                        <p>
                            Al realizar compras en Alibabeto, aceptas nuestros Términos de Servicio. Estos términos establecen las condiciones bajo las cuales puedes utilizar nuestra plataforma y los servicios que ofrecemos.
                            Nos reservamos el derecho de cancelar pedidos o rechazar servicios si detectamos actividades fraudulentas o incumplimientos de nuestros términos.
                        </p>
                        <p>
                            Te recordamos que, al utilizar Alibabeto, estás sujeto a nuestras políticas y regulaciones. No está permitido utilizar nuestra plataforma con fines ilegales o no autorizados. Nos reservamos el derecho de tomar medidas legales si se detecta algún comportamiento que viole nuestras políticas.
                        </p>
                    </div>
                </div>
                <div className="mr-10 text-justify mt-5 mb-10">
                    <p>Esta página le informa sobre nuestras políticas en relación con la recopilación, el uso y la divulgación de datos personales cuando utiliza nuestro Servicio, así como las opciones que tiene asociadas a esos datos. Recopilación y Uso de la Información: Recopilamos varios tipos diferentes de información con diversas finalidades para proporcionar y mejorar nuestro Servicio. Tipos de Datos Recopilados: Datos Personales. Cuando utiliza nuestro Servicio, es posible que le pidamos que nos proporcione cierta información personalmente identificable que puede utilizarse para contactarlo o identificarlo ("Datos Personales"). La información personalmente identificable puede incluir, pero no se limita a: Dirección de correo electrónico, nombre y apellido, número de teléfono, dirección postal, ciudad, código postal, cookies y datos de uso. Uso de Datos: Utilizamos los datos recopilados con diversas finalidades, como para proporcionar y mantener nuestro Servicio, notificarle sobre cambios en nuestro Servicio, permitirle participar en funciones interactivas de nuestro Servicio cuando elija hacerlo, brindar asistencia al cliente, recopilar análisis o información valiosa para mejorar nuestro Servicio, controlar el uso de nuestro Servicio y detectar, prevenir y abordar problemas técnicos. Transferencia de Datos: Su información, incluidos los Datos Personales, puede transferirse a —y mantenerse en— computadoras ubicadas fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de su jurisdicción. Conservación de Datos: Alibabeto conservará sus Datos Personales solo durante el tiempo necesario para los fines establecidos en esta Política de Privacidad. Conservaremos y utilizaremos sus Datos Personales en la medida necesaria para cumplir con nuestras obligaciones legales (por ejemplo, si estamos obligados a conservar sus datos para cumplir con las leyes aplicables), resolver disputas y hacer cumplir nuestros acuerdos y políticas legales. Derechos de Privacidad en California: En virtud de la Ley de Privacidad del Consumidor de California (CCPA), los residentes de California tienen ciertos derechos con respecto a sus datos personales. Los residentes de California tienen derecho a solicitar acceso a sus datos personales, a solicitar que se eliminen, y a no ser discriminados por ejercer sus derechos de privacidad. Para ejercer cualquiera de estos derechos, o para obtener más información sobre cómo manejamos sus datos personales en virtud de la CCPA, puede ponerse en contacto con nosotros a través de los medios proporcionados al final de esta política.
                    </p>
                </div>
            </div>
        </MainLayout>
    );

};

export default Politicas;
