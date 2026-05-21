import { useState } from 'react';
import { Search, Settings, UserPlus, Play, Check, RefreshCw, LayoutGrid, Printer, Home } from 'lucide-react';
import CustomersSearch from './CustomersSearch';

interface CustomersListProps {
  onNavigate: (route: string) => void;
  isListView?: boolean;
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
}

const MOCK_CUSTOMERS_DATA: CustomerRow[] = [
  {
    id: '6003',
    name: 'صالح منصور',
    phone: '777123456',
    email: 'saleh@example.com',
    address: 'تعز - شارع جمال',
    balance: -15000,
    debit: 15000,
    credit: 0,
    debtLimit: 50000,
    totalDebt: 15000,
    lastTxDate: '18/05/2026',
    status: 'مفعل',
    groupName: '',
    regionName: ''
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
    regionName: ''
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
    regionName: ''
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
    regionName: ''
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
    regionName: ''
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
    regionName: ''
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
    regionName: ''
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
    regionName: ''
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
    regionName: ''
  }
];

export default function CustomersList({ onNavigate, isListView = false }: CustomersListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchName, setSearchName] = useState('');
  const [recordsCount, setRecordsCount] = useState('100');
  
  // Default active tab: 'general' (which matches the third screenshot general customer table)
  const [activeTab, setActiveTab] = useState<string>('general');
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
  const [customers, setCustomers] = useState<CustomerRow[]>(MOCK_CUSTOMERS_DATA);

  // Quick search handler
  const handleQuickSearch = () => {
    const filtered = MOCK_CUSTOMERS_DATA.filter(cust => {
      if (searchTerm && !cust.id.includes(searchTerm)) return false;
      if (searchName && !cust.name.includes(searchName)) return false;
      return true;
    });
    setCustomers(filtered);
  };

  // Payment form states
  const [paymentCustId, setPaymentCustId] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentNote, setPaymentNote] = useState('');

  const handleReceivePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentCustId || !paymentAmount) {
      alert('الرجاء اختيار العميل وتحديد المبلغ');
      return;
    }
    alert(`تم استلام مبلغ ${paymentAmount} ر.ي من العميل رقم ${paymentCustId} بنجاح!`);
    setPaymentCustId('');
    setPaymentAmount('');
    setPaymentNote('');
  };

  // Determine subheader title based on active tab
  const getSubheaderTitle = () => {
    switch (activeTab) {
      case 'debt-followup': return 'متابعة المديونية';
      case 'contacts': return 'العملاء / بيانات التواصل';
      case 'balances': return 'العملاء / الأرصدة';
      case 'payment': return 'استلام مبلغ من عميل';
      case 'financial-ops': return 'عمليات مالية مبسطة';
      default: return 'العملاء';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#f4f6f9', direction: 'rtl' }}>
      
      {/* 1. Top Toolbar */}
      <div className="qs-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#eaeff2', padding: '6px 15px', borderBottom: '1px solid #cbd5e1' }}>
        
        {/* Right Side Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="rl-utility-icon" title="الإعدادات" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
            <Settings size={15} />
          </div>

          <button className="qs-btn qs-btn-execute-action" onClick={handleQuickSearch} style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', backgroundColor: '#fff', display: 'flex', alignItems: 'center' }}>
            <Play size={13} fill="#e67e22" color="#e67e22" style={{ marginLeft: '4px' }} />
            <span>تنفيذ</span>
          </button>

          <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>

          <button className="qs-btn" onClick={() => setIsAdvancedSearchOpen(true)} style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
            <Search size={13} color="#3c8dbc" style={{ marginLeft: '4px' }} />
            <span>بحث متقدم</span>
          </button>

          <button className="qs-btn" onClick={() => alert('إضافة عميل جديد')} style={{ border: '1px solid #b0c2d4', borderRadius: '3px', padding: '4px 12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
            <UserPlus size={13} color="#28a745" style={{ marginLeft: '4px' }} />
            <span>جديد (عميل)</span>
          </button>
          
          <div style={{ height: '18px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>

          <div className="rl-utility-icon" title="الرئيسية" onClick={() => onNavigate('dashboard')} style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
            <Home size={15} />
          </div>

          <div className="rl-utility-icon" title="بيئة العمل" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', color: '#555' }}>
            Eco
          </div>
          
          <div className="rl-utility-icon" title="طباعة القائمة" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
            <Printer size={15} />
          </div>
        </div>

        {/* Left Side Utilities */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="rl-utility-icon" title="إعادة تعيين القائمة" onClick={() => { setSearchTerm(''); setSearchName(''); setActiveTab('general'); setCustomers(MOCK_CUSTOMERS_DATA); }} style={{ cursor: 'pointer', border: '1px solid #cbd5e1', padding: '4px', borderRadius: '3px', backgroundColor: '#fff' }}>
            <RefreshCw size={14} />
          </div>
        </div>
      </div>

      {/* 2. Main Body Container */}
      <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Grey Header Box - العملاء */}
        <div style={{ 
          border: '1px solid #ccc', 
          backgroundColor: '#eef2f5', 
          padding: '6px 12px', 
          textAlign: 'center', 
          fontWeight: 'bold', 
          fontSize: '14px', 
          color: '#2b3e50',
          borderRadius: '3px'
        }}>
          العملاء
        </div>

        {/* Top Search Panel Box - only shown when NOT in isListView mode AND activeTab is 'general' */}
        {!isListView && activeTab === 'general' && (
          <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '15px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px 40px' }}>
              
              {/* Right Side: رقم العميل */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                <input 
                  type="text" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  style={{ border: '1px solid #a5b1c2', height: '24px', padding: '0 6px', width: '220px', backgroundColor: '#ffffcc', textAlign: 'right', fontSize: '12px' }} 
                />
                <span style={{ fontSize: '12px', color: '#7f8c8d', cursor: 'pointer' }}>?</span>
                <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>رقم العميل</label>
              </div>

              {/* Left Side: الاسم & تنفيذ البحث */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '15px' }}>
                <button 
                  onClick={handleQuickSearch}
                  style={{ backgroundColor: '#3b7dd8', color: '#fff', border: '1px solid #1a3c61', padding: '3px 25px', fontWeight: 'bold', borderRadius: '3px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}
                >
                  <Check size={14} strokeWidth={3} color="#27ae60" />
                  <span>تنفيذ البحث</span>
                </button>

                <input 
                  type="text" 
                  value={searchName} 
                  onChange={(e) => setSearchName(e.target.value)} 
                  style={{ border: '1px solid #cbd5e1', height: '24px', padding: '0 6px', flex: 1, textAlign: 'right', fontSize: '12px' }} 
                />
                <label style={{ minWidth: '50px', fontWeight: 'bold', fontSize: '12px', color: '#333' }}>الإسم</label>
              </div>
            </div>

            {/* Record Limit Row */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '12px', borderTop: '1px dashed #e0e0e0', paddingTop: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="text" 
                  value={recordsCount} 
                  onChange={(e) => setRecordsCount(e.target.value)}
                  style={{ width: '80px', height: '22px', textAlign: 'center', border: '1px solid #cbd5e1', fontSize: '12px' }}
                />
                <span style={{ fontWeight: 'bold', fontSize: '12px', color: '#333' }}>عدد السجلات</span>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Table/Content Section (renders exactly one view based on activeTab) */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '4px', overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column' }}>
          
          {/* Table Subheader */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#e2ebf0', padding: '5px 12px', borderBottom: '1px solid #cbd5e1' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input type="checkbox" style={{ cursor: 'pointer' }} />
              <Printer size={13} style={{ cursor: 'pointer', color: '#555' }} />
              <RefreshCw size={13} style={{ cursor: 'pointer', color: '#555' }} onClick={() => setCustomers(MOCK_CUSTOMERS_DATA)} />
              <LayoutGrid size={13} style={{ cursor: 'pointer', color: '#555' }} />
            </div>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#0b5394' }}>{getSubheaderTitle()}</div>
          </div>

          <div style={{ padding: activeTab === 'payment' ? '15px' : '0', overflowY: 'auto', flex: 1 }}>
            
            {/* VIEW 1: General (العملاء) */}
            {activeTab === 'general' && (
              <table className="rl-table" style={{ margin: 0, width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ width: '45px' }}>م</th>
                    <th style={{ width: '120px' }}>رقم العميل</th>
                    <th>الإسم</th>
                    <th>الحالة</th>
                    <th>المجموعة</th>
                    <th>المنطقة التجارية</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((cust, idx) => (
                    <tr key={cust.id}>
                      <td style={{ textAlign: 'center' }}>{idx + 1}</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-start' }}>
                          <span style={{ fontSize: '11px', color: '#7f8c8d', cursor: 'pointer' }} title="بحث">🔍</span>
                          <span style={{ fontSize: '11px', color: '#3c8dbc', cursor: 'pointer' }} title="بطاقة العميل">📄</span>
                          <span style={{ fontWeight: 'bold', color: '#0b5394' }}>{cust.id}</span>
                        </div>
                      </td>
                      <td>{cust.name}</td>
                      <td style={{ color: '#27ae60', fontWeight: 'bold' }}>{cust.status}</td>
                      <td>{cust.groupName}</td>
                      <td>{cust.regionName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* VIEW 2: Debt Followup (متابعة المديونية) */}
            {activeTab === 'debt-followup' && (
              <table className="rl-table" style={{ margin: 0, width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ width: '45px' }}>م</th>
                    <th style={{ width: '100px' }}>رقم العميل</th>
                    <th>اسم العميل</th>
                    <th style={{ textAlign: 'left' }}>إجمالي المديونية (ر.ي)</th>
                    <th style={{ textAlign: 'left' }}>سقف الدين (ر.ي)</th>
                    <th>تاريخ آخر حركة</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((cust, idx) => (
                    <tr key={cust.id}>
                      <td style={{ textAlign: 'center' }}>{idx + 1}</td>
                      <td style={{ fontWeight: 'bold', color: '#0b5394' }}>{cust.id}</td>
                      <td>{cust.name}</td>
                      <td style={{ textAlign: 'left', color: cust.totalDebt > 0 ? '#e74c3c' : '#27ae60', fontWeight: 'bold' }}>
                        {cust.totalDebt.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td style={{ textAlign: 'left' }}>
                        {cust.debtLimit.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td style={{ textAlign: 'center' }}>{cust.lastTxDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* VIEW 3: Contacts (بيانات التواصل) */}
            {activeTab === 'contacts' && (
              <table className="rl-table" style={{ margin: 0, width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ width: '45px' }}>م</th>
                    <th style={{ width: '100px' }}>رقم العميل</th>
                    <th>الاسم</th>
                    <th>رقم الهاتف</th>
                    <th>البريد الإلكتروني</th>
                    <th>العنوان السكني / التجاري</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((cust, idx) => (
                    <tr key={cust.id}>
                      <td style={{ textAlign: 'center' }}>{idx + 1}</td>
                      <td style={{ fontWeight: 'bold', color: '#0b5394' }}>{cust.id}</td>
                      <td>{cust.name}</td>
                      <td>{cust.phone}</td>
                      <td>{cust.email}</td>
                      <td>{cust.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* VIEW 4: Balances (الأرصدة) */}
            {activeTab === 'balances' && (
              <table className="rl-table" style={{ margin: 0, width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ width: '45px' }}>م</th>
                    <th style={{ width: '100px' }}>رقم العميل</th>
                    <th>الاسم</th>
                    <th style={{ textAlign: 'left' }}>مدين</th>
                    <th style={{ textAlign: 'left' }}>دائن</th>
                    <th style={{ textAlign: 'left' }}>الرصيد الحالي (ر.ي)</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((cust, idx) => (
                    <tr key={cust.id}>
                      <td style={{ textAlign: 'center' }}>{idx + 1}</td>
                      <td style={{ fontWeight: 'bold', color: '#0b5394' }}>{cust.id}</td>
                      <td>{cust.name}</td>
                      <td style={{ textAlign: 'left', color: '#e74c3c' }}>
                        {cust.debit.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td style={{ textAlign: 'left', color: '#27ae60' }}>
                        {cust.credit.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td style={{ 
                        textAlign: 'left', 
                        fontWeight: 'bold', 
                        color: cust.balance < 0 ? '#e74c3c' : cust.balance > 0 ? '#27ae60' : '#333'
                      }}>
                        {cust.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* VIEW 5: Receive Payment Form (استلام مبلغ من عميل) */}
            {activeTab === 'payment' && (
              <div style={{ maxWidth: '500px', margin: '15px auto', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: '#fafbfc', width: '100%' }}>
                <h4 style={{ margin: '0 0 15px 0', borderBottom: '1px solid #e0e0e0', paddingBottom: '6px', color: '#2b3e50', textAlign: 'center' }}>تسجيل استلام دفعة مالية</h4>
                <form onSubmit={handleReceivePayment} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <select 
                      value={paymentCustId} 
                      onChange={(e) => setPaymentCustId(e.target.value)}
                      style={{ width: '250px', height: '26px', fontSize: '12px' }}
                    >
                      <option value="">-- اختر العميل --</option>
                      {customers.map(c => (
                        <option key={c.id} value={c.id}>{c.id} - {c.name}</option>
                      ))}
                    </select>
                    <label style={{ fontWeight: 'bold', fontSize: '12px' }}>العميل</label>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <input 
                      type="number" 
                      placeholder="المبلغ بالريال اليمني" 
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(e.target.value)}
                      style={{ width: '250px', height: '24px', padding: '0 6px', fontSize: '12px', textAlign: 'right' }}
                    />
                    <label style={{ fontWeight: 'bold', fontSize: '12px' }}>المبلغ المستلم</label>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <textarea 
                      placeholder="ملاحظات الحركة..." 
                      value={paymentNote}
                      onChange={(e) => setPaymentNote(e.target.value)}
                      style={{ width: '250px', height: '50px', padding: '4px 6px', fontSize: '12px', textAlign: 'right', resize: 'none' }}
                    />
                    <label style={{ fontWeight: 'bold', fontSize: '12px' }}>ملاحظات</label>
                  </div>

                  <button 
                    type="submit" 
                    style={{ backgroundColor: '#27ae60', color: '#fff', border: 'none', padding: '8px', fontWeight: 'bold', borderRadius: '3px', cursor: 'pointer', marginTop: '10px' }}
                  >
                    تأكيد وحفظ الحركة
                  </button>
                </form>
              </div>
            )}

            {/* VIEW 6: Financial Operations (عمليات مالية مبسطة) */}
            {activeTab === 'financial-ops' && (
              <table className="rl-table" style={{ margin: 0, width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ width: '45px' }}>م</th>
                    <th>تاريخ العملية</th>
                    <th>رقم العميل</th>
                    <th>اسم العميل</th>
                    <th>نوع العملية</th>
                    <th style={{ textAlign: 'left' }}>المبلغ (ر.ي)</th>
                    <th>الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1</td>
                    <td style={{ textAlign: 'center' }}>19/05/2026</td>
                    <td style={{ fontWeight: 'bold', color: '#0b5394' }}>6005</td>
                    <td>سعيد القديمي</td>
                    <td>سند قبض نقدًا</td>
                    <td style={{ textAlign: 'left', fontWeight: 'bold', color: '#27ae60' }}>12,000.00</td>
                    <td style={{ textAlign: 'center', color: '#27ae60', fontWeight: 'bold' }}>مرحل</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>2</td>
                    <td style={{ textAlign: 'center' }}>18/05/2026</td>
                    <td style={{ fontWeight: 'bold', color: '#0b5394' }}>6003</td>
                    <td>صالح منصور</td>
                    <td>فاتورة مبيعات آجلة</td>
                    <td style={{ textAlign: 'left', fontWeight: 'bold', color: '#e74c3c' }}>15,000.00</td>
                    <td style={{ textAlign: 'center', color: '#27ae60', fontWeight: 'bold' }}>مرحل</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>3</td>
                    <td style={{ textAlign: 'center' }}>15/05/2026</td>
                    <td style={{ fontWeight: 'bold', color: '#0b5394' }}>6006</td>
                    <td>شركة الأفق</td>
                    <td>سند قبض نقدًا</td>
                    <td style={{ textAlign: 'left', fontWeight: 'bold', color: '#27ae60' }}>5,000.00</td>
                    <td style={{ textAlign: 'center', color: '#27ae60', fontWeight: 'bold' }}>مرحل</td>
                  </tr>
                </tbody>
              </table>
            )}

          </div>

        </div>

        {/* 3. Bottom Tabs Navigation Bar (Switches Table view above) */}
        <div style={{ display: 'flex', borderBottom: '1px solid #cbd5e1', gap: '2px', backgroundColor: '#e2ebf0', padding: '4px 8px 0 8px', borderTopLeftRadius: '4px', borderTopRightRadius: '4px', marginTop: '-5px' }}>
          
          <button 
            onClick={() => setActiveTab(activeTab === 'debt-followup' ? 'general' : 'debt-followup')}
            style={{
              border: '1px solid #cbd5e1',
              borderBottom: activeTab === 'debt-followup' ? '1px solid #fff' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'debt-followup' ? '#fff' : '#eaeff2',
              padding: '6px 16px',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderTopLeftRadius: '3px',
              borderTopRightRadius: '3px',
              color: activeTab === 'debt-followup' ? '#0b5394' : '#7f8c8d',
              marginBottom: '-1px',
              zIndex: activeTab === 'debt-followup' ? 2 : 1
            }}
          >
            متابعة المديونية
          </button>

          <button 
            onClick={() => setActiveTab(activeTab === 'contacts' ? 'general' : 'contacts')}
            style={{
              border: '1px solid #cbd5e1',
              borderBottom: activeTab === 'contacts' ? '1px solid #fff' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'contacts' ? '#fff' : '#eaeff2',
              padding: '6px 16px',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderTopLeftRadius: '3px',
              borderTopRightRadius: '3px',
              color: activeTab === 'contacts' ? '#0b5394' : '#7f8c8d',
              marginBottom: '-1px',
              zIndex: activeTab === 'contacts' ? 2 : 1
            }}
          >
            العملاء / بيانات التواصل
          </button>

          <button 
            onClick={() => setActiveTab(activeTab === 'balances' ? 'general' : 'balances')}
            style={{
              border: '1px solid #cbd5e1',
              borderBottom: activeTab === 'balances' ? '1px solid #fff' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'balances' ? '#fff' : '#eaeff2',
              padding: '6px 16px',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderTopLeftRadius: '3px',
              borderTopRightRadius: '3px',
              color: activeTab === 'balances' ? '#0b5394' : '#7f8c8d',
              marginBottom: '-1px',
              zIndex: activeTab === 'balances' ? 2 : 1
            }}
          >
            العملاء / الأرصدة
          </button>

          <button 
            onClick={() => setActiveTab(activeTab === 'payment' ? 'general' : 'payment')}
            style={{
              border: '1px solid #cbd5e1',
              borderBottom: activeTab === 'payment' ? '1px solid #fff' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'payment' ? '#fff' : '#eaeff2',
              padding: '6px 16px',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderTopLeftRadius: '3px',
              borderTopRightRadius: '3px',
              color: activeTab === 'payment' ? '#0b5394' : '#7f8c8d',
              marginBottom: '-1px',
              zIndex: activeTab === 'payment' ? 2 : 1
            }}
          >
            استلام مبلغ من عميل
          </button>

          <button 
            onClick={() => setActiveTab(activeTab === 'financial-ops' ? 'general' : 'financial-ops')}
            style={{
              border: '1px solid #cbd5e1',
              borderBottom: activeTab === 'financial-ops' ? '1px solid #fff' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'financial-ops' ? '#fff' : '#eaeff2',
              padding: '6px 16px',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderTopLeftRadius: '3px',
              borderTopRightRadius: '3px',
              color: activeTab === 'financial-ops' ? '#0b5394' : '#7f8c8d',
              marginBottom: '-1px',
              zIndex: activeTab === 'financial-ops' ? 2 : 1
            }}
          >
            عمليات مالية مبسطة
          </button>
        </div>

      </div>

      {/* Floating Advanced Search Modal Overlay */}
      {isAdvancedSearchOpen && (
        <CustomersSearch 
          onNavigate={(route) => {
            setIsAdvancedSearchOpen(false);
            onNavigate(route);
          }} 
          onClose={() => setIsAdvancedSearchOpen(false)} 
        />
      )}
      
    </div>
  );
}
