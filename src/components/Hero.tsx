'use client';

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    const scrollToLetter = () => {
        const letterSection = document.getElementById('letter-section');
        letterSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-pink-light/30">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-28 h-28 md:w-40 md:h-40 animate-float opacity-100 rotate-12 z-0 pointer-events-none">
                <Image
                    src="/images/hello-kitty.png"
                    alt="Hello Kitty"
                    fill
                    className="object-contain sticker-shadow"
                    priority
                    unoptimized
                />
            </div>

            <div className="absolute bottom-40 right-10 md:right-32 w-20 h-20 md:w-32 md:h-32 animate-float delay-1000 opacity-100 -rotate-12 z-0 pointer-events-none">
                <Image
                    src="/images/strawberry.png"
                    alt="Moranguinho"
                    fill
                    className="object-contain sticker-shadow"
                    unoptimized
                />
            </div>

            <div className="absolute top-1/4 right-[15%] w-14 h-14 animate-float delay-700 opacity-80 z-0 pointer-events-none">
                <Image
                    src="/images/strawberry.png"
                    alt="Moranguinho"
                    fill
                    className="object-contain sticker-shadow"
                    unoptimized
                />
            </div>

            <div className="z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
                <div className="space-y-4 animate-fade-in">
                    <h1 className="font-script text-7xl md:text-8xl text-red-soft drop-shadow-sm">
                        Para Joyce, com carinho 🤍
                    </h1>
                    <p className="font-sans text-xl md:text-2xl text-rose-800/70 font-light tracking-wide mt-4">
                        Um pequena homenagem a uma pessoa especial, guardado aqui.
                    </p>
                </div>

                <button
                    onClick={scrollToLetter}
                    className="mt-12 group flex items-center gap-2 mx-auto px-8 py-4 bg-white/50 hover:bg-white/80 backdrop-blur-sm border border-red-soft/20 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-red-soft font-medium"
                >
                    Leia com calma
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
            </div>
        </section>
    );
}
