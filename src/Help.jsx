// src/Help.jsx — 使い方ガイド（説明書）
// 上部タブ「使い方」から表示される。内容は読み物として完結する。

const C = "#4338ca";

function Section({ title, children }) {
  return (
    <div className="rounded-xl p-5 mb-4" style={{ background: "#fff", border: "1px solid #e5e9f0" }}>
      <h2 className="text-sm font-bold mb-3" style={{ color: C }}>{title}</h2>
      <div style={{ fontSize: 13, lineHeight: 1.85, color: "#3a4557" }}>{children}</div>
    </div>
  );
}

function Li({ children }) {
  return (
    <li style={{ marginBottom: 6, listStyle: "none", paddingLeft: "1.2em", position: "relative" }}>
      <span style={{ position: "absolute", left: 0, color: C }}>・</span>
      {children}
    </li>
  );
}

const B = ({ children }) => <b style={{ color: "#1a2233" }}>{children}</b>;

export default function Help() {
  return (
    <div style={{ maxWidth: 880, margin: "0 auto", padding: "24px 24px 56px" }}>
      <h1 className="text-xl font-bold mb-1" style={{ color: "#1a2233" }}>使い方ガイド</h1>
      <p className="mb-5" style={{ fontSize: 13, color: "#8393a7" }}>
        司法書士向けの「報酬・登録免許税の自動計算」と「必要書類一覧の作成」ツールです。
        入力内容・設定は<B>お使いのブラウザ内（localStorage）に保存</B>され、サーバーには送信されません。
      </p>

      <Section title="1. 報酬計算 ― 取引項目">
        <ul style={{ margin: 0, padding: 0 }}>
          <Li><B>「＋移転／＋保存／＋抵当権／＋根抵当／＋抹消／＋住変」</B>のボタンで登記項目を追加します。</Li>
          <Li>各項目で<B>登記種別・不動産の個数・評価額／債権額（極度額）</B>を入力します。</Li>
          <Li>所有権移転は<B>原因（売買／相続／贈与等）</B>を選択。売買は<B>土地と建物の評価額を分けて</B>入力します。</Li>
          <Li>抵当権・根抵当権は<B>債権額／極度額</B>を入力（報酬・登録免許税ともこの金額が基準）。</Li>
          <Li>「移転＋抵当権設定」など<B>同時申請の有無で報酬テーブルの列が自動で切り替わります</B>（設定有／設定のみ 等）。</Li>
        </ul>
      </Section>

      <Section title="2. 報酬計算 ― 共通設定">
        <ul style={{ margin: 0, padding: 0 }}>
          <Li><B>加算（区分建物 など）</B>：チェックすると1件目の報酬に加算されます。項目は設定画面で追加・編集できます。</Li>
          <Li><B>住宅用家屋証明書</B>：「なし／一般住宅／長期優良・低炭素」を選ぶと<B>軽減税率が自動反映</B>されます。</Li>
        </ul>
      </Section>

      <Section title="3. 報酬計算 ― 費用明細・消費税・ご請求明細">
        <ul style={{ margin: 0, padding: 0 }}>
          <Li><B>登記事項証明書・登記情報</B>の通数を増減すると、報酬・実費が自動計算されます。</Li>
          <Li><B>郵送費</B>や<B>自由入力（報酬＋立替金）</B>も追加できます（テンプレートからの追加も可）。</Li>
          <Li><B>消費税率</B>を設定（既定10%）。</Li>
          <Li><B>「ご請求明細」</B>に、項目ごとの<B>【報酬（左）】</B>と<B>【登録免許税・実費（右）】</B>、消費税、<B>合計請求額</B>が表示されます。</Li>
          <Li>各項目の<B>「▼計算過程」</B>で、登録免許税の根拠（課税標準・税率・端数処理）を確認できます。</Li>
        </ul>
      </Section>

      <Section title="4. 設定（報酬テーブル等のカスタマイズ）">
        <ul style={{ margin: 0, padding: 0 }}>
          <Li>右上の<B>「設定」</B>から、<B>報酬テーブル・加算項目・基本報酬（抹消／住変）・謄本／情報の項目</B>を編集できます。</Li>
          <Li>編集内容は<B>自動でブラウザに保存</B>されます。各タブの「デフォルトに戻す」で初期値に戻せます。</Li>
        </ul>
      </Section>

      <Section title="5. 設定のバックアップ（報酬計算・必要書類一覧で共通）">
        <ul style={{ margin: 0, padding: 0 }}>
          <Li>設定画面の<B>「全設定をエクスポート」</B>で、<B>報酬計算と必要書類一覧の設定を1ファイル</B>に保存できます。</Li>
          <Li>別のPC・ブラウザで<B>「全設定をインポート」</B>すると同じ設定を再現できます（<B>インポートは上書き</B>）。</Li>
          <Li>※ 設定はブラウザごとに保存されるため、機種変更・バックアップにはこのファイルをご利用ください。</Li>
        </ul>
      </Section>

      <Section title="6. 必要書類一覧">
        <ul style={{ margin: 0, padding: 0 }}>
          <Li><B>「売主／買主」「個人／法人」「郵送」</B>を切り替えて、必要書類のチェックリストを作成します。</Li>
          <Li><B>宛名・物件・登記簿上の住所</B>などを入力すると、プレビューに反映されます。</Li>
          <Li><B>「設定」</B>で<B>事務所情報（差出人）・郵送時の追加書類・よく使う項目</B>を登録できます（初回に入力すれば保存されます）。</Li>
          <Li><B>「PDF出力」</B>で印刷・PDF保存ができます。</Li>
        </ul>
      </Section>

      <Section title="ご注意">
        <ul style={{ margin: 0, padding: 0 }}>
          <Li>計算結果は<B>参考値</B>です。最新の税率・特例（例：土地売買の軽減は令和8年3月31日まで、住宅用家屋証明は令和9年3月31日まで）や個別事情は必ずご確認ください。</Li>
          <Li>データは<B>ブラウザ内に保存</B>され、ブラウザのデータ消去・別端末では引き継がれません。大切な設定は「全設定をエクスポート」でバックアップしてください。</Li>
        </ul>
      </Section>
    </div>
  );
}
