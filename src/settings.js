// src/settings.js — 「報酬計算」と「必要書類一覧」の設定をまとめて入出力する共通バックアップ
// 設定はブラウザ（localStorage）にツール別キーで保存されているが、
// エクスポート/インポートは1ファイルで両方まとめて扱う。
const FEE_KEY = "fee-config-v4";        // 報酬計算（報酬テーブル・加算・単価・謄本/情報項目）
const DOC_KEY = "doc-checklist-config-v1"; // 必要書類一覧（事務所情報・郵送追加書類・よく使う項目）

// 画面に表示する注意書き（両ツール共通）
export const SETTINGS_NOTE =
  "設定はこのブラウザに保存されます。1つの設定ファイルで「報酬計算」と「必要書類一覧」の両方をまとめてバックアップ／別のPC・ブラウザへ移行できます。インポートすると現在の設定は上書きされます。";

function read(key) {
  try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : null; }
  catch { return null; }
}

export function exportAllSettings() {
  const data = {
    app: "fee-calculator",
    kind: "settings-backup",
    version: 1,
    exportedAt: new Date().toISOString(),
    note: "【ご注意】このファイルは『報酬計算』と『必要書類一覧』の設定をまとめたバックアップです。インポートするとそのブラウザの現在の設定が上書きされます。設定はブラウザごとに保存されるため、別環境で同じ設定を使うにはこのファイルをインポートしてください。",
    fee: read(FEE_KEY),
    docs: read(DOC_KEY),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `fee-calculator設定_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
}

export function importAllSettings() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json,application/json";
  input.onchange = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const d = JSON.parse(r.result);
        if (!d || (d.fee === undefined && d.docs === undefined)) {
          alert("設定ファイルの形式が違うようです（報酬計算／必要書類一覧の設定が見つかりません）。");
          return;
        }
        if (!confirm("このブラウザの「報酬計算」と「必要書類一覧」の設定を、ファイルの内容で上書きします。よろしいですか？")) return;
        if (d.fee != null) localStorage.setItem(FEE_KEY, JSON.stringify(d.fee));
        if (d.docs != null) localStorage.setItem(DOC_KEY, JSON.stringify(d.docs));
        alert("設定を読み込みました。画面を再読み込みします。");
        location.reload();
      } catch {
        alert("ファイルの読み込みに失敗しました。");
      }
    };
    r.readAsText(f);
  };
  input.click();
}
