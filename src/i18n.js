import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
        resources: {
            en: {
                translation: {
                    "heroTitle": "Joaquín Sateler",
                    "heroDescription": "I'm interested in the intersection between information technologies and people (HCI), how they can enhance our capabilities and what is required to achieve real impact.",
                    "projectStrainerTitle": "Design and development of a landing page and chat interface",
                    "projectStrainerDescription": "Landing page designed and front end developed for an AI recruitment tool",
                    "projectParaderoTitle": "App for public transport queries",
                    "projectParaderoDescription": "Development of an app (NextJS) for querying bus arrival times at a specific stops",
                    "projectMediblegoTitle": "AI-based app design for entrepreneurs",
                    "projectMediblegoDescription": "Worked primarily on user journey, flows (tasks, navigation, AI, etc.) and content of an app to support entrepreneurs based on AI",
                    "projectExpenseTrackerTitle": "Development of an Expense Manager",
                    "projectExpenseTrackerDescription": "Proof of concept project designed and developed to help me keep track of my expenses",
                    "projectUxChallengeTitle": "UX Challenge: Menu Manager",
                    "projectUxChallengeDescription": "The challenge was to design an interface for online menu management of a restaurant, seeking to improve revenue and product availability. Through a Lean UX Canvas, I was able to better profile the problem and explore possible solutions, based on which I then designed a high-fidelity proposal.",
                    "projectSessionsTitle": "Productivity application based on the Pomodoro technique",
                    "projectConwayTitle": "Conway's Game of Life",
                    "aboutTitle": "More about me",
                    "aboutDescription": "I entered the field of User Experience (UX) to explore how technology intertwines with our lives. I'm particularly interested in the potential of digital tools to expand our capabilities, transform our interaction with the world, and how this can be fostered through the design of systems that are not only functional, but also capture the reality of their users and have a real impact.",
                    "contactTitle": "Let's talk!",
                    "viewProject": "View Project",
                    "sendMessage": "Send",
                    "seeMore": "See More",
                    "namePlaceholder": "John Doe",
                    "mailPlaceholder": "example@gmail.com",
                    "messagePlaceholder": "Message..."
                }
            },
            es: {
                translation: {
                    "heroTitle": "Joaquín Sateler",
                    "heroDescription": "Me interesa la intersección entre las tecnologías informáticas y las personas, cómo pueden potenciar nuestras capacidades y que es lo que se requiere para lograr un impacto real.",
                    "projectStrainerTitle": "Diseño y desarrollo de una landing e interfaz de chat",
                    "projectStrainerDescription": "Landing diseñada y desarrollada para una herramienta de reclutamiento con IA",
                    "projectParaderoTitle": "App para consultar transporte público",
                    "projectParaderoDescription": "Desarrollo de una app (NextJS) para consultas del tiempo de llegada de los buses a un paradero específico",
                    "projectMediblegoTitle": "Diseño de app para emprendedores en base a IA",
                    "projectMediblegoDescription": "Trabajo principalmente en user journey, flujos (tareas, navegación, IA, etc.) y contenido de una app para apoyar emprendedores en base a IA",
                    "projectExpenseTrackerTitle": "Desarrollo de un Gestor de Gastos",
                    "projectExpenseTrackerDescription": "Prueba de concepto diseñada y desarrollada para ayudarme a llevar un registro de mis gastos",
                    "projectUxChallengeTitle": "Desafio UX: Gestor de menús",
                    "projectUxChallengeDescription": "El desafío fue diseñar una interfaz para la gestión de menús en línea de un restaurante, buscando mejorar los ingresos y la disponibilidad de productos. Por medio de un Lean UX Canvas pude perfilar mejor el problema y explorar posibles soluciones, en función de lo que luego diseñe una propuesta en alta fidelidad.",
                    "projectSessionsTitle": "Aplicación de productividad en base a la técnica pomodoro",
                    "projectConwayTitle": "Conway's Game of life",
                    "aboutTitle": "Más sobre mi",
                    "aboutDescription": "Entré en el campo de la Experiecia de Usuario (UX) para explorar cómo la tecnología se entrelaza con nuestras vidas. Estoy particularmente interesado en el potencial de las herramientas digitales para expandir nuestras capacidades, transformar nuestra interacción con el mundo, y en cómo se puede favorecer esto por medio del diseño de sistemas que no solo sean funcionales, sino que también recojan la realidad de sus usuarios y tengan un impacto real.",
                    "contactTitle": "Hablemos!",
                    "viewProject": "Ver Proyecto",
                    "sendMessage": "Enviar",
                    "seeMore": "Ver Más",
                    "namePlaceholder": "Juan Perez",
                    "mailPlaceholder": "ejemplo@gmail.com",
                    "messagePlaceholder": "Mensaje..."
                }
            }
        }
    });

export default i18n;