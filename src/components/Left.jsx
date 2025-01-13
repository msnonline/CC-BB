import img from "../assets/2.jpg";

const Left = () => {
  return (
    <div className="left">
      <div className="left-top">
        <h2>Check Your Gift Card or Prepaid Card Balance Instantly!</h2>
        <p>
          Quick, secure, and easy-to-use tool for verifying card balances and
          validity
        </p>
        <div className="text-group">
          <h3>Your Data is Protected</h3>
          <p>
            With advanced encryption and strict privacy policies, your
            information stays safe.
          </p>
        </div>

        <div className="text-group">
          <h3 className="left-start">Start Now</h3>
          <p>Enter your card details and get results in seconds—hassle-free!</p>
        </div>

        <sub>Manage your cards with confidence and ease.</sub>
      </div>
      <div className="bottom-half">
        <div className="right card-type">
          <div className="cctop">
            <h1 className="ccname">Check Your Card Balance</h1>
          </div>
          <div className="bt-btn-con">
            <button className="continue">Continue</button>
          </div>
          {/* <div className="form">
            <form action="">
              <div className="form-group ">
                <label htmlFor="select">Card Brand</label>
                <select
                  name="card_type"
                  id="card_type"
                  className="custom-select"
                >
                  <option value="">Select Card</option>
                  <option value="giftCard">Gift Card</option>
                  <option value="prepaidCard">Prepaid Card</option>
                </select>
                <button className="continue">Continue</button>
              </div>
              <a href="#" className="what">What is this?</a>
            </form>
          </div> */}
        </div>
      </div>
      <div className="n-footer">
        ©2025 CC & BB <sub>Your balance buddy</sub>
      </div>
    </div>
  );
};

export default Left;
