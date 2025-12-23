'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative floating elements */}
      <div className="glass-card" style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
        opacity: 0.5,
        zIndex: -1
      }} />
      <div className="glass-card" style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse',
        opacity: 0.3,
        zIndex: -1
      }} />

      {/* Main Content */}
      <div className="glass-card" style={{
        padding: '4rem',
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-out'
      }}>
        <h1 style={{
          fontFamily: 'var(--font-accent)',
          fontSize: '5rem',
          marginBottom: '1rem',
          lineHeight: 1.2
        }} className="text-gradient">
          Feliz Aniversário!
        </h1>

        <p style={{
          fontSize: '1.5rem',
          lineHeight: 1.6,
          marginBottom: '2rem',
          opacity: 0.9
        }}>
          Que o seu dia seja tão incrível quanto você.
        </p>

        <button style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          border: 'none',
          borderRadius: '50px',
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
          color: 'white',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
        }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
          }}
          onClick={() => alert('Surpresa em breve!')}
        >
          Ver Surpresa ✨
        </button>
      </div>
    </main>
  );
}
