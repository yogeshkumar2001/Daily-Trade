'use client'
import Image from "next/image";

export default async function Home({ Children }) {
  // fetch particular stock - >  https://www.alphavantage.co/query?function=OVERVIEW&symbol=BROGW&apikey=Y2GV1Q0LK3DDTW3Q
  // fetch top gainer - https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&market=IN&apikey=Y2GV1Q0LK3DDTW3Q
  // news -https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=COIN,CRYPTO:BTC,FOREX:USD&time_from=20220410T0130&limit=1000&apikey=demo

  // markets-time - https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo
  let isMobile = window.matchMedia("(max-width:500px)").matches;
  return (
    <main class={`home_body_bg pt-4 ${isMobile ? "  " : ""}`}>
      <div className={`container w-100  ${isMobile ? "pt-5 p-2" : "d-flex p-5 pb-0"}`}>
        <div className={`text white ${isMobile ? 'p-2 w-100' : 'p-5 w-50 '}`}>
          <h1 className='text-white fs-1 fw-bold'> Your Daily Source for Market Insights. <span className="mid-text">Stay Informed, Stay Ahead</span></h1>
          <p className="text-secondary" >Welcome to Daily Trade, your one-stop destination for all things related to the stock market. Whether you're a seasoned investor or just starting out, we've got you covered with the latest market updates, top gainers and losers, breaking news, and powerful tools to help you make informed decisions about your investments.</p>
          <button className="btn btn-primary">Explore more</button>
        </div>
        <div className={` ${isMobile ? 'p-2 w-100' : 'p-5 w-50'}`}>
          <Image src={"/image/banner_img_dark.png"} width={isMobile ? 350 : 500} height={isMobile ? 350 : 500} />
        </div>
      </div>
      <div className={`container w-100  ${isMobile ? " p-2" : "d-flex p-5 pt-0 pb-0"}`}>
      {!isMobile && <div className={` w-50 pt-0`}>
            <Image src={"/image/about_dark.png"} width={isMobile ? 350 : 500} height={isMobile ? 350 : 500} />
          </div>}
        <div className={`text white ${isMobile ? 'p-2 w-100' : 'p-5 w-50 '}`}>
          
          <h1 className='text-white fs-1 fw-bold'> Spot the Winners, <span className="mid-text">Dodge the Losers</span>, Profit with Daily Trade.</h1>
          <p className="text-secondary" >Stay ahead of the curve with our Top Gainers and Losers section, where you can quickly see which stocks are making significant moves in the market. Our real-time data keeps you informed about the most notable changes, helping you identify potential opportunities or risks in your investment portfolio.</p>
          <button className="btn btn-primary"><span>Explore more</span></button>
        </div>
        {isMobile && <div className={` ${isMobile ? 'p-2 w-100' : 'p-5 w-50 pt-0 '}`}>
          <Image src={"/image/about_dark.png"} width={isMobile ? 350 : 500} height={isMobile ? 350 : 500} />
        </div>}
      </div>
      <div className={`container w-100  ${isMobile ? "p-2" : "d-flex  p-5 pt-0"}`}>
        <div className={`text white ${isMobile ? 'p-2 w-100' : 'w-50 p-5'}`}>
          <h1 className='text-white fs-1 fw-bold'> <span className="mid-text">Today's News</span>, Tomorrow's Wins.</h1>
          <div className="d-flex flex-column align-items-between">
            <div className="glass-card text-secondary">Knowledge is power in finance.</div>
            <div className="glass-card text-secondary">Our "Today's News" section keeps you informed.</div>
            <div className="glass-card text-secondary">We curate the most important news daily.</div>
            <div className="glass-card text-secondary">Make informed decisions with timely information.</div>
            <div className="glass-card text-secondary">Stay informed about economic indicators.</div>
          </div>
        </div>
        {/* <div className="wrapper-glass">
        </div> */}
        <div className={` ${isMobile ? 'p-2 w-100' : 'p-5 w-50'}`}>
          <Image src={"/image/features01.png"} width={isMobile ? 350 : 500} height={isMobile ? 350 : 500} />
        </div>
      </div>
    </main>
  );
}
