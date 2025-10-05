import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

const BBQLandingPage = () => {
    const { scrollY } = useScroll();

    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 1.2]);
    const y = useTransform(scrollY, [0, 300], [0, -100]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const openWhatsApp = () => {
        const message = "Hola! Estoy interesado/a en el servicio de parrilla para eventos.";
        const phoneNumber = "5491112345678"; // Reemplaza con el número real
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
            {/* WhatsApp Button */}
            <motion.button
                onClick={openWhatsApp}
                className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </motion.button>

            {/* Hero Section */}
            <motion.section
                className="min-h-screen flex items-center justify-center relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=800&fit=crop&crop=center"
                        alt="Configuración profesional de barbacoa al aire libre con parrilla, mesas decoradas y ambiente festivo"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>

                <motion.div
                    className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
                    style={{ opacity, scale, y }}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Parrilla Completa
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Todo lo que necesitas para tu evento especial
                    </motion.p>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <Button
                            size="lg"
                            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6"
                            onClick={() => scrollToSection("details")}
                        >
                            Ver Plan Completo
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Features Section */}
            <section id="features" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Servicio Integral
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card className="hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                            <span className="text-2xl">🍽️</span>
                                        </div>
                                        Mesas y Sillas
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Mesas resistentes y sillas cómodas para más de 40 personas. Configuración y desmontaje incluido.</p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Card className="hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                            <span className="text-2xl">🔥</span>
                                        </div>
                                        Parrilla Profesional
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Parrilla de alta calidad con todo el equipamiento necesario para cocinar como un profesional.</p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Card className="hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                            <span className="text-2xl">🍴</span>
                                        </div>
                                        Vajilla Completa
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Juegos de cubiertos, platos, vasos y servilletas para todos tus invitados.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Eventos Especiales
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                                <CardHeader className="text-center">
                                    <CardTitle className="flex items-center justify-center gap-3">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-2xl">🎂</span>
                                        </div>
                                        Cumpleaños
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-center">Celebración perfecta con espacio para todos tus invitados y ambiente festivo.</p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                                <CardHeader className="text-center">
                                    <CardTitle className="flex items-center justify-center gap-3">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                            <span className="text-2xl">🎸</span>
                                        </div>
                                        Guitarreadas
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-center">Ambiente musical ideal para reuniones con amigos y buena música.</p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                                <CardHeader className="text-center">
                                    <CardTitle className="flex items-center justify-center gap-3">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-2xl">🏊‍♂️</span>
                                        </div>
                                        Pool Parties
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-center">Diversión al aire libre con espacio para piscina y áreas de relax.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section id="details" className="py-16 bg-gradient-to-br from-orange-100 to-amber-200">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Card className="bg-white shadow-2xl">
                            <CardHeader className="text-center">
                                <CardTitle className="text-3xl text-orange-600">Plan Completo Eventos</CardTitle>
                                <p className="text-gray-600">Ideal para reuniones familiares, cumpleaños y celebraciones</p>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="text-center mb-6">
                                    <div className="text-5xl font-bold text-orange-600">$90.000</div>
                                    <p className="text-gray-600">Pesos Argentinos</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Incluye:</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                    <span className="text-green-600">✓</span>
                                                </div>
                                                Mesas para 40+ personas
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                    <span className="text-green-600">✓</span>
                                                </div>
                                                Sillas cómodas
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                    <span className="text-green-600">✓</span>
                                                </div>
                                                Vajilla completa
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                    <span className="text-green-600">✓</span>
                                                </div>
                                                Parrilla profesional
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Horario:</h3>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <div className="text-2xl font-bold text-orange-600">10:00 AM - 9:00 PM</div>
                                            <p className="text-gray-600">Servicio completo durante 11 horas</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center pt-6">
                                    <Button
                                        size="lg"
                                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
                                        onClick={openWhatsApp}
                                    >
                                        Reservar por WhatsApp
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Nuestras Parrillas en Acción
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop&crop=center"
                                alt="Celebración de cumpleaños con configuración de barbacoa decorada y ambiente festivo"
                                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&h=300&fit=crop&crop=center"
                                alt="Reunión musical con guitarras alrededor de barbacoa bajo luces nocturnas"
                                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center"
                                alt="Fiesta en la piscina con configuración de barbacoa, sillas de descanso y área de natación"
                                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 md:py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Parrilla Completa Eventos</h3>
                    <p className="text-gray-400 mb-4 md:mb-6">Hacemos tu evento inolvidable</p>
                    <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-gray-800 text-sm md:text-base"
                        onClick={openWhatsApp}
                    >
                        Contactar por WhatsApp
                    </Button>
                </div>
            </footer>
        </div>
    );
};

export default BBQLandingPage;