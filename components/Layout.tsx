import Head from 'next/head'
import '../static/css/bootstrap.min.css'
import Wrapper from './Layout/Wrapper'
import Nav from './Layout/Nav'
import Header from './Layout/Header'
import Footer from './Layout/Footer'

export default ({ children }) =>
  <>
    <Head>
      <title>MargoStats</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#303030" />
      <meta name="keyword" content="Margonem, ciekawostki, statystyki, stats, statistics, MMORPG, MMORPG PL, online, gra, gry, games, bonus" />
      <meta name="description" content="Sprawdź, kto grał najwięcej w Margonem - dynamiczną grę MMORPG w przeglądarce, w której można grać aż sześcioma profesjami, w tym wojownikiem, magiem, łowcą, tropicielem, tancerzem ostrzy lub paladynem!" />
      <meta name="robots" content="all" />
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
    </Head>
    <style jsx global>{`
      html, body {
        height: 100%;
      }
      #__next {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    `}</style>
    <Wrapper>
      <Nav />
      <Header />
      <main className="container">
      { children }
      </main>
    </Wrapper>
    <Footer />
  </>