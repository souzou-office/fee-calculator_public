import React from "react";
import logoUrl from "../logo_A.png";

// 登記積算（TŌKI SEKISAN）公式ロゴ。白基調ヘッダーにそのまま配置する。
export function Logo() {
  return <img src={logoUrl} alt="登記積算 TŌKI SEKISAN" className="toki-logo-img" />;
}
