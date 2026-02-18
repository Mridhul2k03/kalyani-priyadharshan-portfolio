
import { Award, Trophy, Star, Medal, Crown } from 'lucide-react';

const Awards = () => {
    const awards = [
        {
            year: "2024",
            award: "Filmfare Awards South",
            category: "Best Actress - Malayalam",
            work: "Sesham Mike-il Fathima",
            result: "Winner",
            icon: <Trophy className="h-8 w-8 text-yellow-500" />
        },
        {
            year: "2023",
            award: "SIIMA Awards",
            category: "Best Actress in a Leading Role",
            work: "Thallumaala",
            result: "Winner",
            icon: <Crown className="h-8 w-8 text-yellow-400" />
        },
        {
            year: "2023",
            award: "Asianet Film Awards",
            category: "Most Popular Actress",
            work: "Hridayam & Bro Daddy",
            result: "Winner",
            icon: <Star className="h-8 w-8 text-pink-500" />
        },
        {
            year: "2022",
            award: "Vanitha Film Awards",
            category: "Best Star Pair (with Pranav Mohanlal)",
            work: "Hridayam",
            result: "Winner",
            icon: <Medal className="h-8 w-8 text-purple-500" />
        },
        {
            year: "2021",
            award: "Filmfare Awards South",
            category: "Best Female Debut - Malayalam",
            work: "Varane Avashyamund",
            result: "Winner",
            icon: <Award className="h-8 w-8 text-primary" />
        },
        {
            year: "2021",
            award: "SIIMA Awards",
            category: "Best Debut Actress - Malayalam",
            work: "Varane Avashyamund",
            result: "Winner",
            icon: <Trophy className="h-8 w-8 text-yellow-500" />
        },
        {
            year: "2020",
            award: "Kerala Film Critics Association Awards",
            category: "Best Debutant Actress",
            work: "Varane Avashyamund",
            result: "Winner",
            icon: <Star className="h-8 w-8 text-blue-400" />
        }
    ];

    return (
        <div className="pt-20 overflow-x-hidden relative">
            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-6 ring-1 ring-primary/30">
                        <Trophy className="h-6 w-6 text-primary mr-2" />
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Hall of Fame</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        AWARDS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200">RECOGNITION</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Celebrating excellence in cinema and the art of storytelling.
                    </p>
                </div>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {awards.map((item, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-xl p-8 hover:border-primary/30 transition-all duration-300 hover:bg-zinc-900/80 group animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-full bg-black/50 border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.award}</h3>
                                        <span className="text-sm font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{item.year}</span>
                                    </div>
                                    <p className="text-lg text-gray-300 mb-1">{item.category}</p>
                                    <p className="text-sm text-gray-500">
                                        For <span className="text-white font-medium italic">{item.work}</span>
                                    </p>

                                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full">
                                        <Trophy className="h-3 w-3" />
                                        {item.result}
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

export default Awards;
