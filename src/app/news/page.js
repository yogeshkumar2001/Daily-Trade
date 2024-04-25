import NewsCard from "../component/newCard"
async function News() {

  let url = "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=COIN,CRYPTO:BTC,FOREX:USD&time_from=20220410T0130&limit=50&apikey=Y2GV1Q0LK3DDTW3Q"
  let res = await fetch(url);
  let newsArr = await res.json()
  const categories = {
    "Blockchain": "blockchain",
    "Earnings": "earnings",
    "IPO": "ipo",
    "Mergers": "mergers_and_acquisitions",
    "Financial": "financial_markets",
    "Economy": "economy_fiscal",
    "Economy": "economy_monetary",
    "Economy": "economy_macro",
    "Energy": "energy_transportation",
    "Finance Market": "finance",
    "Life Sciences": "life_sciences",
    "Manufacturing": "manufacturing",
    "Real Estate": "real_estate",
    "Retail": "retail_wholesale",
    "Technology": "technology"
  };
  return (
    <div className="w-100 h-100 pb-5" style={{ backgroundColor: "#051A14" }}>
      <div className="breadcrumb_bg w-100 d-flex align-items-end">
        <div className="container h-50">
          <h1 className="text-white">Today &apos; s Top News</h1>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, debitis.</p>
        </div>
      </div>
      <div className="d-flex">

        <div className="container container_support">
          <div className="card mt-5 " style={{ backgroundColor: "#051A14" }}>
            <NewsCard data={newsArr}></NewsCard>
          </div>
        </div>
        {/* <div className="container " >
          <div className="card mt-5 p-2 " style={{ backgroundColor: "#1B2D29" }}>
            <div className="d-flex flex-wrap justify-content-center">
              {Object.entries(categories).map(([v, k]) => {
                return <button className="badge rounded-pill m-2 p-2" style={{ marginLeft: "5%", backgroundColor: "#051A14" }}>{v}</button>
              })}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default News