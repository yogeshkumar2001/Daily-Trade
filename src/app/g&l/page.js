import Image from "next/image"
import GainerTable from "../component/GainerTable"
async function gL() {
    let res = await fetch("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&market=IN&apikey=Y2GV1Q0LK3DDTW3Q");
    // console.log(res)
    let gainerArr = await res.json();
    return (
        <div className="w-100 h-100" style={{ backgroundColor: "#051A14" }}>
            <div className="breadcrumb_bg w-100 d-flex align-items-end">
                <div className="container h-50">
                    <h1 className="text-white">Top Gainers and Losers</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, debitis.</p>
                </div>
                {/* <Image src="/image/breadcrumb_bg.png" width={800} height={300}></Image> */}
            </div>
            <div className="container " style={{ marginLeft: "5%", width: "67%" }}>
                <div className="card h-100 mt-5" style={{ backgroundColor: "#1B2D29" }}>
                    <div className="card w-100 p-5 h-25 glass-card text-white align-items-start" style={{ backgroundColor: "#1B2D29" }}>
                        <h1>Top Gainers</h1>
                        <GainerTable data={gainerArr["top_gainers"]} title="Gainer"></GainerTable>
                    </div>
                </div>
                <div className="card h-100 mt-5" style={{ backgroundColor: "#1B2D29" }}>
                    <div className="card w-100 p-5 h-25 glass-card text-white align-items-start" style={{ backgroundColor: "#1B2D29" }}>
                        <h1>Top Losers</h1>
                        <GainerTable data={gainerArr["top_losers"]} title="Losers"></GainerTable>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default gL