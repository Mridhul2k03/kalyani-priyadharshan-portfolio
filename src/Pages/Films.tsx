
import { Star, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { films } from '../Data/films';

const Films = () => {
    return (
        <div className="pt-20 overflow-x-hidden">
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
                        <Link
                            to={`/films/${film.id}`}
                            key={index}
                            className="group relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] animate-in fade-in slide-in-from-bottom-8 fill-mode-both block"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Video Container */}
                            <div className="relative aspect-video overflow-hidden">
                                {film.trailer ? (
                                    <iframe
                                        src={film.trailer}
                                        title={film.title}
                                        className="w-full h-full object-cover pointer-events-none"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        tabIndex={-1}
                                    />
                                ) : (
                                    <img
                                        src={film.images?.[0]}
                                        alt={film.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}

                                {/* Hover Overlay - Click to View Details */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                    <span className="px-6 py-2 border border-white/30 rounded-full text-sm font-bold tracking-widest uppercase backdrop-blur-md">
                                        View Details
                                    </span>
                                </div>

                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 pointer-events-none z-20">
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
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Films;
