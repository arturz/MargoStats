export default (() => 
  process.browser 
    ? window.atob 
    : require('atob')
)()