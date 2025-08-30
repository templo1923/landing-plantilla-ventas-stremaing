import './App.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ShoppingCart, 
  Settings, 
  Smartphone, 
  Palette, 
  Rocket, 
  DollarSign,
  CheckCircle,
  XCircle,
  Star,
  Users,
  BarChart3,
  Zap,
  Shield,
  Globe,
  MessageCircle,
  ArrowRight,
  Play,
  Monitor,
  Code,
  Headphones
} from 'lucide-react'

import adminPanel from './assets/Agregarunsubtítulo(2).png'
import clientView from './assets/Agregarunsubtítulo.png'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  const features = [
    {
      icon: ShoppingCart,
      title: "Catálogo Profesional",
      description: "Muestra tus productos con fotos, precios, descripciones y categorías organizadas."
    },
    {
      icon: Settings,
      title: "Panel de Control Total",
      description: "Administra productos, banners y toda la información de tu tienda desde un solo lugar."
    },
    {
      icon: Smartphone,
      title: "Pedidos Directos a WhatsApp",
      description: "Cierra ventas de forma rápida y personal. Tus clientes a un clic de comprar."
    },
    {
      icon: Palette,
      title: "100% Personalizable",
      description: "Adapta los colores y el logo para que coincidan con la identidad de tu marca."
    },
    {
      icon: Rocket,
      title: "Despliegue Rápido",
      description: "Ten tu catálogo online y listo para operar en tiempo récord."
    },
    {
      icon: DollarSign,
      title: "Cero Comisiones",
      description: "Todas las ganancias son para ti. Olvídate de pagar por cada venta."
    }
  ]

  const problems = [
    "Depender 100% de las redes sociales para mostrar tus productos",
    "Pagar altas comisiones a plataformas de terceros",
    "Procesos de compra largos que aburren a tus clientes",
    "Falta de un catálogo profesional que genere confianza"
  ]

  const plans = [
    {
      name: "PLAN MENSUAL",
      price: "$10 USD/MES",
      priceDetail: "Unico Pago Inicial De $30 USD, luego $10 USD/mes",
      type: "Mensual",
      recommended: true,
      features: [
        { text: "Entrega de Web Lista para subir tus Productos", included: true },
        { text: "Configuración Personalizada", included: true },
        { text: "Dirección web personalizada", included: true },
        { text: "Hosting incluido", included: true },
        { text: "Soporte Técnico Continuo", included: true }
      ],
      ideal: "Probar la plataforma sin compromiso",
      buttonText: "Empezar Ahora",
      buttonClass: "bg-green-600 hover:bg-green-700",
      action: () => window.open('https://api.whatsapp.com/send?phone=573004085041&text=Hola, estoy interesado en el Plan Mensual del Catálogo Profesional de Ventas, Pago Inicial $30 USD, luego $10 USD/mes', '_blank')
      },
    {
      name: "PAGO ÚNICO",
      price: "$80 USD",
      priceDetail: "Pago Único",
      type: "Licencia Completa",
      recommended: false,
      features: [
        { text: "Código Fuente Completo", included: true },
        { text: "Manual de Instalación", included: true },
        { text: "Usas tu propio hosting", included: true },
        { text: "Sin pagos recurrentes", included: true }
      ],
      ideal: "Developers, Desarrolladores y agencias",
      buttonText: "Obtener Código Fuente",
      buttonClass: "bg-blue-600 hover:bg-blue-700",
      action: () => window.open('https://api.whatsapp.com/send?phone=573004085041&text=Hola, estoy interesado en obtener el código fuente completo del Catálogo Pofesioanal de Ventas,  por $80 USD', '_blank')
    },
    {
      name: "SERVICIO COMPLETO",
      price: "$100 USD",
      priceDetail: "Pago Único",
      type: "Todo Incluido",
      recommended: false,
      features: [
        { text: "Código Fuente Completo", included: true },
        { text: "Acompañamiento vía AnyDesk", included: true },    
        { text: "Instalación en tu hosting", included: true },
        { text: "Configuración completa", included: true },
        { text: "Manual de Instalación", included: true },
        { text: "Soporte en el proceso", included: true }
      ],
      ideal: "Emprendedores que quieren todo listo",
      buttonText: "Contratar Servicio Completo",
      buttonClass: "bg-purple-600 hover:bg-purple-700",
      action: () => window.open('https://api.whatsapp.com/send?phone=573004085041&text=Hola, estoy interesado en contratar el Servicio Completo del Catálogo Pofesioanal de Ventas, por $100 USD con instalación incluida', '_blank')    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Sistema Profesional De Catálogo Digital Con Pedidos a WhatsApp</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforma tu WhatsApp en una{' '}
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Máquina de Ventas
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
              Lanza tu tienda online profesional, gestiona tus productos fácilmente y recibe pedidos directos a tu WhatsApp. 
              <span className="text-green-400 font-semibold"> Sin comisiones, sin intermediarios.</span> Control total para tu negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-2xl shadow-blue-500/25 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Ver DEMO EN VIVO
              </motion.a>
              
              <motion.a
                href="#precios"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 backdrop-blur-sm transition-all duration-300"
              >
                Ver PLANES Y PRECIOS
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Cansado De Perder Ventas Por Un Proceso Complicado?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                Problemas Comunes
              </h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{problem}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Nuestra Solución
              </h3>
              <div className="p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl">
                <p className="text-lg text-slate-300 mb-4">
                  Te presentamos la solución definitiva: un sistema de catálogo diseñado para emprendedores como tú.
                </p>
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <Shield className="w-5 h-5" />
                  <span>100% CONFIABLE Y PROFESIONAL</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Todo lo que necesitas para vender más y gestionar mejor
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Características diseñadas específicamente para emprendedores que quieren profesionalizar sus ventas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¡PRUÉBALO TU MISMO!
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Interactúa con nuestro demo y descubre lo fácil que es gestionar tu tienda y lo simple que es para tus clientes comprar. Podrás ingresar tanto al Panel de ventas que verán tus clientes, como al Panel Adminitrador dónde simularás la gestion de tus productos.
            </p>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                PUEDES INTERACTURAR; para este DEMO simulamos una tienda de ventas Streaming, RECUERDA QUE ES ADAPTABLE A CUALQUIER TIPO DE PRODUCTO.
            </p>
            
            <motion.a
              href="https://tienda.catalogosco.top/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl shadow-green-500/25 transition-all duration-300"
            >
              <Globe className="w-5 h-5" />
              ACEEDER Al DEMO INTERACTIVO
            </motion.a>
            
            <div className="mt-4 text-sm text-slate-400">
              Usuario: demo@gmail.com | Clave: demo1234
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Monitor className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Panel Administrativo</h3>
                </div>
                <img 
                  src={adminPanel} 
                  alt="Panel Administrativo" 
                  className="w-full rounded-lg shadow-xl border border-slate-600/50"
                />
                <div className="mt-4 space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Gestión completa de productos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Control de usuarios y categorías</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Dashboard de Control</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Vista del Cliente</h3>
                </div>
                <img 
                  src={clientView} 
                  alt="Vista del Cliente" 
                  className="w-full rounded-lg shadow-xl border border-slate-600/50"
                />
                <div className="mt-4 space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Catálogo responsive y atractivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Pedidos directos a WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Experiencia de compra optimizada</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Elige el plan perfecto para lanzar tu negocio online
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Opciones flexibles diseñadas para diferentes necesidades y presupuestos
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  plan.recommended 
                    ? 'border-green-500 bg-gradient-to-br from-green-500/10 to-blue-500/10' 
                    : 'border-slate-700 bg-slate-800/50'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Recomendado
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-1">{plan.price}</div>
                  <div className="text-slate-400 text-sm mb-2">{plan.priceDetail}</div>
                  <div className="text-blue-400 font-semibold">{plan.type}</div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-slate-300' : 'text-slate-500'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <div className="text-sm text-slate-400 mb-2">Ideal para:</div>
                  <div className="text-slate-300 font-medium">{plan.ideal}</div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={plan.action}
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Tienes preguntas? ¡Estamos aquí para ayudarte!
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Si necesitas más información, quieres una demostración personalizada o tienes un requerimiento especial, no dudes en contactarnos. Estamos listos para impulsar tu negocio.
            </p>
            
            <motion.a
              href="https://api.whatsapp.com/send?phone=573004085041&text=Hola, necesito más información sobre Catálogos CO"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl shadow-green-500/25 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </motion.a>

            <div className="mt-8 text-slate-400">
              <p>También puedes obtener más información en:</p>
              <a 
                href="https://tinyurl.com/catalogosco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                https://tinyurl.com/catalogosco
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Catálogos CO</h3>
            <p className="text-slate-400 mb-6">
              Sistema profesional de catálogo digital con pedidos a WhatsApp
            </p>
            <div className="flex justify-center gap-6 text-sm text-slate-500">
              <span>#emprendedores</span>
              <span>#negocioonline</span>
              <span>#tiendaonline</span>
              <span>#ventasporwhatsapp</span>
              <span>#catalogodigital</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
