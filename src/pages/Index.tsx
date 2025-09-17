import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const Index = () => {
  const navigationItems = [
    "Платформы",
    "Продукты", 
    "Партнёры",
    "Сотрудничество",
    "Вакансии"
  ]

  const projects = [
    {
      title: "Геймифицированное казино, в котором игроки делают ставки внутриигровой валютой",
      description: "Внутриигровые кейсы с ценными ресурсами и системой гаранта при достижении X кол-ва крутов",
      image: "https://cdn.poehali.dev/files/2c5c9595-4fbd-423f-a25c-059edc7f0282.png",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Наша собственная разработка и важная часть системы монетизации на наших серверах",
      description: "Наша собственная разработка и ключевое звено в системе монетизации на наших серверах",
      image: "https://cdn.poehali.dev/files/fea56263-7c60-408b-8598-67d557c7ca38.png",
      color: "from-orange-400 to-yellow-500"
    }
  ]

  return (
    <div className="min-h-screen bg-metalabs-dark dark">
      {/* Background geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gray-700 rotate-45"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-gray-600"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border border-gray-700 rotate-12"></div>
        <div className="absolute bottom-10 right-40 w-28 h-28 border border-gray-600 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-gray-800"></div>
        <div className="absolute top-1/3 right-1/3 w-36 h-36 border border-gray-700 -rotate-12"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-center py-8">
        <div className="flex space-x-8">
          {navigationItems.map((item, index) => (
            <button 
              key={index}
              className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 px-4">
        <h1 className="text-white font-montserrat mb-8 leading-tight">
          <div className="text-4xl md:text-5xl font-light mb-4">
            Добро пожаловать в
          </div>
          <div className="text-7xl md:text-9xl font-black bg-gradient-to-r from-metalabs-cyan via-metalabs-blue to-metalabs-purple bg-clip-text text-transparent">
            METALABS
          </div>
        </h1>
      </section>

      {/* Projects Gallery */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 font-montserrat">
            Открытая галерея
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-400 text-center mb-16 font-montserrat">
            наших разработок
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-metalabs-gray/50 border-gray-700 overflow-hidden group hover:bg-metalabs-gray/70 transition-all duration-300">
                <div className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-white font-semibold text-lg mb-4 font-open-sans leading-relaxed">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 font-open-sans leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-700 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 mb-8">
            {navigationItems.map((item, index) => (
              <button 
                key={index}
                className="text-gray-400 hover:text-white transition-colors duration-300 font-open-sans"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Company Info */}
          <div className="text-center text-gray-500 font-open-sans space-y-2">
            <p>ИП Шеремета М.А. &nbsp;&nbsp; ИНН: 971805711209 &nbsp;&nbsp; ОГРНИП: 325774600005964</p>
            <p>
              Почта: sheremark8@gmail.com &nbsp;&nbsp;
              <button className="underline hover:text-gray-400 transition-colors">
                Политика конфиденциальности
              </button>
            </p>
            <p className="mt-4">© 2025 MetaLabs. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index