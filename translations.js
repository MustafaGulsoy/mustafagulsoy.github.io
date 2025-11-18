// Language translations for the portfolio
const translations = {
    en: {
        nav: {
            projects: "Projects",
            experience: "Experience",
            about: "About",
            contact: "Contact"
        },
        hero: {
            title: "A Game Developer & AI Engineer from Turkey.",
            description: "I build <a href='#projects' class='text-link'>cross-platform games</a> and production-ready AI systems while also <a href='#experience' class='text-link'>helping companies</a> integrate intelligent solutions. Read a bit more <a href='#about' class='text-link'>about me</a>.",
            note: "Looking for my full portfolio? The code for this website is open source. <a href='https://github.com/MustafaGulsoy/portfolio-site' class='text-link' target='_blank'>View on Github</a>"
        },
        sections: {
            projects: "Projects",
            about: "About",
            contact: "Get in Touch"
        },
        projects: {
            dropgpt: {
                title: "DropGPT",
                year: "2024",
                description: "AI-powered Amazon dropshipping education and consultancy platform that enables individuals to achieve economic independence through digital commerce.",
                detailedDescription: "DropGPT is a comprehensive AI-enhanced education platform that teaches Amazon dropshipping business model in accordance with Amazon's official policies. The platform provides step-by-step training system, 24/7 AI support, and one year of continued assistance after training completion.",
                whatIDid: [
                    "Developed AI-powered chatbot system for 24/7 student support and real-time business decision assistance",
                    "Built comprehensive training management system using .NET Core and Angular for course delivery and progress tracking",
                    "Implemented AI algorithms for product research, pricing optimization, and market analysis",
                    "Created mobile application using Flutter for on-the-go access to training materials and AI assistance",
                    "Designed and developed RESTful APIs for integrating with Amazon's seller platform and analytics systems",
                    "Implemented RabbitMQ message queuing for handling asynchronous tasks like data processing and notifications"
                ],
                stats: ["AI-Powered", "Educational Platform"]
            },
            minder: {
                title: "Minder",
                year: "2023-2024",
                description: "Modern full-stack web and mobile application built with enterprise-grade technologies including Angular, .NET Core, AI-powered features, and Flutter.",
                detailedDescription: "Minder is a comprehensive enterprise application that combines modern web technologies with AI-powered features to deliver a seamless user experience across web and mobile platforms. Built with microservices architecture and message-driven communication.",
                whatIDid: [
                    "Developed responsive web application using Angular with TypeScript, implementing modular component architecture",
                    "Built RESTful APIs and microservices using .NET Core with clean architecture principles",
                    "Integrated AI/ML features using Python libraries (TensorFlow, PyTorch) for intelligent automation and predictions",
                    "Implemented RabbitMQ message broker for asynchronous communication between microservices",
                    "Created cross-platform mobile application using Flutter with shared business logic",
                    "Designed and optimized PostgreSQL database schema for efficient data management",
                    "Implemented real-time features using SignalR for instant notifications and updates"
                ],
                stats: ["Full-Stack", "AI-Powered"]
            },
            easyway: {
                title: "EasyWay",
                year: "2023-2024",
                description: "Full-stack educational platform built with modern enterprise technologies to deliver comprehensive learning experiences across web and mobile.",
                detailedDescription: "EasyWay is an advanced educational technology platform that provides interactive learning experiences through web and mobile applications. Built with scalable architecture and AI-enhanced features for personalized learning paths.",
                whatIDid: [
                    "Built modern web interface using Angular framework with reactive forms and state management",
                    "Developed backend services using .NET Core, implementing JWT authentication and role-based authorization",
                    "Integrated AI-powered recommendation system for personalized course suggestions and learning paths",
                    "Created mobile application using Flutter to provide seamless learning experience on iOS and Android",
                    "Implemented RabbitMQ for handling background tasks like email notifications and course progress tracking",
                    "Designed RESTful APIs following OpenAPI specification for frontend-backend communication",
                    "Optimized database queries and implemented caching strategies for improved performance"
                ],
                stats: ["Full-Stack", "Educational"]
            },
            mudhis: {
                title: "Mudhiş - Smart Toothbrush",
                year: "2024",
                description: "TÜBITAK 2209-A supported smart IoT toothbrush system with AI-powered dental health prediction and gamified mobile application for children.",
                detailedDescription: "Mudhiş is an innovative smart toothbrush project that combines IoT hardware, mobile application, and AI to make dental hygiene fun for children while providing predictive health insights. The project received TÜBITAK research funding for its innovative approach to preventive healthcare.",
                whatIDid: [
                    "Developed IoT firmware for smart toothbrush using embedded C/C++ and Arduino platform",
                    "Built mobile application using Unity with engaging game mechanics to motivate children",
                    "Implemented computer vision algorithms using OpenCV for brushing technique analysis from sensor data",
                    "Trained machine learning models using TensorFlow for predicting potential dental diseases based on brushing patterns",
                    "Designed and developed REST API backend for data collection and analysis using Python FastAPI",
                    "Created real-time data visualization dashboard for parents to monitor children's dental health",
                    "Integrated Bluetooth Low Energy (BLE) communication between toothbrush and mobile app"
                ],
                stats: ["TÜBITAK Funded", "AI-Powered"]
            },
            karmedai: {
                title: "Healthcare AI Systems",
                year: "2024",
                description: "Production-ready AI systems and web APIs for healthcare information management, focusing on data analysis and predictive modeling for improved patient care.",
                detailedDescription: "Developing advanced AI solutions for healthcare domain at Kardelen Yazılım, creating intelligent systems that assist healthcare professionals with data-driven insights and predictive analytics for better patient outcomes.",
                whatIDid: [
                    "Developed machine learning models for patient data analysis and disease prediction using Python and scikit-learn",
                    "Built RESTful APIs using .NET Core for healthcare information systems integration",
                    "Implemented data processing pipelines for medical records using pandas and NumPy",
                    "Created AI-powered diagnostic assistance tools using deep learning with TensorFlow/Keras",
                    "Designed and optimized database schemas for healthcare data storage with HIPAA compliance considerations",
                    "Developed data visualization dashboards using modern web frameworks for healthcare analytics",
                    "Implemented secure authentication and authorization systems for protecting sensitive patient data"
                ],
                stats: ["Production Ready", ".NET Core"]
            },
            aito: {
                title: "1.5 Adana AITO",
                year: "2023",
                description: "Championship-winning TÜBITAK-supported autonomous underwater vehicle (AUV) that competed at SAF2023 international competition in Azerbaijan.",
                detailedDescription: "AITO (Autonomous Intelligent Tracking Object) is an advanced autonomous underwater vehicle developed by 1.5 Adana team. The project involved complex robotics, computer vision, and AI systems working together for underwater navigation and object manipulation tasks.",
                whatIDid: [
                    "Led the software team in developing autonomous navigation and control systems for underwater vehicle",
                    "Implemented computer vision algorithms using OpenCV for underwater object detection and tracking",
                    "Developed ROS (Robot Operating System) nodes for sensor integration and actuator control",
                    "Created simulation environment using Gazebo for testing autonomous behaviors before deployment",
                    "Implemented path planning and obstacle avoidance algorithms using A* and potential field methods",
                    "Built control systems for depth, heading, and position stabilization using PID controllers",
                    "Established CI/CD pipeline and version control workflows for sustainable team collaboration",
                    "Coordinated with hardware team for sensor integration and system testing in pool environment"
                ],
                stats: ["SAF2023 Champion", "Software Team Leader"]
            }
        },
        experience: {
            title: "Professional Experience",
            current: {
                role: "AI Developer",
                company: "Kardelen Yazılım",
                period: "05/2024 - Present",
                description: "Developing AI projects in healthcare domain, including data analysis and predictive models. Building and optimizing web APIs using .NET technology for healthcare information systems."
            },
            ultima: {
                role: "Team Leader & Game Developer",
                company: "Ultima Stella",
                period: "07/2023 - 05/2024",
                description: "Led development of cross-platform games for PC, VR, and mobile. Managed multiple game projects simultaneously."
            },
            edulog: {
                role: "Game Developer",
                company: "Edulog",
                period: "03/2023 - 02/2024",
                description: "Created cross-platform educational games compatible with web, mobile, VR, and PC using Unity."
            }
        },
        about: {
            intro: "I'm a <strong>Computer Engineer</strong> and <strong>Game Developer</strong> based in Mersin, Turkey. I graduated from Çukurova University in 2024 and currently work at <strong>Kardelen Yazılım</strong> as an AI Developer.",
            expertise: "My expertise spans both game development and AI systems. I specialize in <strong>Unity/Unreal Engine</strong>, <strong>.NET Core</strong>, and <strong>AI/ML technologies</strong>. I'm passionate about creating engaging experiences and intelligent systems that make a real difference.",
            interests: "I'm passionate about <strong>AI/ML technologies</strong>, particularly in RAG systems, LLM applications, and computer vision. I enjoy building practical solutions that solve real-world problems and contributing to open-source projects that make technology more accessible to everyone.",
            highlights: "Highlights",
            highlightsList: [
                "🏆 SAF2023 Underwater Vehicle Competition - Champion (Azerbaijan)",
                "🔬 TÜBITAK Research Project Support (Mudhiş Smart Toothbrush)",
                "💼 AI Developer at Kardelen Yazılım (Healthcare AI Systems)",
                "🎓 Computer Engineering, Çukurova University (2024)",
                "🎮 Cross-platform Game Development (Unity, VR, Mobile)",
                "🤖 Production AI/ML Systems (LangChain, RAG, Computer Vision)"
            ],
            technologies: "Technologies",
            techCategories: {
                ai: {
                    title: "AI & ML",
                    list: "PyTorch, TensorFlow, LangChain, OpenCV, RAG, LLMs"
                },
                game: {
                    title: "Game Development",
                    list: "Unity, Unreal Engine 5, C#, Photon"
                },
                backend: {
                    title: "Backend",
                    list: ".NET Core, Java Spring Boot, Python, FastAPI"
                },
                databases: {
                    title: "Databases",
                    list: "PostgreSQL, MySQL, MongoDB"
                },
                other: {
                    title: "Other",
                    list: "ROS 1/2, Gazebo, Docker, Git, TypeScript"
                }
            }
        },
        contact: {
            description: "I'm always interested in hearing about new game projects, AI consulting opportunities, or just chatting about technology. Feel free to reach out!",
            email: "Email",
            github: "GitHub",
            linkedin: "LinkedIn"
        },
        footer: {
            text: "© 2024 Mustafa Gülsoy. Built with ❤️ for the developer community.",
            source: "View source"
        }
    },
    tr: {
        nav: {
            projects: "Projeler",
            experience: "Deneyim",
            about: "Hakkımda",
            contact: "İletişim"
        },
        hero: {
            title: "Türkiye'den Oyun Geliştirici ve Yapay Zeka Mühendisi.",
            description: "<a href='#projects' class='text-link'>Platformlar arası oyunlar</a> ve üretime hazır yapay zeka sistemleri geliştirirken, şirketlere <a href='#experience' class='text-link'>akıllı çözümler entegre etmede</a> yardımcı oluyorum. Hakkımda <a href='#about' class='text-link'>daha fazla bilgi</a> edinin.",
            note: "Tam portfolyomu mu arıyorsunuz? Bu web sitesinin kodu açık kaynaklıdır. <a href='https://github.com/MustafaGulsoy/portfolio-site' class='text-link' target='_blank'>Github'da görüntüle</a>"
        },
        sections: {
            projects: "Projeler",
            about: "Hakkımda",
            contact: "İletişime Geçin"
        },
        projects: {
            dropgpt: {
                title: "DropGPT",
                year: "2024",
                description: "Bireylerin dijital ticaret yoluyla ekonomik bağımsızlık kazanmalarını sağlayan, yapay zeka destekli Amazon dropshipping eğitim ve danışmanlık platformu.",
                detailedDescription: "DropGPT, Amazon'un resmi politikalarına uygun olarak Amazon dropshipping iş modelini öğreten kapsamlı bir yapay zeka destekli eğitim platformudur. Platform, adım adım eğitim sistemi, 7/24 AI desteği ve eğitim tamamlandıktan sonra bir yıl sürekli yardım sağlar.",
                whatIDid: [
                    "7/24 öğrenci desteği ve gerçek zamanlı iş kararı yardımı için yapay zeka destekli chatbot sistemi geliştirdim",
                    ".NET Core ve Angular kullanarak kurs dağıtımı ve ilerleme takibi için kapsamlı eğitim yönetim sistemi oluşturdum",
                    "Ürün araştırması, fiyat optimizasyonu ve pazar analizi için AI algoritmaları uyguladım",
                    "Eğitim materyallerine ve AI yardımına hareket halindeyken erişim için Flutter kullanarak mobil uygulama oluşturdum",
                    "Amazon satıcı platformu ve analitik sistemleriyle entegrasyon için RESTful API'ler tasarlayıp geliştirdim",
                    "Veri işleme ve bildirimler gibi asenkron görevleri yönetmek için RabbitMQ mesaj kuyruğu uyguladım"
                ],
                stats: ["AI Destekli", "Eğitim Platformu"]
            },
            minder: {
                title: "Minder",
                year: "2023-2024",
                description: "Angular, .NET Core, AI destekli özellikler ve Flutter ile kurumsal düzeyde teknolojilerle geliştirilmiş modern full-stack web ve mobil uygulama.",
                detailedDescription: "Minder, web ve mobil platformlarda kusursuz kullanıcı deneyimi sunmak için modern web teknolojilerini AI destekli özelliklerle birleştiren kapsamlı bir kurumsal uygulamadır. Mikroservis mimarisi ve mesaj tabanlı iletişimle geliştirilmiştir.",
                whatIDid: [
                    "TypeScript ile Angular kullanarak modüler bileşen mimarisi uygulayarak duyarlı web uygulaması geliştirdim",
                    "Temiz mimari prensiplerine göre .NET Core kullanarak RESTful API'ler ve mikroservisler oluşturdum",
                    "Akıllı otomasyon ve tahminler için Python kütüphaneleri (TensorFlow, PyTorch) kullanarak AI/ML özellikleri entegre ettim",
                    "Mikroservisler arası asenkron iletişim için RabbitMQ mesaj aracısı uyguladım",
                    "Paylaşılan iş mantığı ile Flutter kullanarak platformlar arası mobil uygulama oluşturdum",
                    "Verimli veri yönetimi için PostgreSQL veritabanı şeması tasarlayıp optimize ettim",
                    "Anlık bildirimler ve güncellemeler için SignalR kullanarak gerçek zamanlı özellikler uyguladım"
                ],
                stats: ["Full-Stack", "AI Destekli"]
            },
            easyway: {
                title: "EasyWay",
                year: "2023-2024",
                description: "Web ve mobil platformlarda kapsamlı öğrenme deneyimleri sunmak için modern kurumsal teknolojilerle geliştirilmiş full-stack eğitim platformu.",
                detailedDescription: "EasyWay, web ve mobil uygulamalar aracılığıyla etkileşimli öğrenme deneyimleri sağlayan gelişmiş bir eğitim teknolojisi platformudur. Kişiselleştirilmiş öğrenme yolları için ölçeklenebilir mimari ve AI destekli özelliklerle geliştirilmiştir.",
                whatIDid: [
                    "Reaktif formlar ve durum yönetimi ile Angular framework kullanarak modern web arayüzü oluşturdum",
                    "JWT kimlik doğrulama ve rol tabanlı yetkilendirme uygulayarak .NET Core kullanarak backend servisleri geliştirdim",
                    "Kişiselleştirilmiş kurs önerileri ve öğrenme yolları için AI destekli öneri sistemi entegre ettim",
                    "iOS ve Android'de kusursuz öğrenme deneyimi sağlamak için Flutter kullanarak mobil uygulama oluşturdum",
                    "E-posta bildirimleri ve kurs ilerleme takibi gibi arka plan görevlerini yönetmek için RabbitMQ uyguladım",
                    "Frontend-backend iletişimi için OpenAPI spesifikasyonunu takip ederek RESTful API'ler tasarladım",
                    "Geliştirilmiş performans için veritabanı sorgularını optimize ettim ve önbellekleme stratejileri uyguladım"
                ],
                stats: ["Full-Stack", "Eğitim"]
            },
            mudhis: {
                title: "Mudhiş - Akıllı Diş Fırçası",
                year: "2024",
                description: "TÜBITAK 2209-A destekli, AI destekli diş sağlığı tahmini ve çocuklar için oyunlaştırılmış mobil uygulama içeren akıllı IoT diş fırçası sistemi.",
                detailedDescription: "Mudhiş, IoT donanımı, mobil uygulama ve AI'yı birleştirerek çocuklar için diş hijyenini eğlenceli hale getirirken tahmine dayalı sağlık öngörüleri sağlayan yenilikçi bir akıllı diş fırçası projesidir. Proje, önleyici sağlık hizmetlerine yenilikçi yaklaşımı nedeniyle TÜBITAK araştırma fonu aldı.",
                whatIDid: [
                    "Gömülü C/C++ ve Arduino platformu kullanarak akıllı diş fırçası için IoT firmware geliştirdim",
                    "Çocukları motive etmek için ilgi çekici oyun mekanikleriyle Unity kullanarak mobil uygulama oluşturdum",
                    "Sensör verilerinden fırçalama tekniği analizi için OpenCV kullanarak bilgisayar görüşü algoritmaları uyguladım",
                    "Fırçalama desenlerine dayalı potansiyel diş hastalıklarını tahmin etmek için TensorFlow kullanarak makine öğrenmesi modelleri eğittim",
                    "Python FastAPI kullanarak veri toplama ve analiz için REST API backend tasarlayıp geliştirdim",
                    "Ebeveynlerin çocuklarının diş sağlığını izlemesi için gerçek zamanlı veri görselleştirme panosu oluşturdum",
                    "Diş fırçası ve mobil uygulama arasında Bluetooth Low Energy (BLE) iletişimini entegre ettim"
                ],
                stats: ["TÜBITAK Destekli", "Yapay Zeka"]
            },
            karmedai: {
                title: "Sağlık AI Sistemleri",
                year: "2024",
                description: "Sağlık bilgi yönetimi için üretime hazır AI sistemleri ve web API'leri, geliştirilmiş hasta bakımı için veri analizi ve tahmine dayalı modellemeye odaklanarak.",
                detailedDescription: "Kardelen Yazılım'da sağlık alanı için gelişmiş AI çözümleri geliştiriyorum, sağlık profesyonellerine daha iyi hasta sonuçları için veri odaklı içgörüler ve tahmine dayalı analizler ile yardımcı olan akıllı sistemler oluşturuyorum.",
                whatIDid: [
                    "Python ve scikit-learn kullanarak hasta verisi analizi ve hastalık tahmini için makine öğrenmesi modelleri geliştirdim",
                    "Sağlık bilgi sistemleri entegrasyonu için .NET Core kullanarak RESTful API'ler oluşturdum",
                    "Pandas ve NumPy kullanarak tıbbi kayıtlar için veri işleme hatları uyguladım",
                    "TensorFlow/Keras ile derin öğrenme kullanarak AI destekli teşhis yardım araçları oluşturdum",
                    "HIPAA uyumluluk hususlarıyla sağlık verisi depolama için veritabanı şemaları tasarlayıp optimize ettim",
                    "Sağlık analitiği için modern web frameworkleri kullanarak veri görselleştirme panoları geliştirdim",
                    "Hassas hasta verilerini korumak için güvenli kimlik doğrulama ve yetkilendirme sistemleri uyguladım"
                ],
                stats: ["Üretime Hazır", ".NET Core"]
            },
            aito: {
                title: "1.5 Adana AITO",
                year: "2023",
                description: "Azerbaycan'da SAF2023 uluslararası yarışmasında şampiyonluk kazanan, TÜBITAK destekli otonom sualtı aracı (AUV).",
                detailedDescription: "AITO (Autonomous Intelligent Tracking Object), 1.5 Adana takımı tarafından geliştirilen gelişmiş bir otonom sualtı aracıdır. Proje, sualtı navigasyonu ve nesne manipülasyonu görevleri için birlikte çalışan karmaşık robotik, bilgisayar görüşü ve AI sistemleri içeriyordu.",
                whatIDid: [
                    "Sualtı aracı için otonom navigasyon ve kontrol sistemlerinin geliştirilmesinde yazılım ekibini yönettim",
                    "Sualtı nesne tespiti ve takibi için OpenCV kullanarak bilgisayar görüşü algoritmaları uyguladım",
                    "Sensör entegrasyonu ve aktüatör kontrolü için ROS (Robot İşletim Sistemi) nodeları geliştirdim",
                    "Dağıtımdan önce otonom davranışları test etmek için Gazebo kullanarak simülasyon ortamı oluşturdum",
                    "A* ve potansiyel alan yöntemleri kullanarak yol planlama ve engelden kaçınma algoritmaları uyguladım",
                    "PID kontrolörler kullanarak derinlik, yön ve konum stabilizasyonu için kontrol sistemleri oluşturdum",
                    "Sürdürülebilir takım işbirliği için CI/CD pipeline ve versiyon kontrol iş akışları kurdum",
                    "Havuz ortamında sensör entegrasyonu ve sistem testi için donanım ekibiyle koordine oldum"
                ],
                stats: ["SAF2023 Şampiyonu", "Yazılım Takım Lideri"]
            }
        },
        experience: {
            title: "Profesyonel Deneyim",
            current: {
                role: "Yapay Zeka Geliştiricisi",
                company: "Kardelen Yazılım",
                period: "05/2024 - Günümüz",
                description: "Sağlık alanında yapay zeka projeleri geliştiriyorum; veri analizi ve tahmine dayalı modeller. Sağlık bilgi sistemleri için .NET teknolojisi kullanarak web API'leri oluşturuyor ve optimize ediyorum."
            },
            ultima: {
                role: "Takım Lideri & Oyun Geliştiricisi",
                company: "Ultima Stella",
                period: "07/2023 - 05/2024",
                description: "PC, VR ve mobil için platformlar arası oyun geliştirmeyi yönettim. Aynı anda birden fazla oyun projesini yönettim."
            },
            edulog: {
                role: "Oyun Geliştiricisi",
                company: "Edulog",
                period: "03/2023 - 02/2024",
                description: "Unity kullanarak web, mobil, VR ve PC ile uyumlu platformlar arası eğitim oyunları oluşturdum."
            }
        },
        about: {
            intro: "Mersin, Türkiye'de yaşayan bir <strong>Bilgisayar Mühendisi</strong> ve <strong>Oyun Geliştiricisiyim</strong>. 2024 yılında Çukurova Üniversitesi'nden mezun oldum ve şu anda <strong>Kardelen Yazılım</strong>'da Yapay Zeka Geliştiricisi olarak çalışıyorum.",
            expertise: "Uzmanlığım hem oyun geliştirme hem de yapay zeka sistemlerini kapsıyor. <strong>Unity/Unreal Engine</strong>, <strong>.NET Core</strong> ve <strong>AI/ML teknolojilerinde</strong> uzmanım. Gerçek fark yaratan ilgi çekici deneyimler ve akıllı sistemler oluşturma konusunda tutkuluyum.",
            interests: "<strong>AI/ML teknolojileri</strong>, özellikle RAG sistemleri, LLM uygulamaları ve bilgisayar görüsü konusunda tutkulu biriyim. Gerçek dünya problemlerini çözen pratik çözümler geliştirmekten ve teknolojiyi herkes için daha erişilebilir kılan açık kaynak projelere katkıda bulunmaktan keyif alıyorum.",
            highlights: "Öne Çıkanlar",
            highlightsList: [
                "🏆 SAF2023 Sualtı Aracı Yarışması - Şampiyon (Azerbaycan)",
                "🔬 TÜBITAK Araştırma Projesi Desteği (Mudhiş Akıllı Diş Fırçası)",
                "💼 Kardelen Yazılım'da Yapay Zeka Geliştiricisi (Sağlık AI Sistemleri)",
                "🎓 Bilgisayar Mühendisliği, Çukurova Üniversitesi (2024)",
                "🎮 Platformlar Arası Oyun Geliştirme (Unity, VR, Mobile)",
                "🤖 Üretime Hazır AI/ML Sistemleri (LangChain, RAG, Computer Vision)"
            ],
            technologies: "Teknolojiler",
            techCategories: {
                ai: {
                    title: "AI & ML",
                    list: "PyTorch, TensorFlow, LangChain, OpenCV, RAG, LLMs"
                },
                game: {
                    title: "Oyun Geliştirme",
                    list: "Unity, Unreal Engine 5, C#, Photon"
                },
                backend: {
                    title: "Backend",
                    list: ".NET Core, Java Spring Boot, Python, FastAPI"
                },
                databases: {
                    title: "Veritabanları",
                    list: "PostgreSQL, MySQL, MongoDB"
                },
                other: {
                    title: "Diğer",
                    list: "ROS 1/2, Gazebo, Docker, Git, TypeScript"
                }
            }
        },
        contact: {
            description: "Yeni oyun projeleri, yapay zeka danışmanlığı fırsatları veya teknoloji hakkında sohbet etmek için her zaman ilgiliyim. Benimle iletişime geçmekten çekinmeyin!",
            email: "E-posta",
            github: "GitHub",
            linkedin: "LinkedIn"
        },
        footer: {
            text: "© 2024 Mustafa Gülsoy. Geliştirici topluluğu için ❤️ ile yapılmıştır.",
            source: "Kaynak kodu"
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
