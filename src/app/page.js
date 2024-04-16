'use client'
import Image from "next/image";

export default function Home({ Children }) {
  // fetch particular stock - >  https://www.alphavantage.co/query?function=OVERVIEW&symbol=BROGW&apikey=Y2GV1Q0LK3DDTW3Q
  // fetch top gainer - https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&market=IN&apikey=Y2GV1Q0LK3DDTW3Q
  // news -https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=COIN,CRYPTO:BTC,FOREX:USD&time_from=20220410T0130&limit=1000&apikey=demo

  // markets-time - https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo
  let isMobile = window.matchMedia("(max-width:500px)").matches;
  return (
    <main class={`home_body_bg pt-5 ${isMobile ? "  " : ""}`}>
      <div className={`container w-100  ${isMobile ?"pt-5 p-2":"d-flex p-5" }`}>
        <div className={`text white ${isMobile ? 'p-2 w-100':'p-5 w-50 '}`}>
          <h1 className='text-white fs-1 fw-bold'> Invest Your Money With <span className="mid-text">higher return</span></h1>
          <p className="text-secondary" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fugiat cum sint sapiente nam atque neque distinctio consectetur! Pariatur, dicta.</p>
          <button className="btn btn-primary">Explore more</button>
        </div>
        <div className={` ${isMobile ? 'p-2 w-100':'p-5 w-50'}`}>
          <Image src={"/image/banner_img_dark.png"} width={isMobile ? 350 : 500} height={isMobile ? 350 : 500} />
        </div>
      </div>
      <div className={`container w-100  ${isMobile ?" p-2":"d-flex p-5" }`}>

        <div className={`text white ${isMobile ? 'p-2 w-100':'p-5 w-50 '}`}>
          <h1 className='text-white fs-1 fw-bold'> Invest Your Money With <span className="mid-text">higher return</span></h1>
          <p className="text-secondary" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fugiat cum sint sapiente nam atque neque distinctio consectetur! Pariatur, dicta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fugiat cum sint sapiente nam atque neque distinctio consectetur! Pariatur, dicta.</p>
          <button className="btn btn-primary">Explore more</button>
        </div>
        <div className={` ${isMobile ? 'p-2 w-100':'p-5 w-50 pt-0'}`}>
          <Image src={"/image/about_dark.png"} width={isMobile ? 350 : 500} height={isMobile ? 350 : 500} />
        </div>
      </div>
      <div className={`container w-100  ${isMobile ?"p-2":"d-flex  p-5" }`}>
        <div className={`text white ${isMobile ? 'p-2 w-100':'w-50 p-5'}`}>
          <h1 className='text-white fs-1 fw-bold'> Benefits we offer <span className="mid-text">higher return</span></h1>
          <div className="d-flex flex-column align-items-between">
            <div className="glass-card text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="glass-card text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="glass-card text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="glass-card text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="glass-card text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          </div>
        </div>
        {/* <div className="wrapper-glass">
        </div> */}
        <div className={` ${isMobile ? 'p-2 w-100':'p-5 w-50'}`}>
          <Image src={"/image/features01.png"} width={isMobile ? 350 : 500} height={isMobile ? 350 : 500} />
        </div>
      </div>
    </main>
  );
}
