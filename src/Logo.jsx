import React from "react";

// 登記積算（TŌKI SEKISAN）ロゴマーク。
// グラデーションの六角形に、T＋書類の罫線、下部に積層（積算）のシェブロンを配置。
export function LogoMark({ style }) {
  return (
    <svg viewBox="0 0 120 120" style={style} role="img" aria-label="登記積算">
      <defs>
        <linearGradient id="tokiGrad" x1="8%" y1="4%" x2="92%" y2="96%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="48%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      {/* 六角形 */}
      <path d="M60 8 L104 34 L104 86 L60 112 L16 86 L16 34 Z" fill="url(#tokiGrad)" />
      {/* 書類の罫線 */}
      <g stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.9">
        <line x1="61" y1="56" x2="83" y2="51" />
        <line x1="61" y1="65" x2="79" y2="60" />
        <line x1="61" y1="74" x2="75" y2="69" />
      </g>
      {/* T */}
      <g fill="#ffffff">
        <rect x="30" y="33" width="46" height="9" rx="2" />
        <rect x="48.5" y="33" width="9" height="47" rx="2" />
      </g>
      {/* 積層（積算）のシェブロン */}
      <g stroke="#ffffff" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0.92">
        <polyline points="33,88 60,101 87,88" />
        <polyline points="40,101 60,111 80,101" />
      </g>
    </svg>
  );
}

// アイコン（白タイル）＋ワードマーク。ダールなヘッダー上で映えるよう白タイルに載せる。
export function Logo({ height = 36 }) {
  const tile = height;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
      <div
        style={{
          width: tile,
          height: tile,
          borderRadius: Math.round(tile * 0.24),
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
          flexShrink: 0,
        }}
      >
        <LogoMark style={{ height: Math.round(tile * 0.8), width: "auto", display: "block" }} />
      </div>
      <div className="toki-word" style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
        <span
          style={{
            fontFamily: "'Noto Serif JP',serif",
            fontWeight: 600,
            fontSize: 17,
            color: "#fff",
            letterSpacing: "0.13em",
            whiteSpace: "nowrap",
          }}
        >
          TŌKI SEKISAN
        </span>
        <span
          style={{
            fontFamily: "'Noto Serif JP',serif",
            fontWeight: 500,
            fontSize: 10.5,
            color: "rgba(255,255,255,0.82)",
            letterSpacing: "0.45em",
            marginTop: 3,
          }}
        >
          登記積算
        </span>
      </div>
    </div>
  );
}
