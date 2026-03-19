import {
  PieChart, Pie, Cell, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#0D1321',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 10,
        padding: '10px 14px',
        fontSize: '0.8rem',
      }}>
        {label && <p style={{ color: '#8899BC', marginBottom: 4 }}>{label}</p>}
        {payload.map((p) => (
          <p key={p.name} style={{ color: p.color, fontWeight: 600 }}>
            {p.name}: ₹{p.value?.toLocaleString('en-IN')}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const SpendingPieChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={260}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={110}
        paddingAngle={3}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend
        formatter={(value) => <span style={{ color: '#8899BC', fontSize: '0.78rem' }}>{value}</span>}
      />
    </PieChart>
  </ResponsiveContainer>
);

export const SpendingAreaChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={220}>
    <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
      <defs>
        <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#4F8EF7" stopOpacity={0.3} />
          <stop offset="95%" stopColor="#4F8EF7" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
          <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
      <XAxis dataKey="month" tick={{ fill: '#8899BC', fontSize: 11 }} axisLine={false} tickLine={false} />
      <YAxis tick={{ fill: '#8899BC', fontSize: 11 }} axisLine={false} tickLine={false}
        tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`}
      />
      <Tooltip content={<CustomTooltip />} />
      <Area type="monotone" dataKey="income" name="Income" stroke="#10B981" strokeWidth={2}
        fill="url(#colorIncome)" dot={false} />
      <Area type="monotone" dataKey="spending" name="Spending" stroke="#4F8EF7" strokeWidth={2}
        fill="url(#colorSpending)" dot={false} />
    </AreaChart>
  </ResponsiveContainer>
);
