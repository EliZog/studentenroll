import React, { useState } from "react";
import { mockFinancialAccount } from "../data/mockData";
import { DollarSign, ShieldAlert, FileText, CheckCircle, CreditCard } from "lucide-react";

export default function Finances({ activeTab, setActiveTab }) {
  const account = mockFinancialAccount;
  const [showPaymentMock, setShowPaymentMock] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [payAmount, setPayAmount] = useState("1000.00");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(val);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!cardNumber || !expiry || !cvv || !payAmount) return;

    // Simulate success
    setPaymentSuccess(true);
    setTimeout(() => {
      // Deduct balance
      account.balance = Math.max(0, account.balance - parseFloat(payAmount));
      // Add transactions
      account.transactions.unshift({
        id: `tx${Math.floor(Math.random() * 1000)}`,
        date: new Date().toISOString().split("T")[0],
        description: "Online Credit Card Payment",
        amount: parseFloat(payAmount),
        type: "payment"
      });
      setShowPaymentMock(false);
      setPaymentSuccess(false);
      setCardNumber("");
      setExpiry("");
      setCvv("");
    }, 2000);
  };

  return (
    <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar bg-slate-50 font-sans text-on-surface">
      
      {/* Page Header */}
      <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm">
        <h2 className="text-xl font-bold text-[#002a5c]">Financial Account</h2>
        <p className="text-xs text-slate-500 mt-1">
          View invoices, pending payments, OSAP deferral status, and make online payments.
        </p>
      </div>

      {/* Financial Status Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Outstanding Balance */}
        <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col justify-between gap-3">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Outstanding Balance</span>
            <span className={`text-2xl font-bold ${account.balance > 0 ? "text-red-600" : "text-[#166534]"} leading-none mt-1`}>
              {formatCurrency(account.balance)}
            </span>
          </div>
          <button 
            onClick={() => setShowPaymentMock(true)}
            className="w-full py-2 bg-[#002a5c] hover:bg-[#001b3f] text-white rounded text-xs font-semibold shadow-xs transition-colors"
          >
            Make a Payment
          </button>
        </div>

        {/* Minimum to Register */}
        <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col justify-between gap-3">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Minimum to Register</span>
            <span className="text-2xl font-bold text-slate-800 leading-none mt-1">
              {formatCurrency(account.minimumToRegister)}
            </span>
          </div>
          <div className="bg-green-50 border border-green-200 text-[#166534] text-[10px] font-bold uppercase py-1.5 px-3 rounded text-center">
            Registered for Term
          </div>
        </div>

        {/* Due Date & Invoice */}
        <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col justify-between gap-3">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Payment Due Date</span>
            <span className="text-sm font-semibold text-slate-700 block mt-2">
              {account.dueDate}
            </span>
          </div>
          <button className="w-full py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-1.5 bg-white">
            <FileText className="w-4 h-4 text-slate-400" />
            <span>Download Invoice PDF</span>
          </button>
        </div>

      </div>

      {/* Payment Portal Mockup Overlay */}
      {showPaymentMock && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 sm:p-gutter">
          <div className="absolute inset-0 bg-[#263143]/60 backdrop-blur-overlay" onClick={() => setShowPaymentMock(false)}></div>
          <div className="bg-white w-full max-w-md rounded-xl modal-shadow p-6 relative z-10 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold text-[#002a5c] mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-acorn-blue" />
              <span>Make Online Payment</span>
            </h3>

            {paymentSuccess ? (
              <div className="py-8 flex flex-col items-center justify-center gap-3 text-center">
                <CheckCircle className="w-12 h-12 text-[#166534] animate-bounce" />
                <p className="font-bold text-[#166534] text-sm">Payment Successful!</p>
                <p className="text-xs text-slate-500">Processing payment details and updating invoice...</p>
              </div>
            ) : (
              <form onSubmit={handlePaymentSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-600">Payment Amount ($)</label>
                  <input
                    type="number"
                    value={payAmount}
                    onChange={(e) => setPayAmount(e.target.value)}
                    max={account.balance}
                    min="1"
                    step="0.01"
                    className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-acorn-blue text-sm font-semibold"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-600">Cardholder Name</label>
                  <input
                    type="text"
                    defaultValue="Elias Miller"
                    className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-acorn-blue text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-600">Credit Card Number</label>
                  <input
                    type="text"
                    placeholder="xxxx xxxx xxxx xxxx"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-acorn-blue text-sm"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-slate-600">Expiry (MM/YY)</label>
                    <input
                      type="text"
                      placeholder="12/28"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-acorn-blue text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-slate-600">CVV</label>
                    <input
                      type="password"
                      placeholder="***"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-acorn-blue text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-4 border-t border-slate-100 pt-4">
                  <button 
                    type="button" 
                    onClick={() => setShowPaymentMock(false)}
                    className="px-4 py-2 border border-slate-200 text-slate-500 rounded text-xs font-semibold hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-[#002a5c] hover:bg-[#001b3f] text-white rounded text-xs font-semibold"
                  >
                    Submit Payment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Invoice Details and Transactions breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Fee breakdown card */}
        <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col gap-4">
          <h3 className="font-bold text-slate-800 text-sm border-b border-slate-100 pb-2 uppercase tracking-wider">Account Cost Breakdown</h3>
          <div className="flex flex-col gap-3 text-xs">
            <div className="flex justify-between py-1.5 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Academic Tuition Fees</span>
              <span className="font-bold text-slate-800">{formatCurrency(account.tuitionFees)}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Incidental & Co-op Fees</span>
              <span className="font-bold text-slate-800">{formatCurrency(account.incidentalFees)}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500 font-bold">Total Fees Outstanding</span>
              <span className="font-bold text-red-600">{formatCurrency(account.balance)}</span>
            </div>
          </div>
        </div>

        {/* Transactions log card */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col gap-4">
          <h3 className="font-bold text-slate-800 text-sm border-b border-slate-100 pb-2 uppercase tracking-wider">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-slate-150 text-slate-400 font-bold uppercase">
                  <th className="py-2">Date</th>
                  <th className="py-2">Description</th>
                  <th className="py-2 text-right">Amount</th>
                  <th className="py-2 text-center">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {account.transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-50/50">
                    <td className="py-2.5 font-medium text-slate-500">{tx.date}</td>
                    <td className="py-2.5 font-bold text-slate-800">{tx.description}</td>
                    <td className="py-2.5 text-right font-semibold">
                      {tx.type === "payment" || tx.type === "deferral" ? "-" : ""}{formatCurrency(tx.amount)}
                    </td>
                    <td className="py-2.5 text-center">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${
                        tx.type === "charge" 
                          ? "bg-red-50 text-red-700 border-red-100" 
                          : tx.type === "deferral" 
                          ? "bg-blue-50 text-blue-700 border-blue-100"
                          : "bg-green-50 text-green-700 border-green-100"
                      }`}>
                        {tx.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
