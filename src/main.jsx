import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import DocumentChecklist from './DocumentChecklist'
import Help from './Help'
import { Logo } from './Logo'

function Root() {
  const [page, setPage] = useState("calc");

  return (
    <>
      <style>{`
        .toki-logo-img { height: 40px; width: auto; display: block; }
        @media (max-width: 640px) {
          .toki-logo-img { height: 30px; }
          .toki-tab { padding: 13px 13px !important; font-size: 13px !important; }
        }
      `}</style>
      {/* Page-level tab bar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "#fff",
        borderBottom: "1px solid #e5e9f0",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        fontFamily: "'Noto Sans JP',sans-serif",
      }}>
        <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 20 }}>
          <Logo />
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
            {[["calc", "報酬計算"], ["docs", "必要書類一覧"], ["help", "使い方"]].map(([k, label]) => (
              <button key={k} onClick={() => setPage(k)} className="toki-tab"
                style={{
                  padding: "14px 24px",
                  fontSize: 14,
                  fontWeight: page === k ? 700 : 500,
                  color: page === k ? "#4338ca" : "#6b7689",
                  background: "none",
                  border: "none",
                  borderBottom: page === k ? "3px solid #4338ca" : "3px solid transparent",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                  letterSpacing: "0.02em",
                }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg,#f5f7fb,#e8ecf4)",
        fontFamily: "'Noto Sans JP',sans-serif",
      }}>
        {page === "calc" ? (
          <App />
        ) : page === "docs" ? (
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "24px 32px 40px" }}>
            <DocumentChecklist />
          </div>
        ) : (
          <Help />
        )}
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
