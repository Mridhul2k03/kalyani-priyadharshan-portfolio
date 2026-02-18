
import { useEffect, useState } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Wait a bit before finishing
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Adjust speed here

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
            <div className="relative">
                <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white animate-pulse tracking-tighter">
                    KALYANI
                </h1>
                <div className="absolute -inset-4 bg-primary/20 blur-[50px] -z-10 animate-pulse" />
            </div>

            <div className="w-64 h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
                <div
                    className="h-full bg-primary transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="mt-2 text-white/40 text-xs font-mono tracking-widest">
                LOADING EXPERIENCE... {progress}%
            </div>
        </div>
    );
};

export default Loader;
