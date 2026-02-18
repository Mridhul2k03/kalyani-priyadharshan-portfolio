import { Play, Info } from "lucide-react";

const Landing = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://4kwallpapers.com/images/walls/thumbs_3t/24805.jpg"
                        alt="Kalyani Priyadharshan"
                        className="w-full h-full object-cover object-top"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" /> */}
                </div>

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-4">
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out max-w-2xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-white border border-white/30 text-sm font-medium mb-6 backdrop-blur-sm">
                            Now Streaming
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2 text-white drop-shadow-xl">
                            KALYANI PRIYADHARSHAN
                        </h1>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-light text-primary mb-6 tracking-widest uppercase">
                            in "LOKAH"
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed drop-shadow-md max-w-lg">
                            prominent Indian actress who primarily works in Malayalam, Tamil, and Telugu cinema.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                            <button className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25 hover:scale-105 active:scale-95">
                                <Play className="h-5 w-5 fill-current" />
                                Start Watching
                            </button>
                            <button className="h-12 px-8 rounded-full bg-white/10 text-white font-semibold text-lg border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
                                <Info className="h-5 w-5" />
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>


            </section>
                {/* Cinematic Journey Section */}
                <section className="py-24 bg-background relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                            <div className="max-w-xl">
                                <span className="text-primary font-medium tracking-wider uppercase mb-2 block">Filmography</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-foreground">Cinematic <span className="text-primary">Journey</span></h2>
                            </div>
                            <button className="text-foreground border-b border-primary pb-1 hover:text-primary transition-colors text-lg">
                                View Full Filmography
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Movie Card 2 */}
                            <div className="group relative aspect-[2/3] overflow-hidden rounded-xl cursor-pointer">
                                <img
                                    src="https://wallpapercave.com/wp/wp15785922.jpg"
                                    alt="Lokah"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-primary font-bold text-sm mb-2">2025</span>
                                    <h3 className="text-white text-2xl font-bold mb-1">Lokah</h3>
                                    <p className="text-white/70 text-sm line-clamp-2">Lokah: Chapter 1 - Chandra (2025) is a Malayalam-language fantasy-thriller, </p>
                                </div>
                            </div>

                            {/* Movie Card 3 */}
                            <div className="group relative aspect-[2/3] overflow-hidden rounded-xl cursor-pointer">
                                <img
                                    src="https://wallpapercave.com/wp/wp9082857.jpg"
                                    alt="Maanaadu"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-primary font-bold text-sm mb-2">2021</span>
                                    <h3 className="text-white text-2xl font-bold mb-1">Maanaadu</h3>
                                    <p className="text-white/70 text-sm line-clamp-2">A sci-fi action thriller involving a time loop political drama.</p>
                                </div>
                            </div>
                            {/* Movie Card 1 */}
                            <div className="group relative aspect-[2/3] overflow-hidden rounded-xl cursor-pointer">
                                <img
                                    src="https://wallpapercave.com/wp/wp11390727.jpg"
                                    alt="Thallumaala"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-primary font-bold text-sm mb-2">2022</span>
                                    <h3 className="text-white text-2xl font-bold mb-1">Thallumaala</h3>
                                    <p className="text-white/70 text-sm line-clamp-2">A non-linear action film that redefined style in Malayalam cinema.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-24 bg-muted/20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Through the <span className="text-primary">Lens</span></h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                                Capturing moments of elegance, emotion, and artistry.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[300px]">
                            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
                                <img
                                    src="https://4kwallpapers.com/images/walls/thumbs_3t/24807.jpg"
                                    alt="Gallery 1"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                            </div>
                            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
                                <img
                                    src="https://wallpapercave.com/wp/wp6241025.jpg"
                                    alt="Gallery 2"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
                                <img
                                    src="https://wallpapercave.com/wp/wp4178769.jpg"
                                    alt="Gallery 3"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative group">
                                <img
                                    src="https://4kwallpapers.com/images/walls/thumbs_3t/24814.jpg"
                                    alt="Gallery 4"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
}

export default Landing;