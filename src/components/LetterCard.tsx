'use client';

import { useEffect, useRef, useState } from 'react';
import { letterContent } from '@/content/letter';
import Image from 'next/image';

export default function LetterCard() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="letter-section"
            className="min-h-screen flex items-center justify-center p-6 md:p-12 relative"
        >
            <div
                ref={ref}
                className={`max-w-3xl w-full bg-cream p-8 md:p-16 rounded-2xl shadow-lg border border-red-soft/10 relative transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                {/* Paper texture feel */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 pointer-events-none rounded-2xl" />

                {/* Sticker/Washi tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-red-soft/20 -rotate-2 rounded-sm backdrop-blur-sm" />

                {/* Cute Strawberry Sticker */}
                <div className="absolute -top-6 -right-6 w-20 h-20 animate-wiggle z-20">
                    <Image
                        src="/images/strawberry.png"
                        alt="Sticker"
                        fill
                        className="object-contain sticker-shadow"
                        unoptimized
                    />
                </div>

                <div className="relative font-hand text-xl md:text-2xl leading-relaxed text-[#5D4037] whitespace-pre-wrap">
                    {letterContent}
                </div>

                <div className="mt-8 flex justify-end">
                    <div className="w-12 h-12 text-red-soft/50 animate-wiggle flex items-center justify-center text-4xl">
                        ♥
                    </div>
                </div>
            </div>
        </section>
    );
}
