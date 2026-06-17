import React from "react";
import logoUrl from "../logo_A.png";

// 登記積算（TŌKI SEKISAN）公式ロゴ。
// 画像は白背景のため、ダークなヘッダー上では白カードに載せて表示する。
export function Logo() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: "#fff",
        borderRadius: 10,
        padding: "6px 13px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
      }}
    >
      <img src={logoUrl} alt="登記積算 TŌKI SEKISAN" className="toki-logo-img" />
    </div>
  );
}
