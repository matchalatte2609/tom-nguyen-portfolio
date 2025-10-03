import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-300 
                to-cyan-500 bg-clip-text text-transparent text-center"
                > 
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4"> Build my own Git</h3>
                        <p className="text-gray-400 mb-4">
                            A fully functional Git version control system implementation built from scratch in Python, 
                            demonstrating deep understanding of Git's internal architecture and data structures. 
                            This project implements core Git functionality including repository management, object storage, staging, 
                            commits, branching, and tagging.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Vim", "Bash"].map((tech, key) => (
                                <span 
                                    key={key}                               
                                    className="bg-green-300/10 text-green-300 py-1 px-3 rounded-full 
                                                text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tech}  
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/matchalatte2609/matcha-git-python" 
                                className="text-green-300 hover:text-green-200 transition-colors"
                            > 
                                View Project 🫆
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4"> 100 Machine Learning Projects</h3>
                        <p className="text-gray-400 mb-4">
                            Educational repository containing 100 beginner to advanced ML projects to help depressed new-grad or ML enthusiast
                            build a portfolio for breaking into ML Engineering or Data Analyst roles.
                        </p>
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-400">Work in Progress</span>
                                <span className="text-sm font-semibold text-green-300">1%</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                                <div className="bg-gradient-to-r from-green-300 to-cyan-500 h-full rounded-full transition-all duration-500" style={{width: '1%'}}></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Scikit-learn", "Tensorflow", "EDA", "Machine Learning Modelling"].map((tech, key) => (
                                <span 
                                    key={key}                               
                                    className="bg-green-300/10 text-green-300 py-1 px-3 rounded-full 
                                                text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tech}  
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/matchalatte2609/100-machine-learning-project#" 
                                className="text-green-300 hover:text-green-200 transition-colors"
                            > 
                                View Project 🫆
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}
