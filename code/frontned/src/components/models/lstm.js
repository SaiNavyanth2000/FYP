function LSTM() {
  return (
    <div id="app">
      <div>
        <h2 style={{ marginBottom: '50px' }}>Summary: </h2>
        <p>
          LSTM (Long Short Term Memory) network has been trained with 100
          timestamps.
        </p>
        <p>So, this is how it splits the data:</p>
        <img src={process.env.PUBLIC_URL + 'images/lstm/prediction_demo.jpg'} />
      </div>
      <div style={{ marginTop: '100px' }}>
        <p>
          Based on the past 100 days of data, the model will predict the closing
          price of the next day.
        </p>

        <p>
          Different models have been trained with different layers. After
          hyperparameter tuning, this is the best model for stock price data:
        </p>
        <img src={process.env.PUBLIC_URL + 'images/lstm/model_summary.jpg'} />
      </div>
    </div>
  );
}

export default LSTM;
