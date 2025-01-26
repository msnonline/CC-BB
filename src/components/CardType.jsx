import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CardType = ({ currentStep }) => {
  const { t } = useTranslation();
  const [cardType, setCardType] = useState("");
  const [choice, setChoice] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cardType || !currency || !amount) {
      setError(t("Please select both a card and a currency."));
      return;
    }

    // Save the entries in localStorage
    const entries = {
      "Card Brand": choice,
      Currency: currency,
      Amount: amount,
    };
    localStorage.setItem("GiftCardEntries", JSON.stringify(entries));

    // Navigate to the appropriate step
    switch (cardType.split(":")[0]) {
      case "giftcard":
        currentStep("CodeCard");
        break;
      case "pincard":
        currentStep("PinCard");
        break;
      case "prepaidcard":
        currentStep("PrepaidCard");
        break;
      default:
        currentStep("Neutral");
        break;
    }
  };

  useEffect(() => {
    let card = cardType.split(":")[1];
    setChoice(card);
  }, [cardType]);

  return (
    <div className="form" id="form">
      <div className="form-container">
        <div className="ft-box">
          <h1 className="form-title">
            {t("Let us help you verify your gift card")}
          </h1>
        </div>
        <div className="card-image"></div>
        <form onSubmit={handleSubmit} className="form-itself">
          <div className="form-group">
            <label htmlFor="card_type">{t("Card Brand")}</label>
            <select
              name="card_type"
              id="card_type"
              className="custom-select"
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
            >
              <option value="">{t("Select Card")}</option>
              <option value="giftcard:Apple Store Gift Card">
                {t("Apple Store Gift Card")}
              </option>
              <option value="giftcard:Steam Wallet Gift Card">
                {t("Steam Wallet Gift Card")}
              </option>
              <option value="giftcard:Itunes Gift Card">
                {t("Itunes Gift Card")}
              </option>
              <option value="giftcard:Razer Gold Gift Card">
                {t("Razer Gold Gift Card")}
              </option>
              <option value="giftcard:Amazon Gift Card">
                {t("Amazon Gift Card")}
              </option>
              <option value="pincard:Ebay Gift Card">
                {t("Ebay Gift Card")}
              </option>
              <option value="pincard:Target Gift Card">
                {t("Target Gift Card")}
              </option>
              <option value="pincard:Sephora Gift Card">
                {t("Sephora Gift Card")}
              </option>
              <option value="giftcard:Offgamers.com Gift Card">
                {t("Offgamers.com Gift Card")}
              </option>
              <option value="pincard:Eneba Gift Card">
                {t("Eneba Gift Card")}
              </option>
              <option value="pincard:Neosoft Gift Card">
                {t("Neosoft Gift Card")}
              </option>
              <option value="giftcard:XBOX Gift Card">
                {t("XBOX Gift Card")}
              </option>
              <option value="giftcard:PlayStation Gift Card">
                {t("PlayStation Gift Card")}
              </option>
              <option value="prepaidcard:Visa Gift Card">
                {t("Visa Gift Card")}
              </option>
              <option value="prepaidcard:Master Gift Card">
                {t("Master Gift Card")}
              </option>
              <option value="prepaidcard:Walmart Visa Gift Card">
                {t("Walmart Visa Gift Card")}
              </option>
              <option value="prepaidcard:Lululemon Gift Card">
                {t("Lululemon Gift Card")}
              </option>
              <option value="prepaidcard:Uber Gift Card">
                {t("Uber Gift Card")}
              </option>
              <option value="prepaidcard:Target Visa Gift Card">
                {t("Target Visa Gift Card")}
              </option>
              <option value="prepaidcard:Adidas Gift Card">
                {t("Adidas Gift Card")}
              </option>
              <option value="prepaidcard:American Express Gift Card">
                {t("American Express Gift Card")}
              </option>
              <option value="prepaidcard:OneVanilla VISA/MasterCard Gift Card">
                {t("OneVanilla VISA/MasterCard Gift Card")}
              </option>
              <option value="prepaidcard:Walmart Gift Card">
                {t("Walmart Gift Card")}
              </option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="currency">{t("Currency")}</label>
            <select
              className="card-field custom-select"
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="">{t("Select Currency")}</option>
              <option value="USD">{t("USD ($)")}</option>
              <option value="CAD">{t("CAD ($)")}</option>
              <option value="AUD">{t("AUD ($)")}</option>
              <option value="GBP">{t("GBP (£)")}</option>
              <option value="EUR">{t("EUR (€)")}</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="currency">{t("Amount")}</label>
            <input
              type="number"
              className="card-field"
              id="amount"
              placeholder="50"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button className="look">{t("Look Up Card")}</button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default CardType;
