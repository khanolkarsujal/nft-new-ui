import React from "react";
import { Coins, CreditCard, Activity } from "lucide-react";

export function PaymentsPlayground({
  donationAmount,
  setDonationAmount,
  paymentCompleted,
  setPaymentCompleted,
  subscriptionEnabled,
  setSubscriptionEnabled,
  runSimulation,
  simActive,
  collection,
}) {
  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="font-heading text-2xl font-bold text-white">Track 2: Checkout & Recurring Payments</h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#6D18FF]/20 text-[#D9B6FF] border border-[#6D18FF]/30">Zero ETH Required</span>
          </div>
          <p className="mt-2 text-xs text-[#D9B6FF]/70">
            Eliminate checkout abandonment. Accept stablecoin payments, donations, and set up recurring billing without requiring native ETH.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Card 1: Donation Widget */}
        <div className="rounded-3xl border border-white/10 p-6 flex flex-col justify-between bg-white/[0.02] hover:border-[#6D18FF]/50 transition-all shadow-lg relative overflow-hidden group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold text-[#D9B6FF] uppercase tracking-wider">Gasless Donation</span>
              <Coins className="h-4 w-4 text-[#D9B6FF]" />
            </div>
            <h4 className="font-heading text-lg font-bold text-white">Support GasFreeBadge</h4>
            <p className="mt-2 text-xs text-white/60 leading-relaxed">
              Donate stablecoins gaslessly to fuel open-source developers. The framework handles the exchange gas fees.
            </p>
            
            <div className="mt-4 space-y-3">
              <div className="flex gap-2">
                {["5", "10", "25"].map((val) => (
                  <button
                    key={val}
                    onClick={() => setDonationAmount(val)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      donationAmount === val 
                        ? "bg-[#6D18FF] text-white border-[#6D18FF]" 
                        : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    {val} TYI
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Custom amount..."
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#6D18FF]"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#D9B6FF]/70 uppercase">TYI</span>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-[#6D18FF]/20 bg-[#05031F]/50 p-4 space-y-2 text-xs font-mono backdrop-blur-md">
              <div className="flex justify-between">
                <span className="text-white/70">Item Cost:</span>
                <span className="text-white font-bold">${donationAmount || "0.00"}</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-white/70">UGF Network Fee:</span>
                <span className="text-[#D9B6FF] font-semibold">0.15 Mock USD</span>
              </div>
              <div className="flex justify-between text-[11px] text-emerald-400 mt-1">
                <span>Native ETH Gas:</span>
                <span>0.00 ETH (Sponsored)</span>
              </div>
              <div className="border-t border-white/10 pt-2 flex justify-between font-bold text-white">
                <span>Total:</span>
                <span>{(parseFloat(donationAmount || 0) + 0.15).toFixed(2)} Mock USD</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col items-center">
            <button
              disabled={simActive || !donationAmount || collection?.hasNoTYI}
              onClick={() => runSimulation("Donation", `${donationAmount} TYI`)}
              className="w-full rounded-xl py-2.5 text-xs font-semibold bg-white text-black hover:bg-[#D9B6FF] hover:shadow-[0_0_20px_rgba(217,182,255,0.3)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {simActive ? "Executing Transaction..." : collection?.hasNoTYI ? "Mock USD Required for Network Fee" : "Donate (0 ETH Gas)"}
            </button>
            <p className="text-[10px] text-white/40 text-center mt-3 leading-tight">
              ℹ️ Zero ETH required. You will only be asked to sign a gasless message to authorize the Mock USD fee.
            </p>
            {collection?.hasNoTYI && (
              <div className="mt-2 text-center">
                <p className="text-[10px] text-white/40 mb-1">
                  You have 0 ETH gas fees, but you need Mock USD to pay the relayer.
                </p>
                <a href="https://universalgasframework.com/faucets" target="_blank" rel="noreferrer" className="text-[10px] text-blue-400 hover:text-blue-300 transition-colors">
                  Go to Simulator Setup -{">"}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Card 2: Checkout Mock */}
        <div className="rounded-3xl border border-white/10 p-6 flex flex-col justify-between bg-white/[0.02] hover:border-[#6D18FF]/50 transition-all shadow-lg relative overflow-hidden group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold text-[#D9B6FF] uppercase tracking-wider">Gasless Checkout</span>
              <CreditCard className="h-4 w-4 text-[#D9B6FF]" />
            </div>
            <h4 className="font-heading text-lg font-bold text-white">SaaS Dev License</h4>
            <p className="mt-2 text-xs text-white/60 leading-relaxed">
              Experience an elegant commercial checkout. Buy a simulated developer license with mock stablecoins.
            </p>
            
            <div className="mt-5 rounded-2xl border border-[#6D18FF]/20 bg-[#05031F]/50 p-4 space-y-2 text-xs font-mono backdrop-blur-md">
              <div className="flex justify-between">
                <span className="text-white/70">Item Cost:</span>
                <span className="text-white font-bold">$15.00</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-white/70">UGF Network Fee:</span>
                <span className="text-[#D9B6FF] font-semibold">0.15 Mock USD</span>
              </div>
              <div className="flex justify-between text-[11px] text-emerald-400 mt-1">
                <span>Native ETH Gas:</span>
                <span>0.00 ETH (Sponsored)</span>
              </div>
              <div className="border-t border-white/10 pt-2 flex justify-between font-bold text-white">
                <span>Total:</span>
                <span>15.15 Mock USD</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col items-center">
            <button
              disabled={simActive || paymentCompleted || collection?.hasNoTYI}
              onClick={() => runSimulation("Checkout", "$15.00 Mock USD")}
              className={`w-full rounded-xl py-2.5 text-xs font-semibold transition-all duration-200 ${
                paymentCompleted
                  ? "bg-[#6D18FF]/20 border border-[#6D18FF]/50 text-[#D9B6FF] cursor-default"
                  : "bg-[#6D18FF] text-white hover:bg-[#D9B6FF] hover:text-black hover:shadow-[0_0_20px_rgba(217,182,255,0.4)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              }`}
            >
              {paymentCompleted ? "License Purchased!" : simActive ? "Checking out..." : collection?.hasNoTYI ? "Mock USD Required for Network Fee" : "Checkout (0 ETH Gas)"}
            </button>
            {!paymentCompleted && (
              <p className="text-[10px] text-white/40 text-center mt-3 leading-tight">
                ℹ️ Zero ETH required. You will only be asked to sign a gasless message to authorize the Mock USD fee.
              </p>
            )}
            {collection?.hasNoTYI && !paymentCompleted && (
              <div className="mt-2 text-center">
                <p className="text-[10px] text-white/40 mb-1">
                  You have 0 ETH gas fees, but you need Mock USD to pay the relayer.
                </p>
                <a href="https://universalgasframework.com/faucets" target="_blank" rel="noreferrer" className="text-[10px] text-blue-400 hover:text-blue-300 transition-colors">
                  Go to Simulator Setup -{">"}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Card 3: Subscription Panel */}
        <div className="rounded-3xl border border-white/10 p-6 flex flex-col justify-between bg-white/[0.02] hover:border-[#6D18FF]/50 transition-all shadow-lg relative overflow-hidden group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold text-[#D9B6FF] uppercase tracking-wider">Subscriptions</span>
              <Activity className="h-4 w-4 text-[#D9B6FF]" />
            </div>
            <h4 className="font-heading text-lg font-bold text-white">UGF API Hub Plan</h4>
            <p className="mt-2 text-xs text-white/60 leading-relaxed">
              Enable automated, recurring subscription logic. Users sign once; future debits require zero manual clicks.
            </p>
            
            <div className="mt-4 p-4 rounded-2xl border border-white/10 bg-[#05031F]/50 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Developer API Hub</div>
                <div className="text-[10px] text-[#D9B6FF]/70 mt-0.5">$9.99 / month</div>
              </div>
              <button
                disabled={simActive}
                onClick={async () => {
                  if (subscriptionEnabled) {
                    setSubscriptionEnabled(false);
                  } else {
                    await runSimulation("Subscription Permit", "$9.99/mo");
                    setSubscriptionEnabled(true);
                  }
                }}
                className={`w-12 h-6 rounded-full p-0.5 transition-colors duration-300 relative focus:outline-none ${
                  subscriptionEnabled ? "bg-[#6D18FF]" : "bg-white/10"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                    subscriptionEnabled ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
            
            <div className="mt-4 text-[10px] text-center">
              {subscriptionEnabled ? (
                <span className="text-[#D9B6FF] font-semibold">✓ Gasless Auto-Billing Pre-Authorized</span>
              ) : (
                <span className="text-white/50">Authorize gasless auto-debit permit</span>
              )}
            </div>
          </div>
          
          <div className="mt-6 text-[11px] border border-white/5 rounded-xl px-3 py-2 bg-black/20 flex justify-between items-center leading-none">
            <span className="text-white/60">Subscription Status:</span>
            <span className={subscriptionEnabled ? "text-[#D9B6FF] font-bold" : "text-white/40 font-bold"}>
              {subscriptionEnabled ? "ACTIVE" : "INACTIVE"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
