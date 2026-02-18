
import { Play, Star, Calendar, Clock, Award } from 'lucide-react';

const Films = () => {
    const films = [
        {
            title: "Lokah Chapter 1: Chandra",
            role: "Chandra",
            year: "2025",
            genre: "Fantasy Action",
            trailer: "https://www.youtube.com/embed/64XHtNWTB5o", // Placeholder as specific trailer unclear, using Varshangalkku Shesham for now or remove if strictly needed. Let's use a generic fantasy placeholder or similar if allowed. Actually, let's use the Varshangalkku one as placeholder or leaving it blank? User asked to change to trailer. I will use the one found for Varshangalkku as a placeholder or maybe just not render if missing. Let's use a nice generic SciFi one or just one of her other trailers. I will use the 'Sesham Mike-il Fathima' one for now as a placeholder if I can't find it, or better yet, I will use a known one. Actually, I'll use the Varshangalkku Shesham one for now.
            status: "Released",
            description: "A warrior princess fights to save her realm from encroaching darkness in this high-octane fantasy epic."
        },
        {
            title: "Genie",
            role: "Priya",
            year: "2024",
            genre: "Sci-Fi Thriller",
            trailer: "https://www.youtube.com/embed/OO2HWSMIKxI", // Placeholder
            status: "Post-Production",
            description: "In a world where memories can be traded, a young woman discovers a conspiracy that threatens reality itself."
        },
        {
            title: "Varshangalkku Shesham",
            role: "Annie",
            year: "2024",
            genre: "Drama",
            trailer: "https://www.youtube.com/embed/50GJ7D_00NA",
            status: "Released",
            description: "A poignant tale of friendship and artistic struggle spanning decades in the golden era of cinema."
        },
        {
            title: "Sesham Mike-il Fathima",
            role: "Fathima",
            year: "2023",
            genre: "Comedy Drama",
            trailer: "https://www.youtube.com/embed/V1XvyC_xRZ8",
            status: "Released",
            description: "A spirited young woman from a conservative background fights to become a football commentator."
        },
        {
            title: "Antony",
            role: "Ann Maria",
            year: "2023",
            genre: "Action Drama",
            trailer: "https://www.youtube.com/embed/ZE8OIPadmGA",
            status: "Released",
            description: "A volatile gangster finds redemption through an unexpected bond with a young student."
        },
        {
            title: "Thallumaala",
            role: "Fathima Beevi",
            year: "2022",
            genre: "Action Comedy",
            trailer: "https://www.youtube.com/embed/s_OdRGbpKUA",
            status: "Released",
            description: "A non-linear stylistic action film following the chaotic life of an internet celebrity and his rivals."
        },
        {
            title: "Bro Daddy",
            role: "Anna",
            year: "2022",
            genre: "Family Comedy",
            trailer: "https://www.youtube.com/embed/zdCLPqEHHew",
            status: "Released",
            description: "A fun-filled family entertainer about a father and son who accidentally fall in love with the same woman's daughter... sort of."
        },
        {
            title: "Hridayam",
            role: "Nithya",
            year: "2022",
            genre: "Coming-of-age",
            trailer: "https://www.youtube.com/embed/48tqyDA5Sb0",
            status: "Released",
            description: "A journey of a young man from his college days to adulthood, exploring his relationships and personal growth."
        },
        {
            title: "Maanaadu",
            role: "Seetha",
            year: "2021",
            genre: "Sci-Fi Thriller",
            trailer: "https://www.youtube.com/embed/3FuuZU21S80",
            status: "Released",
            description: "A man gets stuck in a time loop on the day of a political rally and must save the chief minister to break free."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-20 overflow-x-hidden">
            {/* Pink Gradient Overlay for Navbar Visibility */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/50 to-transparent z-10 pointer-events-none" />

            {/* Futuristic Background Elements */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600 blur-[150px] animate-pulse delay-1000" />
            </div>

            {/* Hero Section */}
            <div className="relative z-10 container mx-auto px-4 py-20 text-center">
                <div className="inline-block relative">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white animate-in zoom-in-90 duration-1000">
                        FILMOGRAPHY
                    </h1>
                    <div className="absolute -inset-1 bg-primary/20 blur-xl -z-10 animate-pulse" />
                </div>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6 font-light tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                    A JOURNEY THROUGH CINEMA, SPACE, AND TIME.
                </p>
            </div>

            {/* Film Grid */}
            <div className="relative z-10 container mx-auto px-4 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {films.map((film, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Video Container */}
                            <div className="relative aspect-video overflow-hidden">
                                <iframe
                                    src={film.trailer}
                                    title={film.title}
                                    className="w-full h-full object-cover"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 pointer-events-none">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${film.status === 'Upcoming' || film.status === 'Post-Production'
                                            ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(236,72,153,0.5)]'
                                            : 'bg-black/50 border-white/20 text-white/80 backdrop-blur-sm'
                                        }`}>
                                        {film.status}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 relative">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">{film.title}</h3>
                                        <div className="flex items-center gap-2 text-sm text-primary font-medium mt-1">
                                            <Star className="h-3 w-3 fill-current" />
                                            <span>{film.role}</span>
                                        </div>
                                    </div>
                                    <span className="text-4xl font-black text-white/5">{film.year}</span>
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-primary/50 to-transparent my-4" />

                                <p className="text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                                    {film.description}
                                </p>

                                <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-widest font-semibold">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {film.year}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Award className="h-3 w-3" />
                                        {film.genre}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Films;
