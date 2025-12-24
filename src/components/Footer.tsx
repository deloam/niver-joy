import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="py-20 text-center relative overflow-hidden">
            <div className="max-w-md mx-auto px-6 space-y-6">
                <div className="w-16 h-1 bg-red-soft/20 mx-auto rounded-full mb-8" />

                <div className="font-script text-4xl text-red-soft flex items-center justify-center gap-3">
                    Feliz vida, Joyce.
                    <div className="relative w-8 h-8">
                        <Image
                            src="/images/strawberry.png"
                            alt="icon"
                            fill
                            className="object-contain animate-bounce"
                            unoptimized
                        />
                    </div>
                </div>

                <p className="font-sans text-rose-800/60 leading-relaxed">
                    Que você nunca esqueça o quanto é especial.
                </p>

                <div className="pt-8">
                    <span className="font-hand text-xl text-gray-500">— Deloam</span>
                </div>
            </div>
        </footer>
    );
}
