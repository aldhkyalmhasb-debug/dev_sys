import { useState, useEffect } from 'react';
import { Save, RotateCcw, Settings, X, Calendar, HelpCircle } from 'lucide-react';

interface ReceiptVoucherNewProps {
  onClose: () => void;
}

export default function ReceiptVoucherNew({ onClose }: ReceiptVoucherNewProps) {
  // Main form states
  const [receivedFrom, setReceivedFrom] = useState('');
  const [postAccount, setPostAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('ر.ي');
  const [paymentMethod, setPaymentMethod] = useState('نقدا');
  const [depositAccount, setDepositAccount] = useState('صندوق المبيعات اليوميه');
  const [description, setDescription] = useState('استلام دفعة من حساب العميل');
  const [docDate, setDocDate] = useState('2026-05-19');
  const [refNo, setRefNo] = useState('');
  const [isDraft, setIsDraft] = useState(false);

  // Table row state (synchronized with main amount)
  const [rowDebit, setRowDebit] = useState('0.00');
  const [rowCredit, setRowCredit] = useState('0.00');

  useEffect(() => {
    if (amount) {
      const parsed = parseFloat(amount);
      if (!isNaN(parsed)) {
        setRowCredit(parsed.toFixed(2));
        setRowDebit(parsed.toFixed(2));
      } else {
        setRowCredit('0.00');
        setRowDebit('0.00');
      }
    } else {
      setRowCredit('0.00');
      setRowDebit('0.00');
    }
  }, [amount]);

  const handleSave = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('الرجاء إدخال مبلغ صحيح');
      return;
    }
    alert(`تم حفظ سند القبض بنجاح بقيمة ${amount} ر.ي للعميل: ${receivedFrom}`);
    onClose();
  };

  const handleUndo = () => {
    setReceivedFrom('');
    setPostAccount('');
    setAmount('');
    setCurrency('ر.ي');
    setPaymentMethod('نقدا');
    setDepositAccount('صندوق المبيعات اليوميه');
    setDescription('استلام دفعة من حساب العميل');
    setDocDate('2026-05-19');
    setRefNo('');
    setIsDraft(false);
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
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      direction: 'rtl'
    }}>
      
      {/* Enlarged Window Box container (1100px width) */}
      <div style={{
        width: '1100px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 5px 25px rgba(0,0,0,0.35)',
        border: '1px solid #7f8c8d',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* 1. Header Title Bar */}
        <div style={{
          backgroundColor: '#3c8dbc',
          padding: '6px 12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '12px'
        }}>
          {/* Right window actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '11px', opacity: 0.8, cursor: 'pointer' }} title="تقسيم">🗖</span>
            <span style={{ fontSize: '11px', opacity: 0.8, cursor: 'pointer' }} title="تحديث">🔄</span>
            <span style={{ fontSize: '11px', opacity: 0.8, cursor: 'pointer' }} title="حفظ">💾</span>
          </div>

          {/* Window Title */}
          <div style={{ fontSize: '13px' }}>
            سندات القبض : جديد
          </div>

          {/* Left close/actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ cursor: 'pointer', fontSize: '11px' }}>➖</span>
            <span style={{ cursor: 'pointer', fontSize: '11px' }}>🗖</span>
            <div 
              onClick={onClose}
              style={{
                cursor: 'pointer',
                backgroundColor: '#e74c3c',
                padding: '1px 5px',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="إغلاق"
            >
              <X size={12} color="#fff" />
            </div>
          </div>
        </div>

        {/* 2. Action Buttons Sub-header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#eaeff2',
          padding: '5px 12px',
          borderBottom: '1px solid #cbd5e1'
        }}>
          {/* Left Actions (حفظ / تراجع) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div className="rl-utility-icon" title="الإعدادات" style={{ border: '1px solid #b0c2d4', padding: '4px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
              <Settings size={14} />
            </div>
            
            <div style={{ height: '16px', width: '1px', backgroundColor: '#cbd5e1', margin: '0 4px' }}></div>

            <button 
              onClick={handleUndo}
              style={{
                border: '1px solid #b0c2d4',
                borderRadius: '3px',
                padding: '3px 12px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fff',
                gap: '4px',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              <RotateCcw size={12} color="#e74c3c" />
              <span>تراجع</span>
            </button>

            <button 
              onClick={handleSave}
              style={{
                border: '1px solid #b0c2d4',
                borderRadius: '3px',
                padding: '3px 12px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fff',
                gap: '4px',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              <Save size={12} color="#27ae60" />
              <span>حفظ</span>
            </button>
          </div>

          {/* Right Orange Label Badge */}
          <div style={{
            backgroundColor: '#f39c12',
            color: '#fff',
            fontWeight: 'bold',
            padding: '3px 18px',
            borderRadius: '3px',
            fontSize: '12px'
          }}>
            سند قبض
          </div>
        </div>

        {/* 3. Fields Area (RTL: Swapped first/second column orders so right inputs render on the right) */}
        <div style={{ padding: '20px', backgroundColor: '#fdfefe', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          {/* Row 1: 'استلمت من' on the right, 'تقييد الحساب' on the left */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '20px' }}>
            {/* Right: Received from input */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input 
                type="text" 
                value={receivedFrom}
                onChange={(e) => setReceivedFrom(e.target.value)}
                style={{ border: '1px solid #cbd5e1', height: '24px', flex: 1, padding: '0 6px', backgroundColor: '#ffffcc', fontSize: '12px' }}
              />
              <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '11px', color: '#333' }}>
                استلمت من <span style={{ color: '#e74c3c' }}>*</span>
              </label>
            </div>

            {/* Left: Post Account dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <select 
                value={postAccount}
                onChange={(e) => setPostAccount(e.target.value)}
                style={{ border: '1px solid #cbd5e1', height: '24px', flex: 1, padding: '0 6px', fontSize: '12px' }}
              >
                <option value="">-- اختر حساب الدائن --</option>
                <option value="6003">6003 - صالح منصور</option>
                <option value="6005">6005 - سعيد القديمي</option>
                <option value="6006">6006 - شركة الأفق</option>
              </select>
              <label style={{ minWidth: '140px', fontWeight: 'bold', fontSize: '11px', color: '#333' }}>
                تقييد المبلغ لحساب/الدائن <span style={{ color: '#e74c3c' }}>*</span>
              </label>
            </div>
          </div>

          {/* Row 2: 'المبلغ' on the right, 'العملة وطريقة الدفع' on the left */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '20px' }}>
            {/* Right: Amount input */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input 
                type="number" 
                placeholder="المبلغ المالي"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ border: '1px solid #cbd5e1', height: '24px', flex: 1, padding: '0 6px', fontSize: '12px', textAlign: 'left', fontWeight: 'bold' }}
              />
              <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '11px', color: '#333' }}>
                المبلغ <span style={{ color: '#e74c3c' }}>*</span>
              </label>
            </div>

            {/* Left: Currency & Payment Method */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
              {/* Payment Method */}
              <select 
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={{ border: '1px solid #cbd5e1', height: '24px', width: '120px', padding: '0 6px', fontSize: '12px' }}
              >
                <option value="نقدا">نقدا</option>
                <option value="شيك">شيك</option>
                <option value="حوالة">حوالة</option>
              </select>
              <label style={{ fontWeight: 'bold', fontSize: '11px', color: '#333' }}>
                طريقة الدفع <span style={{ color: '#e74c3c' }}>*</span>
              </label>

              <span style={{ fontSize: '12px', color: '#7f8c8d' }}>=</span>

              {/* Currency */}
              <select 
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                style={{ border: '1px solid #cbd5e1', height: '24px', flex: 1, padding: '0 6px', fontSize: '12px' }}
              >
                <option value="ر.ي">ر.ي</option>
                <option value="$">$</option>
                <option value="س.ر">س.ر</option>
              </select>
              <label style={{ fontWeight: 'bold', fontSize: '11px', color: '#333' }}>
                العملة <span style={{ color: '#e74c3c' }}>*</span>
              </label>
            </div>
          </div>

          {/* Row 3: 'إيداع في حساب' on the right, 'البيان' on the left */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '20px' }}>
            {/* Right: Deposit Into Account Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <select 
                value={depositAccount}
                onChange={(e) => setDepositAccount(e.target.value)}
                style={{ border: '1px solid #cbd5e1', height: '24px', flex: 1, padding: '0 6px', fontSize: '12px' }}
              >
                <option value="صندوق المبيعات اليوميه">صندوق المبيعات اليوميه</option>
                <option value="البنك الإسلامي">البنك الإسلامي</option>
              </select>
              <span style={{ fontSize: '11px', color: '#3c8dbc', cursor: 'pointer' }} title="استعراض الصناديق">📋</span>
              <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '11px', color: '#333' }}>
                إيداع في حساب <span style={{ color: '#e74c3c' }}>*</span>
              </label>
            </div>

            {/* Left: Description Text Box */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input 
                type="text" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ border: '1px solid #cbd5e1', height: '24px', flex: 1, padding: '0 6px', fontSize: '12px' }}
              />
              <label style={{ minWidth: '140px', fontWeight: 'bold', fontSize: '11px', color: '#333' }}>
                البيان <span style={{ color: '#e74c3c' }}>*</span>
              </label>
            </div>
          </div>

          {/* Row 4: 'تاريخ المستند' on the right, 'رقم المرجع ومسودة' on the left */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '20px' }}>
            {/* Right: Document Date */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', backgroundColor: '#fff', borderRadius: '3px', flex: 1, padding: '0 6px' }}>
                <Calendar size={13} color="#95a5a6" style={{ marginLeft: '6px' }} />
                <input 
                  type="date" 
                  value={docDate}
                  onChange={(e) => setDocDate(e.target.value)}
                  style={{ border: 'none', height: '22px', fontSize: '12px', width: '100%', outline: 'none' }}
                />
              </div>
              <label style={{ minWidth: '100px', fontWeight: 'bold', fontSize: '11px', color: '#333' }}>
                تاريخ المستند <span style={{ color: '#e74c3c' }}>*</span>
              </label>
            </div>

            {/* Left: Draft Checkbox & Reference No */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <input 
                  type="checkbox" 
                  checked={isDraft}
                  onChange={(e) => setIsDraft(e.target.checked)}
                  style={{ width: '13px', height: '13px' }}
                />
                <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#555' }}>مسودة</label>
                <HelpCircle size={12} color="#7f8c8d" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
                <input 
                  type="text" 
                  value={refNo}
                  onChange={(e) => setRefNo(e.target.value)}
                  style={{ border: '1px solid #cbd5e1', height: '24px', flex: 1, padding: '0 6px', fontSize: '12px' }}
                />
                <label style={{ minWidth: '80px', fontSize: '11px', fontWeight: 'bold', color: '#333' }}>رقم المرجع</label>
              </div>
            </div>
          </div>

          {/* 4. Table Postings Section */}
          <div style={{ marginTop: '12px', borderTop: '1px solid #e0e0e0', paddingTop: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#0b5394', marginBottom: '8px', textAlign: 'right' }}>
              تقييد المبلغ لحساب/الدائن
            </div>
            
            <table className="rl-table" style={{ width: '100%', margin: 0 }}>
              <thead>
                <tr>
                  <th style={{ width: '35px' }}>م</th>
                  <th>نوع الحساب</th>
                  <th style={{ width: '160px' }}>رقم الحساب</th>
                  <th style={{ textAlign: 'left' }}>دائن</th>
                  <th>العملة</th>
                  <th>سعر التحويل</th>
                  <th style={{ textAlign: 'left' }}>دائن /محلي</th>
                  <th>البيان</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: 'center' }}>1</td>
                  <td>
                    <select disabled style={{ width: '100%', height: '22px', fontSize: '11px', backgroundColor: '#f8f9fa' }}>
                      <option value="عميل">عميل</option>
                    </select>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', backgroundColor: '#f8f9fa', padding: '0 4px', height: '22px' }}>
                      <span style={{ fontSize: '10px', color: '#7f8c8d', cursor: 'pointer', marginLeft: '4px' }}>🔍</span>
                      <input 
                        type="text" 
                        readOnly 
                        value={postAccount || '6003'} 
                        style={{ border: 'none', backgroundColor: 'transparent', width: '100%', outline: 'none', fontSize: '11px', fontWeight: 'bold' }} 
                      />
                    </div>
                  </td>
                  <td style={{ textAlign: 'left', fontWeight: 'bold', color: '#27ae60' }}>
                    {rowCredit}
                  </td>
                  <td style={{ textAlign: 'center', fontSize: '11px' }}>{currency}</td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
                      <span>1.0000</span>
                      <span style={{ fontSize: '10px', color: '#3c8dbc', cursor: 'pointer' }}>📋</span>
                    </div>
                  </td>
                  <td style={{ textAlign: 'left', fontWeight: 'bold', color: '#27ae60' }}>
                    {rowCredit}
                  </td>
                  <td>
                    <input 
                      type="text" 
                      readOnly 
                      value={description} 
                      style={{ border: 'none', backgroundColor: 'transparent', width: '100%', fontSize: '11px', textAlign: 'right' }} 
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        {/* 5. Bottom Footer Summary Bar */}
        <div style={{
          backgroundColor: '#eaeff2',
          borderTop: '1px solid #cbd5e1',
          padding: '8px 15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Summary Boxes */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            
            {/* Difference (الفارق) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                backgroundColor: '#fff',
                border: '1px solid #cbd5e1',
                padding: '3px 12px',
                width: '100px',
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#e74c3c',
                fontSize: '12px'
              }}>
                0.00
              </div>
              <span style={{ fontWeight: 'bold', fontSize: '11px', color: '#555' }}>الفارق</span>
            </div>

            {/* Credit (دائن) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                backgroundColor: '#fff',
                border: '1px solid #cbd5e1',
                padding: '3px 12px',
                width: '100px',
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#0b5394',
                fontSize: '12px'
              }}>
                {rowCredit}
              </div>
              <span style={{ fontWeight: 'bold', fontSize: '11px', color: '#555' }}>دائن</span>
            </div>

            {/* Debit (مدين) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                backgroundColor: '#fff',
                border: '1px solid #cbd5e1',
                padding: '3px 12px',
                width: '100px',
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#0b5394',
                fontSize: '12px'
              }}>
                {rowDebit}
              </div>
              <span style={{ fontWeight: 'bold', fontSize: '11px', color: '#555' }}>مدين</span>
            </div>

          </div>

          {/* Left label */}
          <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#333' }}>
            الإجمالي
          </div>
        </div>

      </div>

    </div>
  );
}
