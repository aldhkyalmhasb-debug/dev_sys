import { useState } from 'react';
import { Search, RefreshCw, ChevronDown, ChevronUp, FilePlus, ChevronLeft } from 'lucide-react';

interface InventoryIssueBrowseProps {
  onNavigate: (route: string) => void;
}

export default function InventoryIssueBrowse({ onNavigate }: InventoryIssueBrowseProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoc, setSelectedDoc] = useState<number | null>(null);

  const mockData = [
    { id: 1, docNo: '1001', type: 'صرف مخزني', movementType: 'عام', date: '2026-05-20', status: 'مرحل', note: '', addedBy: 'admin', recordDate: '2026-05-20 10:30' },
    { id: 2, docNo: '1002', type: 'صرف مخزني', movementType: 'تالف', date: '2026-05-19', status: 'جديد', note: 'بضاعة تالفة', addedBy: 'user1', recordDate: '2026-05-19 14:15' },
    { id: 3, docNo: '1003', type: 'صرف مخزني', movementType: 'عينات', date: '2026-05-18', status: 'مرحل', note: '', addedBy: 'admin', recordDate: '2026-05-18 09:00' },
    { id: 4, docNo: '1004', type: 'صرف مخزني', movementType: 'هدايا', date: '2026-05-17', status: 'مرحل', note: '', addedBy: 'admin', recordDate: '2026-05-17 11:00' },
    { id: 5, docNo: '1005', type: 'صرف مخزني', movementType: 'عام', date: '2026-05-16', status: 'جديد', note: '', addedBy: 'user2', recordDate: '2026-05-16 08:30' },
  ];

  const filteredData = mockData.filter(item =>
    item.docNo.includes(searchQuery) || item.movementType.includes(searchQuery)
  );

  const selectedRecord = selectedDoc ? mockData.find(d => d.id === selectedDoc) : null;

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f5f5f5', direction: 'rtl', fontFamily: 'Tahoma, Arial, sans-serif' }}>

      {/* ── Right Sidebar ── */}
      <div style={{ width: '280px', background: '#e8ecf0', borderRight: '1px solid #ccc', display: 'flex', flexDirection: 'column', boxShadow: '2px 0 8px rgba(0,0,0,0.1)' }}>
        {/* Sidebar Header */}
        <div style={{ background: 'linear-gradient(to bottom, #dce4ec, #c8d3df)', padding: '8px 12px', borderBottom: '1px solid #b0bec5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76' }}>أوامر الصرف المخزني</span>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#c0392b' }}>
            <ChevronLeft size={16} />
          </button>
        </div>

        {/* Search & Actions Bar */}
        <div style={{ padding: '8px', background: '#f0f4f8', borderBottom: '1px solid #d0d8e0', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: '#fffdf0', border: '1px solid #dcd89c', borderRadius: '4px', padding: '2px 6px', flex: 1 }}>
            <Search size={14} color="#888" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="رقم المستند"
              style={{ border: 'none', outline: 'none', padding: '2px 4px', fontSize: '12px', width: '100%', background: 'transparent', direction: 'rtl' }}
            />
          </div>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="تحديث">
            <RefreshCw size={14} color="#3c8dbc" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="السابق">
            <ChevronDown size={14} color="#3c8dbc" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="التالي">
            <ChevronUp size={14} color="#3c8dbc" />
          </button>
          <button onClick={() => onNavigate('inventory-issue-new')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="جديد">
            <FilePlus size={14} color="#28a745" />
          </button>
        </div>

        {/* Document List */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {filteredData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDoc(item.id)}
              style={{
                padding: '10px 12px',
                borderBottom: '1px solid #d0d8e0',
                cursor: 'pointer',
                background: selectedDoc === item.id ? '#d4e6f1' : 'transparent',
                transition: 'background 0.15s'
              }}
              onMouseEnter={(e) => {
                if (selectedDoc !== item.id) {
                  (e.currentTarget as HTMLElement).style.background = '#e8f0f8';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedDoc !== item.id) {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#3c8dbc' }}>{item.docNo}</span>
                <span style={{
                  padding: '1px 6px',
                  borderRadius: '3px',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  backgroundColor: item.status === 'مرحل' ? '#d4edda' : '#cce5ff',
                  color: item.status === 'مرحل' ? '#155724' : '#004085'
                }}>{item.status}</span>
              </div>
              <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>
                {item.movementType} - {item.date}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: '8px', background: '#dce4ec', borderTop: '1px solid #b0bec5', fontSize: '11px', color: '#666', textAlign: 'center' }}>
          {filteredData.length} مستند
        </div>
      </div>

      {/* ── Main Content Area ── */}
      <div style={{ flex: 1, background: '#f0f4f8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {selectedRecord ? (
          <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '80%', maxWidth: '600px', direction: 'rtl' }}>
            <h3 style={{ color: '#1a4e76', marginBottom: '20px', borderBottom: '2px solid #f39c12', paddingBottom: '10px' }}>تفاصيل أمر الصرف المخزني</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div>
                <label style={{ fontSize: '12px', color: '#666', display: 'block' }}>الرقم</label>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{selectedRecord.docNo}</span>
              </div>
              <div>
                <label style={{ fontSize: '12px', color: '#666', display: 'block' }}>النوع</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedRecord.type}</span>
              </div>
              <div>
                <label style={{ fontSize: '12px', color: '#666', display: 'block' }}>نوع الحركة المخزنية</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedRecord.movementType}</span>
              </div>
              <div>
                <label style={{ fontSize: '12px', color: '#666', display: 'block' }}>التاريخ</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedRecord.date}</span>
              </div>
              <div>
                <label style={{ fontSize: '12px', color: '#666', display: 'block' }}>الحالة</label>
                <span style={{
                  padding: '2px 8px',
                  borderRadius: '3px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: selectedRecord.status === 'مرحل' ? '#d4edda' : '#cce5ff',
                  color: selectedRecord.status === 'مرحل' ? '#155724' : '#004085'
                }}>{selectedRecord.status}</span>
              </div>
              <div>
                <label style={{ fontSize: '12px', color: '#666', display: 'block' }}>الإضافة بواسطة</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedRecord.addedBy}</span>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '12px', color: '#666', display: 'block' }}>ملاحظة</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedRecord.note || '-'}</span>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ color: '#999', fontSize: '16px' }}>
            اختر مستنداً من القائمة لعرض التفاصيل
          </div>
        )}
      </div>

    </div>
  );
}
