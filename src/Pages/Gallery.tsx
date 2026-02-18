
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import Reveal from '../Components/Reveal';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: "https://www.tamilnow.com/movies/actresses/kalyani-priyadarshan/pic-kalyani-priyadarshan-indian-actress-3740.jpg", category: "Photoshoot", aspect: "aspect-[2/3]" },
        { src: "https://m.media-amazon.com/images/M/MV5BMzU2ODFiNWMtOGMzMC00YjMxLTk3MDQtMGQ0ZWE1MDQxMWQwXkEyXkFqcGc@._V1_FMjpg_UX2160_.jpgp8353860.jpg", category: "Event", aspect: "aspect-square" },
        { src: "https://www.tamilnow.com/movies/actresses/kalyani-priyadarshan/kalyani-priyadarshan-cinema-actress-aug-2019-image-4089.jpg", category: "Movie-Still", aspect: "aspect-[3/4]" },
        { src: "https://m.media-amazon.com/images/M/MV5BNmZkYmM0M2UtNThkNS00ZTE2LWE3ZDgtZTUwOTJjN2VjMTEzXkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg", category: "Photoshoot", aspect: "aspect-[3/4]" },
        { src: "https://4kwallpapers.com/images/walls/thumbs_3t/24807.jpg", category: "Photoshoot", aspect: "aspect-[3/4]" },
        { src: "https://wallpapercave.com/wp/wp6241025.jpg", category: "Candid", aspect: "aspect-[2/3]" },
        { src: "https://wallpapercave.com/wp/wp4178769.jpg", category: "Movie-Still", aspect: "aspect-square" },
        { src: "https://4kwallpapers.com/images/walls/thumbs_3t/24814.jpg", category: "Event", aspect: "aspect-[3/2]" },
        { src: "https://wallpapercave.com/wp/wp11390727.jpg", category: "Action", aspect: "aspect-[2/3]" },
        { src: "/kalyani.jpg", category: "Promo", aspect: "aspect-square" },
        { src: "https://wallpaperaccess.com/full/2514717.jpg", category: "Poster", aspect: "aspect-[2/3]" },
        { src: "https://is.zobj.net/image-server/v1/images?r=75EsUDNiHyeVneuWwL__Q4T11ylZ72S5nS3MwzoYxUrUXmWw1ej8vo-Q6NkDQqy8O23QKRvrHJ6vrQ0dYyBmpQsDLCGV_-cE6kWNb58_ptLrhedPl8JsyT9MNhzWCIgC86qe-V_jwN-H-ykVQy2_GGfuvquQBrSPfQ7WWj8yByUlqB_-s-_vZXYC01y_a0R-iDwHfSCdWdnImCfxwfzGmUEgeRbIuJOM5-NwoGwkmPayx_Hz1n85kKDICRU", category: "Aesthetic", aspect: "aspect-square" },
    ];

    return (
        <div className="min-h-screen bg-background pt-20 relative">
            {/* Pink Gradient Overlay for Navbar Visibility */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/50 to-transparent z-0 pointer-events-none" />

            {/* Header */}
            <div className="container mx-auto px-4 py-12 text-center relative z-10">
                <Reveal>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Visual <span className="text-primary">Chronicles</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        A curated collection of moments, capturing the elegance and versatality of Kalyani Priyadharshan.
                    </p>
                </Reveal>
            </div>

            {/* Masonry Grid */}
            <div className="container mx-auto px-4 pb-20">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images.map((img, index) => (
                        <Reveal key={index} delay={index * 50}>
                            <div
                                className="relative group break-inside-avoid rounded-xl overflow-hidden cursor-zoom-in bg-muted mb-4"
                                onClick={() => setSelectedImage(img.src)}
                            >
                                <img
                                    src={img.src}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2">
                                        <ZoomIn className="h-4 w-4" /> View
                                    </span>
                                </div>
                                {/* Category Tag */}
                                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white/90 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                    {img.category}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full p-2 hover:bg-white/20"
                        onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                    >
                        <X className="h-8 w-8" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full size"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default Gallery;
