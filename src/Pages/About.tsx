import { Star, Award, Heart, ArrowRight } from "lucide-react";
import Reveal from "../Components/Reveal";

const About = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full overflow-hidden flex items-end justify-start">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://4kwallpapers.com/images/walls/thumbs_3t/24812.jpg" // High-quality portrait
                        alt="Kalyani Priyadharshan Portrait"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" /> */}
                </div>

                <div className="relative z-10 container mx-auto px-4 pb-20">
                    <div className="max-w-3xl">
                        <Reveal>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-lg">
                                The Essence of <span className="text-primary">Grace</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                                A journey through cinema, capturing hearts with every performance.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Biography Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <Reveal>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-primary tracking-tight">Biography</h2>
                                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        Born into a legacy of cinematic excellence, <strong>Kalyani Priyadharshan</strong> has carved her own unique path in the Indian film industry. Making her debut in Telugu cinema, she quickly captivated audiences with her natural charm and emotive performances.
                                    </p>
                                    <p>
                                        Transcending linguistic barriers, she has delivered memorable roles in Malayalam and Tamil cinema, earning critical acclaim and a dedicated fanbase. Her ability to embody diverse characters with depth and authenticity sets her apart as one of the most promising talents of her generation.
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <button className="text-foreground font-semibold flex items-center gap-2 group hover:text-primary transition-colors">
                                        Read Full Biography <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </Reveal>

                        {/* Stats / Highlights */}
                        <div className="grid grid-cols-2 gap-4">
                            <Reveal delay={200}>
                                <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors">
                                    <Star className="h-8 w-8 text-primary mb-3" />
                                    <span className="text-4xl font-bold text-primary mb-1">15+</span>
                                    <span className="text-sm text-muted-foreground">Films</span>
                                </div>
                            </Reveal>
                            <Reveal delay={300}>
                                <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors">
                                    <Award className="h-8 w-8 text-primary mb-3" />
                                    <span className="text-4xl font-bold text-primary mb-1">10+</span>
                                    <span className="text-sm text-muted-foreground">Awards</span>
                                </div>
                            </Reveal>
                            <Reveal delay={400} className="col-span-2">
                                <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors">
                                    <Heart className="h-8 w-8 text-primary mb-3" />
                                    <span className="text-4xl font-bold text-primary mb-1">7M+</span>
                                    <span className="text-sm text-muted-foreground">Followers</span>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
