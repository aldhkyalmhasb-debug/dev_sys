import { useState } from 'react';
import { Search, Settings, Printer, Edit3, XCircle, ChevronLeft, ChevronRight, Play, Home, List, FilePlus, ChevronRight as ChevronRightIcon } from 'lucide-react';

interface ItemsBrowseProps {
  onNavigate: (route: string) => void;
  onClose?: () => void;
}

const MOCK_SIDEBAR_ITEMS = [
  '2159 , صابون دريم كلين 2.5كيلو',
  '1017 , فاصوليا حمراء بلدي',
  '1025 , فاصوليا حمراء بلدي2',
  '1021 , فاصوليا حمراء بلدي2',
  '1028 , فاصوليا حمراء بلدي2',
  '1029 , فاصوليا حمراء بلدي2',
  '1030 , فاصوليا حمراء بلدي2',
  '1031 , فاصوليا حمراء بلدي2',
  '1032 , فاصوليا حمراء بلدي2',
  '1033 , فاصوليا حمراء بلدي2',
  '1022 , فاصوليا حمراء بلدي3',
  '1023 , فاصوليا حمراء بلدي4',
  '1060 , ادكوا صغير منوع 1×24',
  '1206 , ارز الديوان قطم 8×5ك',
  '1212 , ارز الرحال قطم 4×10ك',
];

export default function ItemsBrowse({ onNavigate, onClose }: ItemsBrowseProps) {
  const [activeTab, setActiveTab] = useState('item');

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
        backgroundColor: '#eaeff2', 
        border: '1px solid #95a5a6', 
        borderRadius: '4px', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
        overflow: 'hidden',
        flex: 1,
        display: 'flex'
      }}>
        
        {/* Right Pane (Sidebar List) - Now comes FIRST in DOM so it appears on the Right in RTL */}
        <div style={{ width: '280px', backgroundColor: '#fff', borderLeft: '2px solid #cbd5e1', display: 'flex', flexDirection: 'column' }}>
          
          {/* Header of Sidebar */}
          <div style={{ backgroundColor: '#e2ebf0', borderBottom: '1px solid #cbd5e1', padding: '6px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#1a4e76' }}>بيانات الأصناف</span>
            <ChevronRightIcon size={16} color="#c0392b" style={{ cursor: 'pointer' }} />
          </div>

          {/* Search Box in Sidebar */}
          <div style={{ padding: '8px', borderBottom: '1px solid #cbd5e1', display: 'flex', gap: '5px' }}>
            <button style={{ border: '1px solid #cbd5e1', backgroundColor: '#fff', borderRadius: '3px', padding: '2px 5px', cursor: 'pointer' }}>
               <Search size={14} color="#888" />
            </button>
            <input 
              type="text" 
              placeholder="اسم الصنف"
              style={{ border: '1px solid #cbd5e1', flex: 1, padding: '2px 5px', fontSize: '12px' }}
            />
          </div>

          {/* List of items */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {MOCK_SIDEBAR_ITEMS.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  padding: '8px 10px', 
                  borderBottom: '1px solid #eee', 
                  fontSize: '13px', 
                  backgroundColor: idx === 0 ? '#ffffcc' : (idx % 2 === 0 ? '#fdfdfd' : '#f5f5f5'),
                  color: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  cursor: 'pointer'
                }}
              >
                <div style={{ width: '6px', height: '6px', border: '1px solid #3c8dbc', transform: 'rotate(45deg)' }}></div>
                {item}
              </div>
            ))}
          </div>

        </div>

        {/* Left Pane (Main Content) - Comes SECOND in DOM so it appears on the Left in RTL */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#eaeff2', overflowY: 'auto' }}>
          
          {/* Main Content Toolbar */}
          <div className="qs-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#e2ebf0', padding: '6px 15px', borderBottom: '1px solid #cbd5e1' }}>
            
            {/* Right Actions */}
            <div className="qs-toolbar-right" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="rl-utility-icon" title="الإعدادات" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Settings size={15} />
              </div>
              
              <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>
              
              {/* Navigation Arrows */}
              <div style={{ display: 'flex', border: '1px solid #b0c2d4', borderRadius: '3px', overflow: 'hidden', backgroundColor: '#fff' }}>
                <button style={{ padding: '2px 8px', border: 'none', borderLeft: '1px solid #cbd5e1', backgroundColor: '#fff', cursor: 'pointer' }}><Play size={13} fill="#6c757d" color="#6c757d" /></button>
                <button style={{ padding: '2px 8px', border: 'none', borderLeft: '1px solid #cbd5e1', backgroundColor: '#fff', cursor: 'pointer' }}><ChevronLeft size={16} color="#3c8dbc" /></button>
                <button style={{ padding: '2px 8px', border: 'none', backgroundColor: '#fff', cursor: 'pointer' }}><ChevronRight size={16} color="#3c8dbc" /></button>
              </div>

              <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>
              
              <button className="qs-btn" style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', display: 'flex', alignItems: 'center', backgroundColor: '#fff', color: '#333' }}>
                <Printer size={13} color="#666" style={{ marginLeft: '4px' }} />
                <span>طباعة</span>
              </button>

              <button className="qs-btn" style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
                <Edit3 size={13} color="#e67e22" style={{ marginLeft: '4px' }} />
                <span>تعديل</span>
              </button>
              
              <button className="qs-btn" style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
                <XCircle size={13} color="#dc3545" style={{ marginLeft: '4px' }} />
                <span>توقيف (الصنف)</span>
              </button>
            </div>
            
            {/* Left Utilities */}
            <div className="qs-toolbar-left" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="rl-utility-icon" title="جديد" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <FilePlus size={15} color="#28a745" />
              </div>
              <div className="rl-utility-icon" title="طباعة" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Printer size={15} color="#6c757d" />
              </div>
              <div className="rl-utility-icon" title="بحث متقدم" onClick={() => onNavigate('items-search')} style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Search size={15} color="#6c757d" />
              </div>
              <div className="rl-utility-icon" title="عرض القائمة" onClick={() => onNavigate('items-list')} style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <List size={15} color="#3c8dbc" />
              </div>
              <div className="rl-utility-icon" title="الرئيسية" onClick={() => onNavigate('dashboard')} style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Home size={15} color="#6c757d" />
              </div>

              <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>
              
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  placeholder="بحث : |"
                  style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 25px 0 6px', width: '100px', fontSize: '12px' }}
                />
                <Search size={14} color="#888" style={{ position: 'absolute', right: '6px', top: '5px' }} />
              </div>
            </div>
          </div>
          
          <div style={{ borderBottom: '2px solid #ccc' }}></div>

          <div style={{ padding: '15px' }}>
            {/* Header / Title */}
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
              <h2 style={{ margin: 0, color: '#333', fontSize: '18px' }}>الصنف : 2159 - صابون دريم كلين 2.5كيلو</h2>
            </div>
            
            {/* Links Row */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e2ebf0', padding: '8px 15px', borderRadius: '3px', marginBottom: '20px', position: 'relative', border: '1px solid #cbd5e1' }}>
              <div style={{ position: 'absolute', left: '10px', top: '5px', color: '#c0392b', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>✖</div>
              <div style={{ display: 'flex', gap: '30px' }}>
                <a href="#" style={{ color: '#3c8dbc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px' }}>
                  <ChevronLeft size={14} /> الصور الإضافية
                </a>
                <a href="#" style={{ color: '#3c8dbc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px' }}>
                  <ChevronLeft size={14} /> مخزون الصنف
                </a>
                <a href="#" style={{ color: '#3c8dbc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px' }}>
                  <ChevronLeft size={14} /> حركة صنف وارد/منصرف - خلال فترة
                </a>
              </div>
            </div>

            {/* Orange Top Tab Banner Area */}
            <div style={{ display: 'flex', borderBottom: '2px solid #f39c12', backgroundColor: '#f39c12', borderRadius: '3px 3px 0 0' }}>
              <div style={{ flex: 1 }}></div>
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

            {/* Form Fields Area */}
            <div style={{ border: '1px solid #cbd5e1', borderTop: 'none', padding: '15px 20px', backgroundColor: '#fdfdfd', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '800px', margin: '0 auto' }}>
                
                {/* Row 1 */}
                <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                    <label style={{ width: '90px', fontWeight: 'bold', fontSize: '13px', color: '#1a4e76', textAlign: 'left' }}>رقم الصنف</label>
                    <input type="text" value="2159" readOnly style={{ border: '1px solid #cbd5e1', backgroundColor: '#eaeff2', height: '26px', padding: '0 6px', flex: 1, textAlign: 'center', fontSize: '13px' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                    <label style={{ width: '90px', fontWeight: 'bold', fontSize: '13px', color: '#1a4e76', textAlign: 'left' }}>باركود الصنف</label>
                    <span style={{ color: '#3c8dbc', fontWeight: 'bold' }}>?</span>
                    <input type="text" value="" readOnly style={{ border: '1px solid #cbd5e1', backgroundColor: '#eaeff2', height: '26px', padding: '0 6px', flex: 1, textAlign: 'right', fontSize: '13px' }} />
                  </div>
                </div>

                {/* Row 2 */}
                <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                    <label style={{ width: '90px', fontWeight: 'bold', fontSize: '13px', color: '#1a4e76', textAlign: 'left' }}>اسم الصنف</label>
                    <input type="text" value="صابون دريم كلين 2.5كيلو" readOnly style={{ border: '1px solid #cbd5e1', backgroundColor: '#eaeff2', height: '26px', padding: '0 6px', flex: 1, textAlign: 'center', fontSize: '13px' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                    <label style={{ width: '90px', fontWeight: 'bold', fontSize: '13px', color: '#1a4e76', textAlign: 'left' }}>طبيعة الصنف</label>
                    <input type="text" value="سلعة مخزنية" readOnly style={{ border: '1px solid #cbd5e1', backgroundColor: '#eaeff2', height: '26px', padding: '0 6px', flex: 1, textAlign: 'right', fontSize: '13px' }} />
                    <ChevronLeft size={14} color="#666" style={{ position: 'absolute', left: '10px' }} />
                  </div>
                </div>

                {/* Row 3 */}
                <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                    <label style={{ width: '90px', fontWeight: 'bold', fontSize: '13px', color: '#1a4e76', textAlign: 'left' }}>المجموعة</label>
                    <input type="text" value="السمن والصابون" readOnly style={{ border: '1px solid #cbd5e1', backgroundColor: '#eaeff2', height: '26px', padding: '0 6px', flex: 1, textAlign: 'center', fontSize: '13px' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px', position: 'absolute', left: '10px' }}>
                       <span style={{ fontSize: '14px', color: '#666' }}>⌄</span>
                       <span style={{ width: '10px', height: '10px', border: '1px solid #28a745', backgroundColor: '#28a745', borderRadius: '1px' }}></span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                    <label style={{ width: '90px', fontWeight: 'bold', fontSize: '13px', color: '#1a4e76', textAlign: 'left' }}>المجموعة الفرعية</label>
                    <input type="text" value="" readOnly style={{ border: '1px solid #cbd5e1', backgroundColor: '#eaeff2', height: '26px', padding: '0 6px', flex: 1, textAlign: 'right', fontSize: '13px' }} />
                     <div style={{ display: 'flex', alignItems: 'center', gap: '2px', position: 'absolute', left: '10px' }}>
                       <span style={{ fontSize: '14px', color: '#666' }}>⌄</span>
                       <span style={{ width: '10px', height: '10px', border: '1px solid #28a745', backgroundColor: '#28a745', borderRadius: '1px' }}></span>
                    </div>
                  </div>
                </div>

                {/* Row 4 */}
                <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                    <label style={{ width: '90px', fontWeight: 'bold', fontSize: '13px', color: '#1a4e76', textAlign: 'left' }}>العملة</label>
                    <input type="text" value="ر.ي" readOnly style={{ border: '1px solid #cbd5e1', backgroundColor: '#eaeff2', height: '26px', padding: '0 6px', width: '120px', textAlign: 'right', fontSize: '13px' }} />
                    <span style={{ color: '#3c8dbc', fontWeight: 'bold', marginLeft: '20px' }}>?</span>
                    <input type="checkbox" checked readOnly style={{ marginRight: '10px' }} />
                    <label style={{ color: '#1a4e76', fontSize: '13px' }}>متعدد الوحدات/العبوات</label>
                  </div>
                  <div style={{ flex: 1 }}></div>
                </div>

              </div>
            </div>
            
            {/* Grid Table for units */}
            <div style={{ overflowX: 'auto', border: '1px solid #cbd5e1', backgroundColor: '#fff' }}>
              <table className="rl-table" style={{ width: '100%', marginBottom: 0 }}>
                <thead>
                  <tr style={{ backgroundColor: '#eaeff2', color: '#1a4e76', textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>
                    <th style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>الوحدة</th>
                    <th style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>تفكيك</th>
                    <th style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center', color: 'blue' }}>الكلفة / ريال<br/>يمني</th>
                    <th style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>سعر التجزئة /<br/>ر.ي</th>
                    <th style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>سعر الجملة /<br/>ر.ي</th>
                    <th style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>سعر / ر.ي</th>
                    <th style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>سعر 2</th>
                    <th style={{ padding: '6px', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>سعر 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                      <input type="text" value="كرتون" readOnly style={{ width: '100px', border: '1px solid #cbd5e1', backgroundColor: '#fdfdfd', textAlign: 'center' }} />
                      <div style={{ float: 'left', marginTop: '2px' }}><span style={{ width: '10px', height: '10px', border: '1px solid #28a745', backgroundColor: '#28a745', borderRadius: '1px', display: 'inline-block' }}></span></div>
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}></td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       <input type="text" value="6,400" readOnly style={{ width: '70px', border: '1px solid #cbd5e1', backgroundColor: '#fdfdfd', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       <input type="text" value="6,800" readOnly style={{ width: '70px', border: '1px solid #cbd5e1', backgroundColor: '#fdfdfd', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       <input type="text" value="6,600" readOnly style={{ width: '70px', border: '1px solid #cbd5e1', backgroundColor: '#fdfdfd', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       <input type="text" value="" readOnly style={{ width: '70px', border: '1px solid #cbd5e1', backgroundColor: '#eaeff2', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       <input type="text" value="" readOnly style={{ width: '70px', border: '1px solid #cbd5e1', backgroundColor: '#eaeff2', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '6px', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       <input type="text" value="" readOnly style={{ width: '70px', border: '1px solid #cbd5e1', backgroundColor: '#eaeff2', textAlign: 'center' }} />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                      <input type="text" value="شنطة" readOnly style={{ width: '100px', border: '1px solid #cbd5e1', backgroundColor: '#fdfdfd', textAlign: 'center' }} />
                      <div style={{ float: 'left', marginTop: '2px' }}><span style={{ width: '10px', height: '10px', border: '1px solid #28a745', backgroundColor: '#28a745', borderRadius: '1px', display: 'inline-block' }}></span></div>
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center', color: '#1a4e76', fontSize: '13px' }}>
                      1 (كرتون) = <input type="text" value="4" readOnly style={{ width: '30px', border: '1px solid #cbd5e1', textAlign: 'center' }} /> شنطة
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       <input type="text" value="1,600" readOnly style={{ width: '70px', border: '1px solid #cbd5e1', backgroundColor: '#fdfdfd', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       <input type="text" value="1,700" readOnly style={{ width: '70px', border: '1px solid #cbd5e1', backgroundColor: '#fdfdfd', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       <input type="text" value="1,650" readOnly style={{ width: '70px', border: '1px solid #cbd5e1', backgroundColor: '#fdfdfd', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       <input type="text" value="" readOnly style={{ width: '70px', border: '1px solid #cbd5e1', backgroundColor: '#eaeff2', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       <input type="text" value="" readOnly style={{ width: '70px', border: '1px solid #cbd5e1', backgroundColor: '#eaeff2', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '6px', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       <input type="text" value="" readOnly style={{ width: '70px', border: '1px solid #cbd5e1', backgroundColor: '#eaeff2', textAlign: 'center' }} />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                      <input type="text" value="" readOnly style={{ width: '100px', border: '1px solid #cbd5e1', backgroundColor: '#fdfdfd', textAlign: 'center' }} />
                      <div style={{ float: 'left', marginTop: '2px' }}><span style={{ width: '10px', height: '10px', border: '1px solid #28a745', backgroundColor: '#28a745', borderRadius: '1px', display: 'inline-block' }}></span></div>
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center', color: '#1a4e76', fontSize: '13px' }}>
                      1 (شنطة) = 
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       
                    </td>
                    <td style={{ padding: '6px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       
                    </td>
                    <td style={{ padding: '6px', borderBottom: '1px solid #cbd5e1', textAlign: 'center' }}>
                       
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
