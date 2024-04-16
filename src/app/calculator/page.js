'use client'

import { useState } from "react";

function Markets() {
  const [formData, setFormData] = useState({
    amount: '',
    duration: '', return: ''
  })
  function formatNumber(number) {
    if (number >= 10000000) {
        return (number / 10000000).toFixed(2) + ' crore';
    } else if (number >= 100000) {
        return (number / 100000).toFixed(2) + ' lakh';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(2) + ' thousand';
    } else {
        return number.toFixed(2);
    }
}
  function calculate(e) {
    e.preventDefault();

    const investment = parseFloat(formData.amount);
    const duration = parseInt(formData.duration);
    const annualReturn = parseFloat(formData.return) / 100;

    if (isNaN(investment) || isNaN(duration) || isNaN(annualReturn)) {
      alert('Please enter valid numbers');
      return;
    }

    const monthlyReturn = annualReturn / 12;
    const totalMonths = duration * 12;

    const totalInvestment = formatNumber(investment * totalMonths);
    const maturityAmount = formatNumber(investment * ((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn));

    document.getElementById('totalInvestment').textContent = '₹ ' + totalInvestment;
    document.getElementById('maturityAmount').textContent = '₹ ' + maturityAmount;

    document.getElementById('result').style.display = 'block';
  }
  function onChangeHandler(e) {
    let key = e.target.id;
    let value = e.target.value
    setFormData(prevFormData => ({
      ...prevFormData, [key]: value
    }))
  }
  return (
    <div className="w-100 h-100 pb-5" style={{ backgroundColor: "#051A14" }}>
      <div className="breadcrumb_bg w-100 d-flex align-items-end">
        <div className="container h-50">
          <h1 className="text-white">Calculate your investment today</h1>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, debitis.</p>
        </div>
      </div>
      <div className="">
        <div className="container container_support" >
          <div className="card mt-5 " style={{ backgroundColor: "#051A14" }}>
            <form onSubmit={(e) => { calculate(e) }}>
              <div class="mb-3  text-white">
                <label for="amount" class="form-label">Monthly Investment Amount:</label>
                <input type="number" class="form-control card_bg text-white" id="amount" placeholder="Monthly Investment Amount:" onChange={(e) => { onChangeHandler(e) }} />
              </div>
              <div class="mb-3 text-white">
                <label for="amount" class="form-label">Investment Duration (in years):</label>
                <input type="number" class="form-control card_bg text-white" id="duration" placeholder="Monthly Investment Amount:" onChange={(e) => { onChangeHandler(e) }} />
              </div>
              <div class="mb-3  text-white">
                <label for="amount" class="form-label">Expected Annual Return (%):</label>
                <input type="number" class="form-control card_bg text-white" id="return" placeholder="Monthly Investment Amount:" onChange={(e) => { onChangeHandler(e) }} />
              </div>
              <button className="btn btn-primary">Calculate</button>
            </form>
          </div>
        </div>
        <div className="container container_support" >
          <div className="card p-3" id="result" style={{ backgroundColor: "#1B2D29", marginTop: "2%", display: "none" }}>
            <div className="text-white" >
              <h3>Result</h3>
              <p>Total Investment: <span className="text-white" id="totalInvestment"></span></p>
              <p>Maturity Amount: <span className="text-white" id="maturityAmount"></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Markets