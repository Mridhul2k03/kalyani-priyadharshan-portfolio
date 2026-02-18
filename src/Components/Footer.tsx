import { Facebook, Twitter, Instagram, Youtube, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-background border-t border-border/40 pt-16 pb-8 relative overflow-hidden">
            {/* Top Blend Effect */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            {/* Bottom Branding */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
                <h1 className="text-[13vw] font-black text-foreground/5 leading-none tracking-tighter whitespace-nowrap uppercase">
                    KALYANI
                </h1>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter mb-4">
                            <span>Kalyani Priyadarshan</span>
                        </div>
                        <p className="text-muted-foreground mb-6 max-w-sm">
                            Your premier destination for cinema excellence. Exploring the art of storytelling through the lens of modern masterpieces and timeless classics.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors group">
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors group">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors group">
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors group">
                                <Youtube className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="font-semibold mb-6">Explore</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Now Showing</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Coming Soon</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Film Festivals</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Awards Season</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h3 className="font-semibold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><Link className="text-muted-foreground hover:text-primary transition-colors" to="/">Home</Link></li>
                            <li><Link className="text-muted-foreground hover:text-primary transition-colors" to="/about">About Us</Link></li>
                            <li><Link className="text-muted-foreground hover:text-primary transition-colors" to="/films">Films</Link></li>
                            <li><Link className="text-muted-foreground hover:text-primary transition-colors" to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h3 className="font-semibold mb-6">Newsletter</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to get the latest news and film updates.
                        </p>
                        <div className="flex flex-col gap-3">
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-muted/50 border border-input rounded-md py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md py-2 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                                Subscribe
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} KALYANI. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground opacity-50">
                        Designed by mridhulkrishna.in
                    </p>
                    <div className="flex gap-8 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
