
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Award, Star, User, Film as FilmIcon } from 'lucide-react';
import { films } from '../Data/films';
import { useEffect } from 'react';

const FilmDetail = () => {
    const { id } = useParams();
    const film = films.find(f => f.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!film) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Film Not Found</h2>
                    <Link to="/films" className="text-primary hover:underline">Back to Films</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="overflow-x-hidden">
            {/* Hero Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 z-10" />
                {film.trailer ? (
                    <iframe
                        src={`${film.trailer}?autoplay=1&mute=1&loop=1&playlist=${film.trailer.split('/').pop()}&controls=0&showinfo=0&modestbranding=1`}
                        className="w-full h-full object-cover opacity-40 pointer-events-none scale-125"
                        allow="autoplay; encrypted-media"
                    />
                ) : (
                    <img
                        src={film.images?.[0] || ""}
                        alt={film.title}
                        className="w-full h-full object-cover opacity-40"
                    />
                )}
            </div>

            <div className="relative z-10 pt-24 pb-20 container mx-auto px-4">
                <Link
                    to="/films"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors group"
                >
                    <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                    Back to Films
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                    {/* Left Column - Poster/Media */}
                    <div className="lg:col-span-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(236,72,153,0.2)] relative group">
                            <img
                                src={film.images?.[0] || ""}
                                alt={film.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border bg-black/50 backdrop-blur-md border-white/20 text-white`}>
                                    {film.status}
                                </span>
                            </div>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                <div className="text-primary mb-2"><Calendar className="h-5 w-5" /></div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Release Year</div>
                                <div className="font-bold text-lg">{film.year}</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                <div className="text-primary mb-2"><FilmIcon className="h-5 w-5" /></div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Genre</div>
                                <div className="font-bold text-lg">{film.genre}</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-2 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter leading-none">
                                {film.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-lg text-white/60">
                                <span className="flex items-center gap-2 text-primary font-bold">
                                    <Star className="h-5 w-5 fill-current" />
                                    {film.role}
                                </span>
                                <span>•</span>
                                <span>{film.director}</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-4">Synopsis</h2>
                            <p className="text-xl text-gray-300 leading-relaxed font-light">
                                {film.fullDescription || film.description}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-4 mb-6">Cast & Crew</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <User className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/50">Director</div>
                                        <div className="font-bold">{film.director}</div>
                                    </div>
                                </div>
                                {film.cast?.map((actor, idx) => (
                                    <div key={idx} className="bg-white/5 p-4 rounded-lg flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                                            <User className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/50">Cast</div>
                                            <div className="font-bold">{actor}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {film.trailer && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold border-b border-white/10 pb-4">Official Trailer</h2>
                                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                                    <iframe
                                        src={film.trailer}
                                        title={`${film.title} Trailer`}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilmDetail;
