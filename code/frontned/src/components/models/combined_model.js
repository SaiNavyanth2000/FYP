function CombinedModel() {
  return (
    <div id="app">
      <p>
        Multivariate LSTM (Long Short Term Memory) network has been trained with
        7 timestamps.
      </p>
      <p>So, this is how it splits the data:</p>
      <img
        src={process.env.PUBLIC_URL + 'images/multi_lstm/prediction_demo.jpg'}
      />
      {/* <img src="../../../public/images/multi_lstm/prediction_demo.jpg" /> */}
      <p>
        Based on the past 7 days of data, the model will predict the closing
        price of the next day. Based on this price, it generates Buy or Sell
        signals
      </p>
      <br />
      <br />
      <p>
        In this combined model, the prediction is based on multiple features.
        The features used to train our model are:
      </p>
      <ul>
        <li>High - Low (difference between the two)</li>
        <li>Open - Close (difference between the two</li>
        <li>5 day moving average</li>
        <li>10 day moving average</li>
        <li>20 day moving average</li>
        <li>7 day standard deviation</li>
        <li>RSI with 14 periods</li>
        <li>8 day exponential moving average</li>
        <li>21 day exponential moving average</li>
        <li>34 day exponential moving average</li>
        <li>55 day exponential moving average</li>
        <li>Daily Returns (or) Percent change</li>
        <li>Trading Volume</li>
        <li>Historical sentiment (provided by groupmate)</li>
      </ul>
      <br />
      <p>
        Different models have been trained with different layers. After
        hyperparameter tuning, this is the best model for stock price data:
      </p>
      <img
        src={process.env.PUBLIC_URL + 'images/multi_lstm/model_summary.jpg'}
      />
    </div>
  );
}

export default CombinedModel;
