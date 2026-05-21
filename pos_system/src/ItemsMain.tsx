import { useState } from 'react';
import { Search, Settings, FilePlus, Play, Check, LayoutGrid, HelpCircle, Printer, RefreshCw } from 'lucide-react';

interface ItemsMainProps {
  onNavigate: (route: string) => void;
  onClose?: () => void;
}

const MOCK_ITEMS = [
  { id: 1, no: '2159', name: 'صابون دريم كلين 2.5كيلو', barcode: '' },
  { id: 2, no: '1017', name: 'فاصوليا حمراء بلدي', barcode: '' },
  { id: 3, no: '1025', name: 'فاصوليا حمراء بلدي2', barcode: '' },
  { id: 4, no: '1021', name: 'فاصوليا حمراء بلدي2', barcode: '' },
  { id: 5, no: '1028', name: 'فاصوليا حمراء بلدي2', barcode: '' },
  { id: 6, no: '1029', name: 'فاصوليا حمراء بلدي2', barcode: '' },
  { id: 7, no: '1030', name: 'فاصوليا حمراء بلدي2', barcode: '' },
  { id: 8, no: '1031', name: 'فاصوليا حمراء بلدي2', barcode: '' },
];

export default function ItemsMain({ onNavigate, onClose }: ItemsMainProps) {
  const [itemNo, setItemNo] = useState('');
  const [itemName, setItemName] = useState('');
  const [barcode, setBarcode] = useState('');
  const [recordsCount, setRecordsCount] = useState('100');
  const [activeTab, setActiveTab] = useState('units');

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
          <div style={{ display: 'flex', gap: '6px' }}>
            <button style={{ border: 'none', background: '#c0392b', color: '#fff', borderRadius: '3px', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '10px', fontWeight: 'bold' }} onClick={() => { if (onClose) onClose(); else onNavigate('dashboard'); }}>✕</button>
            <button style={{ border: 'none', background: '#bdc3c7', color: '#333', borderRadius: '3px', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '10px' }}>⬜</button>
            <button style={{ border: 'none', background: '#bdc3c7', color: '#333', borderRadius: '3px', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '10px' }}>_</button>
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#2b3e50', display: 'flex', alignItems: 'center', gap: '5px' }}>
            بيانات الأصناف
          </div>
        </div>

        {/* Scrollable Container for dialog body */}
        <div style={{ overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column' }}>

          {/* Toolbar section */}
          <div className="qs-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#eaeff2', padding: '6px 15px', borderBottom: '1px solid #cbd5e1' }}>
            <div className="qs-toolbar-right" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="rl-utility-icon" title="الإعدادات" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Settings size={15} />
              </div>

              <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>
              
              <button className="qs-btn qs-btn-execute-action" style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', backgroundColor: '#fff', display: 'flex', alignItems: 'center', color: '#e67e22', cursor: 'pointer' }}>
                <Play size={13} fill="#e67e22" color="#e67e22" style={{ marginLeft: '4px' }} />
                <span>تنفيذ</span>
              </button>

              <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>
              
              <button onClick={() => onNavigate('items-search')} className="qs-btn" style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', display: 'flex', alignItems: 'center', backgroundColor: '#fff', color: '#333', cursor: 'pointer' }}>
                <Search size={13} color="#666" style={{ marginLeft: '4px' }} />
                <span>بحث متقدم</span>
              </button>

              <button className="qs-btn" style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff', cursor: 'pointer' }}>
                <FilePlus size={13} color="#28a745" style={{ marginLeft: '4px' }} />
                <span>جديد (صنف)</span>
              </button>
            </div>
            
            <div className="qs-toolbar-left" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="rl-utility-icon" title="تنسيق الشبكة" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <LayoutGrid size={15} />
              </div>
              <div className="rl-utility-icon" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <LayoutGrid size={15} color="#3c8dbc" />
              </div>
            </div>
          </div>

          {/* Banner Title */}
          <div style={{ backgroundColor: '#fdfdfd', borderBottom: '1px solid #cbd5e1', padding: '8px 15px', fontWeight: 'bold', fontSize: '14px', display: 'flex', justifyContent: 'center', color: '#333' }}>
            بيانات الأصناف
          </div>

          {/* Form Body Area */}
          <div style={{ padding: '20px 15px', backgroundColor: '#fdfdfd', borderBottom: '1px solid #e0e0e0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              
              {/* Fields Area */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '60%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <label style={{ width: '80px', fontWeight: 'bold', fontSize: '12px', color: '#1a4e76', textAlign: 'left' }}>رقم الصنف</label>
                  <input 
                    type="text" 
                    value={itemNo} 
                    onChange={(e) => setItemNo(e.target.value)} 
                    style={{ border: '1px solid #9932cc', height: '24px', padding: '0 6px', width: '300px', backgroundColor: '#ffffcc', textAlign: 'right', fontSize: '12px' }} 
                  />
                  <div style={{ width: '10px', height: '10px', backgroundColor: '#d2b4de', transform: 'rotate(45deg)' }}></div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <label style={{ width: '80px', fontWeight: 'bold', fontSize: '12px', color: '#1a4e76', textAlign: 'left' }}>اسم الصنف</label>
                  <input 
                    type="text" 
                    value={itemName} 
                    onChange={(e) => setItemName(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '300px', textAlign: 'right', fontSize: '12px' }}
                  />
                </div>
              </div>

              {/* Barcode Area */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '40%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <HelpCircle size={14} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                  <label style={{ fontWeight: 'bold', fontSize: '12px', color: '#1a4e76' }}>باركود الصنف</label>
                  <input 
                    type="text" 
                    value={barcode} 
                    onChange={(e) => setBarcode(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '200px', textAlign: 'right', fontSize: '12px' }}
                  />
                </div>
              </div>
            </div>

            {/* Execute Button Row */}
            <div style={{ marginTop: '20px', display: 'flex' }}>
              <button 
                style={{ backgroundColor: '#4a89dc', color: '#fff', border: '1px solid #3b6eb0', padding: '6px 40px', fontWeight: 'bold', borderRadius: '3px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', minWidth: '200px', justifyContent: 'center' }}
              >
                <span>تنفيذ البحث</span>
                <Check size={15} strokeWidth={3} color="#27ae60" style={{ marginRight: '10px' }} />
              </button>
            </div>

            <div style={{ borderBottom: '1px solid #e0e0e0', margin: '15px 0' }}></div>

            {/* Records Count Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div></div> {/* Spacer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '12px', color: '#1a4e76' }}>عدد السجلات</span>
                <input 
                  type="text" 
                  value={recordsCount} 
                  onChange={(e) => setRecordsCount(e.target.value)}
                  style={{ width: '80px', height: '24px', textAlign: 'center', border: '1px solid #cbd5e1', fontSize: '12px' }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Tabs */}
          <div className="qs-tabs-container" style={{ direction: 'rtl', justifyContent: 'flex-start', backgroundColor: '#fdfdfd', padding: '5px 10px 0 10px', display: 'flex', gap: '5px', borderBottom: '1px solid #e0e0e0' }}>
            
            <div 
              style={{
                padding: '6px 15px',
                backgroundColor: activeTab === 'units' ? '#eaeff2' : '#f9f9f9',
                border: '1px solid #cbd5e1',
                borderBottom: activeTab === 'units' ? '1px solid #eaeff2' : '1px solid #cbd5e1',
                borderRadius: '4px 4px 0 0',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#333',
                marginBottom: activeTab === 'units' ? '-1px' : '0'
              }}
              onClick={() => setActiveTab('units')}
            >
              <LayoutGrid size={12} color="#a0a0a0" />
              <span>وحدات القياس</span>
            </div>

            <div 
              style={{
                padding: '6px 15px',
                backgroundColor: activeTab === 'no-barcode' ? '#eaeff2' : '#f9f9f9',
                border: '1px solid #cbd5e1',
                borderBottom: activeTab === 'no-barcode' ? '1px solid #eaeff2' : '1px solid #cbd5e1',
                borderRadius: '4px 4px 0 0',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#333',
                marginBottom: activeTab === 'no-barcode' ? '-1px' : '0'
              }}
              onClick={() => setActiveTab('no-barcode')}
            >
              <LayoutGrid size={12} color="#a0a0a0" />
              <span>باركود الصنف : للأصناف التي بدون باركود !!!</span>
            </div>

            <div 
              style={{
                padding: '6px 15px',
                backgroundColor: activeTab === 'barcode' ? '#eaeff2' : '#f9f9f9',
                border: '1px solid #cbd5e1',
                borderBottom: activeTab === 'barcode' ? '1px solid #eaeff2' : '1px solid #cbd5e1',
                borderRadius: '4px 4px 0 0',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#333',
                marginBottom: activeTab === 'barcode' ? '-1px' : '0'
              }}
              onClick={() => setActiveTab('barcode')}
            >
              <LayoutGrid size={12} color="#a0a0a0" />
              <span>باركود الصنف !!!</span>
            </div>

          </div>
          
          {/* Results Grid Area */}
          <div style={{ backgroundColor: '#eaeff2', display: 'flex', flexDirection: 'column', flex: 1 }}>
            {/* Grid Toolbar */}
            <div style={{ padding: '4px 8px', borderBottom: '1px solid #cbd5e1', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input type="checkbox" style={{ margin: '0 5px' }} />
              <Printer size={14} color="#666" style={{ cursor: 'pointer' }} />
              <RefreshCw size={14} color="#3c8dbc" style={{ cursor: 'pointer' }} />
              <LayoutGrid size={14} color="#28a745" style={{ cursor: 'pointer' }} />
            </div>

            {/* Grid Table */}
            <div style={{ overflowX: 'auto' }}>
              <table className="rl-table" style={{ width: '100%', marginBottom: 0 }}>
                <thead>
                  <tr style={{ backgroundColor: '#778899', color: '#fff', textAlign: 'center', fontSize: '12px' }}>
                    <th style={{ width: '30px', padding: '6px' }}>م</th>
                    <th style={{ padding: '6px' }}>رقم الصنف</th>
                    <th style={{ padding: '6px' }}>باركود الصنف</th>
                    <th style={{ padding: '6px' }}>اسم الصنف</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_ITEMS.map((item, index) => (
                    <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff', fontSize: '12px', textAlign: 'center' }}>
                      <td style={{ padding: '4px' }}>{index + 1}</td>
                      <td style={{ padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                        {item.no} <Search size={12} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                      </td>
                      <td style={{ padding: '4px' }}>{item.barcode}</td>
                      <td style={{ padding: '4px', textAlign: 'right' }}>{item.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
