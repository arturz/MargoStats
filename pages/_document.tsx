import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="pl-PL">
        <Head>
          <script dangerouslySetInnerHTML={ {__html: `
;(function(addEventListener){
  window.addEventListener = function(type, listener, options){
    console.log({
      isScrollEvent: isScrollEvent(type),
      type
    })

    if(!isScrollEvent(type))
      return addEventListener(type, listener, options)

    if(typeof options === 'boolean')
      return addEventListener(type, listener, {
        capture: options,
        passive: true
      })

    var optionsCopy = {
      passive: true
    }
    for(var key in options)
      if(options.hasOwnProperty(key))
        optionsCopy[key] = options[key]
  
    addEventListener(type, listener, optionsCopy)
  }

  function isScrollEvent(event){
    return event === 'wheel'
      || event === 'mousewheel'
      || event === 'touchstart'
      || event === 'touchmove'
  }
})(window.addEventListener.bind(window));` } } />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}