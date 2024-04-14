import Image from "next/image";

export default function Home({ Children }) {
  // fetch particular stock - >  https://www.alphavantage.co/query?function=OVERVIEW&symbol=BROGW&apikey=Y2GV1Q0LK3DDTW3Q
  // fetch top gainer - https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&market=IN&apikey=Y2GV1Q0LK3DDTW3Q
  // news -https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=COIN,CRYPTO:BTC,FOREX:USD&time_from=20220410T0130&limit=1000&apikey=demo

  // markets-time - https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo
  return (
    <main class="home_body_bg ">
      <div className="container d-flex w-100 p-5">
        <div className="w-50 text white p-5">
          <h1 className='text-white'> Invest Your Money</h1>
          <h1 className="text-white">With higher return Your Money</h1>
          <p className="text-white" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fugiat cum sint sapiente nam atque neque distinctio consectetur! Pariatur, dicta.</p>
          <button className="btn btn-primary">Explore more</button>
        </div>
        <div className="w-50 p-5">
          <Image src={"/image/banner_img_dark.png"} width={500} height={500} />
        </div>
      </div>
      <div className="container d-flex w-100 p-5">
        <div className="w-50 p-5">
          <Image src={"/image/about_dark.png"} width={500} height={500} />
        </div>
        <div className="w-50 text white p-5">
          <h1 className='text-white'> Meet Our Company</h1>
          <h1 className="text-white">With higher return Your Money</h1>
          <p className="text-white" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fugiat cum sint sapiente nam atque neque distinctio consectetur! Pariatur, dicta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fugiat cum sint sapiente nam atque neque distinctio consectetur! Pariatur, dicta.</p>
          <button className="btn btn-primary">Explore more</button>
        </div>
      </div>
      <div className="container d-flex w-100 p-5">
        <div className="w-50 text white p-5">
          <h1 className='text-white'> Benefits we offer</h1>
          <h3 className="text-white">With higher return Your Money</h3>
          <div className="d-flex flex-column align-items-between">
            <div className="glass-card">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="glass-card">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="glass-card">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="glass-card">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="glass-card">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          </div>
        </div>
        <div className="wrapper-glass">
        </div>
        <div className="w-50 p-5">
          <Image src={"/image/features01.png"} width={500} height={500} />
        </div>
      </div>
    </main>
  );
}
