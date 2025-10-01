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
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus pariatur 
                            ipsum dolores non nemo voluptatibus corrupti? Necessitatibus nobis reiciendis 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                href="#" 
                                className="text-green-300 hover:text-green-200 transition-colors"
                            > 
                                View Project 🫆
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4"> Build my own Git</h3>
                        <p className="text-gray-400 mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus pariatur 
                            ipsum dolores non nemo voluptatibus corrupti? Necessitatibus nobis reiciendis 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                href="#" 
                                className="text-green-300 hover:text-green-200 transition-colors"
                            > 
                                View Project 🫆
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4"> Build my own Git</h3>
                        <p className="text-gray-400 mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus pariatur 
                            ipsum dolores non nemo voluptatibus corrupti? Necessitatibus nobis reiciendis 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                href="#" 
                                className="text-green-300 hover:text-green-200 transition-colors"
                            > 
                                View Project 🫆
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4"> Build my own Git</h3>
                        <p className="text-gray-400 mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus pariatur 
                            ipsum dolores non nemo voluptatibus corrupti? Necessitatibus nobis reiciendis 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                href="#" 
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
