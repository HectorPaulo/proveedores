import React from 'react';
import PublicLayout from '../../components/Layout/PublicLayout';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    description: string;
    skills: string[];
}

const Team: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            name: "Daniel Yosef",
            role: "Backend Developer",
            image: "http://github.com/danielpraisethelord.png",
            description: "Especialista en desarrollo web con React y Node.js. Passionate about creating user-friendly interfaces.",
            skills: ["React", "TypeScript", "Node.js", "MongoDB"]
        },
        {
            name: "Raúl Técnico",
            role: "Backend Developer",
            // image: "http://github.com/Mandra-VEVO.png",
            image: '/src/assets/raulTec.jpg',
            description: "Experto en arquitecturas de software y APIs REST. Enfocado en crear soluciones escalables y seguras.",
            skills: ["Java", "Spring Boot", "PostgreSQL", "Docker"]
        },
        {
            name: "David Morales",
            role: "Papeador",
            image: "http://github.com/ElMemelitas.png",
            description: "yo imajinandome que me hice chikitito y me acosté en una donitabimbo desas espolvoriadas mmm ya no las hacen como antes veda.",
            skills: ["Cuphead platinado", "Comprador compulsivo", "70k+ copas en Brawl Stars"]
        },
        {
            name: "Héctor Paulo",
            role: "Deudor de aura",
            image: "http://github.com/HectorPaulo.png",
            description: "Especialista en infraestructura cloud y automatización. Garantiza la disponibilidad y rendimiento de nuestros sistemas.",
            skills: ["AWS", "Kubernetes", "Jenkins", "Terraform"]
        }
    ];

    return (
        <PublicLayout>
            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold sm:text-5xl">
                            Equipo de Desarrollo
                        </h1>
                        <p className="mt-4 text-xl text-gray-400">
                            Conoce al talentoso equipo detrás de nuestra plataforma
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {teamMembers.map((member, index) => (
                            <div key={index} className=" rounded-lg bg-gray-400/30 overflow-hidden">
                                <div className="p-8">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-200">{member.name}</h3>
                                            <p className="text-blue-600 font-medium">{member.role}</p>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-gray-400 leading-relaxed">
                                        {member.description}
                                    </p>

                                    <div className="mt-6">
                                        <h4 className="text-sm font-medium text-gray-100 mb-2">
                                            Habilidades:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {member.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 rounded-lg p-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Trabajamos Juntos
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                                Nuestro equipo combina diferentes expertises y perspectivas para crear
                                soluciones innovadoras. Creemos en la colaboración, el aprendizaje continuo
                                y la excelencia técnica como pilares de nuestro trabajo.
                            </p>

                            <div className="grid gap-6 md:grid-cols-3">
                                <div className="text-center">
                                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold">Colaboración</h3>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Trabajamos en equipo para lograr objetivos comunes
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold">Innovación</h3>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Buscamos constantemente nuevas formas de resolver problemas
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold">Agilidad</h3>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Nos adaptamos rápidamente a los cambios del mercado
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
};

export default Team;