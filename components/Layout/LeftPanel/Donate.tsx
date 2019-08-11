import { useState } from 'react'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <iframe 
        title="Donejty"
        src="https://app.tipanddonation.com/p/webtiplist#f0664cae247edb58e1f1a8cd4a5e4afb2c88a0bc" 
        height="100%" 
        width="100%" 
        style={{
          opacity: visible
            ? 1
            : 0
        }}
        onLoad={() => setVisible(true)}
      />
      <a
        href="https://tipanddonation.com/perskikocur"
        target="_blank"
      />
      <style jsx>{`
        div {
          position: relative;
        }
        iframe {
          border: none;
          background: transparent;
        }
        a {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}