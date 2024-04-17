import Link from "next/link";

function newCard({ data }) {
    function handledDate(timestamp) {
        const year = timestamp.slice(0, 4);
        const month = timestamp.slice(4, 6);
        const day = timestamp.slice(6, 8);
        const hour = timestamp.slice(9, 11);
        const minute = timestamp.slice(11, 13);
        const second = timestamp.slice(13, 15);
        let date = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`)
        let dateStr = date.toLocaleString();
        return dateStr;
    }
    let tempData = data.feed.slice(0,11);
    let prepareData = tempData.map((v,i) => {
        return <div class="card mb-3 card_bg" key={i}>
            <div class="row g-0 ">
                <div class="col-md-4 d-flex justify-content-center align-items-center card_bg p-2">
                    <img src={v.banner_image} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body card_bg text-white">
                        <h5 class="card-title ">{v.title}</h5>
                        <p class="card-text">{v.summary}</p>
                        <p class="card-text"><small class="" style={{ color: "gray" }}>Published on {handledDate(v.time_published)}</small></p>
                        <Link href={v.url} target="_blank">
                            <button className="btn btn-primary">Read more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    })
    return (
        <div className="">
            {prepareData}
        </div>
    )
}

export default newCard