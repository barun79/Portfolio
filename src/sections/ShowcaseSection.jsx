import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={rydeRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <a
                                href="https://ai-resume-analyzer-sigma.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            <img
                                src="/images/resume.png"
                                alt="Resume"
                                className="cursor-pointer transform transition duration-300 hover:scale-105"
                            />
                            </a>

                        </div>
                        <div className="text-content">
                            <h2>
                                Resume - Track Your Application & Resume Rating
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                Streamline your job search with an AI-powered resume analyzer that gives instant feedback and suggestions.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper ">
                                <a
                                    href="https://mymovierecomendation.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                <img
                                    src="/images/movie.png"
                                    alt="Movie Recommendation Platform"
                                    className="cursor-pointer transform transition duration-300 hover:scale-110"
                                />
                                </a>
                            </div>
                            <h2 className="text-center">MyMovie: Discover movies you’ll love in seconds.</h2>
                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div className="image-wrapper">
                                <a
                                    href="https://ai-interview-prep-blush.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                <img
                                    src="/images/interview.png"
                                    alt="Interview Prep Platform"
                                    className="cursor-pointer transform transition duration-300 hover:scale-110"
                                />
                                </a>
                            </div>
                            <h2 className="text-center">PrepWise: Prepare smarter, interview better.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;