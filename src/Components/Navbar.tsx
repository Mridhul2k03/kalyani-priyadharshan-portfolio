import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Film, PlayCircle, ArrowRight } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;

                setIsAtTop(currentScrollY < 50);

                // Hide if scrolling down AND past 100px
                // Show if scrolling up
                if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }

                lastScrollY.current = currentScrollY;
            }
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Films", to: "/films", hasDropdown: true },
        { name: "Gallery", to: "/gallery" },
        { name: "Awards", to: "#" },
        { name: "Contact", to: "/contact" },
    ];

    const films = [
        { title: "Lokah Chapter 1: Chandra", image: "https://wallpapercave.com/wp/wp15785948.jpg", category: "Superhero Fantasy Action Thriller" },
        { title: "Hridhayam", image: "https://wallpaperaccess.com/full/7988325.jpg", category: "Romantic" },
        { title: "Antony", image: "https://img.airtel.tv/unsafe/fit-in/1600x0/filters:format(webp)/https://ultra-assets.streamready.in/assets/ULTRA/MOVIE/68885d6f006c066bd89bb348/images/LANDSCAPE_169/LANDSCAPE_169_kc6Jpb0Mm_Antony04_1920x1080-(1).jpg?o=production", category: "Action" },
        // { title: "Neon Nights", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=600&auto=format&fit=crop", category: "Cyberpunk" },
        // { title: "Shadow Realm", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?q=80&w=600&auto=format&fit=crop", category: "Horror" },
    ];

    const toggleMobileDropdown = (name: string) => {
        setActiveMobileDropdown(prev => prev === name ? null : name);
    };

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isAtTop ? 'bg-transparent border-transparent text-white' : 'bg-background/95 border-b border-border/40 backdrop-blur text-foreground'}`}>
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter cursor-pointer">
                        {/* <Film className="h-6 w-6" /> */}
                        <span>KALYANI</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group h-16 flex items-center">
                                <Link
                                    to={link.to}
                                    className={`flex items-center gap-1 text-m font-bold transition-colors ${isAtTop ? 'text-white/80 hover:text-white' : 'text-muted-foreground hover:text-primary'}`}
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.hasDropdown && (
                                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] hidden group-hover:block pt-2">
                                        <div className="bg-popover border rounded-lg shadow-lg overflow-hidden p-4 animate-in fade-in zoom-in-95 duration-200">
                                            <div className="grid grid-cols-2 gap-4">
                                                {films.map((film, index) => (
                                                    <div key={index} className={`group/item relative rounded-md overflow-hidden bg-muted ${index === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-video'}`}>
                                                        <img
                                                            src={film.image}
                                                            alt={film.title}
                                                            className="object-cover w-full h-full transition-transform duration-500 group-hover/item:scale-105"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                                                            <span className="text-xs text-white/80 font-medium mb-1">{film.category}</span>
                                                            <h4 className="text-white font-bold">{film.title}</h4>
                                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity bg-black/40">
                                                                <PlayCircle className="text-white h-10 w-10" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-4 pt-3 border-t text-center">
                                                <Link to="/films" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-1 group/link">
                                                    View All Films
                                                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <button className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors">
                            Book Tickets
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 transition-colors ${isAtTop ? 'text-white/80 hover:text-white' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t bg-background text-foreground">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <div key={link.name} className="flex flex-col gap-2">
                                <div
                                    className="flex items-center justify-between cursor-pointer py-2 hover:bg-muted/50 rounded-md px-2"
                                    onClick={() => link.hasDropdown ? toggleMobileDropdown(link.name) : null}
                                >
                                    <Link
                                        to={link.to}
                                        className="text-lg font-medium hover:text-primary transition-colors"
                                        onClick={(e) => {
                                            if (link.hasDropdown) {
                                                e.preventDefault();
                                            } else {
                                                setIsOpen(false);
                                            }
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.hasDropdown && (
                                        <ChevronDown className={`h-5 w-5 transition-transform ${activeMobileDropdown === link.name ? 'rotate-180' : ''}`} />
                                    )}
                                </div>

                                {link.hasDropdown && activeMobileDropdown === link.name && (
                                    <div className="pl-4 border-l-2 border-muted animate-in slide-in-from-top-2 duration-200">
                                        <div className="grid grid-cols-1 gap-3 mt-2">
                                            {films.map((film, index) => (
                                                <div key={index} className="flex gap-3 bg-muted/30 rounded-lg p-2 items-center">
                                                    <div className="h-16 w-24 rounded-md overflow-hidden bg-background shrink-0">
                                                        <img
                                                            src={film.image}
                                                            alt={film.title}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-xs text-muted-foreground">{film.category}</span>
                                                        <span className="font-medium text-sm">{film.title}</span>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="mt-2 pt-2 border-t text-center">
                                                <Link to={"films"} className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-1 group/link py-2">
                                                    View All Films
                                                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <button className="w-full py-3 text-center font-medium text-primary-foreground bg-primary rounded-md mt-4">
                            Book Tickets
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;