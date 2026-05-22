import { useState } from 'react';
import { Settings, ChevronLeft, Home, FilePlus, Printer, Search, Calendar, Info, Check, X, Copy, RefreshCw, Download, Eye } from 'lucide-react';

interface InventorySupplySearchProps {
  onNavigate: (route: string) => void;
  onClose: () => void;
}

export default function InventorySupplySearch({ onNavigate, onClose }: InventorySupplySearchProps) {
  const [activeTab, setActiveTab] = useState('main');
  const [recordCount, setRecordCount] = useState('500');

  const mockData = [
    { id: 1, docNo: '4', type: 'أمر توريد مخزني', movementType: 'توريد مخزني للبضاعة المشتراة', date: '2023-10-04', status: 'مرحل', note: '', addedBy: 'مواد غذائية جملة/تجزئة', recordDate: '2023-10-04' },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#e8ecf0',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000,
      direction: 'rtl',
      fontFamily: 'Tahoma, Arial, sans-serif'
    }}>

      {/* ── Title Bar ── */}
      <div style={{
        background: 'linear-gradient(to bottom, #f0f4f8, #dce4ec)',
        padding: '4px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #b0bec5'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <RefreshCw size={16} color="#3c8dbc" style={{ cursor: 'pointer' }} />
          <Copy size={16} color="#3c8dbc" style={{ cursor: 'pointer' }} />
        </div>
        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#1a4e76' }}>أمر توريد مخزني : بحث</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Home size={16} color="#3c8dbc" style={{ cursor: 'pointer' }} />
          <X size={16} color="#c0392b" style={{ cursor: 'pointer' }} onClick={onClose} />
        </div>
      </div>

      {/* ── Toolbar ── */}
      <div style={{
        background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)',
        padding: '6px 12px',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '8px'
      }}>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="إعدادات">
          <Settings size={18} color="#6c757d" />
        </button>
        <button style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          background: 'linear-gradient(to bottom, #e74c3c, #c0392b)',
          border: '1px solid #a93226',
          borderRadius: '3px',
          padding: '4px 12px',
          color: '#fff',
          fontSize: '13px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          <span>تنفيذ</span>
          <ChevronLeft size={14} />
        </button>
        <span style={{ color: '#999', fontSize: '14px' }}>|</span>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="الرئيسية">
          <Home size={18} color="#6c757d" />
        </button>
        <button onClick={() => { onClose(); onNavigate('inventory-supply-new'); }} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          background: 'linear-gradient(to bottom, #fff, #f0f0f0)',
          border: '1px solid #ccc',
          borderRadius: '3px',
          padding: '4px 12px',
          color: '#333',
          fontSize: '13px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          <span>جديد (أمر توريد مخزني)</span>
          <FilePlus size={14} color="#28a745" />
        </button>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="طباعة">
          <Printer size={18} color="#6c757d" />
        </button>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px', fontSize: '12px', color: '#3c8dbc' }}>
          Eco
        </button>
      </div>

      {/* ── Main Content ── */}
      <div style={{ flex: 1, overflow: 'auto', padding: '12px' }}>

        {/* ── Search Panel ── */}
        <div style={{
          background: '#fff',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>

          {/* Tab Bar */}
          <div style={{
            background: 'linear-gradient(to bottom, #f39c12, #e67e22)',
            padding: '0 12px',
            display: 'flex',
            gap: '2px',
            justifyContent: 'flex-start'
          }}>
            <button
              onClick={() => setActiveTab('main')}
              style={{
                padding: '8px 20px',
                background: activeTab === 'main' ? '#fff' : 'transparent',
                border: 'none',
                borderBottom: activeTab === 'main' ? 'none' : '2px solid transparent',
                borderRadius: '4px 4px 0 0',
                color: activeTab === 'main' ? '#e67e22' : '#fff',
                fontSize: '13px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              أمر توريد مخزني
            </button>
            <button
              onClick={() => setActiveTab('log')}
              style={{
                padding: '8px 20px',
                background: activeTab === 'log' ? '#fff' : 'transparent',
                border: 'none',
                borderBottom: activeTab === 'log' ? 'none' : '2px solid transparent',
                borderRadius: '4px 4px 0 0',
                color: activeTab === 'log' ? '#e67e22' : '#fff',
                fontSize: '13px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              السجل
            </button>
          </div>

          {/* Form Content */}
          <div style={{ padding: '16px', background: '#f8fafc' }}>

            {activeTab === 'main' && (
              <>
                {/* Row 1 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px', justifyContent: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>الرقم</label>
                    <input type="text" style={{ width: '100px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>نوع الحركة المخزنية</label>
                    <select style={{ width: '200px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
                      <option value="">-- اختر --</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>إلى المخزن</label>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '3px', background: '#fff' }}>
                      <select style={{ flex: 1, padding: '4px 8px', border: 'none', fontSize: '13px', background: 'transparent', outline: 'none' }}>
                        <option value="">-- اختر --</option>
                      </select>
                      <Search size={14} color="#3c8dbc" style={{ cursor: 'pointer', padding: '4px' }} />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px', justifyContent: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>التاريخ</label>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '3px', background: '#fff' }}>
                      <input type="date" style={{ padding: '4px 8px', border: 'none', fontSize: '13px', background: 'transparent', outline: 'none' }} />
                      <Calendar size={14} color="#3c8dbc" style={{ cursor: 'pointer', padding: '4px' }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>إلى</label>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '3px', background: '#fff' }}>
                      <input type="date" style={{ padding: '4px 8px', border: 'none', fontSize: '13px', background: 'transparent', outline: 'none' }} />
                      <Calendar size={14} color="#3c8dbc" style={{ cursor: 'pointer', padding: '4px' }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>رقم المرجع</label>
                    <input type="text" style={{ width: '120px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <select style={{ width: '120px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
                      <option value="">-- اختر --</option>
                    </select>
                    <label style={{ fontSize: '13px', color: '#1a4e76' }}>مسودة</label>
                    <Info size={14} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                  </div>
                </div>

                {/* Row 3 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px', justifyContent: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>معلق</label>
                    <select style={{ width: '120px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
                      <option value="">-- اختر --</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>عملة المستند</label>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '3px', background: '#fff' }}>
                      <select style={{ flex: 1, padding: '4px 8px', border: 'none', fontSize: '13px', background: 'transparent', outline: 'none' }}>
                        <option value="">-- اختر --</option>
                      </select>
                      <Search size={14} color="#3c8dbc" style={{ cursor: 'pointer', padding: '4px' }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>سعر التحويل</label>
                    <input type="text" placeholder="السعر الحالي" style={{ width: '120px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>إلى</label>
                    <input type="text" placeholder="السعر الحالي" style={{ width: '120px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
                  </div>
                </div>

                {/* Row 4 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px', justifyContent: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>تقييد الكلفة لحساب/الدائن</label>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '3px', background: '#fff' }}>
                      <select style={{ flex: 1, padding: '4px 8px', border: 'none', fontSize: '13px', background: 'transparent', outline: 'none' }}>
                        <option value="">-- اختر --</option>
                      </select>
                      <Search size={14} color="#3c8dbc" style={{ cursor: 'pointer', padding: '4px' }} />
                    </div>
                    <select style={{ width: '150px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
                      <option value="">-- اختر --</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>ملاحظة</label>
                    <input type="text" style={{ width: '200px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>الحالة</label>
                    <select style={{ width: '150px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
                      <option value="">-- اختر --</option>
                    </select>
                  </div>
                </div>

                {/* Row 5 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>مرات الطباعة</label>
                    <input type="text" style={{ width: '100px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>المستند الرئيسي</label>
                    <select style={{ width: '200px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }}>
                      <option value="">-- اختر --</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold', whiteSpace: 'nowrap' }}>رقم المستند الرئيسي</label>
                    <input type="text" style={{ width: '150px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', background: '#fff' }} />
                  </div>
                </div>
              </>
            )}

            {activeTab === 'log' && (
              <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
                سجل التعديلات
              </div>
            )}

          </div>
        </div>

        {/* ── Execute Button ── */}
        <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(to bottom, #4a90d9, #357abd)',
            border: '1px solid #2a6aad',
            borderRadius: '4px',
            padding: '8px 24px',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            <Check size={16} />
            <span>تنفيذ البحث</span>
          </button>
        </div>

        {/* ── Record Count ── */}
        <div style={{
          background: '#fff',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '8px 16px',
          marginTop: '12px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '10px'
        }}>
          <label style={{ fontSize: '13px', color: '#1a4e76', fontWeight: 'bold' }}>عدد السجلات</label>
          <input
            type="text"
            value={recordCount}
            onChange={(e) => setRecordCount(e.target.value)}
            style={{ width: '80px', padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '13px', textAlign: 'center' }}
          />
        </div>

        {/* ── Yellow Warning Bar ── */}
        <div style={{
          background: '#fff9c4',
          border: '1px solid #f0e68c',
          borderRadius: '4px',
          padding: '8px 12px',
          marginTop: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <span style={{ fontSize: '13px', color: '#666' }}>يمكن تحديد العملة للحصول على الإجماليات</span>
          <X size={16} color="#e74c3c" style={{ cursor: 'pointer' }} />
        </div>

        {/* ── Table Toolbar ── */}
        <div style={{
          background: '#d4e6f1',
          padding: '6px 12px',
          marginTop: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          borderRadius: '4px 4px 0 0',
          border: '1px solid #b0c4de',
          borderBottom: 'none'
        }}>
          <input type="checkbox" style={{ cursor: 'pointer' }} />
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px' }} title="طباعة">
            <Printer size={16} color="#3c8dbc" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px' }} title="تحديث">
            <RefreshCw size={16} color="#3c8dbc" />
          </button>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px' }} title="تصدير">
            <Download size={16} color="#3c8dbc" />
          </button>
        </div>

        {/* ── Data Table ─ */}
        <div style={{ background: '#fff', border: '1px solid #b0c4de', borderTop: 'none', overflow: 'auto', maxHeight: '200px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#6c7a89' }}>
                <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78', width: '40px' }}>م</th>
                <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78', width: '60px' }}>الرقم</th>
                <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78' }}>النوع</th>
                <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78' }}>نوع الحركة المخزنية</th>
                <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78', width: '100px' }}>التاريخ</th>
                <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78', width: '80px' }}>الحالة</th>
                <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78' }}>ملاحظة</th>
                <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78' }}>الإضافة بواسطة</th>
                <th style={{ padding: '8px 10px', color: '#fff', fontWeight: 'bold', textAlign: 'center', border: '1px solid #5a6a78', width: '100px' }}>تاريخ السجل</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((row, index) => (
                <tr
                  key={row.id}
                  style={{
                    background: index % 2 === 0 ? '#f8f9fa' : '#fff',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#e8f0f8')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = index % 2 === 0 ? '#f8f9fa' : '#fff')}
                >
                  <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                      <span>{index + 1}</span>
                      <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '0' }} title="عرض">
                        <Eye size={14} color="#3c8dbc" />
                      </button>
                      <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '0' }} title="نسخ">
                        <Copy size={14} color="#3c8dbc" />
                      </button>
                    </div>
                  </td>
                  <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0', fontWeight: 'bold', color: '#3c8dbc' }}>{row.docNo}</td>
                  <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0', color: '#3c8dbc' }}>{row.type}</td>
                  <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0', color: '#3c8dbc' }}>{row.movementType}</td>
                  <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0' }}>{row.date}</td>
                  <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0' }}>
                    <span style={{
                      padding: '2px 8px',
                      borderRadius: '3px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      backgroundColor: row.status === 'مرحل' ? '#d4edda' : '#cce5ff',
                      color: row.status === 'مرحل' ? '#155724' : '#004085'
                    }}>{row.status}</span>
                  </td>
                  <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0' }}>{row.note || ''}</td>
                  <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0', color: '#3c8dbc' }}>{row.addedBy}</td>
                  <td style={{ padding: '6px 10px', textAlign: 'center', border: '1px solid #d0d8e0' }}>{row.recordDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
