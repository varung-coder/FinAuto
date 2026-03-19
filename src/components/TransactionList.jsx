import './TransactionList.css';

const TransactionList = ({ transactions, limit }) => {
  const items = limit ? transactions.slice(0, limit) : transactions;

  return (
    <div className="transaction-list">
      {items.map((tx) => (
        <div key={tx.id} className="transaction-item">
          <div className="tx-icon">{tx.icon}</div>
          <div className="tx-info">
            <p className="tx-merchant">{tx.merchant}</p>
            <p className="tx-meta">
              <span className="tx-category">{tx.category}</span>
              <span className="tx-dot">·</span>
              <span className="tx-date">{new Date(tx.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
            </p>
          </div>
          <p className={`tx-amount ${tx.amount > 0 ? 'positive' : 'negative'}`}>
            {tx.amount > 0 ? '+' : ''}₹{Math.abs(tx.amount).toLocaleString('en-IN')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
