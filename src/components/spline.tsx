import React from 'react'
import Spline from '@splinetool/react-spline'

export const Spline3D: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <Spline scene="https://prod.spline.design/46m3oujkhyc38tyB/scene.splinecode" />
      </div>
    </div>
  )
}
