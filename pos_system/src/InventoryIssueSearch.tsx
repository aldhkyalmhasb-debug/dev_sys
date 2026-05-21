import { useState } from 'react';
import { Settings, LayoutGrid, Search, FilePlus, List, Play, ChevronDown, Check, Printer, RefreshCw, BookOpen } from 'lucide-react';

interface InventoryIssueSearchProps {
  onNavigate: (route: string) => void;
}

export default function InventoryIssueSearch({ onNavigate }: InventoryIssueSearchProps) {
  const [docNo, setDocNo] = useState('');
  const [docRefNo, setDocRefNo] = useState('');
  const [costAccount, setCostAccount] = useState('');
  const [costDebit, setCostDebit] = useState('');
  const [maxRecords, setMaxRecords] = useState('100');
  const [showToolsMenu, setShowToolsMenu] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setHasSearched(true);
  };

  return (
    <div className="si-page" style={{ direction: 'rtl', textAlign: 'right' }}>

      {/* ── Toolbar ── */}
      <div className="si-toolbar">

        {/* Right side (in RTL = first in DOM): action buttons */}
        <div className="si-toolbar-center">
          {/* تنفيذ */}
          <a href="#" onClick={handleSearch} className="si-tb-action si-tb-execute">
            <Play size={13} fill="#e67e22" color="#e67e22" />
            <span>تنفيذ</span>
            <span className="si-tb-execute-badge">1</span>
          </a>

          <span className="si-tb-sep">|</span>

          {/* بحث متقدم */}
          <a href="#" onClick={(e) => e.preventDefault()} className="si-tb-action">
            <Search size={14} color="#3c8dbc" />
            <span>بحث متقدم</span>
          </a>

          {/* جديد */}
          <a href="#" onClick={(e) => e.preventDefault()} className="si-tb-action si-tb-new">
            <FilePlus size={14} color="#28a745" />
            <span>جديد (أمر صرف مخزني)</span>
          </a>
        </div>

        {/* Left side (in RTL = last in DOM): settings icons */}
        <div className="si-toolbar-right">
          <button className="si-icon-btn"><LayoutGrid size={15} color="#555" /></button>
          <button className="si-icon-btn"><BookOpen size={15} color="#555" /></button>
          <div
            className="si-tool-dropdown"
            onMouseEnter={() => setShowToolsMenu(true)}
            onMouseLeave={() => setShowToolsMenu(false)}
          >
            <button className="si-icon-btn"><Settings size={15} color="#555" /></button>
            {showToolsMenu && (
              <div className="si-tool-panel">
                <a href="#">التقارير</a>
                <a href="#">عرض القائمة</a>
                <a href="#">سجل المتابعة</a>
                <div className="si-tool-sep"></div>
                <a href="#">الإعدادات</a>
                <a href="#">تحديث</a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="si-content">

        {/* Page Title */}
        <div className="si-title-bar">أوامر الصرف المخزني</div>

        {/* ── Search Form ── */}
        <div className="si-form-box">
          {/* Row 1: الرقم  |  رقم المستند */}
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                {/* الرقم – RIGHT column */}
                <td style={{ width: '50%', padding: '4px 10px', textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                    <input
                      type="text"
                      value={docNo}
                      onChange={(e) => setDocNo(e.target.value)}
                      className="si-text-input"
                      style={{ width: '180px', backgroundColor: '#ffffcc', border: '1px solid #aaa', height: '24px', padding: '0 6px', fontSize: '12px' }}
                    />
                    <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>الرقم</label>
                  </div>
                </td>
                {/* رقم المستند – LEFT column */}
                <td style={{ width: '50%', padding: '4px 10px', textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                    <input
                      type="text"
                      value={docRefNo}
                      onChange={(e) => setDocRefNo(e.target.value)}
                      className="si-text-input"
                      style={{ width: '300px', border: '1px solid #aaa', height: '24px', padding: '0 6px', fontSize: '12px' }}
                    />
                    <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>رقم المستند</label>
                  </div>
                </td>
              </tr>

              {/* Row 2: تقييد الكلفة على الحساب/المدين */}
              <tr>
                <td colSpan={2} style={{ padding: '4px 10px', textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                    {/* Second dropdown */}
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #aaa', height: '24px', backgroundColor: '#fff' }}>
                      <select
                        value={costDebit}
                        onChange={(e) => setCostDebit(e.target.value)}
                        style={{ height: '22px', border: 'none', outline: 'none', padding: '0 4px', fontSize: '12px', minWidth: '120px' }}
                      >
                        <option value=""></option>
                      </select>
                      <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0 3px' }}>
                        <ChevronDown size={11} color="#666" />
                      </button>
                    </div>
                    {/* First dropdown */}
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #aaa', height: '24px', backgroundColor: '#fff' }}>
                      <select
                        value={costAccount}
                        onChange={(e) => setCostAccount(e.target.value)}
                        style={{ height: '22px', border: 'none', outline: 'none', padding: '0 4px', fontSize: '12px', minWidth: '120px' }}
                      >
                        <option value=""></option>
                      </select>
                      <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0 3px' }}>
                        <ChevronDown size={11} color="#666" />
                      </button>
                    </div>
                    <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>تقييد الكلفة على الحساب/المدين</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Execute Button ── */}
        <div className="si-execute-row">
          <a href="#" onClick={handleSearch} className="si-execute-search-btn">
            <Check size={16} color="white" style={{ marginLeft: '8px' }} />
            <span>تنفيذ البحث</span>
          </a>
        </div>

        {/* ── Records Count Row ── */}
        <div className="si-records-section">
          <table className="si-records-table">
            <tbody>
              <tr>
                <td className="si-rec-empty"></td>
                <td className="si-rec-input-cell">
                  <input
                    type="text"
                    className="si-text-input si-rec-input"
                    value={maxRecords}
                    onChange={(e) => setMaxRecords(e.target.value)}
                  />
                </td>
                <td className="si-rec-label">عدد السجلات</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Footer Tab Tags ── */}
        <div className="si-footer-tags">
          {[
            'الإعدادات : سمات مخصصة',
            'المسودات',
            'أصناف المستندات',
            'أصناف المستندات ( كميات )',
            'أمر صرف البضاعة المباعة',
            'فئات المستند',
          ].map((label, idx) => (
            <a key={idx} href="#" onClick={(e) => e.preventDefault()} className="si-tag">
              <span style={{ fontSize: '12px' }}>✕</span>
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* ── Results Grid ── */}
        <div className="si-results-container" style={{ marginTop: '4px', border: '1px solid #bfc9d4' }}>
          {/* Grid action toolbar */}
          <div style={{
            backgroundColor: '#d5e2ec',
            padding: '3px 8px',
            borderBottom: '1px solid #bfc9d4',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <Printer size={14} color="#555" style={{ cursor: 'pointer' }} />
            <RefreshCw size={13} color="#3c8dbc" style={{ cursor: 'pointer' }} />
            <LayoutGrid size={13} color="#555" style={{ cursor: 'pointer' }} />
            <div style={{ flex: 1 }} />
          </div>

          {/* Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', direction: 'rtl' }}>
            <thead>
              <tr style={{ backgroundColor: '#5b7083', color: '#fff', textAlign: 'center' }}>
                <th style={{ padding: '5px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal', width: '35px' }}>م</th>
                <th style={{ padding: '5px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>الرقم</th>
                <th style={{ padding: '5px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>النوع</th>
                <th style={{ padding: '5px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>نوع الحركة المخزنية</th>
                <th style={{ padding: '5px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>التاريخ</th>
                <th style={{ padding: '5px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>الحالة</th>
                <th style={{ padding: '5px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>ملاحظة</th>
                <th style={{ padding: '5px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>الإضافة بواسطة</th>
                <th style={{ padding: '5px 8px', fontWeight: 'normal' }}>تاريخ السجل</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={9}
                  style={{ padding: '0', textAlign: 'right', verticalAlign: 'bottom', height: '120px' }}
                >
                  <div style={{
                    padding: '4px 8px',
                    borderTop: '1px solid #bfc9d4',
                    marginTop: 'auto'
                  }}>
                    <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#3c8dbc', fontSize: '12px', textDecoration: 'underline' }}>
                      فئات المستند
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
