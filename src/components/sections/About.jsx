import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {

    const feSkills = [
        "React", 
        "Vue", 
        "TypeScript", 
        "TailwindCSS"
    ];

    const beSkills = [
        "Node.js",
        "Python",
        "AWS",
        "PostgreSQL",
        "GraphQL"
    ];

    const dataSkills = [
        "Python",
        "Kubernetes",
        "EDA: matplotlib, Seaborn, Pandas",
        "ML: scikit-learn, TensorFlow"
    ]

    return (
    <section 
        id="about" 
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 
                className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-300 to-cyan-500 bg-clip-text text-transparent text-center"
            >
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Cat's dad. Data's lover. Math's slave. We live and learn. I can help you build scalable website,
                    pipeline your data and squeeze the extra revenue out of it.
                </p>    

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {feSkills.map((tech, key) => (
                                <span 
                                    key={key}                               
                                    className="bg-green-300/10 text-green-300 py-1 px-3 rounded-full 
                                                text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}  
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {beSkills.map((tech, key) => (
                                <span 
                                    key={key}                               
                                    className="bg-green-300/10 text-green-300 py-1 px-3 rounded-full 
                                                text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}  
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Data Engineer</h3>
                        <div className="flex flex-wrap gap-2">
                            {dataSkills.map((tech, key) => (
                                <span 
                                    key={key}                               
                                    className="bg-green-300/10 text-green-300 py-1 px-3 rounded-full 
                                                text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}  
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>  

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> B.S. in Applied Math and Statistics </strong> - Stony Brook University [2024-2027]
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-bold">Tierra Diamond - Software Engineer Intern (May 25 - Aug. 25)</h4>
                            <p className="text-gray-400">Do this and do that loremipsum loremipsum</p>
                        </div>

                        <div>
                            <h4 className="font-bold">D&D Diamond Manufacturing - Data Analyst Intern (Feb. 24 - Aug. 24)</h4>
                            <p className="text-gray-400">Do this and do that loremipsum loremipsum</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>    
        </RevealOnScroll>
    </section>
    );
}
