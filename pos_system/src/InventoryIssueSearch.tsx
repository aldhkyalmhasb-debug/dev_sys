import { useState } from 'react';
import { Settings, LayoutGrid, Play, ChevronDown, Check, Printer, RefreshCw, Home, Plus, Calendar, XCircle, Grid3X3, SquareStack } from 'lucide-react';

interface InventoryIssueSearchProps {
  onNavigate: (route: string) => void;
}

export default function InventoryIssueSearch({ onNavigate }: InventoryIssueSearchProps) {
  const [docNo, setDocNo] = useState('');
  const [movementType, setMovementType] = useState('');
  const [fromStore, setFromStore] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [refNo, setRefNo] = useState('');
  const [isDraft, setIsDraft] = useState('');
  const [isPending, setIsPending] = useState('');
  const [currency, setCurrency] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [costAccount, setCostAccount] = useState('');
  const [costDebit, setCostDebit] = useState('');
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('');
  const [mainDoc, setMainDoc] = useState('');
  const [mainDocNo, setMainDocNo] = useState('');
  const [printCount, setPrintCount] = useState('');
  const [maxRecords, setMaxRecords] = useState('500');
  const [hasSearched, setHasSearched] = useState(false);
  const [activeTab, setActiveTab] = useState('issue');

  // Log tab states
  const [logAddedBy, setLogAddedBy] = useState('');
  const [logDateFrom, setLogDateFrom] = useState('');
  const [logDateTo, setLogDateTo] = useState('');
  const [logTimeFrom, setLogTimeFrom] = useState('');
  const [logTimeTo, setLogTimeTo] = useState('');
  const [logModifiedBy, setLogModifiedBy] = useState('');
  const [logModifiedDateFrom, setLogModifiedDateFrom] = useState('');
  const [logModifiedDateTo, setLogModifiedDateTo] = useState('');

  const handleSearch = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setHasSearched(true);
  };

  const mockResults = [
    { id: 1, docNo: '1001', type: 'صرف مخزني', movementType: 'عام', date: '2026-05-20', status: 'مرحل', note: '', addedBy: 'admin', recordDate: '2026-05-20 10:30' },
    { id: 2, docNo: '1002', type: 'صرف مخزني', movementType: 'تالف', date: '2026-05-19', status: 'جديد', note: 'بضاعة تالفة', addedBy: 'user1', recordDate: '2026-05-19 14:15' },
    { id: 3, docNo: '1003', type: 'صرف مخزني', movementType: 'عينات', date: '2026-05-18', status: 'مرحل', note: '', addedBy: 'admin', recordDate: '2026-05-18 09:00' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f5f5f5', direction: 'rtl', fontFamily: 'Tahoma, Arial, sans-serif' }}>

      {/* ── Toolbar ─ */}
      <div style={{ background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)', borderBottom: '1px solid #ccc', padding: '4px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left side in LTR = Right side in RTL: Eco, Print, Home, New, Execute */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '12px', color: '#3c8dbc', cursor: 'pointer' }}>Eco</span>

          <span style={{ color: '#ccc' }}>|</span>

          <button style={{ background: '#fff', border: '1px solid #ccc', borderRadius: '3px', padding: '3px 8px', cursor: 'pointer' }}>
            <Printer size={14} color="#555" />
          </button>

          <button style={{ background: '#fff', border: '1px solid #ccc', borderRadius: '3px', padding: '3px 8px', cursor: 'pointer' }}>
            <Home size={14} color="#555" />
          </button>

          <span style={{ color: '#ccc' }}>|</span>

          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('inventory-issue-new'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'linear-gradient(to bottom, #fff, #f0f0f0)', border: '1px solid #ccc', borderRadius: '3px', padding: '4px 12px', textDecoration: 'none', color: '#333', fontSize: '13px', fontWeight: 'bold' }}>
            <Plus size={14} color="#28a745" />
            <span>جديد (أمر صرف مخزني)</span>
          </a>

          <span style={{ color: '#ccc' }}>|</span>

          <a href="#" onClick={handleSearch} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'linear-gradient(to bottom, #fff, #f0f0f0)', border: '1px solid #ccc', borderRadius: '3px', padding: '4px 12px', textDecoration: 'none', color: '#333', fontSize: '13px', fontWeight: 'bold' }}>
            <Play size={13} fill="#e67e22" color="#e67e22" />
            <span>تنفيذ</span>
            <span style={{ background: '#e67e22', color: '#fff', borderRadius: '3px', padding: '1px 6px', fontSize: '11px', fontWeight: 'bold' }}>1</span>
          </a>
        </div>

        {/* Right side in LTR = Left side in RTL: Grid, Copy, Settings */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button style={{ background: '#fff', border: '1px solid #ccc', borderRadius: '3px', padding: '3px 8px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            <Grid3X3 size={14} color="#555" />
          </button>
          <button style={{ background: '#fff', border: '1px solid #ccc', borderRadius: '3px', padding: '3px 8px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            <SquareStack size={14} color="#555" />
          </button>
          <button style={{ background: '#fff', border: '1px solid #ccc', borderRadius: '3px', padding: '3px 8px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            <Settings size={14} color="#555" />
          </button>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div style={{ background: 'linear-gradient(to bottom, #f8c471, #f39c12)', padding: '0 15px 0 0', display: 'flex', justifyContent: 'flex-start', borderBottom: '2px solid #d38409', direction: 'rtl' }}>
        <div style={{ display: 'flex', gap: '0' }}>
          <div
            onClick={() => setActiveTab('issue')}
            style={{
              cursor: 'pointer',
              padding: '10px 24px',
              fontSize: '14px',
              fontWeight: activeTab === 'issue' ? 'bold' : 'normal',
              color: activeTab === 'issue' ? '#333' : '#fff',
              background: activeTab === 'issue' ? '#fff' : 'transparent',
              border: '1px solid #d38409',
              borderBottom: activeTab === 'issue' ? '2px solid #fff' : '1px solid #d38409',
              borderRadius: '4px 4px 0 0',
              marginBottom: activeTab === 'issue' ? '-2px' : '0',
              marginLeft: '2px'
            }}
          >
            أمر صرف مخزني
          </div>
          <div
            onClick={() => setActiveTab('log')}
            style={{
              cursor: 'pointer',
              padding: '10px 24px',
              fontSize: '14px',
              fontWeight: activeTab === 'log' ? 'bold' : 'normal',
              color: activeTab === 'log' ? '#333' : '#fff',
              background: activeTab === 'log' ? '#fff' : 'transparent',
              border: '1px solid #d38409',
              borderBottom: activeTab === 'log' ? '2px solid #fff' : '1px solid #d38409',
              borderRadius: '4px 4px 0 0',
              marginBottom: activeTab === 'log' ? '-2px' : '0'
            }}
          >
            السجل
          </div>
        </div>
      </div>

      {/* ── Search Form (Issue Tab) ── */}
      {activeTab === 'issue' && (
      <div style={{ background: '#f8fafc', margin: '0', padding: '15px 20px', direction: 'rtl', borderBottom: '1px solid #ddd' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {/* Row 1: الرقم | نوع الحركة المخزنية | من المخزن */}
            <tr>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>الرقم</label>
                  <input type="text" value={docNo} onChange={(e) => setDocNo(e.target.value)} style={{ width: '120px', border: '1px solid #b0c4de', height: '26px', padding: '0 8px', fontSize: '12px', borderRadius: '3px', background: '#fff' }} />
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>نوع الحركة المخزنية</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #b0c4de', height: '26px', backgroundColor: '#fff', width: '140px', borderRadius: '3px' }}>
                    <select value={movementType} onChange={(e) => setMovementType(e.target.value)} style={{ height: '24px', border: 'none', outline: 'none', padding: '0 6px', fontSize: '12px', width: '100%', direction: 'rtl', background: 'transparent', color: '#333' }}>
                      <option value="">عام</option>
                      <option value="تالف">تالف</option>
                      <option value="هدايا">هدايا</option>
                      <option value="عينات">عينات</option>
                    </select>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0 4px', display: 'flex', alignItems: 'center' }}>
                      <ChevronDown size={12} color="#666" />
                    </button>
                  </div>
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>من المخزن</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #b0c4de', height: '26px', backgroundColor: '#fff', width: '140px', borderRadius: '3px' }}>
                    <select value={fromStore} onChange={(e) => setFromStore(e.target.value)} style={{ height: '24px', border: 'none', outline: 'none', padding: '0 6px', fontSize: '12px', width: '100%', direction: 'rtl', background: 'transparent', color: '#333' }}>
                      <option value="">المعرض</option>
                      <option value="المخزن الرئيسي">المخزن الرئيسي</option>
                      <option value="المخزن الفرعي">المخزن الفرعي</option>
                    </select>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0 4px', display: 'flex', alignItems: 'center' }}>
                      <ChevronDown size={12} color="#666" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>

            {/* Row 2: التاريخ | رقم المرجع | مسودة */}
            <tr>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>التاريخ</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <input type="text" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} style={{ width: '80px', border: '1px solid #b0c4de', height: '26px', padding: '0 6px', fontSize: '12px', textAlign: 'center', borderRadius: '3px', background: '#fff' }} />
                    <Calendar size={14} color="#007bff" style={{ cursor: 'pointer' }} />
                  </div>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>إلى</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <input type="text" value={dateTo} onChange={(e) => setDateTo(e.target.value)} style={{ width: '80px', border: '1px solid #b0c4de', height: '26px', padding: '0 6px', fontSize: '12px', textAlign: 'center', borderRadius: '3px', background: '#fff' }} />
                    <Calendar size={14} color="#007bff" style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>رقم المرجع</label>
                  <input type="text" value={refNo} onChange={(e) => setRefNo(e.target.value)} style={{ width: '120px', border: '1px solid #b0c4de', height: '26px', padding: '0 8px', fontSize: '12px', borderRadius: '3px', background: '#fff' }} />
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>مسودة</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #b0c4de', height: '26px', backgroundColor: '#fff', width: '120px', borderRadius: '3px' }}>
                    <select value={isDraft} onChange={(e) => setIsDraft(e.target.value)} style={{ height: '24px', border: 'none', outline: 'none', padding: '0 6px', fontSize: '12px', width: '100%', direction: 'rtl', background: 'transparent', color: '#333' }}>
                      <option value="">الكل</option>
                      <option value="نعم">نعم</option>
                      <option value="لا">لا</option>
                    </select>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0 4px', display: 'flex', alignItems: 'center' }}>
                      <ChevronDown size={12} color="#666" />
                    </button>
                  </div>
                  <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center' }}>
                    <span style={{ background: '#007bff', color: '#fff', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>?</span>
                  </button>
                </div>
              </td>
            </tr>

            {/* Row 3: معلق | عملة المستند | سعر التحويل */}
            <tr>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>معلق</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #b0c4de', height: '26px', backgroundColor: '#fff', width: '120px', borderRadius: '3px' }}>
                    <select value={isPending} onChange={(e) => setIsPending(e.target.value)} style={{ height: '24px', border: 'none', outline: 'none', padding: '0 6px', fontSize: '12px', width: '100%', direction: 'rtl', background: 'transparent', color: '#333' }}>
                      <option value="">الكل</option>
                      <option value="نعم">نعم</option>
                      <option value="لا">لا</option>
                    </select>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0 4px', display: 'flex', alignItems: 'center' }}>
                      <ChevronDown size={12} color="#666" />
                    </button>
                  </div>
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>عملة المستند</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #b0c4de', height: '26px', backgroundColor: '#fff', width: '140px', borderRadius: '3px' }}>
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)} style={{ height: '24px', border: 'none', outline: 'none', padding: '0 6px', fontSize: '12px', width: '100%', direction: 'rtl', background: 'transparent', color: '#333' }}>
                      <option value="">الكل</option>
                      <option value="ر.ي">ر.ي</option>
                      <option value="ر.س">ر.س</option>
                      <option value="دولار">دولار</option>
                    </select>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0 4px', display: 'flex', alignItems: 'center' }}>
                      <ChevronDown size={12} color="#666" />
                    </button>
                  </div>
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>سعر التحويل</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <input type="text" value={priceFrom} onChange={(e) => setPriceFrom(e.target.value)} placeholder="السعر الحالي" style={{ width: '90px', border: '1px solid #b0c4de', height: '26px', padding: '0 6px', fontSize: '12px', textAlign: 'center', borderRadius: '3px', background: '#fff', color: '#999' }} />
                    <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>إلى</label>
                    <input type="text" value={priceTo} onChange={(e) => setPriceTo(e.target.value)} placeholder="السعر الحالي" style={{ width: '90px', border: '1px solid #b0c4de', height: '26px', padding: '0 6px', fontSize: '12px', textAlign: 'center', borderRadius: '3px', background: '#fff', color: '#999' }} />
                  </div>
                </div>
              </td>
            </tr>

            {/* Row 4: تقييد الكلفة على الحساب/المدين | ملاحظة | الحالة */}
            <tr>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>تقييد الكلفة على الحساب/المدين</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #b0c4de', height: '26px', backgroundColor: '#fff', width: '140px', borderRadius: '3px' }}>
                    <select value={costAccount} onChange={(e) => setCostAccount(e.target.value)} style={{ height: '24px', border: 'none', outline: 'none', padding: '0 6px', fontSize: '12px', width: '100%', direction: 'rtl', background: 'transparent', color: '#333' }}>
                      <option value=""></option>
                    </select>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0 4px', display: 'flex', alignItems: 'center' }}>
                      <ChevronDown size={12} color="#666" />
                    </button>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #b0c4de', height: '26px', backgroundColor: '#fff', width: '140px', borderRadius: '3px' }}>
                    <select value={costDebit} onChange={(e) => setCostDebit(e.target.value)} style={{ height: '24px', border: 'none', outline: 'none', padding: '0 6px', fontSize: '12px', width: '100%', direction: 'rtl', background: 'transparent', color: '#333' }}>
                      <option value=""></option>
                    </select>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0 4px', display: 'flex', alignItems: 'center' }}>
                      <ChevronDown size={12} color="#666" />
                    </button>
                  </div>
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>ملاحظة</label>
                  <input type="text" value={note} onChange={(e) => setNote(e.target.value)} style={{ width: '120px', border: '1px solid #b0c4de', height: '26px', padding: '0 8px', fontSize: '12px', borderRadius: '3px', background: '#fff' }} />
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>الحالة</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #b0c4de', height: '26px', backgroundColor: '#fff', width: '120px', borderRadius: '3px' }}>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ height: '24px', border: 'none', outline: 'none', padding: '0 6px', fontSize: '12px', width: '100%', direction: 'rtl', background: 'transparent', color: '#333' }}>
                      <option value="">الكل</option>
                      <option value="جديد">جديد</option>
                      <option value="مرحل">مرحل</option>
                      <option value="ملغي">ملغي</option>
                    </select>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0 4px', display: 'flex', alignItems: 'center' }}>
                      <ChevronDown size={12} color="#666" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>

            {/* Row 5: مرات الطباعة | المستند الرئيسي | رقم المستند الرئيسي */}
            <tr>
              <td style={{ width: '33.33%', padding: '6px 10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>مرات الطباعة</label>
                  <input type="text" value={printCount} onChange={(e) => setPrintCount(e.target.value)} style={{ width: '120px', border: '1px solid #b0c4de', height: '26px', padding: '0 8px', fontSize: '12px', borderRadius: '3px', background: '#fff' }} />
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>المستند الرئيسي</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #b0c4de', height: '26px', backgroundColor: '#fff', width: '140px', borderRadius: '3px' }}>
                    <select value={mainDoc} onChange={(e) => setMainDoc(e.target.value)} style={{ height: '24px', border: 'none', outline: 'none', padding: '0 6px', fontSize: '12px', width: '100%', direction: 'rtl', background: 'transparent', color: '#333' }}>
                      <option value="">الكل</option>
                    </select>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0 4px', display: 'flex', alignItems: 'center' }}>
                      <ChevronDown size={12} color="#666" />
                    </button>
                  </div>
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>رقم المستند الرئيسي</label>
                  <input type="text" value={mainDocNo} onChange={(e) => setMainDocNo(e.target.value)} style={{ width: '120px', border: '1px solid #b0c4de', height: '26px', padding: '0 8px', fontSize: '12px', borderRadius: '3px', background: '#fff' }} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      )}

      {/* ── Log Form (Log Tab) ─ */}
      {activeTab === 'log' && (
      <div style={{ background: '#f8fafc', margin: '0', padding: '15px 20px', direction: 'rtl', borderBottom: '1px solid #ddd' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {/* Row 1: الإضافة بواسطة | تاريخ السجل | وقت الإضافة */}
            <tr>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>الإضافة بواسطة</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #b0c4de', height: '26px', backgroundColor: '#fff', width: '140px', borderRadius: '3px' }}>
                    <select value={logAddedBy} onChange={(e) => setLogAddedBy(e.target.value)} style={{ height: '24px', border: 'none', outline: 'none', padding: '0 6px', fontSize: '12px', width: '100%', direction: 'rtl', background: 'transparent', color: '#333' }}>
                      <option value=""></option>
                    </select>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0 4px', display: 'flex', alignItems: 'center' }}>
                      <ChevronDown size={12} color="#666" />
                    </button>
                  </div>
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>تاريخ السجل</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <input type="text" value={logDateFrom} onChange={(e) => setLogDateFrom(e.target.value)} style={{ width: '80px', border: '1px solid #b0c4de', height: '26px', padding: '0 6px', fontSize: '12px', textAlign: 'center', borderRadius: '3px', background: '#fff' }} />
                    <Calendar size={14} color="#007bff" style={{ cursor: 'pointer' }} />
                  </div>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>إلى</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <input type="text" value={logDateTo} onChange={(e) => setLogDateTo(e.target.value)} style={{ width: '80px', border: '1px solid #b0c4de', height: '26px', padding: '0 6px', fontSize: '12px', textAlign: 'center', borderRadius: '3px', background: '#fff' }} />
                    <Calendar size={14} color="#007bff" style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>وقت الإضافة</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <input type="text" value={logTimeFrom} onChange={(e) => setLogTimeFrom(e.target.value)} style={{ width: '80px', border: '1px solid #b0c4de', height: '26px', padding: '0 6px', fontSize: '12px', textAlign: 'center', borderRadius: '3px', background: '#fff' }} />
                  </div>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>إلى</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <input type="text" value={logTimeTo} onChange={(e) => setLogTimeTo(e.target.value)} style={{ width: '80px', border: '1px solid #b0c4de', height: '26px', padding: '0 6px', fontSize: '12px', textAlign: 'center', borderRadius: '3px', background: '#fff' }} />
                  </div>
                </div>
              </td>
            </tr>

            {/* Row 2: آخر تعديل بواسطة | تاريخ وقت آخر تعديل */}
            <tr>
              <td style={{ width: '33.33%', padding: '6px 10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>آخر تعديل بواسطة</label>
                  <input type="text" value={logModifiedBy} onChange={(e) => setLogModifiedBy(e.target.value)} style={{ width: '140px', border: '1px solid #b0c4de', height: '26px', padding: '0 8px', fontSize: '12px', borderRadius: '3px', background: '#fff' }} />
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-start' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>تاريخ وقت آخر تعديل</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <input type="text" value={logModifiedDateFrom} onChange={(e) => setLogModifiedDateFrom(e.target.value)} style={{ width: '80px', border: '1px solid #b0c4de', height: '26px', padding: '0 6px', fontSize: '12px', textAlign: 'center', borderRadius: '3px', background: '#fff' }} />
                    <Calendar size={14} color="#007bff" style={{ cursor: 'pointer' }} />
                  </div>
                  <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a4e76', whiteSpace: 'nowrap' }}>إلى</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <input type="text" value={logModifiedDateTo} onChange={(e) => setLogModifiedDateTo(e.target.value)} style={{ width: '80px', border: '1px solid #b0c4de', height: '26px', padding: '0 6px', fontSize: '12px', textAlign: 'center', borderRadius: '3px', background: '#fff' }} />
                    <Calendar size={14} color="#007bff" style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </td>
              <td style={{ width: '33.33%', padding: '6px 10px' }}>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      )}

      {/* ── Execute Button ── */}
      <div style={{ padding: '10px 20px', direction: 'rtl', display: 'flex', justifyContent: 'flex-end' }}>
        <a href="#" onClick={handleSearch} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(to bottom, #5b9bd5, #3a7cc2)', color: '#fff', border: '1px solid #2a6cb2', borderRadius: '4px', padding: '8px 24px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
          <Check size={16} color="white" />
          <span>تنفيذ البحث</span>
        </a>
      </div>

      {/* ─ Records Count Row ── */}
      <div style={{ padding: '8px 15px', borderTop: '1px dotted #ccc', direction: 'rtl', background: '#fff', margin: '0 15px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ width: '70%' }}></td>
              <td style={{ width: '15%', textAlign: 'center' }}>
                <input type="text" value={maxRecords} onChange={(e) => setMaxRecords(e.target.value)} style={{ width: '80px', border: '1px solid #aaa', height: '24px', padding: '0 6px', fontSize: '12px', textAlign: 'center', borderRadius: '2px' }} />
              </td>
              <td style={{ width: '15%', textAlign: 'left', fontSize: '12px', fontWeight: 'bold', color: '#1a4e76' }}>عدد السجلات</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Warning Message ── */}
      <div style={{
        backgroundColor: '#fff9c4',
        border: '1px solid #f0e68c',
        padding: '8px 15px',
        margin: '5px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        direction: 'rtl',
        fontSize: '12px',
        color: '#856404',
        borderRadius: '3px'
      }}>
        <span>يمكن تحديد العملة للحصول على الإجماليات</span>
        <XCircle size={16} color="#dc3545" style={{ cursor: 'pointer' }} />
      </div>

      {/* ── Results Grid ── */}
      <div style={{ flex: 1, margin: '5px 15px 15px 15px', border: '1px solid #ccc', borderRadius: '4px', background: '#fff', overflow: 'hidden', direction: 'rtl' }}>
        {/* Grid action toolbar */}
        <div style={{
          backgroundColor: '#d5e2ec',
          padding: '4px 8px',
          borderBottom: '1px solid #bfc9d4',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          direction: 'rtl'
        }}>
          <input type="checkbox" style={{ margin: '0' }} />
          <Printer size={14} color="#555" style={{ cursor: 'pointer' }} />
          <RefreshCw size={13} color="#3c8dbc" style={{ cursor: 'pointer' }} />
          <LayoutGrid size={13} color="#555" style={{ cursor: 'pointer' }} />
          <div style={{ flex: 1 }} />
        </div>

        {/* Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', direction: 'rtl' }}>
          <thead>
            <tr style={{ backgroundColor: '#5b7083', color: '#fff', textAlign: 'center' }}>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal', width: '35px' }}>م</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>الرقم</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>النوع</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>نوع الحركة المخزنية</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>التاريخ</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>الحالة</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>ملاحظة</th>
              <th style={{ padding: '6px 8px', borderLeft: '1px solid #4a6070', fontWeight: 'normal' }}>الإضافة بواسطة</th>
              <th style={{ padding: '6px 8px', fontWeight: 'normal' }}>تاريخ السجل</th>
            </tr>
          </thead>
          <tbody>
            {hasSearched ? mockResults.map((row, idx) => (
              <tr key={row.id} style={{ backgroundColor: idx % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.id}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center', color: '#3c8dbc', cursor: 'pointer' }}>{row.docNo}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.type}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.movementType}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.date}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>
                  <span style={{
                    padding: '2px 8px',
                    borderRadius: '3px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    backgroundColor: row.status === 'مرحل' ? '#d4edda' : row.status === 'جديد' ? '#cce5ff' : '#f8d7da',
                    color: row.status === 'مرحل' ? '#155724' : row.status === 'جديد' ? '#004085' : '#721c24'
                  }}>{row.status}</span>
                </td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.note}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.addedBy}</td>
                <td style={{ padding: '5px 8px', border: '1px solid #d0d8e0', textAlign: 'center' }}>{row.recordDate}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan={9} style={{ padding: '40px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
                  اضغط "تنفيذ البحث" لعرض النتائج
                </td>
              </tr>
            )}
          </tbody>
        </table>
       </div>

    </div>
  );
}
