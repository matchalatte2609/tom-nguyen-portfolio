import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-300 to-cyan-500 bg-clip-text text-transparent leading-right">
                    Hi, I'm Khang.
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Hi, I'm currently an Undergraduate Student at SUNY Stony Brook. I am interested in Data and Maths. My major is Applied Math and Statistics (GPA: 3.96/4.0).
                    <br />
                    I used to run a cat's shelter - Cat in the ICU - for two years.
                    Talk to me about cats, chess, and food.
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#projects" 
                        className="bg-green-600 text-white py-3 px-6 rounded font-medium transition 
                        relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        View Projects
                    </a>

                    <a href="#contact" 
                        className="border border-green-600/50 text-green-500 py-3 px-6 rounded font-medium
                        transition-all duration-200 hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-700/10">
                        Contact
                    </a>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}
