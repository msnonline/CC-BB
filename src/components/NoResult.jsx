import { useState, useEffect } from "react";
import Cancel from "../assets/no.png";

const NoResult = ({ currentStep }) => {
  const [lastFour, setLastFour] = useState("");
  const [retreiveLocal, setRetreiveLocal] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("GiftCardEntries"));
    setRetreiveLocal(data);
  }, []);

  useEffect(() => {
    if (retreiveLocal) {
      if (retreiveLocal["Card Number"]) {
        setLastFour(retreiveLocal["Card Number"].slice(-4));
      } else if (retreiveLocal["Card Code"]) {
        setLastFour(retreiveLocal["Card Code"].slice(-4));
      }
    }
  }, [retreiveLocal]);

  return (
    <div className="form">
      <div className="form-container no-result">
        <div className="result-container">
          <img src={Cancel} alt="" className="cancel" />
          <h1 className="status">Not Activated</h1>
          <div className="table-container">
            <table className="table">
              <tbody>
                <tr>
                  <td>Card Type</td>
                  <td>{retreiveLocal?.["Card Brand"]}</td>
                </tr>
                <tr>
                  <td>Card</td>
                  <td>{"****" + lastFour}</td>
                </tr>
                <tr>
                  <td>Currency</td>
                  <td>{retreiveLocal?.["Currency"]}</td>
                </tr>
                <tr>
                  <td>Amount</td>
                  <td>{retreiveLocal?.["Amount"]}</td>
                </tr>
                <tr>
                  <td>Refund Policy</td>
                  <td>Non-refundable once redeemed</td>
                </tr>
                <tr>
                  <td>
                    <strong className="invalid">Result</strong>
                  </td>
                  <td>
                    <strong className="invalid">
                      This card has not been activated, please contact the
                      customer support
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="table next-table">
              <tbody>
                <thead>
                  <br />
                  <h1 className="nextstep">Next Step</h1>
                </thead>
                <tr>
                  <td>Return to the Store</td>
                  <td>
                    The first step is to return to the store where you bought
                    the gift card. Bring the card and your receipt with you.
                    Speak to a manager if possible. They may be able to assist
                    you directly by checking the card if it has been used or
                    not. If the card has not been used they may replace it with
                    a new one, but often they will direct you to contact the
                    card issuer
                  </td>
                </tr>
                <tr>
                  <td>Keep Documentation</td>
                  <td>
                    Make sure to keep any receipts or documentation related to
                    the purchase. This information can be crucial when dealing
                    with customer service
                  </td>
                </tr>
                <tr>
                  <td>Be Patient</td>
                  <td>
                    Sometimes, resolving the issue may take time. You might need
                    to wait for the card issuer to process your claim, which can
                    take several days or even weeks.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            className="continue"
            onClick={() => {
              currentStep("CardType");
            }}
          >
            Verify Another Card
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default NoResult;
