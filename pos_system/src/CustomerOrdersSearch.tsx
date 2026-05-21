import { useState } from 'react';
import { Search, Settings, Home, FilePlus, Play, Check, Eye, X, RefreshCw, LayoutGrid, List, Calendar, HelpCircle } from 'lucide-react';

interface CustomerOrdersSearchProps {
  onNavigate: (route: string) => void;
  onClose?: () => void;
}

interface CustomerOrderRecord {
  id: string;
  customer: string;
  date: string;
  currency: string;
  total: number;
  status: 'بانتظار الموافقة' | 'تمت الموافقة' | 'مسودة';
  exchangeRate: string;
  category: string;
  closed: string;
  items: Array<{ itemName: string; qty: number; price: number; unit: string }>;
}

const MOCK_CUSTOMER_ORDERS: CustomerOrderRecord[] = [
  {
    id: '20006',
    customer: '6003 : صالح منصور',
    date: '19/05/2026',
    currency: 'ر.ي',
    total: 34000.00,
    status: 'بانتظار الموافقة',
    exchangeRate: '1.00',
    category: 'طلب محلي',
    closed: 'لا',
    items: [
      { itemName: 'حليب مجفف 900جم', qty: 5, price: 5200, unit: 'علبة' },
      { itemName: 'شاي الكبوس 250جم', qty: 20, price: 400, unit: 'حبة' }
    ]
  },
  {
    id: '20005',
    customer: 'شركة الأفق التجارية',
    date: '18/05/2026',
    currency: 'ر.ي',
    total: 48000.00,
    status: 'تمت الموافقة',
    exchangeRate: '1.00',
    category: 'طلب محلي',
    closed: 'نعم',
    items: [
      { itemName: 'سكر السعيد 10كجم', qty: 10, price: 4800, unit: 'كيس' }
    ]
  },
  {
    id: '20004',
    customer: 'سعيد القديمي',
    date: '15/05/2026',
    currency: 'ر.ي',
    total: 104000.00,
    status: 'بانتظار الموافقة',
    exchangeRate: '1.00',
    category: 'طلب خارجي',
    closed: 'لا',
    items: [
      { itemName: 'حليب مجفف 900جم', qty: 20, price: 5200, unit: 'علبة' }
    ]
  },
  {
    id: '20003',
    customer: 'حمود محمد سيف',
    date: '10/05/2026',
    currency: 'ر.ي',
    total: 7000.00,
    status: 'مسودة',
    exchangeRate: '1.00',
    category: 'طلب محلي',
    closed: 'لا',
    items: [
      { itemName: 'أرز بسمتي 5كجم', qty: 2, price: 3500, unit: 'كيس' }
    ]
  }
];

export default function CustomerOrdersSearch({ onNavigate, onClose }: CustomerOrdersSearchProps) {
  // Advanced Search input fields states
  const [numFrom, setNumFrom] = useState('');
  const [numTo, setNumTo] = useState('');
  const [category, setCategory] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [isDraftSearch, setIsDraftSearch] = useState('');
  const [currency, setCurrency] = useState('');
  const [isClosed, setIsClosed] = useState('');
  const [exRateFrom, setExRateFrom] = useState('');
  const [exRateTo, setExRateTo] = useState('');
  const [customerSel, setCustomerSel] = useState('');
  const [custNo, setCustNo] = useState('');
  const [noteSearch, setNoteSearch] = useState('');
  const [statusSearch, setStatusSearch] = useState('');
  const [printCount, setPrintCount] = useState('');
  const [mainDoc, setMainDoc] = useState('');
  const [mainDocNo, setMainDocNo] = useState('');

  const [recordsCount, setRecordsCount] = useState('500');
  const [activeTab, setActiveTab] = useState('categories'); // Categories = 'فئات المستند'
  const [searchResults, setSearchResults] = useState<CustomerOrderRecord[]>([]);
  const [searchExecuted, setSearchExecuted] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<CustomerOrderRecord | null>(null);

  const handleExecuteSearch = () => {
    // Filter Mock data based on advanced search criteria
    const filtered = MOCK_CUSTOMER_ORDERS.filter(order => {
      // 1. Number filter
      if (numFrom && parseInt(order.id) < parseInt(numFrom)) return false;
      if (numTo && parseInt(order.id) > parseInt(numTo)) return false;
      
      // 2. Category filter
      if (category && order.category !== category) return false;

      // 3. Status filter
      if (statusSearch && order.status !== statusSearch) return false;

      // 4. Currency filter
      if (currency && order.currency !== currency) return false;

      // 5. Closed filter
      if (isClosed && order.closed !== isClosed) return false;

      // 6. Customer filter
      if (customerSel && !order.customer.includes(customerSel)) return false;

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
      
      {/* Outer Window Box Wrapper (RemoX dialog layout) */}
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
          <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#2b3e50' }}>طلبات العملاء : بحث</div>
        </div>

        {/* Scrollable Container for dialog body */}
        <div style={{ overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column' }}>

          {/* Toolbar section */}
          <div className="qs-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#eaeff2', padding: '6px 15px', borderBottom: '1px solid #cbd5e1' }}>
            
            {/* Right Actions (Settings, Execute, navigation buttons) */}
            <div className="qs-toolbar-right" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="rl-utility-icon" title="الإعدادات" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Settings size={15} />
              </div>
              
              <button className="qs-btn qs-btn-execute-action" onClick={handleExecuteSearch} style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', backgroundColor: '#fff', display: 'flex', alignItems: 'center' }}>
                <Play size={13} fill="#c0392b" color="#c0392b" style={{ marginLeft: '4px' }} />
                <span>تنفيذ</span>
              </button>
              
              <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>
              
              <div className="rl-utility-icon" title="الرئيسية" onClick={() => onNavigate('dashboard')} style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <Home size={15} />
              </div>

              <button className="qs-btn" onClick={() => onNavigate('customer-orders-new')} style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
                <FilePlus size={13} color="#28a745" style={{ marginLeft: '4px' }} />
                <span>جديد (طلبات العملاء)</span>
              </button>
              
              <div className="rl-utility-icon" title="بيئة العمل" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', color: '#555' }}>
                Eco
              </div>
              <div className="rl-utility-icon" title="تنسيق القائمة" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
                <List size={15} />
              </div>
            </div>

            {/* Left Utilities */}
            <div className="qs-toolbar-left" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="rl-utility-icon" title="حفظ المسودة" style={{ cursor: 'pointer' }}>
                <Check size={15} color="#28a745" />
              </div>
              <div className="rl-utility-icon" title="تحديث" onClick={() => { setNumFrom(''); setNumTo(''); setSearchExecuted(false); }} style={{ cursor: 'pointer' }}>
                <RefreshCw size={14} />
              </div>
              <div className="rl-utility-icon" title="تنسيق الشبكة" style={{ cursor: 'pointer' }}>
                <LayoutGrid size={15} />
              </div>
            </div>
          </div>

          {/* Tab Header bar (Forced RTL) */}
          <div style={{ display: 'flex', backgroundColor: '#eaeff2', borderBottom: '1px solid #cbd5e1', padding: '5px 10px 0 10px', direction: 'rtl', justifyContent: 'flex-start' }}>
            <div style={{ padding: '6px 20px', backgroundColor: '#fff', border: '1px solid #cbd5e1', borderBottom: 'none', borderRadius: '4px 4px 0 0', fontWeight: 'bold', color: '#e67e22', cursor: 'pointer', fontSize: '12px' }}>
              طلبات العملاء
            </div>
            <div style={{ padding: '6px 20px', color: '#3c8dbc', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }} onClick={() => alert('السجل غير متاح حالياً.')}>
              السجل
            </div>
          </div>

          {/* Orange Banner inside form area */}
          <div style={{ backgroundColor: '#f39c12', color: '#fff', padding: '6px 15px', fontWeight: 'bold', fontSize: '13px', display: 'flex', justifyContent: 'flex-end' }}>
            طلبات العملاء
          </div>

          {/* Form Body Area */}
          <div style={{ padding: '20px 15px', backgroundColor: '#fdfdfd', borderBottom: '1px solid #e0e0e0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px 40px' }}>
              
              {/* Right Column Fields (First in DOM under RTL: renders on the right side) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                
                {/* الرقم (Number range search - Swapped inputs to flow correctly RTL) */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <input 
                    type="text" 
                    value={numFrom} 
                    placeholder="من رقم" 
                    onChange={(e) => setNumFrom(e.target.value)} 
                    style={{ border: '1px solid #a5b1c2', height: '24px', padding: '0 6px', width: '130px', backgroundColor: '#ffffcc', textAlign: 'right', fontSize: '12px' }} 
                  />
                  <span style={{ fontSize: '12px', color: '#555' }}>إلى</span>
                  <input 
                    type="text" 
                    value={numTo} 
                    placeholder="إلى رقم" 
                    onChange={(e) => setNumTo(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '130px', textAlign: 'right', fontSize: '12px' }}
                  />
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>الرقم</label>
                </div>

                {/* التاريخ (Date range search - Swapped inputs to flow correctly RTL) */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text" 
                      value={dateFrom} 
                      placeholder="من تاريخ" 
                      onChange={(e) => setDateFrom(e.target.value)} 
                      style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '110px', textAlign: 'left', fontSize: '11px' }}
                    />
                    <Calendar size={11} style={{ position: 'absolute', right: '4px', top: '7px', color: '#888' }} />
                  </div>
                  <span style={{ fontSize: '12px', color: '#555' }}>إلى</span>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text" 
                      value={dateTo} 
                      placeholder="إلى تاريخ" 
                      onChange={(e) => setDateTo(e.target.value)} 
                      style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '110px', textAlign: 'left', fontSize: '11px' }}
                    />
                    <Calendar size={11} style={{ position: 'absolute', right: '4px', top: '7px', color: '#888' }} />
                  </div>
                  <div style={{ border: '1px solid #b0c2d4', height: '24px', width: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backgroundColor: '#fff' }}>
                    <Play size={10} fill="#3c8dbc" color="#3c8dbc" style={{ transform: 'rotate(90deg)' }} />
                  </div>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>التاريخ</label>
                </div>

                {/* مغلق (Closed dropdown) */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <select 
                    value={isClosed} 
                    onChange={(e) => setIsClosed(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', width: '280px', direction: 'rtl', fontSize: '12px' }}
                  >
                    <option value="">--- الكل ---</option>
                    <option value="نعم">نعم</option>
                    <option value="لا">لا</option>
                  </select>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>مغلق</label>
                </div>

                {/* سعر التحويل (Exchange Rate range search - Swapped inputs to flow correctly RTL) */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <input 
                    type="text" 
                    value={exRateFrom} 
                    placeholder="السعر الحالي" 
                    onChange={(e) => setExRateFrom(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '130px', textAlign: 'right', fontSize: '12px' }}
                  />
                  <span style={{ fontSize: '12px', color: '#555' }}>إلى</span>
                  <input 
                    type="text" 
                    value={exRateTo} 
                    placeholder="السعر الحالي" 
                    onChange={(e) => setExRateTo(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '130px', textAlign: 'right', fontSize: '12px' }}
                  />
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>سعر التحويل</label>
                </div>

                {/* رقم العميل */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <select 
                    value={custNo} 
                    onChange={(e) => setCustNo(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', width: '280px', direction: 'rtl', fontSize: '12px' }}
                  >
                    <option value="">--- اختر رقم العميل ---</option>
                    <option value="6003">6003</option>
                    <option value="6006">6006</option>
                    <option value="6007">6007</option>
                  </select>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>رقم العميل</label>
                </div>

                {/* الحالة (Status) */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <select 
                    value={statusSearch} 
                    onChange={(e) => setStatusSearch(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', width: '280px', direction: 'rtl', fontSize: '12px' }}
                  >
                    <option value="">--- الكل ---</option>
                    <option value="بانتظار الموافقة">بانتظار الموافقة</option>
                    <option value="تمت الموافقة">تمت الموافقة</option>
                    <option value="مسودة">مسودة</option>
                  </select>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>الحالة</label>
                </div>

                {/* رقم المستند الرئيسي */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <input 
                    type="text" 
                    value={mainDocNo} 
                    placeholder="رقم المستند المرتبط..."
                    onChange={(e) => setMainDocNo(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '280px', textAlign: 'right', fontSize: '12px' }}
                  />
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>رقم المستند الرئيسي</label>
                </div>

              </div>

              {/* Left Column Fields (Second in DOM under RTL: renders on the left side) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                
                {/* الفئة (Category dropdown) */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', width: '280px', direction: 'rtl', fontSize: '12px' }}
                  >
                    <option value="">--- الكل ---</option>
                    <option value="طلب محلي">طلب محلي</option>
                    <option value="طلب خارجي">طلب خارجي</option>
                  </select>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>الفئة</label>
                </div>

                {/* مسودة (Draft dropdown with blue question mark) */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <select 
                    value={isDraftSearch} 
                    onChange={(e) => setIsDraftSearch(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', width: '250px', direction: 'rtl', fontSize: '12px' }}
                  >
                    <option value="">--- الكل ---</option>
                    <option value="نعم">نعم (مسودة فقط)</option>
                    <option value="لا">لا (الكل عدا المسودات)</option>
                  </select>
                  <HelpCircle size={14} color="#3c8dbc" style={{ cursor: 'pointer' }} />
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>مسودة</label>
                </div>

                {/* عملة المستند */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <select 
                    value={currency} 
                    onChange={(e) => setCurrency(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', width: '280px', direction: 'rtl', fontSize: '12px' }}
                  >
                    <option value="">--- الكل ---</option>
                    <option value="ر.ي">ر.ي (ريال يمني)</option>
                    <option value="$">دولار ($)</option>
                    <option value="س.س">ريال سعودي</option>
                  </select>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>عملة المستند</label>
                </div>

                {/* العميل (Customer selector) */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <select 
                    value={customerSel} 
                    onChange={(e) => setCustomerSel(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', width: '280px', direction: 'rtl', fontSize: '12px' }}
                  >
                    <option value="">--- اختر العميل ---</option>
                    <option value="صالح منصور">صالح منصور</option>
                    <option value="الأفق">شركة الأفق التجارية</option>
                    <option value="سعيد القديمي">سعيد القديمي</option>
                    <option value="حمود محمد">حمود محمد سيف</option>
                  </select>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>العميل</label>
                </div>

                {/* ملاحظة (Notes search) */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <input 
                    type="text" 
                    value={noteSearch} 
                    placeholder="ابحث بالبيانات المكتوبة في الملاحظة..."
                    onChange={(e) => setNoteSearch(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '280px', textAlign: 'right', fontSize: '12px' }}
                  />
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>ملاحظة</label>
                </div>

                {/* مرات الطباعة */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <input 
                    type="number" 
                    value={printCount} 
                    placeholder="عدد مرات الطباعة..."
                    onChange={(e) => setPrintCount(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', width: '280px', textAlign: 'right', fontSize: '12px' }}
                  />
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>مرات الطباعة</label>
                </div>

                {/* المستند الرئيسي */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <select 
                    value={mainDoc} 
                    onChange={(e) => setMainDoc(e.target.value)} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', width: '280px', direction: 'rtl', fontSize: '12px' }}
                  >
                    <option value="">--- اختر المستند ---</option>
                    <option value="عرض سعر">عرض سعر</option>
                    <option value="فاتورة مبيعات">فاتورة مبيعات</option>
                  </select>
                  <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>المستند الرئيسي</label>
                </div>

              </div>

            </div>

            {/* Action Row below the fields - Swapped in DOM to align limit on the right and search button on the left */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              
              {/* Right Side (First in RTL: renders on the right) - Records count limit input */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input 
                  type="text" 
                  value={recordsCount} 
                  onChange={(e) => setRecordsCount(e.target.value)}
                  style={{ width: '80px', height: '24px', textAlign: 'center', border: '1px solid #cbd5e1', fontSize: '12px' }}
                />
                <span style={{ fontWeight: 'bold', fontSize: '12px', color: '#333' }}>عدد السجلات</span>
              </div>

              {/* Left Side (Second in RTL: renders on the left) - Execute Search Button */}
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

          {/* 3. Bottom Tabs (RTL tabs from screenshot) */}
          <div className="qs-tabs-container" style={{ direction: 'rtl', justifyContent: 'flex-start', borderTop: '1px solid #cbd5e1' }}>
            
            {/* Label Title on the far right */}
            <div style={{ color: '#2b3e50', fontWeight: 'bold', fontSize: '13px', display: 'flex', alignItems: 'center', marginLeft: '15px', marginRight: '5px' }}>
              فئات المستند
            </div>

            <div 
              className={`qs-tab ${activeTab === 'waiting' ? 'active' : ''}`}
              onClick={() => setActiveTab('waiting')}
            >
              <span>بإنتظار الموافقة</span>
              <span className="qs-blue-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={5} fill="#fff" color="#fff" style={{ transform: 'rotate(180deg)', display: 'block' }} />
              </span>
            </div>

            <div 
              className={`qs-tab ${activeTab === 'custom-attributes' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom-attributes')}
            >
              <span>الإعدادات : سمات مخصصة</span>
              <span className="qs-blue-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={5} fill="#fff" color="#fff" style={{ transform: 'rotate(180deg)' }} />
              </span>
            </div>

            <div 
              className={`qs-tab ${activeTab === 'drafts' ? 'active' : ''}`}
              onClick={() => setActiveTab('drafts')}
            >
              <span>المسودات</span>
              <span className="qs-blue-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={5} fill="#fff" color="#fff" style={{ transform: 'rotate(180deg)' }} />
              </span>
            </div>

            <div 
              className={`qs-tab ${activeTab === 'doc-items' ? 'active' : ''}`}
              onClick={() => setActiveTab('doc-items')}
            >
              <span>أصناف المستندات</span>
              <span className="qs-blue-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={5} fill="#fff" color="#fff" style={{ transform: 'rotate(180deg)' }} />
              </span>
            </div>

            <div 
              className={`qs-tab ${activeTab === 'doc-items-qty' ? 'active' : ''}`}
              onClick={() => setActiveTab('doc-items-qty')}
            >
              <span>أصناف المستندات ( كميات )</span>
              <span className="qs-blue-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={5} fill="#fff" color="#fff" style={{ transform: 'rotate(180deg)' }} />
              </span>
            </div>

            <div 
              className={`qs-tab ${activeTab === 'categories' ? 'active' : ''}`}
              onClick={() => setActiveTab('categories')}
            >
              <span>فئات المستند</span>
              <span className="qs-blue-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3c8dbc' }}>
                <LayoutGrid size={8} color="#fff" />
              </span>
            </div>
          </div>

          {/* Search Results Display Area */}
          <div style={{ backgroundColor: '#fff', padding: '15px', minHeight: '220px' }}>
            {activeTab === 'categories' && (
              <div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#2b3e50', borderBottom: '1px solid #e0e0e0', paddingBottom: '6px', marginBottom: '10px' }}>
                  نتائج البحث عن طلبات العملاء:
                </div>
                
                {searchExecuted ? (
                  <table className="rl-table">
                    <thead>
                      <tr>
                        <th style={{ width: '40px' }}>م</th>
                        <th style={{ width: '40px' }}>عرض</th>
                        <th>رقم الطلب</th>
                        <th>العميل</th>
                        <th>التاريخ</th>
                        <th>العملة</th>
                        <th>الإجمالي</th>
                        <th>الحالة</th>
                        <th>مغلق</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchResults.length === 0 ? (
                        <tr>
                          <td colSpan={9} style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
                            لا توجد طلبات عملاء تطابق معايير البحث المدخلة.
                          </td>
                        </tr>
                      ) : (
                        searchResults.map((order, index) => (
                          <tr key={order.id}>
                            <td style={{ textAlign: 'center' }}>{index + 1}</td>
                            <td style={{ textAlign: 'center' }}>
                              <button 
                                onClick={() => setSelectedOrder(order)}
                                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#3c8dbc' }}
                                title="استعراض تفاصيل طلب العميل"
                              >
                                <Eye size={13} />
                              </button>
                            </td>
                            <td style={{ fontWeight: 'bold', color: '#0b5394' }}>{order.id}</td>
                            <td>{order.customer}</td>
                            <td>{order.date}</td>
                            <td>{order.currency}</td>
                            <td style={{ fontWeight: 'bold' }}>{order.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                            <td>
                              <span style={{ 
                                color: order.status === 'تمت الموافقة' ? '#27ae60' : order.status === 'مسودة' ? '#7f8c8d' : '#e67e22',
                                fontWeight: 'bold'
                              }}>
                                {order.status}
                              </span>
                            </td>
                            <td style={{ textAlign: 'center' }}>{order.closed}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                ) : (
                  <div style={{ textAlign: 'center', padding: '40px 20px', color: '#7f8c8d' }}>
                    <Search size={30} style={{ opacity: 0.3, marginBottom: '8px' }} />
                    <div>يرجى إدخال معايير البحث والضغط على زر "تنفيذ البحث" لعرض فئات وطلب العملاء المتاح.</div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'waiting' && (
              <div style={{ padding: '10px' }}>
                <div style={{ fontWeight: 'bold', color: '#e67e22', marginBottom: '8px' }}>طلبات العملاء بانتظار الموافقة:</div>
                <table className="rl-table">
                  <thead>
                    <tr>
                      <th>م</th>
                      <th>رقم الطلب</th>
                      <th>العميل</th>
                      <th>التاريخ</th>
                      <th>الإجمالي</th>
                      <th>الإجراء</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_CUSTOMER_ORDERS.filter(o => o.status === 'بانتظار الموافقة').map((order, idx) => (
                      <tr key={order.id}>
                        <td>{idx + 1}</td>
                        <td style={{ fontWeight: 'bold', color: '#0b5394' }}>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.date}</td>
                        <td style={{ fontWeight: 'bold' }}>{order.total.toLocaleString()} ر.ي</td>
                        <td>
                          <button 
                            className="pos-add-row-btn" 
                            style={{ padding: '2px 8px', fontSize: '11px', background: '#27ae60', color: '#fff', border: 'none', borderRadius: '3px' }}
                            onClick={() => alert(`تمت الموافقة على طلب العميل رقم ${order.id}`)}
                          >
                            موافقة واعتماد
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'custom-attributes' && (
              <div style={{ padding: '15px', color: '#555' }}>
                <h4>سمات المستند المخصصة (طلبات العملاء):</h4>
                <p>من هنا يمكنك إعداد الحقول الإضافية، التلميحات، وتحديد الصلاحيات الخاصة بخصومات طلبات العملاء وفترات الصلاحية.</p>
              </div>
            )}

            {activeTab === 'drafts' && (
              <div style={{ padding: '10px' }}>
                <div style={{ fontWeight: 'bold', color: '#7f8c8d', marginBottom: '8px' }}>المسودات غير المرحّلة:</div>
                <table className="rl-table">
                  <thead>
                    <tr>
                      <th>م</th>
                      <th>رقم الطلب</th>
                      <th>العميل</th>
                      <th>التاريخ</th>
                      <th>الإجمالي</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_CUSTOMER_ORDERS.filter(o => o.status === 'مسودة').map((order, idx) => (
                      <tr key={order.id}>
                        <td>{idx + 1}</td>
                        <td style={{ fontWeight: 'bold' }}>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.date}</td>
                        <td>{order.total.toLocaleString()} ر.ي</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'doc-items' && (
              <div style={{ padding: '15px' }}>
                <h4>أصناف المستندات:</h4>
                <p>توزيع وتدقيق الأصناف داخل طلبات العملاء النشطة.</p>
              </div>
            )}

            {activeTab === 'doc-items-qty' && (
              <div style={{ padding: '15px' }}>
                <h4>أصناف المستندات ( كميات ):</h4>
                <p>تقرير إجمالي الكميات المطلوبة في طلبات العملاء.</p>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* 4. Details Preview Modal Overlay */}
      {selectedOrder && (
        <div className="rl-modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="rl-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="rl-modal-header" style={{ backgroundColor: '#2b3e50' }}>
              <span>عرض تفاصيل طلب العميل رقم {selectedOrder.id}</span>
              <button 
                onClick={() => setSelectedOrder(null)}
                style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="rl-modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                <div><strong>العميل:</strong> {selectedOrder.customer}</div>
                <div><strong>التاريخ:</strong> {selectedOrder.date}</div>
                <div><strong>الحالة:</strong> <span style={{ fontWeight: 'bold', color: selectedOrder.status === 'تمت الموافقة' ? '#27ae60' : '#e67e22' }}>{selectedOrder.status}</span></div>
                <div><strong>العملة:</strong> {selectedOrder.currency}</div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #ddd', paddingBottom: '4px' }}>أصناف الطلب:</h4>
                <table className="pos-grid-table" style={{ width: '100%' }}>
                  <thead>
                    <tr>
                      <th>م</th>
                      <th>الصنف</th>
                      <th>الوحدة</th>
                      <th>الكمية</th>
                      <th>سعر الوحدة</th>
                      <th>الإجمالي</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.items.map((item, index) => (
                      <tr key={index}>
                        <td className="pos-grid-id">{index + 1}</td>
                        <td style={{ padding: '6px' }}>{item.itemName}</td>
                        <td style={{ padding: '6px' }}>{item.unit}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{item.qty}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{item.price.toFixed(2)}</td>
                        <td style={{ padding: '6px', textAlign: 'center', fontWeight: 'bold' }}>{(item.qty * item.price).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><strong>إجمالي طلب العميل:</strong></div>
                <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#2b3e50' }}>{selectedOrder.total.toLocaleString()} {selectedOrder.currency}</div>
              </div>
            </div>

            <div className="rl-modal-footer">
              <button className="cr-btn cr-btn-cancel" onClick={() => setSelectedOrder(null)}>إغلاق</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
