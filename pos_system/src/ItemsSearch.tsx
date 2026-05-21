import { useState } from 'react';
import { Search, Settings, FilePlus, Play, Check, LayoutGrid, HelpCircle, Home, Printer, RefreshCw } from 'lucide-react';

interface ItemsSearchProps {
  onNavigate: (route: string) => void;
  onClose?: () => void;
}

const MOCK_ITEMS = [
  { id: 1, no: '2159', name: 'صابون دريم كلين 2.5كيلو', nature: 'سلعة مخزنية', status: 'مفعل', currency: 'ر.ي', unit: 'كرتون', cost: '6,400.00', retailPrice: '6,800.00', barcode: '' },
  { id: 2, no: '1017', name: 'فاصوليا حمراء بلدي', nature: 'سلعة مخزنية', status: 'مفعل', currency: 'ر.ي', unit: 'كيلو', cost: '5,000.00', retailPrice: '7,000.00', barcode: '' },
  { id: 3, no: '1025', name: 'فاصوليا حمراء بلدي2', nature: 'سلعة مخزنية', status: 'مفعل', currency: 'ر.ي', unit: 'حبة', cost: '', retailPrice: '0.00', barcode: '' },
  { id: 4, no: '1021', name: 'فاصوليا حمراء بلدي2', nature: 'سلعة مخزنية', status: 'مفعل', currency: 'ر.ي', unit: 'كيلو', cost: '5,000.00', retailPrice: '7,000.00', barcode: '' },
  { id: 5, no: '1028', name: 'فاصوليا حمراء بلدي2', nature: 'سلعة مخزنية', status: 'مفعل', currency: 'ر.ي', unit: 'حبة', cost: '', retailPrice: '0.00', barcode: '' },
  { id: 6, no: '1029', name: 'فاصوليا حمراء بلدي2', nature: 'سلعة مخزنية', status: 'مفعل', currency: 'ر.ي', unit: 'حبة', cost: '', retailPrice: '200.00', barcode: '' },
  { id: 7, no: '1030', name: 'فاصوليا حمراء بلدي2', nature: 'سلعة مخزنية', status: 'مفعل', currency: 'ر.ي', unit: 'حبة', cost: '', retailPrice: '200.00', barcode: '' },
];

export default function ItemsSearch({ onNavigate, onClose }: ItemsSearchProps) {
  const [itemNoFrom, setItemNoFrom] = useState('');
  const [itemNoTo, setItemNoTo] = useState('');
  const [itemName, setItemName] = useState('');
  const [barcode, setBarcode] = useState('');
  
  const [nature, setNature] = useState('');
  const [group, setGroup] = useState('');
  const [subGroup, setSubGroup] = useState('');
  
  const [currency, setCurrency] = useState('');
  const [listType, setListType] = useState('');
  
  const [recordsCount, setRecordsCount] = useState('500');
  const [activeTab, setActiveTab] = useState('item');
  const [searchExecuted, setSearchExecuted] = useState(true); // default true to show results

  const handleExecuteSearch = () => {
    setSearchExecuted(true);
  };

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
            بيانات الأصناف : بحث
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
              
              <button className="qs-btn qs-btn-execute-action" onClick={handleExecuteSearch} style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', backgroundColor: '#fff', display: 'flex', alignItems: 'center', color: '#e67e22' }}>
                <Play size={13} fill="#e67e22" color="#e67e22" style={{ marginLeft: '4px' }} />
                <span>تنفيذ</span>
              </button>

              <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>
              
              <div className="rl-utility-icon" title="الرئيسية" onClick={() => onNavigate('dashboard')} style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Home size={15} color="#6c757d" />
              </div>

              <button className="qs-btn" style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
                <FilePlus size={13} color="#28a745" style={{ marginLeft: '4px' }} />
                <span>جديد (صنف)</span>
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
                  style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 25px 0 6px', width: '180px', fontSize: '12px' }}
                />
                <Search size={14} color="#888" style={{ position: 'absolute', right: '6px', top: '5px' }} />
              </div>
            </div>
          </div>

          {/* Form Body Area with Tabs */}
          <div style={{ padding: '15px', backgroundColor: '#fdfdfd', display: 'flex', flexDirection: 'column' }}>
            
            {/* Orange Top Tab Banner Area */}
            <div style={{ display: 'flex', borderBottom: '2px solid #f39c12', backgroundColor: '#f39c12', borderRadius: '3px 3px 0 0' }}>
              <div style={{ flex: 1 }}></div> {/* Spacer for the orange bar */}
              
              <div style={{ display: 'flex', direction: 'rtl', marginTop: '4px', paddingRight: '5px', gap: '3px' }}>
                <div 
                  onClick={() => setActiveTab('item')}
                  style={{ 
                    padding: '6px 20px', 
                    backgroundColor: activeTab === 'item' ? '#fff' : '#f8f9fa', 
                    color: activeTab === 'item' ? '#f39c12' : '#333', 
                    fontWeight: 'bold',
                    fontSize: '13px',
                    borderRadius: '4px 4px 0 0',
                    cursor: 'pointer',
                    borderTop: activeTab === 'item' ? 'none' : '1px solid #ccc',
                    borderRight: activeTab === 'item' ? 'none' : '1px solid #ccc',
                    borderLeft: activeTab === 'item' ? 'none' : '1px solid #ccc',
                  }}>
                  الصنف
                </div>
                <div 
                  onClick={() => setActiveTab('details')}
                  style={{ 
                    padding: '6px 20px', 
                    backgroundColor: activeTab === 'details' ? '#fff' : '#f8f9fa', 
                    color: activeTab === 'details' ? '#f39c12' : '#3c8dbc', 
                    fontSize: '13px',
                    borderRadius: '4px 4px 0 0',
                    cursor: 'pointer',
                    borderTop: activeTab === 'details' ? 'none' : '1px solid #ccc',
                    borderRight: activeTab === 'details' ? 'none' : '1px solid #ccc',
                    borderLeft: activeTab === 'details' ? 'none' : '1px solid #ccc',
                  }}>
                  تفاصيل
                </div>
                <div 
                  onClick={() => setActiveTab('settings')}
                  style={{ 
                    padding: '6px 20px', 
                    backgroundColor: activeTab === 'settings' ? '#fff' : '#f8f9fa', 
                    color: activeTab === 'settings' ? '#f39c12' : '#3c8dbc', 
                    fontSize: '13px',
                    borderRadius: '4px 4px 0 0',
                    cursor: 'pointer',
                    borderTop: activeTab === 'settings' ? 'none' : '1px solid #ccc',
                    borderRight: activeTab === 'settings' ? 'none' : '1px solid #ccc',
                    borderLeft: activeTab === 'settings' ? 'none' : '1px solid #ccc',
                  }}>
                  الإعدادات
                </div>
                <div 
                  onClick={() => setActiveTab('ecommerce')}
                  style={{ 
                    padding: '6px 20px', 
                    backgroundColor: activeTab === 'ecommerce' ? '#fff' : '#f8f9fa', 
                    color: activeTab === 'ecommerce' ? '#f39c12' : '#3c8dbc', 
                    fontSize: '13px',
                    borderRadius: '4px 4px 0 0',
                    cursor: 'pointer',
                    borderTop: activeTab === 'ecommerce' ? 'none' : '1px solid #ccc',
                    borderRight: activeTab === 'ecommerce' ? 'none' : '1px solid #ccc',
                    borderLeft: activeTab === 'ecommerce' ? 'none' : '1px solid #ccc',
                  }}>
                  المتجر الإلكتروني
                </div>
              </div>
            </div>

            {/* Form Fields Area inside Tab */}
            <div style={{ border: '1px solid #cbd5e1', borderTop: 'none', padding: '15px', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              {activeTab === 'item' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  
                  {/* Row 1 */}
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                      <label style={{ width: '80px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>رقم الصنف</label>
                      <input 
                        type="text" 
                        value={itemNoFrom} 
                        onChange={(e) => setItemNoFrom(e.target.value)} 
                        style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', flex: 1, textAlign: 'right', fontSize: '12px' }} 
                      />
                      <span style={{ fontSize: '12px', color: '#555' }}>إلى</span>
                      <input 
                        type="text" 
                        value={itemNoTo} 
                        onChange={(e) => setItemNoTo(e.target.value)} 
                        style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', flex: 1, textAlign: 'right', fontSize: '12px' }} 
                      />
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                      <label style={{ width: '80px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>باركود الصنف</label>
                      <HelpCircle size={14} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                      <input 
                        type="text" 
                        value={barcode} 
                        onChange={(e) => setBarcode(e.target.value)} 
                        style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', flex: 1, textAlign: 'right', fontSize: '12px' }} 
                      />
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                      <label style={{ width: '80px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>اسم الصنف</label>
                      <input 
                        type="text" 
                        value={itemName} 
                        onChange={(e) => setItemName(e.target.value)} 
                        style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', flex: 1, textAlign: 'right', fontSize: '12px' }} 
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                      <label style={{ width: '80px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>طبيعة الصنف</label>
                      <select 
                        value={nature} 
                        onChange={(e) => setNature(e.target.value)} 
                        style={{ border: '1px solid #cbd5e1', height: '26px', flex: 1, direction: 'rtl', fontSize: '12px', backgroundColor: '#fff' }}
                      >
                        <option value=""></option>
                        <option value="سلعة مخزنية">سلعة مخزنية</option>
                        <option value="خدمة">خدمة</option>
                      </select>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                      <label style={{ width: '80px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>المجموعة</label>
                      <select 
                        value={group} 
                        onChange={(e) => setGroup(e.target.value)} 
                        style={{ border: '1px solid #cbd5e1', height: '26px', flex: 1, direction: 'rtl', fontSize: '12px', backgroundColor: '#fff' }}
                      >
                        <option value=""></option>
                      </select>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                      <label style={{ width: '80px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>المجموعة الفرعية</label>
                      <select 
                        value={subGroup} 
                        onChange={(e) => setSubGroup(e.target.value)} 
                        style={{ border: '1px solid #cbd5e1', height: '26px', flex: 1, direction: 'rtl', fontSize: '12px', backgroundColor: '#fff' }}
                      >
                        <option value=""></option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                      <label style={{ width: '80px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>العملة</label>
                      <select 
                        value={currency} 
                        onChange={(e) => setCurrency(e.target.value)} 
                        style={{ border: '1px solid #cbd5e1', height: '26px', flex: 1, direction: 'rtl', fontSize: '12px', backgroundColor: '#fff' }}
                      >
                        <option value=""></option>
                        <option value="ر.ي">ر.ي</option>
                        <option value="$">$</option>
                      </select>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                      <label style={{ width: '80px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>نوع القائمة</label>
                      <select 
                        value={listType} 
                        onChange={(e) => setListType(e.target.value)} 
                        style={{ border: '1px solid #cbd5e1', height: '26px', flex: 1, direction: 'rtl', fontSize: '12px', backgroundColor: '#fff' }}
                      >
                        <option value=""></option>
                      </select>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                      <button style={{ backgroundColor: '#4a89dc', color: '#fff', border: '1px solid #3b6eb0', height: '28px', width: '100%', fontWeight: 'bold', borderRadius: '3px', cursor: 'pointer', fontSize: '13px' }}>
                        عرض التقرير
                      </button>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Execute Button Row */}
            <div style={{ marginTop: '15px', display: 'flex' }}>
              <button 
                onClick={handleExecuteSearch}
                style={{ backgroundColor: '#4a89dc', color: '#fff', border: '1px solid #3b6eb0', padding: '6px 40px', fontWeight: 'bold', borderRadius: '3px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', minWidth: '200px', justifyContent: 'center' }}
              >
                <span>تنفيذ البحث</span>
                <Check size={15} strokeWidth={3} color="#27ae60" style={{ marginRight: '10px' }} />
              </button>
            </div>

            <div style={{ borderBottom: '1px solid #e0e0e0', margin: '15px 0' }}></div>

            {/* Records Count Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div></div> {/* Spacer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '12px', color: '#1a4e76' }}>عدد السجلات</span>
                <input 
                  type="text" 
                  value={recordsCount} 
                  onChange={(e) => setRecordsCount(e.target.value)}
                  style={{ width: '100px', height: '24px', textAlign: 'center', border: '1px solid #cbd5e1', fontSize: '12px' }}
                />
              </div>
            </div>

            {/* Results Grid Area */}
            <div style={{ border: '1px solid #cbd5e1', backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}>
              {/* Grid Toolbar */}
              <div style={{ backgroundColor: '#e2ebf0', padding: '4px 8px', borderBottom: '1px solid #cbd5e1', display: 'flex', gap: '10px', alignItems: 'center' }}>
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
                      <th style={{ padding: '6px' }}>اسم الصنف</th>
                      <th style={{ padding: '6px' }}>طبيعة الصنف</th>
                      <th style={{ padding: '6px' }}>الحالة</th>
                      <th style={{ padding: '6px' }}>العملة</th>
                      <th style={{ padding: '6px' }}>الوحدة</th>
                      <th style={{ padding: '6px' }}>الكلفة</th>
                      <th style={{ padding: '6px' }}>سعر التجزئة</th>
                      <th style={{ padding: '6px' }}>باركود الصنف</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchExecuted ? (
                      MOCK_ITEMS.map((item, index) => (
                        <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff', fontSize: '12px', textAlign: 'center' }}>
                          <td style={{ padding: '4px' }}>{index + 1}</td>
                          <td style={{ padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                            {item.no} <Search size={12} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                          </td>
                          <td style={{ padding: '4px', textAlign: 'right' }}>{item.name}</td>
                          <td style={{ padding: '4px' }}>{item.nature}</td>
                          <td style={{ padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                            {item.status}
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#28a745' }}></div>
                          </td>
                          <td style={{ padding: '4px' }}>{item.currency}</td>
                          <td style={{ padding: '4px' }}>{item.unit}</td>
                          <td style={{ padding: '4px', textAlign: 'right' }}>{item.cost}</td>
                          <td style={{ padding: '4px', textAlign: 'right' }}>{item.retailPrice}</td>
                          <td style={{ padding: '4px' }}>{item.barcode}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={10} style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
                          لا توجد بيانات للعرض
                        </td>
                      </tr>
                    )}
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
