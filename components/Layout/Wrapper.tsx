export default ({ children }) =>
  <div id="wrapper">
    <style jsx>{`
      #wrapper {
        flex: 1 0 auto;
      }
    `}</style>
    {
      children
    }
  </div>