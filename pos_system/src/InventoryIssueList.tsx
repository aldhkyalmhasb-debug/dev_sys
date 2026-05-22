import { useState } from 'react';
import { Settings, LayoutGrid, Search, FilePlus, Home, Printer, RefreshCw } from 'lucide-react';

interface InventoryIssueListProps {
  onNavigate: (route: string) => void;
}

export default function InventoryIssueList({ onNavigate }: InventoryIssueListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showToolsMenu, setShowToolsMenu] = useState(false);

  const mockData = [
    { id: 1, docNo: '1001', type: 'صرف مخزني', movementType: 'عام', date: '2026-05-20', status: 'مرحل', note: '', addedBy: 'admin', recordDate: '2026-05-20 10:30' },
    { id: 2, docNo: '1002', type: 'صرف مخزني', movementType: 'تالف', date: '2026-05-19', status: 'جديد', note: 'بضاعة تالفة', addedBy: 'user1', recordDate: '2026-05-19 14:15' },
    { id: 3, docNo: '1003', type: 'صرف مخزني', movementType: 'عينات', date: '2026-05-18', status: 'مرحل', note: '', addedBy: 'admin', recordDate: '2026-05-18 09:00' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f5f5f5', direction: 'rtl', fontFamily: 'Tahoma, Arial, sans-serif' }}>

      {/* ─ Secondary Toolbar ── */}
      <div style={{ background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)', borderBottom: '1px solid #ccc', padding: '4px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left side: Eco, Print, New, Advanced Search, Home, Settings */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '12px', color: '#3c8dbc', cursor: 'pointer' }}>Eco</span>

          <button style={{ background: '#fff', border: '1px solid #ccc', borderRadius: '3px', padding: '3px 8px', cursor: 'pointer' }}>
            <Printer size={14} color="#555" />
          </button>

          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('inventory-issue-new'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'linear-gradient(to bottom, #fff, #f0f0f0)', border: '1px solid #ccc', borderRadius: '3px', padding: '4px 12px', textDecoration: 'none', color: '#333', fontSize: '13px', fontWeight: 'bold' }}>
            <FilePlus size={14} color="#28a745" />
            <span>جديد (أمر صرف مخزني)</span>
          </a>

          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('inventory-issue-search'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'linear-gradient(to bottom, #fff, #f0f0f0)', border: '1px solid #ccc', borderRadius: '3px', padding: '4px 12px', textDecoration: 'none', color: '#333', fontSize: '13px', fontWeight: 'bold' }}>
            <Search size={14} color="#3c8dbc" />
            <span>بحث متقدم</span>
          </a>

          <span style={{ color: '#ccc' }}>|</span>

          <button style={{ background: '#fff', border: '1px solid #ccc', borderRadius: '3px', padding: '3px 8px', cursor: 'pointer' }}>
            <Home size={14} color="#555" />
          </button>

          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setShowToolsMenu(true)}
            onMouseLeave={() => setShowToolsMenu(false)}
          >
            <button style={{ background: '#fff', border: '1px solid #ccc', borderRadius: '3px', padding: '3px 8px', cursor: 'pointer' }}>
              <Settings size={14} color="#555" />
            </button>
            {showToolsMenu && (
              <div style={{ position: 'absolute', top: '100%', right: '0', background: '#fff', border: '1px solid #ccc', borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 100, minWidth: '180px', padding: '4px 0' }}>
                <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'block', padding: '8px 15px', color: '#333', textDecoration: 'none', fontSize: '13px' }}>التقارير</a>
                <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'block', padding: '8px 15px', color: '#333', textDecoration: 'none', fontSize: '13px' }}>عرض القائمة</a>
                <div style={{ borderTop: '1px solid #eee', margin: '4px 0' }}></div>
                <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'block', padding: '8px 15px', color: '#333', textDecoration: 'none', fontSize: '13px' }}>الإعدادات</a>
              </div>
            )}
          </div>
        </div>

        {/* Right side: Search box */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid #ccc', borderRadius: '4px', padding: '2px 8px' }}>
            <Search size={14} color="#888" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث : رقم المس"
              style={{ border: 'none', outline: 'none', padding: '2px 6px', fontSize: '12px', width: '120px', direction: 'rtl' }}
            />
          </div>
        </div>
      </div>

      {/* ── Table Container ── */}
      <div style={{ flex: 1, margin: '0', background: '#fff', overflow: 'hidden', direction: 'rtl' }}>
        {/* Table title bar */}
        <div style={{ backgroundColor: '#d5e2ec', padding: '4px 8px', borderBottom: '1px solid #bfc9d4', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76' }}>أوامر الصرف المخزني</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" style={{ margin: '0' }} />
            <Printer size={14} color="#555" style={{ cursor: 'pointer' }} />
            <RefreshCw size={13} color="#3c8dbc" style={{ cursor: 'pointer' }} />
            <LayoutGrid size={13} color="#555" style={{ cursor: 'pointer' }} />
          </div>
        </div>

        {/* Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', direction: 'rtl' }}>
          <thead>
            <tr style={{ backgroundColor: '#5b7083', color: '#fff', textAlign: 'center' }}>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal', width: '35px' }}>م</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>الرقم</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>النوع</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>نوع الحركة المخزنية</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>التاريخ</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>الحالة</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>ملاحظة</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>الإضافة بواسطة</th>
              <th style={{ padding: '6px 8px', fontWeight: 'normal' }}>تاريخ السجل</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, idx) => (
              <tr key={row.id} style={{ backgroundColor: idx % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.id}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center', color: '#3c8dbc', cursor: 'pointer' }}>{row.docNo}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.type}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.movementType}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.date}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>
                  <span style={{
                    padding: '2px 8px',
                    borderRadius: '3px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    backgroundColor: row.status === 'مرحل' ? '#d4edda' : row.status === 'جديد' ? '#cce5ff' : '#f8d7da',
                    color: row.status === 'مرحل' ? '#155724' : row.status === 'جديد' ? '#004085' : '#721c24'
                  }}>{row.status}</span>
                </td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.note}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.addedBy}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.recordDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Bottom Tags */}
        <div style={{ padding: '10px 15px', borderTop: '1px solid #e0e0e0', display: 'flex', flexWrap: 'wrap', gap: '8px', direction: 'rtl', background: '#f8f9fa' }}>
          {[
            'الإعدادات : سمات مخصصة',
            'المسودات',
            'أصناف المستندات',
            'أصناف المستندات ( كميات )',
            'أمر صرف البضاعة المباعة',
            'فئات المستند',
          ].map((label, idx) => (
            <a key={idx} href="#" onClick={(e) => e.preventDefault()} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 10px',
              background: '#fff',
              border: '1px solid #ccc',
              borderRadius: '3px',
              color: '#333',
              textDecoration: 'none',
              fontSize: '12px',
              cursor: 'pointer'
            }}>
              <span style={{ color: '#3c8dbc' }}>✎</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
