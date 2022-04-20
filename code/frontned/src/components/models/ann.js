function ANN() {
  return (
    <div id="app">
      <p>Fully Connected Artificial Neural Network (ANN) has been trained.</p>
      <p>The network has been trained using the following features:</p>
      <img src={process.env.PUBLIC_URL + 'images/ann/prediction_demo.jpg'} />
      {/* <img src="../../../public/images/multi_lstm/prediction_demo.jpg" /> */}
      <p>
        Based on the different indicators from the price of today, the model
        will predict the closing price of the next day.
      </p>
      <br />
      <br />
      <p>
        In this model, the prediction is based on multiple features. The
        features used to train our model are:
      </p>
      <ul>
        <li>High - Low (difference between the two)</li>
        <li>Open - Close (difference between the two</li>
        <li>7 day moving average</li>
        <li>14 day moving average</li>
        <li>21 day moving average</li>
        <li>7 day standard deviation</li>
      </ul>
      <br />
      <p>
        Different models have been trained with different layers. After
        hyperparameter tuning, this is the best model for stock price data:
      </p>
      <img src={process.env.PUBLIC_URL + 'images/ann/model_summary.jpg'} />
    </div>
  );
}

export default ANN;
