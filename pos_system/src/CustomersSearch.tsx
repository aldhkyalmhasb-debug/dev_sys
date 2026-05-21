import { useState } from 'react';
import { Search, Settings, Home, UserPlus, Play, Check, Eye, X, RefreshCw, LayoutGrid, List } from 'lucide-react';

interface CustomersSearchProps {
  onNavigate: (route: string) => void;
  onClose?: () => void;
}

interface CustomerRecord {
  id: string;
  name: string;
  group: string;
  status: 'نشط' | 'موقوف' | 'جديد';
  discount: number;
  taxNo: string;
  deliveryRep: string;
  region: string;
  cashOnly: 'نعم' | 'لا';
  commRegister: string;
}

const MOCK_CUSTOMERS: CustomerRecord[] = [
  {
    id: '6001',
    name: 'أحمد علي عبد الله',
    group: 'مجموعة النخبة',
    status: 'نشط',
    discount: 5.0,
    taxNo: '100029341',
    deliveryRep: 'محمد سيف',
    region: 'صنعاء - وحدة',
    cashOnly: 'لا',
    commRegister: 'CR-889410'
  },
  {
    id: '6002',
    name: 'مؤسسة الأمل التجارية',
    group: 'عملاء الجملة',
    status: 'نشط',
    discount: 10.0,
    taxNo: '100054322',
    deliveryRep: 'خالد القدسي',
    region: 'عدن - المعلا',
    cashOnly: 'نعم',
    commRegister: 'CR-543210'
  },
  {
    id: '6003',
    name: 'صالح منصور الشميري',
    group: 'العملاء الاعتياديين',
    status: 'نشط',
    discount: 0.0,
    taxNo: '200195843',
    deliveryRep: 'يحيى صالح',
    region: 'تعز - شارع جمال',
    cashOnly: 'لا',
    commRegister: 'CR-104928'
  },
  {
    id: '6004',
    name: 'شركة الوفاق المحدودة',
    group: 'مجموعة الشركات',
    status: 'موقوف',
    discount: 15.0,
    taxNo: '100099411',
    deliveryRep: 'محمد سيف',
    region: 'الحديدة - الحوك',
    cashOnly: 'لا',
    commRegister: 'CR-998822'
  },
  {
    id: '6005',
    name: 'سوبرماركت البركة',
    group: 'عملاء التجزئة',
    status: 'نشط',
    discount: 2.5,
    taxNo: '300049281',
    deliveryRep: 'علي الصبري',
    region: 'صنعاء - الحصبة',
    cashOnly: 'نعم',
    commRegister: 'CR-775511'
  }
];

export default function CustomersSearch({ onNavigate, onClose }: CustomersSearchProps) {
  // Advanced Search input fields states
  const [idFrom, setIdFrom] = useState('');
  const [idTo, setIdTo] = useState('');
  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  const [discount, setDiscount] = useState('');
  const [taxNo, setTaxNo] = useState('');
  const [deliveryRep, setDeliveryRep] = useState('');
  const [status, setStatus] = useState('');
  const [region, setRegion] = useState('');
  const [cashOnly, setCashOnly] = useState('');
  const [commRegister, setCommRegister] = useState('');
  
  const [recordsCount, setRecordsCount] = useState('500');
  const [searchResults, setSearchResults] = useState<CustomerRecord[]>([]);
  const [searchExecuted, setSearchExecuted] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerRecord | null>(null);

  const handleExecuteSearch = () => {
    const filtered = MOCK_CUSTOMERS.filter(cust => {
      // 1. Customer ID range
      if (idFrom && parseInt(cust.id) < parseInt(idFrom)) return false;
      if (idTo && parseInt(cust.id) > parseInt(idTo)) return false;

      // 2. Name search
      if (name && !cust.name.includes(name)) return false;

      // 3. Group search
      if (group && cust.group !== group) return false;

      // 4. Discount
      if (discount && cust.discount.toString() !== discount) return false;

      // 5. Tax Number
      if (taxNo && !cust.taxNo.includes(taxNo)) return false;

      // 6. Delivery Rep
      if (deliveryRep && cust.deliveryRep !== deliveryRep) return false;

      // 7. Status
      if (status && cust.status !== status) return false;

      // 8. Region
      if (region && cust.region !== region) return false;

      // 9. Cash Only
      if (cashOnly && cust.cashOnly !== cashOnly) return false;

      // 10. Commercial Register
      if (commRegister && !cust.commRegister.includes(commRegister)) return false;

      return true;
    });

    setSearchResults(filtered);
    setSearchExecuted(true);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      padding: '20px',
      direction: 'rtl'
    }}>
      
      {/* Outer Window Box Wrapper */}
      <div style={{ 
        backgroundColor: '#fff', 
        border: '1px solid #95a5a6', 
        borderRadius: '4px', 
        boxShadow: '0 4px 25px rgba(0,0,0,0.3)', 
        overflow: 'hidden',
        width: '100%',
        maxWidth: '1000px',
        maxHeight: '92vh',
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
          <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#2b3e50' }}>العملاء : بحث</div>
        </div>

        {/* Scrollable Container for dialog body */}
        <div style={{ overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column' }}>

          {/* Sub-toolbar section */}
          <div className="qs-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#eaeff2', padding: '6px 15px', borderBottom: '1px solid #cbd5e1' }}>
            
            {/* Right Actions */}
            <div className="qs-toolbar-right" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="rl-utility-icon" title="الإعدادات" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Settings size={15} />
              </div>
              
              <button className="qs-btn qs-btn-execute-action" onClick={handleExecuteSearch} style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', backgroundColor: '#fff', display: 'flex', alignItems: 'center' }}>
                <Play size={13} fill="#e67e22" color="#e67e22" style={{ marginLeft: '4px' }} />
                <span>تنفيذ</span>
              </button>
              
              <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>
              
              <div className="rl-utility-icon" title="الرئيسية" onClick={() => { if (onClose) onClose(); else onNavigate('dashboard'); }} style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Home size={15} />
              </div>

              <button className="qs-btn" onClick={() => alert('إنشاء عميل جديد')} style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
                <UserPlus size={13} color="#28a745" style={{ marginLeft: '4px' }} />
                <span>جديد (عميل)</span>
              </button>
              
              <div className="rl-utility-icon" title="بيئة العمل" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', color: '#555' }}>
                Eco
              </div>
              
              <div className="rl-utility-icon" title="طباعة القائمة" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <List size={15} />
              </div>
            </div>

            {/* Left Utilities */}
            <div className="qs-toolbar-left" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="rl-utility-icon" title="حفظ" style={{ cursor: 'pointer' }}>
                <Check size={15} color="#28a745" />
              </div>
              <div className="rl-utility-icon" title="تحديث" onClick={() => { setIdFrom(''); setIdTo(''); setSearchExecuted(false); }} style={{ cursor: 'pointer' }}>
                <RefreshCw size={14} />
              </div>
              <div className="rl-utility-icon" title="تنسيق الشبكة" style={{ cursor: 'pointer' }}>
                <LayoutGrid size={15} />
              </div>
            </div>
          </div>

          {/* Orange Title Banner */}
          <div style={{ backgroundColor: '#f39c12', color: '#fff', padding: '6px 15px', fontWeight: 'bold', fontSize: '13px', display: 'flex', justifyContent: 'flex-end' }}>
            العميل
          </div>

          {/* Form Body Area */}
          <div style={{ padding: '20px 15px', backgroundColor: '#fdfdfd', borderBottom: '1px solid #e0e0e0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px 40px' }}>
              
              {/* Right Column Fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                
                {/* رقم العميل */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <input 
                    type="text" 
                    value={idFrom} 
                    placeholder="رقم العميل" 
                    onChange={(e) => setIdFrom(e.target.value)} 
                    style={{ border: '1px solid #a5b1c2', height: '24px', padding: '0 6px', width: '130px', backgroundColor: '#ffffcc', textAlign: 'right', fontSize: '12px' }} 
                  />
                  <span style={{ fontSize: '12px', color: '#555' }}>إلى</span>
                  <input 
                    type="text" 
                    value={idTo} 
                    onChange={(e) => setIdTo(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '130px', textAlign: 'right', fontSize: '12px' }}
                  />
                  <span style={{ fontSize: '12px', color: '#7f8c8d', cursor: 'pointer' }}>?</span>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>رقم العميل</label>
                </div>

                {/* الإسم */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <input 
                    type="text" 
                    value={name} 
                    placeholder="اسم العميل..."
                    onChange={(e) => setName(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '280px', textAlign: 'right', fontSize: '12px' }}
                  />
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>الإسم</label>
                </div>

                {/* المجموعة */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <select 
                    value={group} 
                    onChange={(e) => setGroup(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', width: '280px', direction: 'rtl', fontSize: '12px' }}
                  >
                    <option value="">--- الكل ---</option>
                    <option value="مجموعة النخبة">مجموعة النخبة</option>
                    <option value="عملاء الجملة">عملاء الجملة</option>
                    <option value="العملاء الاعتياديين">العملاء الاعتياديين</option>
                    <option value="مجموعة الشركات">مجموعة الشركات</option>
                    <option value="عملاء التجزئة">عملاء التجزئة</option>
                  </select>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>المجموعة</label>
                </div>

                {/* نسبة التخفيض % */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <input 
                    type="text" 
                    value={discount} 
                    placeholder="نسبة التخفيض المحددة..."
                    onChange={(e) => setDiscount(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '280px', textAlign: 'right', fontSize: '12px' }}
                  />
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>نسبة التخفيض %</label>
                </div>

                {/* الرقم الضريبي */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <input 
                    type="text" 
                    value={taxNo} 
                    placeholder="الرقم الضريبي للمنشأة..."
                    onChange={(e) => setTaxNo(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '280px', textAlign: 'right', fontSize: '12px' }}
                  />
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>الرقم الضريبي</label>
                </div>

                {/* مندوب التوصيل */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <select 
                    value={deliveryRep} 
                    onChange={(e) => setDeliveryRep(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', width: '250px', direction: 'rtl', fontSize: '12px' }}
                  >
                    <option value="">--- الكل ---</option>
                    <option value="محمد سيف">محمد سيف</option>
                    <option value="خالد القدسي">خالد القدسي</option>
                    <option value="يحيى صالح">يحيى صالح</option>
                    <option value="علي الصبري">علي الصبري</option>
                  </select>
                  <div style={{ border: '1px solid #b0c2d4', height: '24px', width: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', cursor: 'pointer' }}>
                    <LayoutGrid size={12} color="#3c8dbc" />
                  </div>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>مندوب التوصيل</label>
                </div>

              </div>

              {/* Left Column Fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                
                {/* Blank row space to align fields with right column */}
                <div style={{ height: '24px' }}></div>

                {/* الحالة */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <select 
                    value={status} 
                    onChange={(e) => setStatus(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', width: '280px', direction: 'rtl', fontSize: '12px' }}
                  >
                    <option value="">--- الكل ---</option>
                    <option value="نشط">نشط</option>
                    <option value="موقوف">موقوف</option>
                    <option value="جديد">جديد</option>
                  </select>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>الحالة</label>
                </div>

                {/* المنطقة التجارية */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <select 
                    value={region} 
                    onChange={(e) => setRegion(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', width: '280px', direction: 'rtl', fontSize: '12px' }}
                  >
                    <option value="">--- الكل ---</option>
                    <option value="صنعاء - وحدة">صنعاء - وحدة</option>
                    <option value="عدن - المعلا">عدن - المعلا</option>
                    <option value="تعز - شارع جمال">تعز - شارع جمال</option>
                    <option value="الحديدة - الحوك">الحديدة - الحوك</option>
                    <option value="صنعاء - الحصبة">صنعاء - الحصبة</option>
                  </select>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>المنطقة التجارية</label>
                </div>

                {/* عميل نقدي فقط */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <select 
                    value={cashOnly} 
                    onChange={(e) => setCashOnly(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', width: '260px', direction: 'rtl', fontSize: '12px' }}
                  >
                    <option value="">--- الكل ---</option>
                    <option value="نعم">نعم (نقدي فقط)</option>
                    <option value="لا">لا (آجل ونقدي)</option>
                  </select>
                  <span style={{ fontSize: '12px', color: '#7f8c8d', cursor: 'pointer' }}>?</span>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>عميل نقدي فقط</label>
                </div>

                {/* رقم السجل التجاري */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <input 
                    type="text" 
                    value={commRegister} 
                    placeholder="رقم السجل التجاري..."
                    onChange={(e) => setCommRegister(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '280px', textAlign: 'right', fontSize: '12px' }}
                  />
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>رقم السجل التجاري</label>
                </div>

              </div>

            </div>

            {/* Bottom Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              
              {/* Right Side - Records limit input */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input 
                  type="text" 
                  value={recordsCount} 
                  onChange={(e) => setRecordsCount(e.target.value)}
                  style={{ width: '80px', height: '24px', textAlign: 'center', border: '1px solid #cbd5e1', fontSize: '12px' }}
                />
                <span style={{ fontWeight: 'bold', fontSize: '12px', color: '#333' }}>عدد السجلات</span>
              </div>

              {/* Left Side - Execute Search Button */}
              <div>
                <button 
                  onClick={handleExecuteSearch}
                  style={{ backgroundColor: '#2b5c8f', color: '#fff', border: '1px solid #1a3c61', padding: '6px 40px', fontWeight: 'bold', borderRadius: '3px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}
                >
                  <Check size={15} strokeWidth={3} color="#27ae60" />
                  <span>تنفيذ البحث</span>
                </button>
              </div>

            </div>

          </div>

          {/* Search Results */}
          <div style={{ backgroundColor: '#fff', padding: '15px', minHeight: '180px' }}>
            <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#2b3e50', borderBottom: '1px solid #e0e0e0', paddingBottom: '6px', marginBottom: '10px' }}>
              نتائج البحث عن العملاء:
            </div>

            {searchExecuted ? (
              <table className="rl-table">
                <thead>
                  <tr>
                    <th style={{ width: '40px' }}>م</th>
                    <th style={{ width: '40px' }}>عرض</th>
                    <th>رقم العميل</th>
                    <th>الاسم</th>
                    <th>المجموعة</th>
                    <th>المنطقة التجارية</th>
                    <th>الحالة</th>
                    <th>التخفيض</th>
                    <th>نقدي فقط</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.length === 0 ? (
                    <tr>
                      <td colSpan={9} style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
                        لا توجد نتائج تطابق معايير البحث.
                      </td>
                    </tr>
                  ) : (
                    searchResults.map((cust, index) => (
                      <tr key={cust.id}>
                        <td style={{ textAlign: 'center' }}>{index + 1}</td>
                        <td style={{ textAlign: 'center' }}>
                          <button 
                            onClick={() => setSelectedCustomer(cust)}
                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#3c8dbc' }}
                            title="تفاصيل العميل"
                          >
                            <Eye size={13} />
                          </button>
                        </td>
                        <td style={{ fontWeight: 'bold', color: '#0b5394' }}>{cust.id}</td>
                        <td>{cust.name}</td>
                        <td>{cust.group}</td>
                        <td>{cust.region}</td>
                        <td>
                          <span style={{ 
                            color: cust.status === 'نشط' ? '#27ae60' : '#e74c3c',
                            fontWeight: 'bold'
                          }}>
                            {cust.status}
                          </span>
                        </td>
                        <td>{cust.discount}%</td>
                        <td>{cust.cashOnly}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            ) : (
              <div style={{ textAlign: 'center', padding: '30px 20px', color: '#7f8c8d' }}>
                <Search size={30} style={{ opacity: 0.3, marginBottom: '8px' }} />
                <div>يرجى إدخال معايير البحث والضغط على زر "تنفيذ البحث" لعرض قائمة العملاء.</div>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Customer Details Modal overlay */}
      {selectedCustomer && (
        <div className="rl-modal-overlay" onClick={() => setSelectedCustomer(null)}>
          <div className="rl-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="rl-modal-header" style={{ backgroundColor: '#2b3e50' }}>
              <span>بطاقة العميل رقم {selectedCustomer.id}</span>
              <button 
                onClick={() => setSelectedCustomer(null)}
                style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="rl-modal-body" style={{ fontSize: '13px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', padding: '10px' }}>
                <div><strong>الاسم:</strong> {selectedCustomer.name}</div>
                <div><strong>المجموعة:</strong> {selectedCustomer.group}</div>
                <div><strong>المنطقة التجارية:</strong> {selectedCustomer.region}</div>
                <div><strong>الحالة:</strong> <span style={{ fontWeight: 'bold', color: selectedCustomer.status === 'نشط' ? '#27ae60' : '#e74c3c' }}>{selectedCustomer.status}</span></div>
                <div><strong>نسبة التخفيض:</strong> {selectedCustomer.discount}%</div>
                <div><strong>الرقم الضريبي:</strong> {selectedCustomer.taxNo}</div>
                <div><strong>رقم السجل التجاري:</strong> {selectedCustomer.commRegister}</div>
                <div><strong>مندوب التوصيل:</strong> {selectedCustomer.deliveryRep}</div>
                <div><strong>نقدي فقط:</strong> {selectedCustomer.cashOnly}</div>
              </div>
            </div>

            <div className="rl-modal-footer">
              <button className="cr-btn cr-btn-cancel" onClick={() => setSelectedCustomer(null)}>إغلاق</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
