import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Real Outdoor Solutions - Custom Saunas in Montana'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  // Font
  const interSemiBold = fetch(
    new URL('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom, #1e293b, #0f172a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
          position: 'relative',
        }}
      >
        {/* Steam effect (simplified) */}
        <div style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '100%',
          background: 'rgba(255, 255, 255, 0.2)',
          filter: 'blur(60px)',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }} />
        
        <div style={{
          position: 'absolute',
          width: '150px',
          height: '150px',
          borderRadius: '100%',
          background: 'rgba(255, 255, 255, 0.15)',
          filter: 'blur(50px)',
          top: '25%',
          left: '40%',
          transform: 'translate(-50%, -50%)',
        }} />
        
        <div style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          borderRadius: '100%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(70px)',
          top: '20%',
          left: '60%',
          transform: 'translate(-50%, -50%)',
        }} />
        
        {/* Company name */}
        <div
          style={{
            fontSize: 64,
            fontFamily: 'Inter',
            fontWeight: 600,
            color: 'white',
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          Real Outdoor Solutions
        </div>
        
        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            fontFamily: 'Inter',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: 48,
            textAlign: 'center',
          }}
        >
          Custom Saunas Crafted in Montana
        </div>
        
        {/* Decorative line */}
        <div
          style={{
            width: '80%',
            height: '2px',
            background: 'linear-gradient(to right, transparent, rgba(184, 115, 81, 0.7), transparent)',
            marginBottom: 48,
          }}
        />
        
        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            fontFamily: 'Inter',
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
          }}
        >
          Experience authentic Nordic wellness
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 600,
        },
      ],
    }
  )
} 