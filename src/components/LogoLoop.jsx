import { memo } from 'react';

const LogoLoop = memo(({ logos, speed = 30, direction = 'left', pauseOnHover = true, className = '' }) => {
  return (
    <div
      className={`logo-loop-container ${className}`}
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        width: '100%',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <div
        className="logo-loop-track"
        style={{
          display: 'inline-flex',
          gap: '4rem', // Gap between items
          animation: `scroll ${speed}s linear infinite`,
          width: 'max-content',
        }}
        onMouseEnter={(e) => pauseOnHover && (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={(e) => pauseOnHover && (e.currentTarget.style.animationPlayState = 'running')}
      >
        {/* Render logos multiple times for seamless loop */}
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            title={logo.title}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.7,
              transition: 'opacity 0.3s',
              flexShrink: 0,
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
          >
            {logo.href ? (
              <a href={logo.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'inherit' }} title={logo.title}>
                {logo.node}
              </a>
            ) : (
              logo.node
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Move by 1/3 since we have 3 copies */
        }
      `}</style>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
