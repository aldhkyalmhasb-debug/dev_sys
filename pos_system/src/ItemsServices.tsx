import { useState } from 'react';
import { Search, Settings, FilePlus, LayoutGrid, Printer, RefreshCw, Home } from 'lucide-react';

interface ItemsServicesProps {
  onNavigate: (route: string) => void;
  onClose?: () => void;
}

export default function ItemsServices({ onNavigate, onClose }: ItemsServicesProps) {
  // Empty data as shown in the screenshot
  const MOCK_SERVICES: any[] = [];

  return (
    <div style={{
      direction: 'rtl',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f5f7fa',
      padding: '10px'
    }}>
      
      {/* Outer Window Box Wrapper */}
      <div style={{ 
        backgroundColor: '#fff', 
        border: '1px solid #95a5a6', 
        borderRadius: '4px', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
        overflow: 'hidden',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Window Title Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#e2ebf0', borderBottom: '1px solid #cbd5e1', padding: '6px 12px' }}>
          {/* Left Side: Window Controls */}
          <div style={{ display: 'flex', gap: '6px' }}>
            <button style={{ border: 'none', background: '#c0392b', color: '#fff', borderRadius: '3px', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '10px', fontWeight: 'bold' }} onClick={() => { if (onClose) onClose(); else onNavigate('dashboard'); }}>✕</button>
            <button style={{ border: 'none', background: '#bdc3c7', color: '#333', borderRadius: '3px', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '10px' }}>⬜</button>
            <button style={{ border: 'none', background: '#bdc3c7', color: '#333', borderRadius: '3px', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '10px' }}>_</button>
          </div>
          {/* Right Side: Window Title */}
          <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#2b3e50', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '6px', height: '6px', backgroundColor: '#3c8dbc', transform: 'rotate(45deg)' }}></div>
            <div style={{ width: '6px', height: '6px', backgroundColor: '#3c8dbc', transform: 'rotate(45deg)', marginRight: '-2px' }}></div>
            1301 : مواد غذائية جملة/تجزئة
          </div>
        </div>

        {/* Scrollable Container for dialog body */}
        <div style={{ overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column' }}>

          {/* Toolbar section */}
          <div className="qs-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#eaeff2', padding: '6px 15px', borderBottom: '1px solid #cbd5e1' }}>
            
            {/* Right Actions */}
            <div className="qs-toolbar-right" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="rl-utility-icon" title="الإعدادات" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Settings size={15} />
              </div>
              
              <div className="rl-utility-icon" title="الرئيسية" onClick={() => onNavigate('dashboard')} style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Home size={15} color="#6c757d" />
              </div>

              <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>
              
              <button className="qs-btn" style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', display: 'flex', alignItems: 'center', backgroundColor: '#fff', color: '#333', cursor: 'pointer' }}>
                <Search size={13} color="#666" style={{ marginLeft: '4px' }} />
                <span>بحث متقدم</span>
              </button>

              <button className="qs-btn" style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff', cursor: 'pointer' }}>
                <FilePlus size={13} color="#28a745" style={{ marginLeft: '4px' }} />
                <span>جديد (خدمة)</span>
              </button>

              <div className="rl-utility-icon" title="طباعة" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Printer size={15} color="#6c757d" />
              </div>
              
              <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#555', padding: '0 5px' }}>Eco</div>
            </div>
            
            {/* Left Utilities */}
            <div className="qs-toolbar-left" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  placeholder="بحث : اسم الصنف"
                  style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 25px 0 6px', width: '180px', fontSize: '12px' }}
                />
                <Search size={14} color="#888" style={{ position: 'absolute', right: '6px', top: '5px' }} />
              </div>
            </div>
          </div>

          <div style={{ padding: '15px', backgroundColor: '#eaeff2', display: 'flex', flexDirection: 'column', flex: 1 }}>
            
            {/* Results Grid Area */}
            <div style={{ border: '1px solid #cbd5e1', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', flex: 1 }}>
              
              {/* Banner Title Inside Grid Area */}
              <div style={{ backgroundColor: '#fdfdfd', borderBottom: '1px solid #cbd5e1', padding: '8px 15px', fontWeight: 'bold', fontSize: '14px', display: 'flex', justifyContent: 'center', color: '#333' }}>
                الخدمات
              </div>

              {/* Grid Toolbar */}
              <div style={{ backgroundColor: '#d5e2ec', padding: '4px 8px', borderBottom: '1px solid #cbd5e1', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input type="checkbox" style={{ margin: '0 5px' }} />
                <Printer size={14} color="#666" style={{ cursor: 'pointer' }} />
                <RefreshCw size={14} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                <LayoutGrid size={14} color="#28a745" style={{ cursor: 'pointer' }} />
                <div style={{ flex: 1 }}></div>
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#1a4e76', marginLeft: '10px' }}>الخدمات</span>
              </div>

              {/* Grid Table */}
              <div style={{ overflowX: 'auto', flex: 1 }}>
                <table className="rl-table" style={{ width: '100%', marginBottom: 0 }}>
                  <thead>
                    <tr style={{ backgroundColor: '#778899', color: '#fff', textAlign: 'center', fontSize: '12px' }}>
                      <th style={{ width: '30px', padding: '6px', borderLeft: '1px solid #99aab5' }}>م</th>
                      <th style={{ padding: '6px', borderLeft: '1px solid #99aab5' }}>رقم الصنف</th>
                      <th style={{ padding: '6px', borderLeft: '1px solid #99aab5' }}>اسم الصنف</th>
                      <th style={{ padding: '6px', borderLeft: '1px solid #99aab5' }}>طبيعة الصنف</th>
                      <th style={{ padding: '6px', borderLeft: '1px solid #99aab5' }}>الحالة</th>
                      <th style={{ padding: '6px', borderLeft: '1px solid #99aab5' }}>العملة</th>
                      <th style={{ padding: '6px', borderLeft: '1px solid #99aab5' }}>الوحدة</th>
                      <th style={{ padding: '6px', borderLeft: '1px solid #99aab5' }}>الكلفة</th>
                      <th style={{ padding: '6px', borderLeft: '1px solid #99aab5' }}>سعر التجزئة</th>
                      <th style={{ padding: '6px' }}>باركود الصنف</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_SERVICES.map((item, index) => (
                      <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff', fontSize: '12px', textAlign: 'center', borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '4px', borderLeft: '1px solid #eee' }}>{index + 1}</td>
                        <td style={{ padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', borderLeft: '1px solid #eee' }}>
                          {item.no} <Search size={12} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                        </td>
                        <td style={{ padding: '4px', textAlign: 'right', borderLeft: '1px solid #eee' }}>{item.name}</td>
                        <td style={{ padding: '4px', borderLeft: '1px solid #eee' }}>{item.nature}</td>
                        <td style={{ padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #eee' }}>
                          {item.status}
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#28a745' }}></div>
                        </td>
                        <td style={{ padding: '4px', borderLeft: '1px solid #eee' }}>{item.currency}</td>
                        <td style={{ padding: '4px', borderLeft: '1px solid #eee' }}>{item.unit}</td>
                        <td style={{ padding: '4px', textAlign: 'right', borderLeft: '1px solid #eee' }}>{item.cost}</td>
                        <td style={{ padding: '4px', textAlign: 'right', borderLeft: '1px solid #eee' }}>{item.retailPrice}</td>
                        <td style={{ padding: '4px' }}>{item.barcode}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
