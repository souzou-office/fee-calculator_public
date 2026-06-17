// src/Help.jsx — 使い方ガイド（説明書）＋ 図解（簡易モックアップ）
// 上部タブ「使い方」から表示。図は実画面を模した簡易イラストで、実際の画面とは細部が異なる。

const C = "#4338ca";

// ---- 文章用パーツ ----
function Section({ title, children }) {
  return (
    <details className="help-sec rounded-xl mb-3" style={{ background: "#fff", border: "1px solid #e5e9f0" }}>
      <summary style={{ padding: "13px 18px", fontSize: 13, fontWeight: 700, color: C, display: "flex", alignItems: "center", gap: 8 }}>
        <span className="mk" style={{ fontSize: 10, color: "#8393a7" }}>▶</span>{title}
      </summary>
      <div style={{ padding: "0 18px 16px", fontSize: 13, lineHeight: 1.85, color: "#3a4557" }}>{children}</div>
    </details>
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
function Step({ n, title, children }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
      <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: "50%", background: C, color: "#fff", fontSize: 11, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{n}</span>
      <div><B>{title}</B>　{children}</div>
    </div>
  );
}

// ---- 図解用パーツ ----
const Badge = ({ n }) => (
  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, borderRadius: "50%", background: C, color: "#fff", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{n}</span>
);
const FBox = ({ children, title, accent, style }) => (
  <div style={{ border: `1.5px solid ${accent || "#e5e9f0"}`, borderRadius: 10, background: "#fff", padding: 10, ...style }}>
    {title && <div style={{ fontSize: 11, fontWeight: 700, color: accent || "#566275", marginBottom: 6 }}>{title}</div>}
    {children}
  </div>
);
const Line = ({ w = "100%", c = "#eef1f6" }) => <div style={{ width: w, height: 8, background: c, borderRadius: 4, marginBottom: 6 }} />;
function Figure({ caption, children }) {
  return (
    <div className="rounded-xl p-3 mb-4" style={{ background: "#f5f7fb", border: "1px dashed #c7d2fe" }}>
      <div style={{ fontSize: 11, color: C, fontWeight: 700, marginBottom: 8 }}>▼ 画面イメージ（図解）</div>
      {children}
      {caption && <div style={{ fontSize: 11, color: "#8393a7", marginTop: 8, lineHeight: 1.7 }}>{caption}</div>}
    </div>
  );
}
const TabBar = () => (
  <div style={{ display: "flex", gap: 4, background: "linear-gradient(135deg,#312e81,#4338ca)", borderRadius: "8px 8px 0 0", padding: "6px 8px 0" }}>
    {["報酬計算", "必要書類一覧", "使い方"].map((t, i) => (
      <span key={t} style={{ fontSize: 11, color: "#fff", padding: "5px 10px", fontWeight: i === 0 ? 700 : 500, borderBottom: i === 0 ? "2px solid #fff" : "2px solid transparent", opacity: i === 0 ? 1 : 0.6 }}>{t}</span>
    ))}
  </div>
);

// 図1: 報酬計算の全体構成
function DiagCalc() {
  return (
    <div style={{ border: "1px solid #e5e9f0", borderRadius: 10, overflow: "hidden", background: "#f0f3f8" }}>
      <TabBar />
      <div style={{ display: "flex", gap: 10, padding: 12, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 230px", minWidth: 0 }}>
          <FBox title="共通設定" accent={C} style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><Badge n="2" /><span style={{ fontSize: 11, color: "#566275" }}>加算（区分建物 等）・住宅用家屋証明書</span></div>
          </FBox>
          <FBox title="取引項目" style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
              <Badge n="1" />
              <div style={{ flex: 1 }}><Line w="60%" /><Line /><Line w="80%" /><div style={{ fontSize: 10, color: "#8393a7" }}>登記種別／個数／評価額・債権額</div></div>
            </div>
          </FBox>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {["＋移転", "＋保存", "＋抵当権", "＋根抵当", "＋抹消", "＋住変"].map((b) => (
              <span key={b} style={{ fontSize: 10, color: "#5a6577", border: "1.5px dashed #c5cdd8", borderRadius: 8, padding: "3px 6px", background: "#fff" }}>{b}</span>
            ))}
          </div>
        </div>
        <div style={{ flex: "1 1 230px", minWidth: 0 }}>
          <FBox title="費用明細" style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", gap: 6, alignItems: "flex-start" }}><Badge n="3" /><div style={{ flex: 1 }}><Line w="70%" /><Line w="50%" /></div></div>
          </FBox>
          <div style={{ borderRadius: 10, background: "linear-gradient(135deg,#4338ca,#3730a3)", padding: 10 }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 6 }}><Badge n="4" /><span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>ご請求明細</span></div>
            <Line w="100%" c="rgba(255,255,255,0.25)" /><Line w="90%" c="rgba(255,255,255,0.25)" />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, background: "rgba(255,255,255,0.12)", borderRadius: 6, padding: "4px 8px" }}>
              <span style={{ fontSize: 10, color: "#fff", fontWeight: 700 }}>合計請求額</span><span style={{ fontSize: 12, color: "#fff", fontWeight: 700 }}>¥◯◯◯,◯◯◯</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 図2: ご請求明細（報酬＝左／登免税・実費＝右）
function DiagMeisai() {
  const row = (name, fee, tax) => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 8, padding: "4px 0", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
      <span style={{ fontSize: 11, color: "#fff" }}>{name}</span>
      <span style={{ fontSize: 11, color: "#fff", textAlign: "right" }}>{fee}</span>
      <span style={{ fontSize: 11, color: "#fde68a", textAlign: "right" }}>{tax}</span>
    </div>
  );
  return (
    <div style={{ borderRadius: 10, background: "linear-gradient(135deg,#4338ca,#3730a3)", padding: 14 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>ご請求明細</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 8, paddingBottom: 4, borderBottom: "1.5px solid rgba(255,255,255,0.3)" }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>項目</span>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#fff", textAlign: "right" }}>報酬（左）</span>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#fde68a", textAlign: "right" }}>登免税・実費（右）</span>
      </div>
      {row("所有権移転（売買）", "¥84,000", "¥250,000")}
      {row("抵当権設定", "¥55,600", "¥120,000")}
      {row("登記事項証明書 2通", "¥2,000", "¥1,200")}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, background: "rgba(255,255,255,0.12)", borderRadius: 8, padding: "6px 10px" }}>
        <span style={{ fontSize: 11, color: "#fff", fontWeight: 700 }}>合計請求額</span><span style={{ fontSize: 15, color: "#fff", fontWeight: 700 }}>¥◯◯◯,◯◯◯</span>
      </div>
    </div>
  );
}

// 図3: 設定＋共通バックアップ
function DiagSettings() {
  return (
    <FBox title="設定（カスタマイズ）" accent={C}>
      <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
        {["加算", "謄本・情報・項目", "報酬テーブル"].map((t, i) => (
          <span key={t} style={{ fontSize: 10, padding: "3px 8px", borderRadius: 8, background: i === 0 ? C : "#f0f3f8", color: i === 0 ? "#fff" : "#566275" }}>{t}</span>
        ))}
      </div>
      <Line w="80%" /><Line w="60%" />
      <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
        <span style={{ fontSize: 10, padding: "5px 8px", borderRadius: 8, background: "#eef2ff", color: C, border: "1px solid #c7d2fe" }}>全設定をエクスポート</span>
        <span style={{ fontSize: 10, padding: "5px 8px", borderRadius: 8, background: "#f0fdf4", color: "#059669", border: "1px solid #bbf7d0" }}>全設定をインポート</span>
      </div>
      <div style={{ fontSize: 9, color: "#8393a7", marginTop: 6 }}>※ 報酬計算・必要書類一覧で共通。インポートは上書き。</div>
    </FBox>
  );
}

// 図4: 必要書類一覧
function DiagDocs() {
  const chk = (label, on) => (
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
      <span style={{ width: 12, height: 12, borderRadius: 3, background: on ? C : "#fff", border: on ? "none" : "2px solid #ccc" }} />
      <span style={{ fontSize: 10, color: on ? "#3a4557" : "#8393a7" }}>{label}</span>
    </div>
  );
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      <FBox title="必要書類一覧（編集）" style={{ flex: "1 1 220px", minWidth: 0 }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
          <span style={{ fontSize: 10, padding: "3px 10px", borderRadius: 6, background: C, color: "#fff" }}>売主</span>
          <span style={{ fontSize: 10, padding: "3px 10px", borderRadius: 6, background: "#f0f3f8", color: "#566275" }}>買主</span>
        </div>
        <div style={{ display: "flex", gap: 4, marginBottom: 8, alignItems: "center" }}>
          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 6, background: C, color: "#fff" }}>個人</span>
          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 6, background: "#f0f3f8", color: "#566275" }}>法人</span>
          <span style={{ fontSize: 10, color: "#566275", marginLeft: "auto" }}>郵送 ⬤</span>
        </div>
        {chk("登記識別情報通知", true)}
        {chk("印鑑証明書", true)}
        {chk("（任意の項目）", false)}
      </FBox>
      <FBox title="プレビュー → PDF出力" style={{ flex: "1 1 200px", minWidth: 0 }}>
        <div style={{ border: "1px solid #eee", borderRadius: 6, padding: 8, marginBottom: 8 }}>
          <Line w="40%" /><Line w="80%" /><Line w="70%" /><Line w="85%" />
        </div>
        <span style={{ display: "inline-block", fontSize: 10, padding: "5px 10px", borderRadius: 8, background: C, color: "#fff" }}>PDF出力</span>
      </FBox>
    </div>
  );
}

export default function Help() {
  return (
    <div style={{ maxWidth: 880, margin: "0 auto", padding: "24px 24px 56px" }}>
      <h1 className="text-xl font-bold mb-1" style={{ color: "#1a2233" }}>使い方ガイド</h1>
      <style>{`
        .help-sec > summary { list-style: none; cursor: pointer; }
        .help-sec > summary::-webkit-details-marker { display: none; }
        .help-sec > summary .mk { display: inline-block; transition: transform .15s; }
        .help-sec[open] > summary .mk { transform: rotate(90deg); }
      `}</style>

      <p className="mb-4" style={{ fontSize: 13, color: "#8393a7" }}>
        司法書士向けの「報酬・登録免許税の自動計算」と「必要書類一覧の作成」ツールです。
        入力・設定は<B>このブラウザに保存</B>されます（サーバーには送信されません）。
      </p>

      <div className="rounded-xl p-5 mb-4" style={{ background: "#eef2ff", border: "1.5px solid #c7d2fe" }}>
        <h2 className="text-sm font-bold mb-3" style={{ color: C }}>さっと使う（3ステップ）</h2>
        <div style={{ fontSize: 13, lineHeight: 1.8, color: "#3a4557" }}>
          <Step n="1" title="入力する">「報酬計算」タブで取引項目を追加（<B>＋移転</B>・<B>＋抵当権</B> など）し、評価額や債権額を入れます。</Step>
          <Step n="2" title="条件をチェック">当てはまれば「共通設定」で<B>区分建物・住宅用家屋証明書</B>にチェック。証明書の通数や郵送費は右の「費用明細」で入力します。</Step>
          <Step n="3" title="確認・出力">右下の紫の<B>「ご請求明細」</B>で合計請求額を確認。必要書類は上の<B>「必要書類一覧」</B>タブで作成して<B>PDF出力</B>できます。</Step>
        </div>
      </div>

      <Figure caption="画面の全体イメージ。①取引項目 ②共通設定 ③費用明細 ④ご請求明細（報酬＝左／登免税・実費＝右）　※図はイメージです">
        <DiagCalc />
      </Figure>

      <p style={{ fontSize: 12, color: "#8393a7", margin: "10px 2px 6px" }}>▼ もっと詳しく（各項目をタップで開けます）</p>

      <Section title="1. 報酬計算 ― 取引項目">
        <ul style={{ margin: 0, padding: 0 }}>
          <Li><B>「＋移転／＋保存／＋抵当権／＋根抵当／＋抹消／＋住変」</B>のボタンで登記項目を追加します。</Li>
          <Li>各項目で<B>登記種別・不動産の個数・評価額／債権額（極度額）</B>を入力します。</Li>
          <Li>所有権移転は<B>原因（売買／相続／贈与等）</B>を選択。売買は<B>土地と建物の評価額を分けて</B>入力します。</Li>
          <Li>抵当権・根抵当権は<B>債権額／極度額</B>を入力（報酬・登録免許税ともこの金額が基準）。</Li>
          <Li>「移転＋抵当権設定」など<B>同時申請の有無で報酬テーブルの列が自動で切り替わります</B>。</Li>
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
          <Li><B>消費税</B>は既定10%で自動計算されます（税率の変更は<B>「設定」→「加算」タブ</B>から）。</Li>
          <Li><B>「ご請求明細」</B>に、項目ごとの<B>報酬（左）</B>と<B>登録免許税・実費（右）</B>、消費税、<B>合計請求額</B>が表示されます。</Li>
          <Li>各項目の<B>「▼計算過程」</B>で、登録免許税の根拠（課税標準・税率・端数処理）を確認できます。</Li>
        </ul>
        <Figure caption="「ご請求明細」では、報酬（白）を左列、登録免許税・実費（黄）を右列に分けて表示します。">
          <DiagMeisai />
        </Figure>
      </Section>

      <Section title="4. 設定（報酬テーブル等のカスタマイズ）と 5. バックアップ（共通）">
        <ul style={{ margin: 0, padding: 0 }}>
          <Li>右上の<B>「設定」</B>から、<B>報酬テーブル・加算項目・基本報酬（抹消／住変）・謄本／情報の項目・消費税率</B>を編集できます（自動保存）。</Li>
          <Li><B>「全設定をエクスポート」</B>で、<B>報酬計算と必要書類一覧の設定を1ファイル</B>に保存。別のPC・ブラウザで<B>「全設定をインポート」</B>すれば同じ設定を再現できます（<B>インポートは上書き</B>）。</Li>
          <Li>※ 設定はブラウザごとに保存されるため、機種変更・バックアップにはこのファイルをご利用ください。</Li>
        </ul>
        <Figure caption="設定画面の下部に「全設定をエクスポート／インポート」と注意書きがあります（両ツール共通）。">
          <DiagSettings />
        </Figure>
      </Section>

      <Section title="6. 必要書類一覧">
        <ul style={{ margin: 0, padding: 0 }}>
          <Li><B>「売主／買主」「個人／法人」「郵送」</B>を切り替えて、必要書類のチェックリストを作成します。</Li>
          <Li><B>宛名・物件・登記簿上の住所</B>などを入力すると、プレビューに反映されます。</Li>
          <Li><B>「設定」</B>で<B>事務所情報（差出人）・郵送時の追加書類・よく使う項目</B>を登録できます（初回に入力すれば保存）。</Li>
          <Li><B>「PDF出力」</B>で印刷・PDF保存ができます。</Li>
        </ul>
        <Figure caption="左で対象（売主/買主・個人/法人・郵送）と書類を選び、右のプレビューを確認して「PDF出力」。">
          <DiagDocs />
        </Figure>
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
