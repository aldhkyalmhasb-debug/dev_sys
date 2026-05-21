import { useState } from 'react';
import { Settings, Save, XCircle, Maximize2, RefreshCw, PanelTop, Calendar, HelpCircle, Plus, Info } from 'lucide-react';

interface ItemsCostChangeProps {
  onNavigate: (route: string) => void;
  onClose?: () => void;
}

export default function ItemsCostChange({ onNavigate, onClose }: ItemsCostChangeProps) {
  // Generate 10 empty rows for the grid
  const initialRows = Array.from({ length: 10 }, (_, i) => ({ id: i + 1 }));

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
        <div style={{ overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f5f7fa' }}>

          {/* Toolbar section */}
          <div className="qs-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#eaeff2', padding: '6px 15px', borderBottom: '1px solid #cbd5e1' }}>
            
            {/* Right Actions */}
            <div className="qs-toolbar-right" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="rl-utility-icon" title="الإعدادات" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Settings size={15} />
              </div>
              
              <button className="qs-btn" style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff', color: '#333', cursor: 'pointer' }}>
                <Save size={14} color="#3c8dbc" style={{ marginLeft: '4px' }} />
                <span>حفظ</span>
              </button>

              <button className="qs-btn" style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff', color: '#c0392b', cursor: 'pointer' }}>
                <XCircle size={14} color="#c0392b" style={{ marginLeft: '4px' }} />
                <span>تراجع</span>
              </button>
            </div>
            
            {/* Left Utilities */}
            <div className="qs-toolbar-left" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="rl-utility-icon" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <PanelTop size={15} color="#3c8dbc" />
              </div>
              <div className="rl-utility-icon" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <RefreshCw size={15} color="#3c8dbc" />
              </div>
              <div className="rl-utility-icon" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Maximize2 size={15} color="#3c8dbc" />
              </div>
            </div>
          </div>

          {/* Main Orange Banner */}
          <div style={{ backgroundColor: '#f39c12', padding: '8px 20px', display: 'flex', justifyContent: 'flex-start', margin: '15px 15px 0 15px', borderRadius: '3px 3px 0 0' }}>
            <span style={{ backgroundColor: '#fff', color: '#f39c12', padding: '4px 15px', fontWeight: 'bold', fontSize: '14px', borderRadius: '2px' }}>
              تسوية كلفة المخزون
            </span>
          </div>

          {/* Form Area */}
          <div style={{ backgroundColor: '#fdfdfd', border: '1px solid #cbd5e1', borderTop: 'none', margin: '0 15px 15px 15px', padding: '15px' }}>
            
            {/* Row 1 */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '20px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '25%' }}>
                <label style={{ fontWeight: 'bold', fontSize: '12px', color: '#1a4e76', width: '60px', textAlign: 'left' }}>التاريخ <span style={{color: 'red'}}>*</span></label>
                <div style={{ position: 'relative', flex: 1 }}>
                  <input type="text" value="21/5/2026" readOnly style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 25px 0 6px', width: '100%', fontSize: '13px', backgroundColor: '#fff' }} />
                  <Calendar size={14} color="#3c8dbc" style={{ position: 'absolute', right: '6px', top: '6px' }} />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '25%' }}>
                <label style={{ fontWeight: 'bold', fontSize: '12px', color: '#1a4e76', width: '60px', textAlign: 'left' }}>رقم المرجع</label>
                <input type="text" style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', flex: 1, fontSize: '13px' }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '20%', justifyContent: 'center' }}>
                <input type="checkbox" id="draft-check" />
                <label htmlFor="draft-check" style={{ fontSize: '12px', color: '#1a4e76' }}>مسودة</label>
                <HelpCircle size={14} color="#3c8dbc" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '30%' }}>
                <label style={{ fontWeight: 'bold', fontSize: '12px', color: '#1a4e76', width: '80px', textAlign: 'left' }}>عملة المستند <span style={{color: 'red'}}>*</span></label>
                <select style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', flex: 1, fontSize: '13px', backgroundColor: '#ffffcc' }}>
                  <option>ر.ي</option>
                </select>
              </div>

            </div>

            {/* Row 2 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '50%' }}>
                <HelpCircle size={14} color="#3c8dbc" />
                <label style={{ fontWeight: 'bold', fontSize: '12px', color: '#1a4e76', width: '80px', textAlign: 'left' }}>حساب التسوية <span style={{color: 'red'}}>*</span></label>
                <select style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', flex: 1, fontSize: '13px', backgroundColor: '#fff' }}>
                  <option>3123 : تسوية كلفة المخزون</option>
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '50%' }}>
                <label style={{ fontWeight: 'bold', fontSize: '12px', color: '#1a4e76', width: '60px', textAlign: 'left' }}>ملاحظة</label>
                <input type="text" style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', flex: 1, fontSize: '13px' }} />
              </div>

            </div>

          </div>

          {/* Data Grid */}
          <div style={{ flex: 1, margin: '0 15px 15px 15px', backgroundColor: '#fff', border: '1px solid #cbd5e1', display: 'flex', flexDirection: 'column' }}>
            <div style={{ overflowX: 'auto', overflowY: 'auto', flex: 1 }}>
              <table className="rl-table" style={{ width: '100%', marginBottom: 0, borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#c5d9e8', color: '#1a4e76', textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>
                    <th style={{ width: '30px', padding: '6px', borderLeft: '1px solid #fff', borderBottom: '1px solid #fff' }}>م</th>
                    <th style={{ width: '25%', padding: '6px', borderLeft: '1px solid #fff', borderBottom: '1px solid #fff' }}>الصنف</th>
                    <th style={{ width: '12%', padding: '6px', borderLeft: '1px solid #fff', borderBottom: '1px solid #fff' }}>الوحدة</th>
                    <th style={{ width: '10%', padding: '6px', borderLeft: '1px solid #fff', borderBottom: '1px solid #fff' }}>الكمية</th>
                    <th style={{ width: '15%', padding: '6px', borderLeft: '1px solid #fff', borderBottom: '1px solid #fff' }}>الكلفة</th>
                    <th style={{ width: '15%', padding: '6px', borderLeft: '1px solid #fff', borderBottom: '1px solid #fff' }}>الإجمالي</th>
                    <th style={{ width: '15%', padding: '6px', borderBottom: '1px solid #fff' }}>الكلفة السابقة</th>
                  </tr>
                </thead>
                <tbody>
                  {initialRows.map((row, idx) => (
                    <tr key={row.id} style={{ backgroundColor: '#fdfdfd', borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '2px', textAlign: 'center', fontSize: '12px', borderLeft: '1px solid #eee' }}>{row.id}</td>
                      <td style={{ padding: '2px', borderLeft: '1px solid #eee' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <select style={{ flex: 1, height: '24px', border: '1px solid #ccc', borderRadius: '2px', backgroundColor: '#fff' }}>
                            <option></option>
                          </select>
                        </div>
                      </td>
                      <td style={{ padding: '2px', borderLeft: '1px solid #eee' }}>
                        <select style={{ width: '100%', height: '24px', border: '1px solid #ccc', borderRadius: '2px', backgroundColor: '#fff' }}>
                          <option></option>
                        </select>
                      </td>
                      <td style={{ padding: '2px', borderLeft: '1px solid #eee' }}>
                        <input type="text" style={{ width: '100%', height: '24px', border: idx === 2 ? '2px solid #333' : '1px solid #ccc', borderRadius: '2px', backgroundColor: idx === 2 ? '#fff' : '#f9f9f9', textAlign: 'center' }} />
                      </td>
                      <td style={{ padding: '2px', borderLeft: '1px solid #eee' }}>
                        <input type="text" readOnly style={{ width: '100%', height: '24px', border: '1px solid #eee', backgroundColor: '#f9f9f9' }} />
                      </td>
                      <td style={{ padding: '2px', borderLeft: '1px solid #eee' }}>
                        <input type="text" readOnly style={{ width: '100%', height: '24px', border: '1px solid #eee', backgroundColor: '#f9f9f9' }} />
                      </td>
                      <td style={{ padding: '2px' }}>
                        <input type="text" readOnly style={{ width: '100%', height: '24px', border: '1px solid #eee', backgroundColor: '#f9f9f9' }} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ backgroundColor: '#c5d9e8', padding: '4px', display: 'flex', justifyContent: 'flex-start' }}>
               <Plus size={16} color="#1a4e76" style={{ cursor: 'pointer', marginRight: '10px' }} />
            </div>
          </div>

          {/* Yellow Info Banner at bottom */}
          <div style={{ backgroundColor: '#ffffcc', border: '1px solid #e6e600', margin: '0 15px 15px 15px', padding: '10px 15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '3px' }}>
            <span style={{ fontSize: '13px', color: '#555', fontWeight: 'bold' }}>
              هذا المستند يستخدم لتغيير كلفة الأصناف، قم بإختيار الصنف و إختيار الوحدة الرئيسية (الأكبر) للصنف، وقم بإدخال الكلفة الجديدة في عمود الكلفة
            </span>
            <Info size={20} color="#f39c12" />
          </div>

        </div>
      </div>
    </div>
  );
}
