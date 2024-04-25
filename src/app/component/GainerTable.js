import React from 'react'

async function GainerTable(props) {
  // {
  //     "ticker": "BROGW",
  //     "price": "0.0161",
  //     "change_amount": "0.0122",
  //     "change_percentage": "312.8205%",
  //     "volume": "329252"
  // },
  
  let tableBody = <tbody>
    {props.data.map((v, i) => (
      <tr key={v.ticker}> {/* Use a unique identifier for each row */}
        <th scope="row">{i + 1}</th>
        <td>{v.ticker}</td>
        <td>{v.price}</td>
        <td>{v.change_amount}</td>
        <td>{v.change_percentage}</td>
      </tr>
    ))}
  </tbody>;

  return (
    <table className="table m-0 table-striped"> {/* Use className instead of class */}
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">{props.title}</th>
          <th scope="col">Price</th>
          <th scope="col">Change Amount</th>
          <th scope="col">Change Percentage</th>
        </tr>
      </thead>
      {tableBody}
    </table>
  );
}

export default GainerTable;