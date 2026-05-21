import { useState } from 'react';
import { Search, Settings, UserPlus, Play, RefreshCw, LayoutGrid, Printer, Home, Edit, FileText, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface CustomersBrowseProps {
  onNavigate: (route: string) => void;
}

interface CustomerRow {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  balance: number;
  debit: number;
  credit: number;
  debtLimit: number;
  totalDebt: number;
  lastTxDate: string;
  status: 'مفعل' | 'نشط' | 'موقوف';
  groupName: string;
  regionName: string;
  discountPct: string;
  isCashOnly: boolean;
  taxNumber: string;
  commercialReg: string;
  deliveryRep: string;
  currency: string;
  accountType: string;
}

const MOCK_CUSTOMERS_DATA: CustomerRow[] = [
  {
    id: '6003',
    name: 'صالح منصور',
    phone: '777123456',
    email: 'saleh@example.com',
    address: 'تعز - شارع جمال',
    balance: -716776.75,
    debit: 716776.75,
    credit: 0,
    debtLimit: 1000000,
    totalDebt: 716776.75,
    lastTxDate: '18/05/2026',
    status: 'مفعل',
    groupName: '',
    regionName: '',
    discountPct: '',
    isCashOnly: false,
    taxNumber: '',
    commercialReg: '',
    deliveryRep: '',
    currency: 'ر.ي',
    accountType: 'العملاء - تجميعي'
  },
  {
    id: '6005',
    name: 'سعيد القديمي',
    phone: '771987654',
    email: 'saeed@example.com',
    address: 'عدن - المعلا',
    balance: -48000,
    debit: 60000,
    credit: 12000,
    debtLimit: 100000,
    totalDebt: 48000,
    lastTxDate: '19/05/2026',
    status: 'مفعل',
    groupName: '',
    regionName: '',
    discountPct: '',
    isCashOnly: false,
    taxNumber: '',
    commercialReg: '',
    deliveryRep: '',
    currency: 'ر.ي',
    accountType: 'العملاء - تجميعي'
  },
  {
    id: '6006',
    name: 'شركة الأفق',
    phone: '733445566',
    email: 'alofoq@example.com',
    address: 'صنعاء - شارع حدة',
    balance: 5000,
    debit: 0,
    credit: 5000,
    debtLimit: 20000,
    totalDebt: 0,
    lastTxDate: '15/05/2026',
    status: 'مفعل',
    groupName: '',
    regionName: '',
    discountPct: '5',
    isCashOnly: false,
    taxNumber: '112233',
    commercialReg: '98765',
    deliveryRep: 'محمد اليماني',
    currency: 'ر.ي',
    accountType: 'العملاء - تجميعي'
  },
  {
    id: '6007',
    name: 'احمد نصر محمد',
    phone: '711223344',
    email: 'ahmed_nasr@example.com',
    address: 'الحديدة - الحوك',
    balance: -85000,
    debit: 85000,
    credit: 0,
    debtLimit: 150000,
    totalDebt: 85000,
    lastTxDate: '10/05/2026',
    status: 'مفعل',
    groupName: '',
    regionName: '',
    discountPct: '',
    isCashOnly: false,
    taxNumber: '',
    commercialReg: '',
    deliveryRep: '',
    currency: 'ر.ي',
    accountType: 'العملاء - تجميعي'
  },
  {
    id: '6008',
    name: 'ناصر علي',
    phone: '770112233',
    email: 'nasser@example.com',
    address: 'صنعاء - الحصبة',
    balance: 0,
    debit: 20000,
    credit: 20000,
    debtLimit: 30000,
    totalDebt: 0,
    lastTxDate: '12/05/2026',
    status: 'مفعل',
    groupName: '',
    regionName: '',
    discountPct: '',
    isCashOnly: false,
    taxNumber: '',
    commercialReg: '',
    deliveryRep: '',
    currency: 'ر.ي',
    accountType: 'العملاء - تجميعي'
  },
  {
    id: '6009',
    name: 'عميل النقدية',
    phone: '777000000',
    email: 'cash_cust@example.com',
    address: 'المحل الرئيسي',
    balance: 0,
    debit: 500000,
    credit: 500000,
    debtLimit: 0,
    totalDebt: 0,
    lastTxDate: '19/05/2026',
    status: 'مفعل',
    groupName: '',
    regionName: '',
    discountPct: '',
    isCashOnly: true,
    taxNumber: '',
    commercialReg: '',
    deliveryRep: '',
    currency: 'ر.ي',
    accountType: 'العملاء - تجميعي'
  },
  {
    id: '6010',
    name: 'سعيد هزاع',
    phone: '775221144',
    email: 'hazzaa@example.com',
    address: 'إب - الدليل',
    balance: -25000,
    debit: 25000,
    credit: 0,
    debtLimit: 40000,
    totalDebt: 25000,
    lastTxDate: '14/05/2026',
    status: 'مفعل',
    groupName: '',
    regionName: '',
    discountPct: '',
    isCashOnly: false,
    taxNumber: '',
    commercialReg: '',
    deliveryRep: '',
    currency: 'ر.ي',
    accountType: 'العملاء - تجميعي'
  },
  {
    id: '6011',
    name: 'محمد عبدالحبيب',
    phone: '773556688',
    email: 'habeeb@example.com',
    address: 'صنعاء - التحرير',
    balance: -10000,
    debit: 10000,
    credit: 0,
    debtLimit: 30000,
    totalDebt: 10000,
    lastTxDate: '16/05/2026',
    status: 'مفعل',
    groupName: '',
    regionName: '',
    discountPct: '',
    isCashOnly: false,
    taxNumber: '',
    commercialReg: '',
    deliveryRep: '',
    currency: 'ر.ي',
    accountType: 'العملاء - تجميعي'
  },
  {
    id: '6012',
    name: 'amna',
    phone: '779998877',
    email: 'amna@example.com',
    address: 'صنعاء',
    balance: 0,
    debit: 0,
    credit: 0,
    debtLimit: 10000,
    totalDebt: 0,
    lastTxDate: '19/05/2026',
    status: 'مفعل',
    groupName: '',
    regionName: '',
    discountPct: '',
    isCashOnly: false,
    taxNumber: '',
    commercialReg: '',
    deliveryRep: '',
    currency: 'ر.ي',
    accountType: 'العملاء - تجميعي'
  }
];

export default function CustomersBrowse({ onNavigate }: CustomersBrowseProps) {
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [selectedCustId, setSelectedCustId] = useState('6003');
  const [activeSubTab, setActiveSubTab] = useState<'profile' | 'contact'>('profile');

  // Find active customer object
  const activeCustomer = MOCK_CUSTOMERS_DATA.find(c => c.id === selectedCustId) || MOCK_CUSTOMERS_DATA[0];

  // Filter customers for sidebar list
  const filteredCustomers = MOCK_CUSTOMERS_DATA.filter(c => 
    c.name.includes(sidebarSearch) || c.id.includes(sidebarSearch)
  );

  // Navigation handlers
  const handleNextCustomer = () => {
    const currentIndex = MOCK_CUSTOMERS_DATA.findIndex(c => c.id === selectedCustId);
    if (currentIndex < MOCK_CUSTOMERS_DATA.length - 1) {
      setSelectedCustId(MOCK_CUSTOMERS_DATA[currentIndex + 1].id);
    }
  };

  const handlePrevCustomer = () => {
    const currentIndex = MOCK_CUSTOMERS_DATA.findIndex(c => c.id === selectedCustId);
    if (currentIndex > 0) {
      setSelectedCustId(MOCK_CUSTOMERS_DATA[currentIndex - 1].id);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100%', backgroundColor: '#f4f6f9', direction: 'rtl' }}>
      
      {/* 1. RIGHT SIDEBAR: Customer List & Search (Placed first in flex order so it shows on the far right in RTL) */}
      <div style={{ width: '260px', display: 'flex', flexDirection: 'column', backgroundColor: '#e2ebf0', borderLeft: '1px solid #cbd5e1' }}>
        
        {/* Title Bar */}
        <div style={{ borderBottom: '1px solid #cbd5e1', backgroundColor: '#2c3e50', padding: '6px 12px', textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: '12px' }}>
          العملاء
        </div>

        {/* Search Input Box */}
        <div style={{ padding: '8px', borderBottom: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #a5b1c2', backgroundColor: '#fff', borderRadius: '3px', flex: 1, padding: '0 6px' }}>
            <Search size={13} color="#95a5a6" style={{ marginLeft: '4px' }} />
            <input 
              type="text" 
              placeholder="الإسم"
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              style={{ border: 'none', height: '22px', fontSize: '12px', width: '100%', outline: 'none', textAlign: 'right' }}
            />
          </div>
          <div title="تحديث" onClick={() => setSidebarSearch('')} style={{ cursor: 'pointer', border: '1px solid #a5b1c2', padding: '3px', borderRadius: '3px', backgroundColor: '#fff' }}>
            <RefreshCw size={12} color="#555" />
          </div>
          <div title="جديد" onClick={() => alert('جديد')} style={{ cursor: 'pointer', border: '1px solid #a5b1c2', padding: '3px', borderRadius: '3px', backgroundColor: '#fff' }}>
            <UserPlus size={12} color="#28a745" />
          </div>
        </div>

        {/* Customer List */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          {filteredCustomers.map(cust => {
            const isSelected = cust.id === selectedCustId;
            return (
              <div 
                key={cust.id}
                onClick={() => setSelectedCustId(cust.id)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  backgroundColor: isSelected ? '#ffffcc' : '#f1f5f8',
                  borderBottom: '1px solid #d2dbe0',
                  transition: 'background-color 0.2s',
                  fontSize: '12px',
                  fontWeight: isSelected ? 'bold' : 'normal',
                  color: '#2c3e50'
                }}
              >
                {/* Left side: Arrow indicator on selection */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  {isSelected && <span style={{ color: '#0b5394', fontSize: '10px' }}>◀</span>}
                  <span style={{ fontSize: '11px', color: '#7f8c8d' }}>📄</span>
                </div>

                {/* Right side: Customer Label */}
                <div style={{ textAlign: 'right' }}>
                  <span>{cust.id} , {cust.name}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* 2. LEFT PORTION: Form details and utility bars (Placed second in flex order so it shows on the left in RTL) */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Utility Toolbar */}
        <div className="qs-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#eaeff2', padding: '6px 15px', borderBottom: '1px solid #cbd5e1' }}>
          
          {/* Right Side Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="rl-utility-icon" title="الإعدادات" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
              <Settings size={15} />
            </div>

            <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>

            <button 
              className="qs-btn" 
              onClick={() => alert(`طباعة كشف الحساب للعميل: ${activeCustomer.name}`)}
              style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff', gap: '4px' }}
            >
              <Printer size={13} color="#555" />
              <span>طباعة</span>
            </button>

            <button 
              className="qs-btn" 
              onClick={() => alert('تعديل العميل')} 
              style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff', gap: '4px' }}
            >
              <Edit size={13} color="#e67e22" />
              <span>تعديل</span>
            </button>

            <button 
              className="qs-btn" 
              onClick={() => alert('إرسال إشعار بالرصيد')} 
              style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff', gap: '4px' }}
            >
              <FileText size={13} color="#0b5394" />
              <span>إشعار بالرصيد</span>
            </button>
            
            <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>

            {/* Navigation Arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              <div 
                className="rl-utility-icon" 
                onClick={handlePrevCustomer} 
                title="العميل السابق"
                style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}
              >
                <ChevronRight size={15} />
              </div>
              <div 
                className="rl-utility-icon" 
                onClick={handleNextCustomer} 
                title="العميل التالي"
                style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}
              >
                <ChevronLeft size={15} />
              </div>
            </div>

            <div className="rl-utility-icon" title="بيئة العمل" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', color: '#555' }}>
              Eco
            </div>
          </div>

          {/* Left Side Small Shortcuts */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div className="rl-utility-icon" title="تقسيم النافذة" style={{ cursor: 'pointer', border: '1px solid #cbd5e1', padding: '4px', borderRadius: '3px', backgroundColor: '#fff' }}>
              <LayoutGrid size={14} />
            </div>
            <div className="rl-utility-icon" title="بحث متقدم" onClick={() => onNavigate('customers-main')} style={{ cursor: 'pointer', border: '1px solid #cbd5e1', padding: '4px', borderRadius: '3px', backgroundColor: '#fff' }}>
              <Search size={14} />
            </div>
            <div className="rl-utility-icon" title="إضافة عميل جديد" onClick={() => alert('إضافة عميل')} style={{ cursor: 'pointer', border: '1px solid #cbd5e1', padding: '4px', borderRadius: '3px', backgroundColor: '#fff' }}>
              <UserPlus size={14} />
            </div>
            <div className="rl-utility-icon" title="الرئيسية" onClick={() => onNavigate('dashboard')} style={{ cursor: 'pointer', border: '1px solid #cbd5e1', padding: '4px', borderRadius: '3px', backgroundColor: '#fff' }}>
              <Home size={14} />
            </div>
          </div>
        </div>

        {/* Content Box */}
        <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          {/* Main Title Banner: العميل: صالح منصور */}
          <div style={{ 
            border: '1px solid #cbd5e1', 
            backgroundColor: '#eef2f5', 
            padding: '6px 12px', 
            textAlign: 'center', 
            fontWeight: 'bold', 
            fontSize: '14px', 
            color: '#2b3e50',
            borderRadius: '3px'
          }}>
            العميل : {activeCustomer.name}
          </div>

          {/* Customer Information View Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '4px', overflow: 'hidden' }}>
            
            {/* Tab header bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#eaeff2', borderBottom: '1px solid #cbd5e1', padding: '0 8px' }}>
              
              {/* Left Side Links */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div 
                  onClick={() => alert('إغلاق')} 
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#e74c3c', border: '1px solid #f5c6cb', backgroundColor: '#f8d7da', borderRadius: '3px', padding: '2px 6px', fontSize: '11px', fontWeight: 'bold' }}
                >
                  <X size={11} style={{ marginLeft: '4px' }} />
                  <span>إغلاق</span>
                </div>
                <div style={{ height: '14px', width: '1px', backgroundColor: '#cbd5e1' }}></div>
                
                <span onClick={() => alert('عرض فواتير المبيعات')} style={{ fontSize: '12px', color: '#0b5394', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <Play size={10} fill="#0b5394" /> فواتير المبيعات
                </span>
                <span onClick={() => alert('عرض سندات القبض')} style={{ fontSize: '12px', color: '#0b5394', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <Play size={10} fill="#0b5394" /> سندات القبض
                </span>
                <span onClick={() => alert('عرض الحساب')} style={{ fontSize: '12px', color: '#0b5394', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <Play size={10} fill="#0b5394" /> الحساب
                </span>
                <span onClick={() => alert('كشف حساب')} style={{ fontSize: '12px', color: '#0b5394', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px', fontWeight: 'bold' }}>
                  <Play size={10} fill="#0b5394" /> كشف حساب
                </span>
              </div>

              {/* Right Side Tabs */}
              <div style={{ display: 'flex', gap: '1px' }}>
                <button 
                  onClick={() => setActiveSubTab('contact')}
                  style={{
                    backgroundColor: activeSubTab === 'contact' ? '#e67e22' : '#eaeff2',
                    border: 'none',
                    padding: '8px 18px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    color: activeSubTab === 'contact' ? '#fff' : '#0b5394'
                  }}
                >
                  بيانات التواصل
                </button>
                <button 
                  onClick={() => setActiveSubTab('profile')}
                  style={{
                    backgroundColor: activeSubTab === 'profile' ? '#e67e22' : '#eaeff2',
                    border: 'none',
                    padding: '8px 25px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    color: activeSubTab === 'profile' ? '#fff' : '#0b5394'
                  }}
                >
                  العميل
                </button>
              </div>

            </div>

            {/* Profile Tab Fields (العميل) */}
            {activeSubTab === 'profile' && (
              <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                
                {/* Field Row 1 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    <input 
                      type="text" 
                      readOnly 
                      value={activeCustomer.name} 
                      style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 8px', flex: 1, backgroundColor: '#f8f9fa', fontSize: '12px' }} 
                    />
                    <label style={{ minWidth: '110px', fontWeight: 'bold', fontSize: '12px', color: '#555' }}>الإسم</label>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    <input 
                      type="text" 
                      readOnly 
                      value={activeCustomer.id} 
                      style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 8px', width: '220px', backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '12px' }} 
                    />
                    <span style={{ fontSize: '12px', color: '#7f8c8d' }}>?</span>
                    <label style={{ minWidth: '110px', fontWeight: 'bold', fontSize: '12px', color: '#555' }}>رقم العميل</label>
                  </div>
                </div>

                {/* Field Row 2 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                  <div></div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    <select 
                      disabled
                      value={activeCustomer.status}
                      style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', width: '220px', backgroundColor: '#f8f9fa', fontSize: '12px' }}
                    >
                      <option value="مفعل">مفعل</option>
                      <option value="نشط">نشط</option>
                      <option value="موقوف">موقوف</option>
                    </select>
                    <label style={{ minWidth: '110px', fontWeight: 'bold', fontSize: '12px', color: '#555' }}>الحالة</label>
                  </div>
                </div>

                {/* Field Row 3 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                  <div></div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    <select 
                      disabled
                      value={activeCustomer.groupName}
                      style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', width: '220px', backgroundColor: '#f8f9fa', fontSize: '12px' }}
                    >
                      <option value="">-- بلا مجموعة --</option>
                    </select>
                    <span style={{ fontSize: '12px', color: '#7f8c8d' }}>📁</span>
                    <label style={{ minWidth: '110px', fontWeight: 'bold', fontSize: '12px', color: '#555' }}>المجموعة</label>
                  </div>
                </div>

                {/* Field Row 4 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                  <div></div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    <select 
                      disabled
                      value={activeCustomer.regionName}
                      style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', width: '220px', backgroundColor: '#f8f9fa', fontSize: '12px' }}
                    >
                      <option value="">-- بلا منطقة --</option>
                    </select>
                    <span style={{ fontSize: '12px', color: '#7f8c8d' }}>📁</span>
                    <label style={{ minWidth: '110px', fontWeight: 'bold', fontSize: '12px', color: '#555' }}>المنطقة التجارية</label>
                  </div>
                </div>

                {/* Field Row 5 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    <input 
                      type="checkbox" 
                      disabled 
                      checked={activeCustomer.isCashOnly} 
                      style={{ width: '14px', height: '14px' }} 
                    />
                    <label style={{ fontWeight: 'bold', fontSize: '12px', color: '#555' }}>عميل نقدي فقط</label>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    <input 
                      type="text" 
                      readOnly 
                      value={activeCustomer.discountPct} 
                      style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 8px', width: '220px', backgroundColor: '#f8f9fa', fontSize: '12px' }} 
                    />
                    <span style={{ fontSize: '12px', color: '#7f8c8d' }}>?</span>
                    <label style={{ minWidth: '110px', fontWeight: 'bold', fontSize: '12px', color: '#555' }}>نسبة التخفيض %</label>
                  </div>
                </div>

                {/* Field Row 6 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    <input 
                      type="text" 
                      readOnly 
                      value={activeCustomer.commercialReg} 
                      style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 8px', flex: 1, backgroundColor: '#f8f9fa', fontSize: '12px' }} 
                    />
                    <label style={{ minWidth: '110px', fontWeight: 'bold', fontSize: '12px', color: '#555' }}>رقم السجل التجاري</label>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    <input 
                      type="text" 
                      readOnly 
                      value={activeCustomer.taxNumber} 
                      style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 8px', width: '220px', backgroundColor: '#f8f9fa', fontSize: '12px' }} 
                    />
                    <label style={{ minWidth: '110px', fontWeight: 'bold', fontSize: '12px', color: '#555' }}>الرقم الضريبي</label>
                  </div>
                </div>

                {/* Field Row 7 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    <select 
                      disabled
                      value={activeCustomer.currency}
                      style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', flex: 1, backgroundColor: '#f8f9fa', fontSize: '12px' }}
                    >
                      <option value="ر.ي">ر.ي</option>
                    </select>
                    <label style={{ minWidth: '110px', fontWeight: 'bold', fontSize: '12px', color: '#555' }}>العملة</label>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    <select 
                      disabled
                      value={activeCustomer.deliveryRep}
                      style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', width: '220px', backgroundColor: '#f8f9fa', fontSize: '12px' }}
                    >
                      <option value="">{activeCustomer.deliveryRep || '-- بلا مندوب --'}</option>
                    </select>
                    <span style={{ fontSize: '12px', color: '#7f8c8d' }}>📋</span>
                    <label style={{ minWidth: '110px', fontWeight: 'bold', fontSize: '12px', color: '#555' }}>مندوب التوصيل</label>
                  </div>
                </div>

                {/* Field Row 8 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    <input 
                      type="text" 
                      readOnly 
                      value={activeCustomer.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })} 
                      style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 8px', flex: 1, backgroundColor: '#ffffcc', fontWeight: 'bold', color: activeCustomer.balance < 0 ? '#e74c3c' : '#27ae60', fontSize: '12px', textAlign: 'left' }} 
                    />
                    <label style={{ minWidth: '110px', fontWeight: 'bold', fontSize: '12px', color: '#555' }}>الرصيد</label>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    <select 
                      disabled
                      value={activeCustomer.accountType}
                      style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 6px', width: '220px', backgroundColor: '#f8f9fa', fontSize: '12px' }}
                    >
                      <option value="العملاء - تجميعي">العملاء - تجميعي</option>
                    </select>
                    <span style={{ fontSize: '12px', color: '#7f8c8d' }}>📋</span>
                    <label style={{ minWidth: '110px', fontWeight: 'bold', fontSize: '12px', color: '#555' }}>حساب تحليلي للحساب</label>
                  </div>
                </div>

              </div>
            )}

            {/* Contact Tab Fields (بيانات التواصل) */}
            {activeSubTab === 'contact' && (
              <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <input 
                    type="text" 
                    readOnly 
                    value={activeCustomer.phone} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 8px', width: '300px', backgroundColor: '#f8f9fa', fontSize: '12px' }} 
                  />
                  <label style={{ minWidth: '120px', fontWeight: 'bold', fontSize: '12px' }}>رقم الهاتف</label>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <input 
                    type="text" 
                    readOnly 
                    value={activeCustomer.email} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 8px', width: '300px', backgroundColor: '#f8f9fa', fontSize: '12px' }} 
                  />
                  <label style={{ minWidth: '120px', fontWeight: 'bold', fontSize: '12px' }}>البريد الإلكتروني</label>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <input 
                    type="text" 
                    readOnly 
                    value={activeCustomer.address} 
                    style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 8px', width: '400px', backgroundColor: '#f8f9fa', fontSize: '12px' }} 
                  />
                  <label style={{ minWidth: '120px', fontWeight: 'bold', fontSize: '12px' }}>العنوان</label>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
