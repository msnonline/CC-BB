const Result = () => {
  return (
    <div className="form">
      <div className="form-container">
        <div className="result-container">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            {" "}
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />{" "}
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <h1 className="status">Activated</h1>
          <div className="table-container">
            <table className="table">
              {/* <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                </tr>
              </thead> */}
              <tbody>
                <tr>
                  <td>Card Type</td>
                  <td>Steam Wallet Gift Card</td>
                </tr>
                <tr>
                  <td>Code</td>
                  <td>XXX7329</td>
                </tr>
                <tr>
                  <td>Currency</td>
                  <td>EUR (€)</td>
                </tr>
                <tr>
                  <td>Refund Policy</td>
                  <td>Non-refundable once redeemed</td>
                </tr>
                <tr>
                  <td>Purpose</td>
                  <td>
                    Used to add funds to a Steam account for purchasing games,
                    software, or other content on the Steam platform.
                  </td>
                </tr>
                <tr>
                  <td>Note</td>
                  <td>
                    This card can only be redeemed on Amazon.com. Please retain
                    the card for future reference.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Result;
