import './App.css';
// import TransactionsGrid from './ReceiptModal';
import ShowReceipt from './ShowReceipt';

function App() {
  const transactionId = 123456; // Example transaction ID

  return (
    <div className="App">
      <ShowReceipt transactionId={transactionId} />
    </div>
  );
}

export default App;
