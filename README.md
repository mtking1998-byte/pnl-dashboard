[ompf_pnl_dashboard (4).html](https://github.com/user-attachments/files/28678669/ompf_pnl_dashboard.4.html)
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OMPF — داشبورد سود و زیان</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap');

  :root {
    --bg-primary:    #0d1b2a;
    --bg-secondary:  #112233;
    --bg-card:       #162840;
    --bg-card2:      #1a3050;
    --border:        #1e3d5c;
    --border-light:  #264d70;
    --text-primary:  #e8f1fa;
    --text-secondary:#8ab0cc;
    --text-muted:    #4d7a9e;
    --accent-green:  #00d68f;
    --accent-green2: #00b87a;
    --accent-red:    #ff4d7e;
    --accent-red2:   #cc2d5a;
    --accent-blue:   #3d9be9;
    --accent-gold:   #f0c040;
    --accent-purple: #a78bfa;
    --shadow:        0 4px 24px rgba(0,0,0,0.45);
    --radius:        12px;
    --radius-sm:     8px;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Vazirmatn', sans-serif;
    min-height: 100vh;
    padding: 0;
  }

  /* ───── TOPBAR ───── */
  .topbar {
    background: linear-gradient(90deg, #0a1628 0%, #112233 60%, #0d2040 100%);
    border-bottom: 1px solid var(--border);
    padding: 14px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .topbar-logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .logo-badge {
    background: linear-gradient(135deg, #00d68f 0%, #3d9be9 100%);
    border-radius: 8px;
    padding: 6px 11px;
    font-size: 13px;
    font-weight: 700;
    color: #0d1b2a;
    letter-spacing: 1px;
  }
  .topbar-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
  }
  .topbar-sub {
    font-size: 11px;
    color: var(--text-muted);
  }
  .topbar-date {
    font-size: 11px;
    color: var(--text-muted);
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 5px 12px;
  }

  /* ───── LAYOUT ───── */
  .main-wrap {
    max-width: 1300px;
    margin: 0 auto;
    padding: 24px 20px 60px;
  }

  /* ───── SECTION HEADER ───── */
  .section-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    margin-top: 28px;
  }
  .section-header h2 {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .section-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--border) 0%, transparent 100%);
  }

  /* ───── CURRENCY TABS ───── */
  .currency-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }
  .currency-tab {
    padding: 8px 20px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-secondary);
    font-family: 'Vazirmatn', sans-serif;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .currency-tab:hover { border-color: var(--accent-blue); color: var(--text-primary); }
  .currency-tab.active {
    background: linear-gradient(135deg, #00d68f22, #3d9be922);
    border-color: var(--accent-green);
    color: var(--accent-green);
  }
  .currency-tab .dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: currentColor;
  }
  .add-currency-btn {
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px dashed var(--border-light);
    background: transparent;
    color: var(--text-muted);
    font-family: 'Vazirmatn', sans-serif;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .add-currency-btn:hover { border-color: var(--accent-green); color: var(--accent-green); }

  /* ───── SUMMARY CARDS ───── */
  .summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 14px;
    margin-bottom: 24px;
  }
  .sum-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 16px 14px;
    position: relative;
    overflow: hidden;
  }
  .sum-card::before {
    content: '';
    position: absolute;
    top: 0; right: 0; left: 0;
    height: 3px;
    border-radius: var(--radius) var(--radius) 0 0;
  }
  .sum-card.green::before  { background: linear-gradient(90deg,#00d68f,#00b87a); }
  .sum-card.red::before    { background: linear-gradient(90deg,#ff4d7e,#cc2d5a); }
  .sum-card.blue::before   { background: linear-gradient(90deg,#3d9be9,#2277cc); }
  .sum-card.gold::before   { background: linear-gradient(90deg,#f0c040,#d4a800); }
  .sum-card.purple::before { background: linear-gradient(90deg,#a78bfa,#7c3aed); }
  .sum-card-label {
    font-size: 10px;
    color: var(--text-muted);
    margin-bottom: 8px;
    font-weight: 500;
    letter-spacing: 0.3px;
  }
  .sum-card-value {
    font-size: 13px;
    font-weight: 700;
    color: var(--text-primary);
    word-break: break-all;
    line-height: 1.3;
  }
  .sum-card-value.pos { color: var(--accent-green); }
  .sum-card-value.neg { color: var(--accent-red); }
  .sum-card-sub {
    font-size: 10px;
    color: var(--text-muted);
    margin-top: 4px;
  }

  /* ───── FORM PANEL ───── */
  .form-panel {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px;
    margin-bottom: 20px;
  }
  .form-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    align-items: end;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .form-group label {
    font-size: 11px;
    color: var(--text-muted);
    font-weight: 500;
  }
  .form-group input,
  .form-group select {
    background: var(--bg-primary);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    font-family: 'Vazirmatn', sans-serif;
    font-size: 12px;
    padding: 9px 12px;
    width: 100%;
    transition: border-color 0.2s;
    outline: none;
  }
  .form-group input:focus,
  .form-group select:focus { border-color: var(--accent-blue); }
  .form-group select option { background: var(--bg-secondary); }

  .btn-primary {
    background: linear-gradient(135deg, var(--accent-green), var(--accent-green2));
    border: none;
    border-radius: var(--radius-sm);
    color: #0d1b2a;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 12px;
    font-weight: 700;
    padding: 10px 20px;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.1s;
    white-space: nowrap;
  }
  .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
  .btn-danger {
    background: var(--bg-card2);
    border: 1px solid var(--accent-red2);
    border-radius: var(--radius-sm);
    color: var(--accent-red);
    font-family: 'Vazirmatn', sans-serif;
    font-size: 11px;
    font-weight: 600;
    padding: 6px 12px;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .btn-danger:hover { background: #ff4d7e22; }
  .btn-warn {
    background: var(--bg-card2);
    border: 1px solid #d4a800;
    border-radius: var(--radius-sm);
    color: var(--accent-gold);
    font-family: 'Vazirmatn', sans-serif;
    font-size: 11px;
    font-weight: 600;
    padding: 6px 12px;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .btn-warn:hover { background: #f0c04022; }

  /* ───── TABLE ───── */
  .table-wrap {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    margin-bottom: 20px;
  }
  .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 18px 12px;
    border-bottom: 1px solid var(--border);
  }
  .table-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-secondary);
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  thead th {
    background: var(--bg-secondary);
    padding: 10px 12px;
    font-size: 10px;
    font-weight: 600;
    color: var(--text-muted);
    text-align: right;
    letter-spacing: 0.3px;
    border-bottom: 1px solid var(--border);
  }
  tbody tr {
    border-bottom: 1px solid var(--border);
    transition: background 0.15s;
  }
  tbody tr:last-child { border-bottom: none; }
  tbody tr:hover { background: var(--bg-card2); }
  tbody td {
    padding: 9px 12px;
    font-size: 11px;
    color: var(--text-primary);
    text-align: right;
  }
  .badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
  }
  .badge-buy  { background: #00d68f22; color: var(--accent-green); border: 1px solid #00d68f44; }
  .badge-sell { background: #ff4d7e22; color: var(--accent-red);   border: 1px solid #ff4d7e44; }
  .badge-tmn  { background: #3d9be922; color: var(--accent-blue);  border: 1px solid #3d9be944; }
  .badge-usdt { background: #f0c04022; color: var(--accent-gold);  border: 1px solid #f0c04044; }
  td.pos { color: var(--accent-green); font-weight: 600; }
  td.neg { color: var(--accent-red);   font-weight: 600; }

  /* ───── EMPTY STATE ───── */
  .empty-state {
    text-align: center;
    padding: 40px 20px;
    color: var(--text-muted);
    font-size: 12px;
  }
  .empty-icon { font-size: 32px; margin-bottom: 10px; opacity: 0.4; }

  /* ───── SELL FORM ───── */
  .sell-panel {
    background: var(--bg-card2);
    border: 1px solid var(--border-light);
    border-radius: var(--radius);
    padding: 18px 20px;
    margin-bottom: 20px;
  }

  /* ───── MODAL ───── */
  .modal-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(4px);
    z-index: 200;
    align-items: center;
    justify-content: center;
  }
  .modal-overlay.open { display: flex; }
  .modal-box {
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 28px;
    width: 340px;
    max-width: 95vw;
    box-shadow: var(--shadow);
  }
  .modal-title { font-size: 14px; font-weight: 700; margin-bottom: 8px; }
  .modal-body  { font-size: 12px; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.7; }
  .modal-input {
    background: var(--bg-primary);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    font-family: 'Vazirmatn', sans-serif;
    font-size: 13px;
    padding: 10px 14px;
    width: 100%;
    margin-bottom: 16px;
    outline: none;
  }
  .modal-input:focus { border-color: var(--accent-blue); }
  .modal-actions { display: flex; gap: 10px; justify-content: flex-end; }
  .btn-cancel {
    background: var(--bg-card2);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    color: var(--text-secondary);
    font-family: 'Vazirmatn', sans-serif;
    font-size: 12px;
    padding: 8px 18px;
    cursor: pointer;
  }

  /* ───── PROGRESS BAR ───── */
  .pnl-bar-wrap { margin-top: 8px; }
  .pnl-bar-bg {
    background: var(--bg-secondary);
    border-radius: 4px;
    height: 5px;
    overflow: hidden;
  }
  .pnl-bar-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.4s;
  }

  /* ───── RESPONSIVE ───── */
  @media (max-width: 700px) {
    .topbar { padding: 12px 14px; }
    .main-wrap { padding: 14px 10px 40px; }
    .summary-grid { grid-template-columns: repeat(2, 1fr); }
  }

  /* ───── SIDE DRAWER ───── */
  .drawer-toggle-btn {
    position:fixed;top:50%;right:0;transform:translateY(-50%);z-index:200;
    background:linear-gradient(135deg,#a78bfa,#3d9be9);border:none;
    border-radius:10px 0 0 10px;color:#0d1b2a;font-family:'Vazirmatn',sans-serif;
    font-size:11px;font-weight:700;writing-mode:vertical-rl;padding:18px 10px;
    cursor:pointer;letter-spacing:1px;box-shadow:-4px 0 18px rgba(167,139,250,0.25);
    transition:right 0.35s cubic-bezier(0.4,0,0.2,1);
  }
  .drawer-toggle-btn:hover{background:linear-gradient(135deg,#c4b5fd,#60a5fa);}
  .drawer-toggle-btn.open{right:440px;}
  .side-drawer{
    position:fixed;top:0;right:-440px;width:440px;height:100vh;
    background:#0f1e30;border-left:1px solid #264d70;z-index:190;overflow-y:auto;
    transition:right 0.35s cubic-bezier(0.4,0,0.2,1);box-shadow:-8px 0 40px rgba(0,0,0,0.6);
  }
  .side-drawer.open{right:0;}
  .drawer-header{
    background:linear-gradient(135deg,#1a1040,#0d2040);border-bottom:1px solid #264d70;
    padding:16px 20px 12px;position:sticky;top:0;z-index:10;
  }
  .drawer-header-title{font-size:14px;font-weight:700;color:#e8f1fa;margin-bottom:3px;}
  .drawer-header-sub{font-size:10px;color:#4d7a9e;}
  .drawer-close{position:absolute;top:14px;left:16px;background:none;border:none;color:#4d7a9e;font-size:18px;cursor:pointer;}
  .drawer-close:hover{color:#e8f1fa;}
  .drawer-tabs{display:flex;border-bottom:1px solid #1e3d5c;background:#0d1b2a;}
  .drawer-tab{
    flex:1;padding:10px 6px;font-family:'Vazirmatn',sans-serif;font-size:11px;font-weight:600;
    color:#4d7a9e;background:none;border:none;cursor:pointer;transition:all 0.2s;
    border-bottom:2px solid transparent;
  }
  .drawer-tab:hover{color:#8ab0cc;}
  .drawer-tab.active{color:#a78bfa;border-bottom-color:#a78bfa;background:#a78bfa0a;}
  .drawer-panel{display:none;padding:16px 18px;}
  .drawer-panel.active{display:block;}
  .drawer-section-title{
    font-size:11px;font-weight:700;color:#8ab0cc;letter-spacing:0.5px;
    text-transform:uppercase;margin-bottom:12px;display:flex;align-items:center;gap:8px;
  }
  .drawer-section-title span{flex:1;height:1px;background:linear-gradient(90deg,#1e3d5c,transparent);}

  /* Chart */
  .chart-period-tabs{display:flex;gap:5px;margin-bottom:12px;flex-wrap:wrap;}
  .chart-period-tab{
    padding:4px 10px;border-radius:5px;border:1px solid #1e3d5c;background:#162840;
    color:#4d7a9e;font-family:'Vazirmatn',sans-serif;font-size:10px;font-weight:600;cursor:pointer;transition:all 0.2s;
  }
  .chart-period-tab:hover{border-color:#a78bfa;color:#a78bfa;}
  .chart-period-tab.active{background:linear-gradient(135deg,#a78bfa22,#3d9be922);border-color:#a78bfa;color:#a78bfa;}
  #pnl-chart-wrap{background:#0d1b2a;border:1px solid #1e3d5c;border-radius:10px;padding:10px;min-height:190px;}
  #pnl-chart{width:100%!important;}
  .chart-empty{display:flex;align-items:center;justify-content:center;min-height:170px;color:#4d7a9e;font-size:11px;text-align:center;}
  .chart-sel-row{display:flex;gap:8px;margin-bottom:10px;align-items:center;flex-wrap:wrap;}
  .chart-sel-row label{font-size:10px;color:#4d7a9e;}
  .chart-sel-row select{background:#0d1b2a;border:1px solid #264d70;border-radius:5px;color:#e8f1fa;font-family:'Vazirmatn',sans-serif;font-size:11px;padding:4px 8px;outline:none;}

  /* R:R */
  .rr-unit-toggle,.rr-dir-toggle{display:flex;gap:6px;margin-bottom:10px;}
  .rr-unit-btn,.rr-dir-btn{flex:1;padding:6px;border-radius:6px;border:1px solid #1e3d5c;background:#162840;color:#4d7a9e;font-family:'Vazirmatn',sans-serif;font-size:11px;font-weight:600;cursor:pointer;transition:all 0.2s;}
  .rr-unit-btn.active-tmn{background:#3d9be922;border-color:#3d9be9;color:#3d9be9;}
  .rr-unit-btn.active-usdt{background:#f0c04022;border-color:#f0c040;color:#f0c040;}
  .rr-dir-btn.active-long{background:#00d68f22;border-color:#00d68f;color:#00d68f;}
  .rr-dir-btn.active-short{background:#ff4d7e22;border-color:#ff4d7e;color:#ff4d7e;}
  .rr-unit-label{display:inline-block;font-size:10px;padding:2px 6px;border-radius:4px;margin-right:4px;font-weight:600;}
  .rr-unit-label.tmn{background:#3d9be922;color:#3d9be9;border:1px solid #3d9be944;}
  .rr-unit-label.usdt{background:#f0c04022;color:#f0c040;border:1px solid #f0c04044;}
  .rr-inputs{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:12px;}
  .rr-input-group{display:flex;flex-direction:column;gap:4px;}
  .rr-input-group label{font-size:10px;color:#4d7a9e;font-weight:500;}
  .rr-input-group input{background:#0d1b2a;border:1px solid #264d70;border-radius:6px;color:#e8f1fa;font-family:'Vazirmatn',sans-serif;font-size:12px;padding:7px 10px;outline:none;width:100%;}
  .rr-input-group input:focus{border-color:#3d9be9;}
  .rr-result{border-radius:10px;padding:14px;text-align:center;transition:all 0.3s;border:2px solid transparent;}
  .rr-result.green{background:#00d68f15;border-color:#00d68f55;}
  .rr-result.yellow{background:#f0c04015;border-color:#f0c04055;}
  .rr-result.red{background:#ff4d7e15;border-color:#ff4d7e55;}
  .rr-result.neutral{background:#162840;border-color:#1e3d5c;}
  .rr-ratio{font-size:26px;font-weight:700;line-height:1;margin-bottom:5px;}
  .rr-result.green .rr-ratio{color:#00d68f;} .rr-result.yellow .rr-ratio{color:#f0c040;}
  .rr-result.red .rr-ratio{color:#ff4d7e;}   .rr-result.neutral .rr-ratio{color:#4d7a9e;}
  .rr-verdict{font-size:11px;font-weight:600;margin-bottom:6px;}
  .rr-result.green .rr-verdict{color:#00d68f;} .rr-result.yellow .rr-verdict{color:#f0c040;}
  .rr-result.red .rr-verdict{color:#ff4d7e;}   .rr-result.neutral .rr-verdict{color:#4d7a9e;}
  .rr-detail{font-size:10px;color:#8ab0cc;line-height:1.7;}
  .rr-action-btns{display:flex;gap:8px;margin-top:10px;}
  .rr-btn{flex:1;padding:8px;border-radius:7px;font-family:'Vazirmatn',sans-serif;font-size:11px;font-weight:700;cursor:pointer;border:none;transition:all 0.2s;}
  .rr-btn.confirm{background:linear-gradient(135deg,#00d68f,#00b87a);color:#0d1b2a;}
  .rr-btn.skip{background:linear-gradient(135deg,#ff4d7e,#cc2d5a);color:#fff;}
  .rr-btn:hover{opacity:0.85;transform:translateY(-1px);}

  /* Position Size Calculator */
  .ps-result-box{background:#0d1b2a;border:1px solid #1e3d5c;border-radius:10px;padding:14px;margin-top:12px;}
  .ps-result-row{display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid #1e3d5c14;}
  .ps-result-row:last-child{border-bottom:none;}
  .ps-result-label{font-size:10px;color:#4d7a9e;}
  .ps-result-val{font-size:13px;font-weight:700;color:#e8f1fa;}
  .ps-result-val.highlight{color:#a78bfa;font-size:15px;}

  /* Trading Journal */
  .journal-form{background:#0d1b2a;border:1px solid #1e3d5c;border-radius:10px;padding:14px;margin-bottom:14px;}
  .journal-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;}
  .journal-input-group{display:flex;flex-direction:column;gap:4px;}
  .journal-input-group label{font-size:10px;color:#4d7a9e;font-weight:500;}
  .journal-input-group input,
  .journal-input-group select,
  .journal-input-group textarea{
    background:#162840;border:1px solid #264d70;border-radius:6px;color:#e8f1fa;
    font-family:'Vazirmatn',sans-serif;font-size:11px;padding:7px 10px;outline:none;width:100%;
    transition:border-color 0.2s;resize:vertical;
  }
  .journal-input-group input:focus,
  .journal-input-group select:focus,
  .journal-input-group textarea:focus{border-color:#a78bfa;}
  .journal-entry{
    background:#0d1b2a;border:1px solid #1e3d5c;border-radius:8px;
    padding:10px 12px;margin-bottom:8px;position:relative;
  }
  .journal-entry:hover{border-color:#264d70;}
  .journal-entry-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;}
  .journal-entry-coin{font-size:12px;font-weight:700;color:#a78bfa;}
  .journal-entry-date{font-size:9px;color:#4d7a9e;}
  .journal-entry-dir{
    display:inline-block;font-size:9px;font-weight:700;padding:2px 7px;border-radius:4px;margin-right:6px;
  }
  .journal-entry-dir.long{background:#00d68f22;color:#00d68f;border:1px solid #00d68f44;}
  .journal-entry-dir.short{background:#ff4d7e22;color:#ff4d7e;border:1px solid #ff4d7e44;}
  .journal-entry-outcome{display:inline-block;font-size:9px;font-weight:700;padding:2px 7px;border-radius:4px;}
  .journal-entry-outcome.win{background:#00d68f22;color:#00d68f;}
  .journal-entry-outcome.loss{background:#ff4d7e22;color:#ff4d7e;}
  .journal-entry-outcome.open{background:#3d9be922;color:#3d9be9;}
  .journal-entry-reason{font-size:10px;color:#8ab0cc;margin-top:4px;line-height:1.5;}
  .journal-entry-emotion{font-size:9px;color:#4d7a9e;margin-top:3px;}
  .journal-del-btn{position:absolute;top:8px;left:10px;background:none;border:none;color:#4d7a9e;cursor:pointer;font-size:13px;}
  .journal-del-btn:hover{color:#ff4d7e;}
  .journal-stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px;}
  .journal-stat-card{background:#0d1b2a;border:1px solid #1e3d5c;border-radius:8px;padding:10px;text-align:center;}
  .journal-stat-val{font-size:16px;font-weight:700;color:#a78bfa;}
  .journal-stat-label{font-size:9px;color:#4d7a9e;margin-top:3px;}
  .emotion-select option{background:#0d1b2a;}

  @media(max-width:500px){.side-drawer{width:100vw;right:-100vw;}.drawer-toggle-btn.open{right:100vw;}}

</style>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
</head>
<body>

<!-- TOPBAR -->
<div class="topbar">
  <div class="topbar-logo">
    <div class="logo-badge">OMPF</div>
    <div>
      <div class="topbar-title">داشبورد سود و زیان</div>
      <div class="topbar-sub">محاسبه میانگین موزون · تفکیک ارز · تومان / تتر</div>
    </div>
  </div>
  <div class="topbar-date" id="topbar-date"></div>
</div>

<div class="main-wrap">

  <!-- CURRENCY TABS -->
  <div class="section-header">
    <h2>ارز فعال</h2>
    <div class="section-line"></div>
  </div>
  <div class="currency-tabs" id="currency-tabs">
    <button class="add-currency-btn" onclick="openAddCurrency()">＋ افزودن ارز</button>
  </div>

  <!-- SUMMARY CARDS -->
  <div class="summary-grid" id="summary-grid">
    <div class="sum-card blue">
      <div class="sum-card-label">میانگین موزون قیمت خرید</div>
      <div class="sum-card-value" id="s-avg">—</div>
      <div class="sum-card-sub" id="s-avg-unit"></div>
    </div>
    <div class="sum-card gold">
      <div class="sum-card-label">قیمت سر به سر</div>
      <div class="sum-card-value" id="s-be">—</div>
      <div class="sum-card-sub" id="s-be-unit"></div>
    </div>
    <div class="sum-card blue">
      <div class="sum-card-label">مجموع حجم خریداری‌شده</div>
      <div class="sum-card-value" id="s-vol">—</div>
      <div class="sum-card-sub" id="s-vol-unit"></div>
    </div>
    <div class="sum-card blue">
      <div class="sum-card-label">مجموع هزینه خرید</div>
      <div class="sum-card-value" id="s-cost">—</div>
      <div class="sum-card-sub" id="s-cost-unit"></div>
    </div>
    <div class="sum-card green" id="s-pnl-card">
      <div class="sum-card-label">سود / زیان خالص</div>
      <div class="sum-card-value" id="s-pnl">—</div>
      <div class="sum-card-sub" id="s-pnl-pct"></div>
      <div class="pnl-bar-wrap">
        <div class="pnl-bar-bg"><div class="pnl-bar-fill" id="pnl-bar" style="width:0%;background:var(--accent-green)"></div></div>
      </div>
    </div>
    <div class="sum-card purple">
      <div class="sum-card-label">قیمت لحظه‌ای (دستی)</div>
      <div class="sum-card-value" id="s-cur">—</div>
      <div class="sum-card-sub" id="s-cur-unit"></div>
    </div>
  </div>

  <!-- CURRENT PRICE INPUT -->
  <div class="form-panel" style="padding:14px 20px;margin-bottom:20px;">
    <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:10px;">
      <span style="font-size:11px;color:var(--accent-gold);font-weight:600;">💡 قیمت لحظه‌ای برای هر ارز به‌صورت مجزا ذخیره می‌شود</span>
      <span id="cur-price-coin-badge" style="background:linear-gradient(135deg,#a78bfa33,#3d9be933);border:1px solid var(--accent-purple);border-radius:6px;padding:3px 10px;font-size:12px;font-weight:700;color:var(--accent-purple);">BTC</span>
    </div>
    <div style="display:flex;gap:12px;align-items:flex-end;flex-wrap:wrap;">
      <div class="form-group" style="flex:1;min-width:160px;">
        <label>قیمت لحظه‌ای <span id="cur-price-unit-label" style="color:var(--accent-gold)">(واحد ارز)</span></label>
        <input type="number" id="current-price" placeholder="قیمت فعلی بازار را وارد کنید" oninput="saveCurrentPrice()">
      </div>
      <div class="form-group" style="min-width:120px;">
        <label>واحد قیمت</label>
        <select id="cur-price-currency" onchange="saveCurrentPrice()">
          <option value="TMN">تومان</option>
          <option value="USDT">تتر (USDT)</option>
        </select>
      </div>
    </div>
  </div>

  <!-- BUY FORM -->
  <div class="section-header">
    <h2>ثبت معامله</h2>
    <div class="section-line"></div>
  </div>
  <div class="form-panel">
    <div class="form-title">
      <span style="color:var(--accent-green)">●</span> افزودن تراکنش خرید
    </div>
    <div class="form-grid">
      <div class="form-group">
        <label>قیمت خرید</label>
        <input type="number" id="buy-price" placeholder="مثلاً ۲۰۰۰۰۰۰۰">
      </div>
      <div class="form-group">
        <label>واحد قیمت</label>
        <select id="buy-currency">
          <option value="TMN">تومان</option>
          <option value="USDT">تتر (USDT)</option>
        </select>
      </div>
      <div class="form-group">
        <label>حجم (مقدار ارز)</label>
        <input type="number" id="buy-volume" placeholder="مثلاً ۰.۵">
      </div>
      <div class="form-group">
        <label>کارمزد (اختیاری)</label>
        <input type="number" id="buy-fee" placeholder="۰">
      </div>
      <div class="form-group">
        <label>یادداشت</label>
        <input type="text" id="buy-note" placeholder="توضیح اختیاری">
      </div>
      <div class="form-group" style="justify-content:flex-end;">
        <button class="btn-primary" onclick="addBuy()">＋ ثبت خرید</button>
      </div>
    </div>
  </div>

  <!-- SELL FORM -->
  <div class="sell-panel">
    <div class="form-title">
      <span style="color:var(--accent-red)">●</span> ثبت فروش (محاسبه بهای تمام‌شده به روش میانگین موزون)
    </div>
    <div class="form-grid">
      <div class="form-group">
        <label>قیمت فروش</label>
        <input type="number" id="sell-price" placeholder="قیمت فروش">
      </div>
      <div class="form-group">
        <label>واحد قیمت</label>
        <select id="sell-currency">
          <option value="TMN">تومان</option>
          <option value="USDT">تتر (USDT)</option>
        </select>
      </div>
      <div class="form-group">
        <label>حجم فروش</label>
        <input type="number" id="sell-volume" placeholder="مقدار ارز برای فروش">
      </div>
      <div class="form-group">
        <label>کارمزد (اختیاری)</label>
        <input type="number" id="sell-fee" placeholder="۰">
      </div>
      <div class="form-group">
        <label>یادداشت</label>
        <input type="text" id="sell-note" placeholder="توضیح اختیاری">
      </div>
      <div class="form-group" style="justify-content:flex-end;">
        <button class="btn-primary" style="background:linear-gradient(135deg,#ff4d7e,#cc2d5a);" onclick="addSell()">⬇ ثبت فروش</button>
      </div>
    </div>
  </div>

  <!-- TRANSACTIONS TABLE -->
  <div class="section-header">
    <h2>تاریخچه تراکنش‌ها</h2>
    <div class="section-line"></div>
    <button class="btn-warn" onclick="clearAllHistory()">🗑 پاک کردن همه</button>
  </div>
  <div class="table-wrap">
    <div class="table-header">
      <div class="table-title" id="tx-table-title">تراکنش‌های ثبت‌شده</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn-primary" style="background:linear-gradient(135deg,#a78bfa,#7c3aed);font-size:11px;padding:7px 14px;" onclick="exportPDF()">📄 خروجی PDF</button>
        <button class="btn-danger" onclick="clearBuys()">حذف خریدها</button>
        <button class="btn-danger" onclick="clearSells()">حذف فروش‌ها</button>
      </div>
    </div>
    <div style="overflow-x:auto;">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>نوع</th>
            <th>ارز</th>
            <th>قیمت</th>
            <th>واحد</th>
            <th>حجم</th>
            <th>ارزش کل</th>
            <th>کارمزد</th>
            <th>بهای تمام‌شده (WA)</th>
            <th>سود / زیان</th>
            <th>یادداشت</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody id="tx-tbody"></tbody>
      </table>
    </div>
    <div class="empty-state" id="empty-state">
      <div class="empty-icon">📊</div>
      <div>هنوز تراکنشی ثبت نشده است.</div>
      <div style="margin-top:6px;">ابتدا یک ارز انتخاب کنید و سپس خرید خود را ثبت نمایید.</div>
    </div>
  </div>

</div>

<!-- ADD CURRENCY MODAL -->
<div class="modal-overlay" id="modal-currency">
  <div class="modal-box">
    <div class="modal-title">➕ افزودن ارز جدید</div>
    <div class="modal-body">نام یا نماد ارز مورد نظر خود را وارد کنید (مثلاً BTC، ETH، BNB، SOL)</div>
    <input class="modal-input" id="new-currency-input" placeholder="نام ارز (مثلاً BTC)" maxlength="12" onkeydown="if(event.key==='Enter') confirmAddCurrency()">
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal('modal-currency')">انصراف</button>
      <button class="btn-primary" onclick="confirmAddCurrency()">افزودن</button>
    </div>
  </div>
</div>

<!-- DELETE CONFIRM MODAL -->
<div class="modal-overlay" id="modal-delete">
  <div class="modal-box">
    <div class="modal-title" id="modal-delete-title">تأیید حذف</div>
    <div class="modal-body" id="modal-delete-body"></div>
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal('modal-delete')">انصراف</button>
      <button class="btn-primary" style="background:linear-gradient(135deg,#ff4d7e,#cc2d5a);" id="modal-delete-confirm">تأیید حذف</button>
    </div>
  </div>
</div>

<script>
// ─── STATE ───────────────────────────────────────────────────
let currencies = JSON.parse(localStorage.getItem('ompf_currencies') || '["BTC"]');
let activeCurrency = currencies[0] || 'BTC';
let allTransactions = JSON.parse(localStorage.getItem('ompf_transactions') || '{}');
// allTransactions: { [currency]: [{type,price,currency_unit,volume,fee,note,date},...] }
let allCurrentPrices = JSON.parse(localStorage.getItem('ompf_current_prices') || '{}');
let tradeJournal = JSON.parse(localStorage.getItem('ompf_journal') || '[]');

// ─── INIT ────────────────────────────────────────────────────
function init() {
  updateDateDisplay();
  renderCurrencyTabs();
  renderTable();
  loadCurrentPrice();
  setInterval(updateDateDisplay, 60000);
}

function updateDateDisplay() {
  const now = new Date();
  document.getElementById('topbar-date').textContent =
    now.toLocaleDateString('fa-IR') + '  ' + now.toLocaleTimeString('fa-IR', {hour:'2-digit', minute:'2-digit'});
}

// ─── CURRENCY TABS ───────────────────────────────────────────
function renderCurrencyTabs() {
  const wrap = document.getElementById('currency-tabs');
  wrap.innerHTML = '';
  currencies.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'currency-tab' + (c === activeCurrency ? ' active' : '');
    btn.innerHTML = `<span class="dot"></span>${c} <span style="font-size:10px;opacity:0.6;margin-right:4px" onclick="event.stopPropagation();removeCurrency('${c}')" title="حذف این ارز">✕</span>`;
    btn.onclick = () => { activeCurrency = c; renderCurrencyTabs(); renderTable(); loadCurrentPrice(); };
    wrap.appendChild(btn);
  });
  const addBtn = document.createElement('button');
  addBtn.className = 'add-currency-btn';
  addBtn.textContent = '＋ افزودن ارز';
  addBtn.onclick = openAddCurrency;
  wrap.appendChild(addBtn);
}

function openAddCurrency() {
  document.getElementById('new-currency-input').value = '';
  openModal('modal-currency');
  setTimeout(() => document.getElementById('new-currency-input').focus(), 100);
}

function confirmAddCurrency() {
  const val = document.getElementById('new-currency-input').value.trim().toUpperCase();
  if (!val) return;
  if (currencies.includes(val)) { alert('این ارز قبلاً اضافه شده است.'); return; }
  currencies.push(val);
  save();
  activeCurrency = val;
  renderCurrencyTabs();
  renderTable();
  loadCurrentPrice();
  closeModal('modal-currency');
}

function removeCurrency(c) {
  showDeleteModal(
    `حذف ارز ${c}`,
    `با حذف ارز <strong>${c}</strong> تمام تاریخچه معاملات آن نیز پاک می‌شود. آیا مطمئن هستید؟`,
    () => {
      currencies = currencies.filter(x => x !== c);
      delete allTransactions[c];
      delete allCurrentPrices[c];
      if (activeCurrency === c) activeCurrency = currencies[0] || '';
      save();
      renderCurrencyTabs();
      renderTable();
      loadCurrentPrice();
    }
  );
}

// ─── TRANSACTIONS ─────────────────────────────────────────────
function getTxs(c) { return allTransactions[c] || []; }
function setTxs(c, arr) { allTransactions[c] = arr; }

function addBuy() {
  const price  = parseFloat(document.getElementById('buy-price').value);
  const unit   = document.getElementById('buy-currency').value;
  const volume = parseFloat(document.getElementById('buy-volume').value);
  const fee    = parseFloat(document.getElementById('buy-fee').value) || 0;
  const note   = document.getElementById('buy-note').value.trim();
  if (!price || !volume || !activeCurrency) return alert('قیمت و حجم را وارد کنید.');
  const txs = getTxs(activeCurrency);
  txs.push({ type:'buy', price, unit, volume, fee, note, date: new Date().toISOString() });
  setTxs(activeCurrency, txs);
  save(); renderTable(); updateSummary();
  ['buy-price','buy-volume','buy-fee','buy-note'].forEach(id => document.getElementById(id).value = '');
}

function addSell() {
  const price  = parseFloat(document.getElementById('sell-price').value);
  const unit   = document.getElementById('sell-currency').value;
  const volume = parseFloat(document.getElementById('sell-volume').value);
  const fee    = parseFloat(document.getElementById('sell-fee').value) || 0;
  const note   = document.getElementById('sell-note').value.trim();
  if (!price || !volume || !activeCurrency) return alert('قیمت و حجم را وارد کنید.');

  // Check available volume
  const txs = getTxs(activeCurrency);
  const boughtVol = txs.filter(t=>t.type==='buy').reduce((s,t)=>s+t.volume,0);
  const soldVol   = txs.filter(t=>t.type==='sell').reduce((s,t)=>s+t.volume,0);
  const available = boughtVol - soldVol;
  if (volume > available + 0.0000001) return alert(`حجم فروش بیشتر از موجودی در دسترس است.
موجودی فعلی: ${fmtNum(available)} ${activeCurrency}`);

  // Weighted average cost at time of sale
  const wa = weightedAvg(txs, unit);
  const costBasis = wa * volume;
  const revenue   = price * volume - fee;
  const pnl       = revenue - costBasis;

  txs.push({ type:'sell', price, unit, volume, fee, note, date: new Date().toISOString(), wa, pnl });
  setTxs(activeCurrency, txs);
  save(); renderTable(); updateSummary();
  ['sell-price','sell-volume','sell-fee','sell-note'].forEach(id => document.getElementById(id).value = '');
}

// Weighted average cost of remaining inventory for a given unit
function weightedAvg(txs, unit) {
  // Use running weighted average method
  let totalCost = 0, totalVol = 0;
  for (const t of txs) {
    if (t.type === 'buy' && t.unit === unit) {
      totalCost += (t.price * t.volume) + t.fee;
      totalVol  += t.volume;
    } else if (t.type === 'sell' && t.unit === unit) {
      if (totalVol > 0) {
        const avgCost = totalCost / totalVol;
        totalCost -= avgCost * t.volume;
        totalVol  -= t.volume;
      }
    }
  }
  return totalVol > 0 ? totalCost / totalVol : 0;
}

function deleteRow(idx) {
  showDeleteModal('حذف تراکنش', 'این تراکنش حذف شود؟', () => {
    const txs = getTxs(activeCurrency);
    txs.splice(idx, 1);
    setTxs(activeCurrency, txs);
    save(); renderTable(); updateSummary();
  });
}

function clearBuys() {
  showDeleteModal('حذف تمام خریدها', `تمام تراکنش‌های خرید ارز <strong>${activeCurrency}</strong> حذف شوند؟`, () => {
    const txs = getTxs(activeCurrency).filter(t => t.type !== 'buy');
    setTxs(activeCurrency, txs);
    save(); renderTable(); updateSummary();
  });
}

function clearSells() {
  showDeleteModal('حذف تاریخچه فروش', `تمام تراکنش‌های فروش ارز <strong>${activeCurrency}</strong> حذف شوند؟`, () => {
    const txs = getTxs(activeCurrency).filter(t => t.type !== 'sell');
    setTxs(activeCurrency, txs);
    save(); renderTable(); updateSummary();
  });
}

function clearAllHistory() {
  showDeleteModal('پاک کردن همه', `تمام تاریخچه معاملات ارز <strong>${activeCurrency}</strong> پاک شود؟`, () => {
    setTxs(activeCurrency, []);
    save(); renderTable(); updateSummary();
  });
}

// ─── RENDER TABLE ────────────────────────────────────────────
function renderTable() {
  const txs = getTxs(activeCurrency);
  const tbody = document.getElementById('tx-tbody');
  const empty = document.getElementById('empty-state');
  document.getElementById('tx-table-title').textContent = `تراکنش‌های ${activeCurrency}`;

  if (!txs.length) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  tbody.innerHTML = '';

  txs.forEach((t, i) => {
    const total = t.price * t.volume;
    let pnlCell = '—';
    let pnlClass = '';
    if (t.type === 'sell' && t.pnl !== undefined) {
      const sign = t.pnl >= 0 ? '+' : '';
      pnlCell = sign + fmtNum(t.pnl);
      pnlClass = t.pnl >= 0 ? 'pos' : 'neg';
    }
    const waCell = t.type === 'sell' && t.wa !== undefined ? fmtNum(t.wa) : '—';
    const dateStr = t.date ? new Date(t.date).toLocaleDateString('fa-IR') : '';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="color:var(--text-muted);font-size:10px;">${i+1}</td>
      <td><span class="badge ${t.type==='buy'?'badge-buy':'badge-sell'}">${t.type==='buy'?'خرید':'فروش'}</span></td>
      <td style="font-weight:600;font-size:11px;">${activeCurrency}</td>
      <td style="font-size:11px;">${fmtNum(t.price)}</td>
      <td><span class="badge ${t.unit==='TMN'?'badge-tmn':'badge-usdt'}">${t.unit}</span></td>
      <td style="font-size:11px;">${fmtNum(t.volume)}</td>
      <td style="font-size:11px;">${fmtNum(total)}</td>
      <td style="font-size:11px;">${t.fee ? fmtNum(t.fee) : '—'}</td>
      <td style="font-size:11px;">${waCell}</td>
      <td class="${pnlClass}" style="font-size:11px;">${pnlCell}</td>
      <td style="font-size:10px;color:var(--text-muted);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${t.note||dateStr}</td>
      <td><button class="btn-danger" style="padding:4px 8px;font-size:10px;" onclick="deleteRow(${i})">✕</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// ─── CURRENT PRICE PER COIN ─────────────────────────────────
function saveCurrentPrice() {
  const price = parseFloat(document.getElementById('current-price').value) || 0;
  const unit  = document.getElementById('cur-price-currency').value;
  if (!activeCurrency) return;
  allCurrentPrices[activeCurrency] = { price, unit };
  localStorage.setItem('ompf_current_prices', JSON.stringify(allCurrentPrices));
  updateSummary();
}
function loadCurrentPrice() {
  const data = allCurrentPrices[activeCurrency] || { price: 0, unit: 'TMN' };
  document.getElementById('current-price').value = data.price > 0 ? data.price : '';
  document.getElementById('cur-price-currency').value = data.unit;
  document.getElementById('cur-price-coin-badge').textContent = activeCurrency || '—';
  updateSummary();
}
// ─── SUMMARY ─────────────────────────────────────────────────
function updateSummary() {
  const txs = getTxs(activeCurrency);

  // Separate by unit
  const units = ['TMN', 'USDT'];
  let tmnBuyVol=0, tmnBuyCost=0, usdtBuyVol=0, usdtBuyCost=0;
  let tmnSellVol=0, tmnSellPnl=0, usdtSellVol=0, usdtSellPnl=0;

  for (const t of txs) {
    if (t.type === 'buy') {
      if (t.unit === 'TMN')  { tmnBuyVol  += t.volume; tmnBuyCost  += t.price * t.volume + t.fee; }
      if (t.unit === 'USDT') { usdtBuyVol += t.volume; usdtBuyCost += t.price * t.volume + t.fee; }
    }
    if (t.type === 'sell') {
      if (t.unit === 'TMN')  { tmnSellVol  += t.volume; tmnSellPnl  += (t.pnl || 0); }
      if (t.unit === 'USDT') { usdtSellVol += t.volume; usdtSellPnl += (t.pnl || 0); }
    }
  }

  const tmnAvg  = tmnBuyVol  > 0 ? tmnBuyCost  / tmnBuyVol  : 0;
  const usdtAvg = usdtBuyVol > 0 ? usdtBuyCost / usdtBuyVol : 0;

  // Remaining volume & cost (for break-even)
  const tmnRemVol   = Math.max(0, tmnBuyVol  - tmnSellVol);
  const usdtRemVol  = Math.max(0, usdtBuyVol - usdtSellVol);
  const tmnRemCost  = tmnAvg  * tmnRemVol;
  const usdtRemCost = usdtAvg * usdtRemVol;
  const tmnBE  = tmnRemVol  > 0 ? tmnRemCost  / tmnRemVol  : tmnAvg;
  const usdtBE = usdtRemVol > 0 ? usdtRemCost / usdtRemVol : usdtAvg;

  // Current price for unrealized PnL
  const curPrice = parseFloat(document.getElementById('current-price').value) || 0;
  const curUnit  = document.getElementById('cur-price-currency').value;

  let unrealizedPnl = 0;
  if (curPrice > 0) {
    if (curUnit === 'TMN'  && tmnRemVol  > 0) unrealizedPnl = (curPrice - tmnBE)  * tmnRemVol;
    if (curUnit === 'USDT' && usdtRemVol > 0) unrealizedPnl = (curPrice - usdtBE) * usdtRemVol;
  }
  const realizedPnl = curUnit === 'TMN' ? tmnSellPnl : usdtSellPnl;
  const totalPnl = realizedPnl + unrealizedPnl;

  // Primary unit display (prefer the unit with data)
  const hasUSDT = usdtBuyVol > 0;
  const hasTMN  = tmnBuyVol  > 0;

  let avgDisplay='—', avgUnit='', beDisplay='—', beUnit='', volDisplay='—', costDisplay='—', costUnit='';
  if (hasTMN && !hasUSDT) {
    avgDisplay = fmtNum(tmnAvg);   avgUnit  = 'تومان';
    beDisplay  = fmtNum(tmnBE);    beUnit   = 'تومان';
    volDisplay = fmtNum(tmnBuyVol);
    costDisplay= fmtNum(tmnBuyCost); costUnit='تومان';
  } else if (hasUSDT && !hasTMN) {
    avgDisplay = fmtNum(usdtAvg);  avgUnit  = 'USDT';
    beDisplay  = fmtNum(usdtBE);   beUnit   = 'USDT';
    volDisplay = fmtNum(usdtBuyVol);
    costDisplay= fmtNum(usdtBuyCost); costUnit='USDT';
  } else if (hasTMN && hasUSDT) {
    avgDisplay = fmtNum(tmnAvg)+' / '+fmtNum(usdtAvg); avgUnit='TMN / USDT';
    beDisplay  = fmtNum(tmnBE) +' / '+fmtNum(usdtBE);  beUnit ='TMN / USDT';
    volDisplay = fmtNum(tmnBuyVol)+' / '+fmtNum(usdtBuyVol);
    costDisplay= fmtNum(tmnBuyCost)+' / '+fmtNum(usdtBuyCost); costUnit='TMN / USDT';
  }

  document.getElementById('s-avg').textContent = avgDisplay;
  document.getElementById('s-avg-unit').textContent = avgUnit;
  document.getElementById('s-be').textContent = beDisplay;
  document.getElementById('s-be-unit').textContent = beUnit;
  document.getElementById('s-vol').textContent = volDisplay ? volDisplay + ' ' + activeCurrency : '—';
  document.getElementById('s-cost').textContent = costDisplay;
  document.getElementById('s-cost-unit').textContent = costUnit;

  // PnL card
  const pnlCard = document.getElementById('s-pnl-card');
  const pnlEl   = document.getElementById('s-pnl');
  const pnlPct  = document.getElementById('s-pnl-pct');
  const pnlBar  = document.getElementById('pnl-bar');
  const totalCost = curUnit==='TMN' ? tmnBuyCost : usdtBuyCost;

  if (curPrice > 0 || realizedPnl !== 0) {
    const sign = totalPnl >= 0 ? '+' : '';
    pnlEl.textContent = sign + fmtNum(totalPnl) + ' ' + curUnit;
    pnlEl.className   = 'sum-card-value ' + (totalPnl >= 0 ? 'pos' : 'neg');
    const pct = totalCost > 0 ? (totalPnl / totalCost) * 100 : 0;
    pnlPct.textContent = (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%  (شامل تحقق‌یافته + محقق‌نشده)';
    pnlCard.className  = 'sum-card ' + (totalPnl >= 0 ? 'green' : 'red');
    const barW = Math.min(Math.abs(pct), 100);
    pnlBar.style.width = barW + '%';
    pnlBar.style.background = totalPnl >= 0 ? 'var(--accent-green)' : 'var(--accent-red)';
  } else {
    pnlEl.textContent = '—';
    pnlEl.className   = 'sum-card-value';
    pnlPct.textContent = 'قیمت لحظه‌ای را وارد کنید';
    pnlCard.className  = 'sum-card green';
    pnlBar.style.width = '0%';
  }

  // Current price card
  document.getElementById('s-cur').textContent = curPrice ? fmtNum(curPrice) : '—';
  document.getElementById('s-cur-unit').textContent = curPrice ? curUnit : '';
  document.getElementById('cur-price-unit-label').textContent = '(' + curUnit + ')';
}

// ─── HELPERS ─────────────────────────────────────────────────
function fmtNum(n) {
  if (n === undefined || n === null || isNaN(n)) return '—';
  if (Math.abs(n) >= 1e9)  return (n/1e9).toFixed(2)  + 'B';
  if (Math.abs(n) >= 1e6)  return (n/1e6).toFixed(3)  + 'M';
  if (Math.abs(n) < 0.001) return n.toPrecision(4);
  if (Math.abs(n) < 1)     return n.toPrecision(5);
  return n.toLocaleString('fa-IR', {maximumFractionDigits: 2});
}

function save() {
  localStorage.setItem('ompf_currencies',    JSON.stringify(currencies));
  localStorage.setItem('ompf_transactions',  JSON.stringify(allTransactions));
  localStorage.setItem('ompf_current_prices', JSON.stringify(allCurrentPrices));
  localStorage.setItem('ompf_journal',        JSON.stringify(tradeJournal));
}

// ─── MODALS ──────────────────────────────────────────────────
function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

let _deleteCallback = null;
function showDeleteModal(title, body, cb) {
  document.getElementById('modal-delete-title').textContent = title;
  document.getElementById('modal-delete-body').innerHTML = body;
  _deleteCallback = cb;
  document.getElementById('modal-delete-confirm').onclick = () => {
    if (_deleteCallback) _deleteCallback();
    closeModal('modal-delete');
  };
  openModal('modal-delete');
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(el => {
  el.addEventListener('click', e => { if (e.target === el) el.classList.remove('open'); });
});

init();

// ══════════ DRAWER ══════════
let drawerOpen = false;
function toggleDrawer() {
  drawerOpen = !drawerOpen;
  document.getElementById('side-drawer').classList.toggle('open', drawerOpen);
  document.getElementById('drawer-toggle-btn').classList.toggle('open', drawerOpen);
  if (drawerOpen) { populateChartCoinSel(); renderPnlChart(); renderJournal(); }
}
function switchDrawerTab(tab) {
  document.querySelectorAll('.drawer-tab').forEach((b,i) => {
    const tabs = ['chart','rr','possize','journal'];
    b.classList.toggle('active', tabs[i] === tab);
  });
  document.querySelectorAll('.drawer-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + tab).classList.add('active');
  if (tab === 'chart') { populateChartCoinSel(); renderPnlChart(); }
  if (tab === 'journal') renderJournal();
}

// ══════════ CHART ══════════
function populateChartCoinSel() {
  const sel = document.getElementById('chart-coin-sel');
  const cur = sel.value;
  sel.innerHTML = '';
  currencies.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c; opt.textContent = c;
    if (c === cur || (!cur && c === activeCurrency)) opt.selected = true;
    sel.appendChild(opt);
  });
}
let activePeriod = '1d';
function setPeriod(p) {
  activePeriod = p;
  document.querySelectorAll('.chart-period-tab').forEach(b => b.classList.toggle('active', b.dataset.period === p));
  renderPnlChart();
}
function buildChartData(coin, unit, period) {
  const txs = (allTransactions[coin] || []).filter(t => t.type==='sell' && t.unit===unit && t.pnl!==undefined);
  const now = new Date(); let buckets = [];
  if (period==='1d') {
    const ds = new Date(now); ds.setHours(0,0,0,0);
    for (let h=0;h<24;h++) { const s=new Date(ds);s.setHours(h);const e=new Date(ds);e.setHours(h+1);buckets.push({label:h+':00',start:s,end:e,pnl:0}); }
  } else if (period==='1w') {
    for (let d=6;d>=0;d--) { const s=new Date(now);s.setDate(s.getDate()-d);s.setHours(0,0,0,0);const e=new Date(s);e.setHours(23,59,59,999);buckets.push({label:s.toLocaleDateString('fa-IR',{weekday:'short',month:'numeric',day:'numeric'}),start:s,end:e,pnl:0}); }
  } else if (period==='1m') {
    for (let w=3;w>=0;w--) { const e=new Date(now);e.setDate(e.getDate()-w*7);e.setHours(23,59,59,999);const s=new Date(e);s.setDate(s.getDate()-6);s.setHours(0,0,0,0);buckets.push({label:'هفته '+(4-w),start:s,end:e,pnl:0}); }
  } else if (period==='1y') {
    for (let m=11;m>=0;m--) { const d=new Date(now.getFullYear(),now.getMonth()-m,1);const s=new Date(d.getFullYear(),d.getMonth(),1);const e=new Date(d.getFullYear(),d.getMonth()+1,0,23,59,59,999);buckets.push({label:d.toLocaleDateString('fa-IR',{month:'short',year:'2-digit'}),start:s,end:e,pnl:0}); }
  }
  txs.forEach(t => { const d=new Date(t.date);const b=buckets.find(bk=>d>=bk.start&&d<=bk.end);if(b)b.pnl+=t.pnl; });
  let cum=0; const cumulativeData=buckets.map(b=>{cum+=b.pnl;return+cum.toFixed(4);});
  return {labels:buckets.map(b=>b.label),periodData:buckets.map(b=>+b.pnl.toFixed(4)),cumulativeData};
}
let pnlChartInstance = null;
function renderPnlChart() {
  const coin=document.getElementById('chart-coin-sel').value;
  const unit=document.getElementById('chart-unit-sel').value;
  const canvas=document.getElementById('pnl-chart');
  const emptyMsg=document.getElementById('chart-empty-msg');
  if (!coin){emptyMsg.style.display='flex';canvas.style.display='none';return;}
  const {labels,periodData,cumulativeData}=buildChartData(coin,unit,activePeriod);
  const hasData=periodData.some(v=>v!==0);
  if (!hasData){emptyMsg.style.display='flex';canvas.style.display='none';if(pnlChartInstance){pnlChartInstance.destroy();pnlChartInstance=null;}return;}
  emptyMsg.style.display='none';canvas.style.display='block';
  const last=cumulativeData[cumulativeData.length-1];
  const color=last>=0?'#00d68f':'#ff4d7e',fill=last>=0?'rgba(0,214,143,0.12)':'rgba(255,77,126,0.12)';
  if(pnlChartInstance){pnlChartInstance.destroy();pnlChartInstance=null;}
  pnlChartInstance=new Chart(canvas,{
    type:'line',data:{labels,datasets:[
      {label:'تجمیعی ('+unit+')',data:cumulativeData,borderColor:color,backgroundColor:fill,borderWidth:2,pointRadius:4,pointBackgroundColor:color,fill:true,tension:0.35,yAxisID:'y'},
      {label:'دوره‌ای ('+unit+')', data:periodData,borderColor:'#3d9be9',backgroundColor:'rgba(61,155,233,0.06)',borderWidth:1.5,borderDash:[4,4],pointRadius:3,pointBackgroundColor:'#3d9be9',fill:false,tension:0.35,yAxisID:'y'}
    ]},
    options:{responsive:true,interaction:{mode:'index',intersect:false},
      plugins:{legend:{labels:{color:'#8ab0cc',font:{family:'Vazirmatn',size:10},boxWidth:12}},
        tooltip:{backgroundColor:'#162840',borderColor:'#264d70',borderWidth:1,titleColor:'#e8f1fa',bodyColor:'#8ab0cc',
          titleFont:{family:'Vazirmatn',size:10},bodyFont:{family:'Vazirmatn',size:10},
          callbacks:{label:ctx=>' '+ctx.dataset.label+': '+ctx.parsed.y.toLocaleString('fa-IR')+' '+unit}}},
      scales:{x:{ticks:{color:'#4d7a9e',font:{family:'Vazirmatn',size:9},maxRotation:45},grid:{color:'#1e3d5c'}},
              y:{ticks:{color:'#4d7a9e',font:{family:'Vazirmatn',size:9},callback:v=>v.toLocaleString('fa-IR')},grid:{color:'#1e3d5c'}}}}
  });
}

// ══════════ R:R CALCULATOR ══════════
let rrDirection='long', rrUnit='TMN';
function setRRUnit(unit) {
  rrUnit=unit;
  document.getElementById('rr-unit-tmn-btn').className='rr-unit-btn'+(unit==='TMN'?' active-tmn':'');
  document.getElementById('rr-unit-usdt-btn').className='rr-unit-btn'+(unit==='USDT'?' active-usdt':'');
  const badge=document.getElementById('rr-unit-badge');
  badge.className='rr-unit-label '+(unit==='TMN'?'tmn':'usdt');
  badge.textContent=unit==='TMN'?'تومان':'USDT';
  calcRR();
}
function setRRDir(dir) {
  rrDirection=dir;
  document.getElementById('rr-long-btn').className='rr-dir-btn'+(dir==='long'?' active-long':'');
  document.getElementById('rr-short-btn').className='rr-dir-btn'+(dir==='short'?' active-short':'');
  calcRR();
}
function calcRR() {
  const entry=parseFloat(document.getElementById('rr-entry').value);
  const sl=parseFloat(document.getElementById('rr-sl').value);
  const tp=parseFloat(document.getElementById('rr-tp').value);
  const resultEl=document.getElementById('rr-result'),ratioEl=document.getElementById('rr-ratio');
  const verdictEl=document.getElementById('rr-verdict'),detailEl=document.getElementById('rr-detail');
  const actionEl=document.getElementById('rr-action-btns');
  document.getElementById('rr-decision-msg').textContent='';
  const unitLabel=rrUnit==='TMN'?'تومان':'USDT';
  if(!entry||!sl||!tp){resultEl.className='rr-result neutral';ratioEl.textContent='—';verdictEl.textContent='قیمت ورود، حد ضرر و حد سود را وارد کنید';detailEl.textContent='';actionEl.style.display='none';return;}
  let dirErr='';
  if(rrDirection==='long'&&sl>=entry)dirErr='⚠️ در لانگ، حد ضرر باید پایین‌تر از قیمت ورود باشد';
  if(rrDirection==='long'&&tp<=entry)dirErr='⚠️ در لانگ، حد سود باید بالاتر از قیمت ورود باشد';
  if(rrDirection==='short'&&sl<=entry)dirErr='⚠️ در شورت، حد ضرر باید بالاتر از قیمت ورود باشد';
  if(rrDirection==='short'&&tp>=entry)dirErr='⚠️ در شورت، حد سود باید پایین‌تر از قیمت ورود باشد';
  if(dirErr){resultEl.className='rr-result neutral';ratioEl.textContent='⚠️';verdictEl.textContent=dirErr;detailEl.textContent='';actionEl.style.display='none';return;}
  const risk=Math.abs(entry-sl),reward=Math.abs(tp-entry);
  if(risk===0){verdictEl.textContent='⚠️ حد ضرر برابر قیمت ورود است';actionEl.style.display='none';return;}
  const rr=reward/risk,riskPct=(risk/entry*100).toFixed(2),rewardPct=(reward/entry*100).toFixed(2);
  ratioEl.textContent='1 : '+rr.toFixed(2);
  let cls,verdict;
  if(rr>=2){cls='green';verdict='✅ ریسک به ریوارد عالی — معامله توجیه دارد';}
  else if(rr>=1){cls='yellow';verdict='⚠️ ریسک به ریوارد متوسط — با احتیاط وارد شوید';}
  else{cls='red';verdict='❌ ریسک به ریوارد ضعیف — توصیه به عدم ورود';}
  resultEl.className='rr-result '+cls;verdictEl.textContent=verdict;
  detailEl.innerHTML=['📍 قیمت ورود: <strong>'+entry.toLocaleString('fa-IR')+' '+unitLabel+'</strong>','🔴 حد ضرر: <strong>'+sl.toLocaleString('fa-IR')+'</strong> (ریسک: '+riskPct+'%)','🟢 حد سود: <strong>'+tp.toLocaleString('fa-IR')+'</strong> (ریوارد: '+rewardPct+'%)','📊 نسبت R:R = <strong>'+rr.toFixed(3)+'</strong>'].join('<br>');
  actionEl.style.display='flex';
}
function rrDecision(decision) {
  const msg=document.getElementById('rr-decision-msg');
  if(decision==='confirm'){msg.style.color='#00d68f';msg.textContent='✅ معامله تأیید شد — موفق باشید!';}
  else{msg.style.color='#ff4d7e';msg.textContent='❌ معامله رد شد — فرصت بهتری پیدا خواهید کرد.';}
  setTimeout(()=>{msg.textContent='';},4000);
}

// ══════════ POSITION SIZE CALCULATOR ══════════
function calcPositionSize() {
  const capital  = parseFloat(document.getElementById('ps-capital').value);
  const riskPct  = parseFloat(document.getElementById('ps-risk-pct').value) || 2;
  const entry    = parseFloat(document.getElementById('ps-entry').value);
  const sl       = parseFloat(document.getElementById('ps-sl').value);
  const tp       = parseFloat(document.getElementById('ps-tp').value);
  const unit     = document.getElementById('ps-unit').value;
  const unitLabel= unit==='TMN'?'تومان':'USDT';
  const box      = document.getElementById('ps-result-box');

  if (!capital || !entry || !sl) {
    box.innerHTML='<div style="font-size:10px;color:#4d7a9e;text-align:center;padding:20px 0;">سرمایه کل، درصد ریسک، قیمت ورود و حد ضرر را وارد کنید</div>';
    return;
  }
  const riskAmount   = capital * (riskPct / 100);
  const slDistance   = Math.abs(entry - sl);
  if (slDistance === 0) { box.innerHTML='<div style="color:#ff4d7e;padding:10px;font-size:11px;">⚠️ حد ضرر نمی‌تواند برابر قیمت ورود باشد</div>'; return; }
  const positionSize = riskAmount / slDistance;         // units of coin
  const positionVal  = positionSize * entry;             // total value
  const slPct        = (slDistance / entry * 100).toFixed(2);
  const maxLoss      = riskAmount;

  let rrRow = '';
  if (tp && tp !== entry) {
    const reward = Math.abs(tp - entry);
    const rr = (reward / slDistance).toFixed(2);
    const potentialProfit = positionSize * reward;
    rrRow = `
      <div class="ps-result-row">
        <span class="ps-result-label">🟢 سود احتمالی</span>
        <span class="ps-result-val" style="color:#00d68f;">+${fmtNum(potentialProfit)} ${unitLabel}</span>
      </div>
      <div class="ps-result-row">
        <span class="ps-result-label">📊 نسبت R:R</span>
        <span class="ps-result-val" style="color:${parseFloat(rr)>=2?'#00d68f':parseFloat(rr)>=1?'#f0c040':'#ff4d7e'};">1 : ${rr}</span>
      </div>`;
  }

  box.innerHTML = `
    <div style="font-size:11px;font-weight:700;color:#a78bfa;margin-bottom:10px;text-align:center;">📐 نتیجه محاسبه حجم معامله</div>
    <div class="ps-result-row">
      <span class="ps-result-label">💰 حجم پیشنهادی (واحد ارز)</span>
      <span class="ps-result-val highlight">${fmtNum(positionSize)}</span>
    </div>
    <div class="ps-result-row">
      <span class="ps-result-label">💵 ارزش کل پوزیشن</span>
      <span class="ps-result-val">${fmtNum(positionVal)} ${unitLabel}</span>
    </div>
    <div class="ps-result-row">
      <span class="ps-result-label">🔴 حداکثر ضرر قابل قبول</span>
      <span class="ps-result-val" style="color:#ff4d7e;">−${fmtNum(maxLoss)} ${unitLabel}</span>
    </div>
    <div class="ps-result-row">
      <span class="ps-result-label">📉 فاصله تا حد ضرر</span>
      <span class="ps-result-val">${slPct}٪</span>
    </div>
    <div class="ps-result-row">
      <span class="ps-result-label">⚠️ درصد ریسک از سرمایه</span>
      <span class="ps-result-val" style="color:#f0c040;">${riskPct}٪</span>
    </div>
    ${rrRow}
    <div style="margin-top:10px;font-size:9px;color:#4d7a9e;background:#a78bfa0a;border-radius:6px;padding:8px;line-height:1.7;">
      💡 با ${riskPct}٪ ریسک از سرمایه ${fmtNum(capital)} ${unitLabel}، حداکثر ${fmtNum(riskAmount)} ${unitLabel} در این معامله ریسک می‌کنید.
    </div>`;
}

// ══════════ TRADING JOURNAL ══════════
const emotionLabels = {
  confident:'😎 اطمینان', fearful:'😨 ترس', greedy:'🤑 طمع',
  hasty:'⚡ عجله', calm:'🧘 آرامش', fomo:'😱 FOMO', revenge:'😤 انتقام', '':'—'
};

function addJournalEntry() {
  const coin    = document.getElementById('jrn-coin').value.trim().toUpperCase();
  const dir     = document.getElementById('jrn-dir').value;
  const entry   = parseFloat(document.getElementById('jrn-entry').value) || 0;
  const exit    = parseFloat(document.getElementById('jrn-exit').value) || null;
  const outcome = document.getElementById('jrn-outcome').value;
  const emotion = document.getElementById('jrn-emotion').value;
  const reason  = document.getElementById('jrn-reason').value.trim();
  const lesson  = document.getElementById('jrn-lesson').value.trim();

  if (!coin) return alert('نام ارز را وارد کنید');
  if (!entry) return alert('قیمت ورود را وارد کنید');

  tradeJournal.unshift({
    id: Date.now(),
    coin, dir, entry, exit, outcome, emotion, reason, lesson,
    date: new Date().toISOString()
  });
  save();

  ['jrn-coin','jrn-entry','jrn-exit','jrn-reason','jrn-lesson'].forEach(id => { document.getElementById(id).value = ''; });
  document.getElementById('jrn-outcome').value = 'open';
  document.getElementById('jrn-emotion').value = '';
  renderJournal();
}

function deleteJournalEntry(id) {
  tradeJournal = tradeJournal.filter(e => e.id !== id);
  save(); renderJournal();
}

function renderJournal() {
  // Stats
  const total = tradeJournal.length;
  const wins  = tradeJournal.filter(e => e.outcome === 'win').length;
  const losses= tradeJournal.filter(e => e.outcome === 'loss').length;
  const winRate = total > 0 ? Math.round((wins / (wins + losses || 1)) * 100) : 0;
  const statsEl = document.getElementById('journal-stats');
  statsEl.innerHTML = `
    <div class="journal-stat-card"><div class="journal-stat-val">${total}</div><div class="journal-stat-label">کل معاملات</div></div>
    <div class="journal-stat-card"><div class="journal-stat-val" style="color:#00d68f;">${wins}W / ${losses}L</div><div class="journal-stat-label">سود / ضرر</div></div>
    <div class="journal-stat-card"><div class="journal-stat-val" style="color:${winRate>=50?'#00d68f':'#ff4d7e'};">${winRate}٪</div><div class="journal-stat-label">نرخ برد</div></div>`;

  // Entries
  const listEl = document.getElementById('journal-entries');
  if (tradeJournal.length === 0) {
    listEl.innerHTML = '<div style="text-align:center;color:#4d7a9e;font-size:11px;padding:20px 0;">هنوز هیچ معامله‌ای ثبت نشده است</div>';
    return;
  }
  listEl.innerHTML = tradeJournal.slice(0, 30).map(e => {
    const d = new Date(e.date).toLocaleDateString('fa-IR', {month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
    const dirCls = e.dir === 'long' ? 'long' : 'short';
    const dirLabel = e.dir === 'long' ? '📈 لانگ' : '📉 شورت';
    const outLabel = e.outcome === 'win' ? '✅ سود' : e.outcome === 'loss' ? '❌ ضرر' : '🔵 باز';
    const exitStr  = e.exit ? ' → ' + e.exit.toLocaleString('fa-IR') : '';
    return `<div class="journal-entry">
      <button class="journal-del-btn" onclick="deleteJournalEntry(${e.id})">🗑</button>
      <div class="journal-entry-header">
        <div>
          <span class="journal-entry-coin">${e.coin}</span>
          <span class="journal-entry-dir ${dirCls}">${dirLabel}</span>
          <span class="journal-entry-outcome ${e.outcome}">${outLabel}</span>
        </div>
        <span class="journal-entry-date">${d}</span>
      </div>
      <div style="font-size:10px;color:#8ab0cc;margin-bottom:4px;">
        💰 ورود: <strong>${e.entry.toLocaleString('fa-IR')}</strong>${exitStr}
        ${e.emotion ? ' &nbsp;|&nbsp; ' + (emotionLabels[e.emotion] || e.emotion) : ''}
      </div>
      ${e.reason  ? '<div class="journal-entry-reason">📋 <strong>دلیل ورود:</strong> '+e.reason+'</div>' : ''}
      ${e.lesson  ? '<div class="journal-entry-emotion" style="color:#a78bfa;">💡 <strong>درس:</strong> '+e.lesson+'</div>' : ''}
    </div>`;
  }).join('');
}

// ══════════ PDF EXPORT ══════════
function exportPDF() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('fa-IR') + '  ' + now.toLocaleTimeString('fa-IR',{hour:'2-digit',minute:'2-digit'});
  let html = `<!DOCTYPE html><html lang="fa" dir="rtl"><head><meta charset="UTF-8"><title>گزارش OMPF</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Vazirmatn',sans-serif;background:#fff;color:#111;padding:24px 30px;font-size:12px;}
  .rh{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #1a3050;padding-bottom:14px;margin-bottom:20px;}
  .rt{font-size:20px;font-weight:700;color:#0d2040;} .rs{font-size:11px;color:#666;margin-top:3px;} .rd{font-size:10px;color:#888;}
  .cs{margin-bottom:26px;break-inside:avoid-page;}
  .ct{background:linear-gradient(135deg,#0d2040,#1a3050);color:#fff;padding:8px 14px;border-radius:6px 6px 0 0;font-size:13px;font-weight:700;display:flex;justify-content:space-between;}
  .sr{display:flex;gap:10px;padding:10px 14px;background:#f4f8fc;border:1px solid #d0dce8;border-top:none;flex-wrap:wrap;}
  .si{flex:1;min-width:120px;} .sl{font-size:9px;color:#888;margin-bottom:2px;} .sv{font-size:12px;font-weight:700;color:#0d2040;}
  .sv.pos{color:#007a52;} .sv.neg{color:#b30030;}
  table{width:100%;border-collapse:collapse;border:1px solid #d0dce8;border-top:none;}
  thead th{background:#1a3050;color:#fff;padding:6px 10px;font-size:10px;font-weight:600;text-align:right;}
  tbody tr:nth-child(even){background:#f9fbfd;} tbody td{padding:6px 10px;font-size:10px;border-bottom:1px solid #e0eaf3;}
  .bb{background:#d4f5e9;color:#007a52;border:1px solid #a3dfc4;border-radius:3px;padding:1px 6px;font-size:9px;font-weight:600;}
  .bs{background:#fde0ea;color:#b30030;border:1px solid #f4aec2;border-radius:3px;padding:1px 6px;font-size:9px;font-weight:600;}
  .bt{background:#dbeafe;color:#1d4ed8;border-radius:3px;padding:1px 6px;font-size:9px;}
  .bu{background:#fef9c3;color:#854d0e;border-radius:3px;padding:1px 6px;font-size:9px;}
  .pos{color:#007a52;font-weight:600;} .neg{color:#b30030;font-weight:600;}
  .totals{margin-top:20px;padding:14px 18px;background:#f0f4f8;border:1px solid #c0cdd8;border-radius:8px;display:flex;gap:18px;flex-wrap:wrap;}
  .ti{flex:1;min-width:150px;} .tl{font-size:10px;color:#666;margin-bottom:2px;} .tv{font-size:14px;font-weight:700;}
  .footer{margin-top:24px;padding-top:10px;border-top:1px solid #d0dce8;font-size:9px;color:#aaa;text-align:center;}
  @media print{body{padding:10px 14px;}.cs{break-inside:avoid;}}
</style></head><body>
<div class="rh"><div><div class="rt">📊 گزارش سود و زیان معاملات</div><div class="rs">OMPF — داشبورد محاسبه میانگین موزون · تفکیک ارز · تومان / تتر</div></div><div class="rd">تاریخ: ${dateStr}</div></div>`;

  let grandTmn=0,grandUsdt=0,totalBuys=0,totalSells=0;
  currencies.forEach(coin => {
    const txs=allTransactions[coin]||[];
    if(txs.length===0)return;
    const buyTxs=txs.filter(t=>t.type==='buy'),sellTxs=txs.filter(t=>t.type==='sell');
    totalBuys+=buyTxs.length;totalSells+=sellTxs.length;
    let tB=0,tBC=0,uB=0,uBC=0,tSP=0,uSP=0,tSV=0,uSV=0;
    txs.forEach(t=>{
      if(t.type==='buy'){if(t.unit==='TMN'){tB+=t.volume;tBC+=t.price*t.volume+t.fee;}else{uB+=t.volume;uBC+=t.price*t.volume+t.fee;}}
      if(t.type==='sell'){if(t.unit==='TMN'){tSV+=t.volume;tSP+=(t.pnl||0);}else{uSV+=t.volume;uSP+=(t.pnl||0);}}
    });
    grandTmn+=tSP;grandUsdt+=uSP;
    const tA=tB>0?tBC/tB:0,uA=uB>0?uBC/uB:0;
    html+=`<div class="cs"><div class="ct"><span>🪙 ${coin}</span><div style="display:flex;gap:5px;">${buyTxs.length>0?'<span style="background:#00d68f22;border:1px solid #00d68f;color:#007a52;border-radius:4px;padding:1px 7px;font-size:10px;">'+buyTxs.length+' خرید</span>':''}${sellTxs.length>0?'<span style="background:#ff4d7e22;border:1px solid #ff4d7e;color:#b30030;border-radius:4px;padding:1px 7px;font-size:10px;">'+sellTxs.length+' فروش</span>':''}</div></div><div class="sr">`;
    if(tB>0){html+=`<div class="si"><div class="sl">میانگین موزون (تومان)</div><div class="sv">${fmtNum(tA)}</div></div><div class="si"><div class="sl">سود/زیان (تومان)</div><div class="sv ${tSP>=0?'pos':'neg'}">${tSP>=0?'+':''}${fmtNum(tSP)}</div></div>`;}
    if(uB>0){html+=`<div class="si"><div class="sl">میانگین موزون (USDT)</div><div class="sv">${fmtNum(uA)}</div></div><div class="si"><div class="sl">سود/زیان (USDT)</div><div class="sv ${uSP>=0?'pos':'neg'}">${uSP>=0?'+':''}${fmtNum(uSP)}</div></div>`;}
    html+=`</div><table><thead><tr><th>#</th><th>نوع</th><th>تاریخ</th><th>قیمت</th><th>واحد</th><th>حجم</th><th>ارزش کل</th><th>کارمزد</th><th>بهای تمام‌شده</th><th>سود/زیان</th><th>یادداشت</th></tr></thead><tbody>`;
    txs.forEach((t,i)=>{
      const d=new Date(t.date);const dl=d.toLocaleDateString('fa-IR')+' '+d.toLocaleTimeString('fa-IR',{hour:'2-digit',minute:'2-digit'});
      const pnlC=t.pnl!==undefined?(t.pnl>=0?'pos':'neg'):'';
      const pnlT=t.pnl!==undefined?((t.pnl>=0?'+':'')+fmtNum(t.pnl)):'—';
      html+=`<tr><td>${i+1}</td><td>${t.type==='buy'?'<span class="bb">خرید</span>':'<span class="bs">فروش</span>'}</td><td style="font-size:9px;">${dl}</td><td>${fmtNum(t.price)}</td><td>${t.unit==='TMN'?'<span class="bt">تومان</span>':'<span class="bu">USDT</span>'}</td><td>${fmtNum(t.volume)}</td><td>${fmtNum(t.price*t.volume)}</td><td>${fmtNum(t.fee||0)}</td><td>${t.wa!==undefined?fmtNum(t.wa):'—'}</td><td class="${pnlC}">${pnlT}</td><td style="font-size:9px;color:#666;">${t.note||'—'}</td></tr>`;
    });
    html+=`</tbody></table></div>`;
  });
  html+=`<div class="totals"><div style="width:100%;font-size:13px;font-weight:700;color:#0d2040;margin-bottom:6px;">📋 خلاصه کلی</div><div class="ti"><div class="tl">کل خریدها</div><div class="tv" style="color:#1d4ed8;">${totalBuys}</div></div><div class="ti"><div class="tl">کل فروش‌ها</div><div class="tv" style="color:#b30030;">${totalSells}</div></div><div class="ti"><div class="tl">جمع سود/زیان تومانی</div><div class="tv ${grandTmn>=0?'pos':'neg'}">${grandTmn>=0?'+':''}${fmtNum(grandTmn)} تومان</div></div><div class="ti"><div class="tl">جمع سود/زیان تتری</div><div class="tv ${grandUsdt>=0?'pos':'neg'}">${grandUsdt>=0?'+':''}${fmtNum(grandUsdt)} USDT</div></div></div>`;
  html+=`<div class="footer">گزارش توسط OMPF تولید شده | ${dateStr}</div></body></html>`;
  const win=window.open('','_blank','width=950,height=750');
  win.document.write(html);win.document.close();win.focus();
  setTimeout(()=>{win.print();},800);
}

</script>

<!-- ══ DRAWER TOGGLE ══ -->
<button class="drawer-toggle-btn" id="drawer-toggle-btn" onclick="toggleDrawer()">📊 ابزار تحلیل</button>

<!-- ══ SIDE DRAWER ══ -->
<div class="side-drawer" id="side-drawer">
  <div class="drawer-header">
    <button class="drawer-close" onclick="toggleDrawer()">✕</button>
    <div class="drawer-header-title">📊 ابزارهای تحلیل پیشرفته</div>
    <div class="drawer-header-sub">نمودار · ریسک به ریوارد · حجم معامله · ژورنال</div>
  </div>

  <!-- Tabs -->
  <div class="drawer-tabs">
    <button class="drawer-tab active" onclick="switchDrawerTab('chart')">📈 نمودار</button>
    <button class="drawer-tab"        onclick="switchDrawerTab('rr')">⚖️ R:R</button>
    <button class="drawer-tab"        onclick="switchDrawerTab('possize')">💰 حجم</button>
    <button class="drawer-tab"        onclick="switchDrawerTab('journal')">📓 ژورنال</button>
  </div>

  <!-- TAB 1: Chart -->
  <div class="drawer-panel active" id="panel-chart">
    <div class="drawer-section-title" style="margin-top:4px;">📈 نمودار تجمیعی سود / زیان <span></span></div>
    <div class="chart-sel-row">
      <label>ارز:</label>
      <select id="chart-coin-sel" onchange="renderPnlChart()"></select>
      <label style="margin-right:8px;">واحد:</label>
      <select id="chart-unit-sel" onchange="renderPnlChart()">
        <option value="TMN">تومان</option>
        <option value="USDT">تتر (USDT)</option>
      </select>
    </div>
    <div class="chart-period-tabs">
      <button class="chart-period-tab active" data-period="1d" onclick="setPeriod('1d')">۱ روز</button>
      <button class="chart-period-tab"        data-period="1w" onclick="setPeriod('1w')">۱ هفته</button>
      <button class="chart-period-tab"        data-period="1m" onclick="setPeriod('1m')">۱ ماه</button>
      <button class="chart-period-tab"        data-period="1y" onclick="setPeriod('1y')">۱ سال</button>
    </div>
    <div id="pnl-chart-wrap">
      <canvas id="pnl-chart"></canvas>
      <div class="chart-empty" id="chart-empty-msg">هنوز داده فروش ثبت‌شده‌ای وجود ندارد.</div>
    </div>
    <div style="margin-top:8px;font-size:10px;color:#4d7a9e;">نمودار تجمیعی = حاصل جمع جبری سود/زیان تحقق‌یافته فروش‌ها</div>
  </div>

  <!-- TAB 2: R:R Calculator -->
  <div class="drawer-panel" id="panel-rr">
    <div class="drawer-section-title" style="margin-top:4px;">⚖️ ماشین‌حساب ریسک به ریوارد <span></span></div>
    <div style="font-size:10px;color:#4d7a9e;margin-bottom:5px;font-weight:500;">واحد دارایی</div>
    <div class="rr-unit-toggle">
      <button class="rr-unit-btn active-tmn" id="rr-unit-tmn-btn"  onclick="setRRUnit('TMN')">🔵 تومانی</button>
      <button class="rr-unit-btn"            id="rr-unit-usdt-btn" onclick="setRRUnit('USDT')">🟡 تتری (USDT)</button>
    </div>
    <div style="font-size:10px;color:#4d7a9e;margin-bottom:5px;font-weight:500;">جهت معامله</div>
    <div class="rr-dir-toggle">
      <button class="rr-dir-btn active-long" id="rr-long-btn"  onclick="setRRDir('long')">📈 لانگ</button>
      <button class="rr-dir-btn"             id="rr-short-btn" onclick="setRRDir('short')">📉 شورت</button>
    </div>
    <div class="rr-inputs">
      <div class="rr-input-group" style="grid-column:1/-1;">
        <label>قیمت ورود <span id="rr-unit-badge" class="rr-unit-label tmn">تومان</span></label>
        <input type="number" id="rr-entry" placeholder="قیمت لحظه‌ای ورود" oninput="calcRR()">
      </div>
      <div class="rr-input-group">
        <label style="color:#ff4d7e;">🔴 حد ضرر (SL)</label>
        <input type="number" id="rr-sl" placeholder="حد ضرر" oninput="calcRR()">
      </div>
      <div class="rr-input-group">
        <label style="color:#00d68f;">🟢 حد سود (TP)</label>
        <input type="number" id="rr-tp" placeholder="حد سود" oninput="calcRR()">
      </div>
    </div>
    <div class="rr-result neutral" id="rr-result">
      <div class="rr-ratio"   id="rr-ratio">—</div>
      <div class="rr-verdict" id="rr-verdict">قیمت ورود، حد ضرر و حد سود را وارد کنید</div>
      <div class="rr-detail"  id="rr-detail"></div>
    </div>
    <div class="rr-action-btns" id="rr-action-btns" style="display:none;">
      <button class="rr-btn confirm" onclick="rrDecision('confirm')">✅ انجام معامله</button>
      <button class="rr-btn skip"    onclick="rrDecision('skip')">❌ رد کردن معامله</button>
    </div>
    <div id="rr-decision-msg" style="margin-top:8px;font-size:11px;font-weight:600;text-align:center;min-height:16px;"></div>
  </div>

  <!-- TAB 3: Position Size Calculator -->
  <div class="drawer-panel" id="panel-possize">
    <div class="drawer-section-title" style="margin-top:4px;">💰 محاسبه‌گر حجم معامله <span></span></div>
    <div style="font-size:10px;color:#8ab0cc;margin-bottom:12px;line-height:1.6;background:#00d68f0a;border:1px solid #00d68f22;border-radius:7px;padding:8px 10px;">
      با وارد کردن سرمایه کل و درصد ریسک، بهینه‌ترین حجم معامله را محاسبه کنید.
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:10px;">
      <div class="rr-input-group" style="grid-column:1/-1;">
        <label>واحد دارایی</label>
        <select id="ps-unit" onchange="calcPositionSize()" style="background:#0d1b2a;border:1px solid #264d70;border-radius:6px;color:#e8f1fa;font-family:'Vazirmatn',sans-serif;font-size:12px;padding:7px 10px;outline:none;width:100%;">
          <option value="TMN">تومان</option>
          <option value="USDT">تتر (USDT)</option>
        </select>
      </div>
      <div class="rr-input-group" style="grid-column:1/-1;">
        <label>کل سرمایه موجود</label>
        <input type="number" id="ps-capital" placeholder="مثال: 100,000,000 تومان" oninput="calcPositionSize()">
      </div>
      <div class="rr-input-group">
        <label>درصد ریسک هر معامله (%)</label>
        <input type="number" id="ps-risk-pct" placeholder="مثال: 2" value="2" min="0.1" max="100" step="0.1" oninput="calcPositionSize()">
      </div>
      <div class="rr-input-group">
        <label>قیمت ورود</label>
        <input type="number" id="ps-entry" placeholder="قیمت ورود" oninput="calcPositionSize()">
      </div>
      <div class="rr-input-group">
        <label style="color:#ff4d7e;">حد ضرر (SL)</label>
        <input type="number" id="ps-sl" placeholder="حد ضرر" oninput="calcPositionSize()">
      </div>
      <div class="rr-input-group">
        <label style="color:#00d68f;">حد سود (TP) — اختیاری</label>
        <input type="number" id="ps-tp" placeholder="حد سود (اختیاری)" oninput="calcPositionSize()">
      </div>
    </div>
    <div class="ps-result-box" id="ps-result-box">
      <div style="font-size:10px;color:#4d7a9e;text-align:center;padding:20px 0;">سرمایه کل، درصد ریسک، قیمت ورود و حد ضرر را وارد کنید</div>
    </div>
  </div>

  <!-- TAB 4: Trading Journal -->
  <div class="drawer-panel" id="panel-journal">
    <div class="drawer-section-title" style="margin-top:4px;">📓 ژورنال معاملاتی <span></span></div>

    <!-- Stats -->
    <div class="journal-stats" id="journal-stats"></div>

    <!-- Form -->
    <div class="journal-form">
      <div style="font-size:11px;font-weight:600;color:#8ab0cc;margin-bottom:10px;">➕ ثبت معامله جدید</div>
      <div class="journal-form-grid">
        <div class="journal-input-group">
          <label>ارز</label>
          <input type="text" id="jrn-coin" placeholder="مثال: BTC" style="text-transform:uppercase;">
        </div>
        <div class="journal-input-group">
          <label>جهت معامله</label>
          <select id="jrn-dir">
            <option value="long">📈 لانگ (خرید)</option>
            <option value="short">📉 شورت (فروش)</option>
          </select>
        </div>
        <div class="journal-input-group">
          <label>قیمت ورود</label>
          <input type="number" id="jrn-entry" placeholder="قیمت ورود">
        </div>
        <div class="journal-input-group">
          <label>قیمت خروج</label>
          <input type="number" id="jrn-exit" placeholder="خروج (اختیاری)">
        </div>
        <div class="journal-input-group">
          <label>نتیجه معامله</label>
          <select id="jrn-outcome">
            <option value="open">🔵 باز</option>
            <option value="win">✅ سود</option>
            <option value="loss">❌ ضرر</option>
          </select>
        </div>
        <div class="journal-input-group">
          <label>احساس هنگام معامله</label>
          <select id="jrn-emotion" class="emotion-select">
            <option value="">— انتخاب کنید —</option>
            <option value="confident">😎 اطمینان</option>
            <option value="fearful">😨 ترس</option>
            <option value="greedy">🤑 طمع</option>
            <option value="hasty">⚡ عجله</option>
            <option value="calm">🧘 آرامش</option>
            <option value="fomo">😱 FOMO</option>
            <option value="revenge">😤 انتقام</option>
          </select>
        </div>
        <div class="journal-input-group" style="grid-column:1/-1;">
          <label>دلیل ورود به معامله</label>
          <textarea id="jrn-reason" rows="2" placeholder="چرا وارد این معامله شدی؟ چه ست‌آپی دیدی؟"></textarea>
        </div>
        <div class="journal-input-group" style="grid-column:1/-1;">
          <label>درس‌آموخته / تحلیل بعد از بستن</label>
          <textarea id="jrn-lesson" rows="2" placeholder="بعد از بستن معامله، چه چیزی یاد گرفتی؟"></textarea>
        </div>
      </div>
      <button class="btn-primary" style="width:100%;font-size:12px;" onclick="addJournalEntry()">📝 ثبت در ژورنال</button>
    </div>

    <!-- Entries list -->
    <div id="journal-entries"></div>
  </div>

</div>

</body>
</html>
