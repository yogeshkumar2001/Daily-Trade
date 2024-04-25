
import GainerTable from "../component/GainerTable"
async function GL() {
    let res = await fetch("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&market=IN&apikey=Y2GV1Q0LK3DDTW3Q");

    let gainerArr = await res.json();
    let createTableContainer = (arr, title) => {
        return <div className="card h-100 mt-5" style={{ backgroundColor: "#1B2D29" }}>
            <div className="card w-100  h-25 glass-card text-white align-items-start" style={{ backgroundColor: "#1B2D29" }}>
                <div className="d-flex justify-content-center w-100">
                    <h1>{title}</h1>
                </div>
                <GainerTable data={arr.length >0 ? arr : []} title={title.split(' ')[1]}></GainerTable>
            </div>
        </div>
    }
    return (
        <div className="w-100 h-100 pb-5" style={{ backgroundColor: "#051A14" }}>
            <div className="breadcrumb_bg w-100 d-flex align-items-end">
                <div className="container h-50">
                    <h1 className="text-white">Top Gainers and Losers</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, debitis.</p>
                </div>
                {/* <Image src="/image/breadcrumb_bg.png" width={800} height={300}></Image> */}
            </div>
            <div className="container " >
                {createTableContainer(gainerArr["top_gainers"] , "Top Gainer")}
                {createTableContainer(gainerArr["top_losers"] , "Top Losers")}
            </div>
        </div>
    )
}

export default GL