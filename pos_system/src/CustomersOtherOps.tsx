import { useState } from 'react';
import { Play, X } from 'lucide-react';

interface CustomersOtherOpsProps {
  onNavigate: (route: string) => void;
}

export default function CustomersOtherOps({ onNavigate }: CustomersOtherOpsProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // States for sub-form inputs
  const [clientName, setClientName] = useState('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmitOp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !amount) {
      alert('الرجاء إدخال اسم العميل والمبلغ');
      return;
    }
    alert(`تم تسجيل العملية بنجاح:\nنوع العملية: ${activeModal}\nالعميل: ${clientName}\nالمبلغ: ${amount} ر.ي`);
    setActiveModal(null);
    setClientName('');
    setAmount('');
    setNotes('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', backgroundColor: '#f4f6f9', direction: 'rtl', padding: '20px', gap: '20px' }}>
      
      {/* Header back navigation */}
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <button 
          onClick={() => onNavigate('dashboard')}
          style={{ border: '1px solid #cbd5e1', backgroundColor: '#fff', padding: '6px 15px', borderRadius: '3px', fontSize: '12px', cursor: 'pointer', fontWeight: 'bold', color: '#333' }}
        >
          ← العودة للوحة التحكم
        </button>
      </div>

      {/* 1. Main White Card - contains the links list */}
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #cbd5e1',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        padding: '0 0 25px 0',
        overflow: 'hidden'
      }}>
        
        {/* Card Header Orange Badge */}
        <div style={{
          borderBottom: '1px solid #cbd5e1',
          padding: '10px 15px',
          display: 'flex',
          justifyContent: 'flex-start'
        }}>
          <div style={{
            backgroundColor: '#f39c12',
            color: '#fff',
            fontWeight: 'bold',
            padding: '4px 20px',
            borderRadius: '3px',
            fontSize: '13px'
          }}>
            عمليات مالية مبسطة
          </div>
        </div>

        {/* List of operations */}
        <div style={{ padding: '25px 40px 10px 40px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* Op 1: تقييد رصيد سابق لعميل */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed #e2e8f0', paddingBottom: '15px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }} onClick={() => setActiveModal('تقييد رصيد سابق لعميل')}>
                <Play size={10} fill="#3c8dbc" color="#3c8dbc" />
                <span style={{ fontWeight: 'bold', fontSize: '13px', color: '#2c3e50' }}>تقييد رصيد سابق لعميل</span>
              </div>
              <div style={{ fontSize: '11px', color: '#7f8c8d', marginTop: '4px', marginRight: '16px' }}>
                تقييد الأرصدة السابقة للعملاء
              </div>
            </div>
          </div>

          {/* Op 2: دفع مبلغ لعميل */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed #e2e8f0', paddingBottom: '15px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }} onClick={() => setActiveModal('دفع مبلغ لعميل')}>
                <Play size={10} fill="#3c8dbc" color="#3c8dbc" />
                <span style={{ fontWeight: 'bold', fontSize: '13px', color: '#2c3e50' }}>دفع مبلغ لعميل</span>
              </div>
              <div style={{ fontSize: '11px', color: '#7f8c8d', marginTop: '4px', marginRight: '16px' }}>
                مثل إعادة مبالغ للعميل، أو تقديم سلفة لعميل
              </div>
            </div>
          </div>

          {/* Op 3: تقييد ديون معدومة */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: '5px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }} onClick={() => setActiveModal('تقييد ديون معدومة')}>
                <Play size={10} fill="#3c8dbc" color="#3c8dbc" />
                <span style={{ fontWeight: 'bold', fontSize: '13px', color: '#2c3e50' }}>تقييد ديون معدومة</span>
              </div>
              <div style={{ fontSize: '11px', color: '#7f8c8d', marginTop: '4px', marginRight: '16px' }}>
                تقييد الديون المعدومة التي لا يمكن تحصيلها من العملاء.. ملاحظة: سيتم تخفيض المبلغ من حساب العميل
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 2. Yellow Warning & Instructions Card */}
      <div style={{
        backgroundColor: '#ffffcc',
        border: '1px solid #f9ebbe',
        borderRadius: '4px',
        padding: '20px 25px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {/* Info Icon Floating on the far left */}
        <div style={{ position: 'absolute', left: '20px', top: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            backgroundColor: '#e67e22',
            color: '#fff',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            i
          </div>
        </div>

        {/* Warning Title */}
        <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#7f6000', textAlign: 'right' }}>
          العميل الكريم:
        </div>

        {/* Instructions list */}
        <ul style={{
          listStyleType: 'disc',
          paddingRight: '20px',
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          fontSize: '11px',
          color: '#555',
          textAlign: 'right'
        }}>
          <li>فيما يخص العمليات المحاسبية، يفضل دوماً أن تقوم بإستشارة محاسب</li>
          <li>قم بإدخال حقل البيان بشكل واضح</li>
          <li>هذه العمليات تقوم بإضافة قيد يومية يدوي يمكن الإطلاع عليه بعد الحفظ - لإستكمال تأثير هذه العملية يجب ترحيل هذا القيد</li>
          <li>يمكن عكس هذه العمليات بعد تنفيذها</li>
        </ul>

        {/* Dashed Separator */}
        <div style={{ borderTop: '1px dashed #d6cca9', margin: '8px 0' }}></div>

        {/* Add simplified finance operation link */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div 
            onClick={() => setActiveModal('إضافة عملية مالية جديدة')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontWeight: 'bold',
              color: '#3c8dbc'
            }}
          >
            <span style={{ color: '#27ae60' }}>➕</span>
            <span>إضافة - عمليات مالية مبسطة</span>
          </div>
        </div>

      </div>

      {/* Floating Action Modal form */}
      {activeModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}>
          <div style={{
            width: '450px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            border: '1px solid #cbd5e1',
            overflow: 'hidden'
          }}>
            {/* Header */}
            <div style={{
              backgroundColor: '#3c8dbc',
              color: '#fff',
              padding: '10px 15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: '12px'
            }}>
              <span>{activeModal}</span>
              <X size={15} style={{ cursor: 'pointer' }} onClick={() => setActiveModal(null)} />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitOp} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#555' }}>اسم العميل</label>
                <input 
                  type="text" 
                  required
                  placeholder="مثال: صالح منصور"
                  value={clientName} 
                  onChange={(e) => setClientName(e.target.value)} 
                  style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 8px', fontSize: '12px' }} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#555' }}>المبلغ المالي (ر.ي)</label>
                <input 
                  type="number" 
                  required
                  placeholder="0.00"
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)} 
                  style={{ border: '1px solid #cbd5e1', height: '26px', padding: '0 8px', fontSize: '12px', textAlign: 'left' }} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#555' }}>البيان / ملاحظات</label>
                <textarea 
                  placeholder="ملاحظات الحركة..."
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)} 
                  style={{ border: '1px solid #cbd5e1', height: '50px', padding: '6px', fontSize: '12px', resize: 'none' }} 
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button 
                  type="button" 
                  onClick={() => setActiveModal(null)}
                  style={{ border: '1px solid #cbd5e1', backgroundColor: '#fff', padding: '6px 15px', borderRadius: '3px', fontSize: '12px', cursor: 'pointer' }}
                >
                  إلغاء
                </button>
                <button 
                  type="submit" 
                  style={{ border: 'none', backgroundColor: '#27ae60', color: '#fff', padding: '6px 20px', borderRadius: '3px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' }}
                >
                  تأكيد وحفظ
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
