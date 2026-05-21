import { ChevronLeft, BarChart2, BookOpen, Settings, List, UserPlus, Search, LayoutGrid, DollarSign, FileText, CornerDownLeft, FilePlus, Inbox, MinusSquare, FileQuestion, Box, RefreshCw } from 'lucide-react';

interface DashboardProps {
  onNavigate: (route: string) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const modules = [
    {
      title: 'نقاط البيع',
      items: [
        { 
          name: 'تهيئة النظام',
          subItems: [
            { name: 'الإعدادات', icon: <Settings size={14} color="#6c757d" /> },
            { name: 'الصناديق', icon: <Inbox size={14} color="#3c8dbc" /> }
          ]
        },
        { 
          name: 'العملاء',
          subItems: [
            { name: 'جديد', icon: <UserPlus size={14} color="#28a745" /> },
            { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
            { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
            { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> },
            { name: 'استلام مبلغ من عميل', icon: <ChevronLeft size={14} color="#3c8dbc" /> },
            { name: 'أرصدة العملاء', icon: <DollarSign size={14} color="#28a745" /> },
            { name: 'عمليات أخرى', icon: <ChevronLeft size={14} color="#3c8dbc" /> }
          ]
        },
        { 
          name: 'الموردين',
          subItems: [
            { name: 'جديد', icon: <UserPlus size={14} color="#28a745" /> },
            { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
            { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
            { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> },
            { name: 'تسديد مبلغ لمورد', icon: <ChevronLeft size={14} color="#3c8dbc" /> },
            { name: 'أرصدة الموردين', icon: <DollarSign size={14} color="#28a745" /> },
            { name: 'عمليات أخرى', icon: <ChevronLeft size={14} color="#3c8dbc" /> }
          ]
        },
        { 
          name: 'الموظفين',
          subItems: [
            { name: 'جديد', icon: <UserPlus size={14} color="#28a745" /> },
            { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
            { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
            { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> },
            { name: 'الأرصدة', icon: <DollarSign size={14} color="#28a745" /> },
            { name: 'العمليات المالية', icon: <BarChart2 size={14} color="#3c8dbc" /> }
          ]
        }
      ],
      sections: [
        { 
          name: 'العمليات', 
          items: [
            { 
              name: 'فاتورة مبيعات',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> },
                { name: 'فاتورة مبيعات - كاشير', icon: <FileText size={14} color="#3c8dbc" /> },
                { name: 'فاتورة مبيعات أولية', icon: <FileText size={14} color="#3c8dbc" /> },
                { name: 'الفواتير الغير مدفوعة', icon: <List size={14} color="#dc3545" /> }
              ]
            }, 
            { 
              name: 'فاتورة مشتريات',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }, 
            { 
              name: 'مرتجع/مردود',
              subItems: [
                { name: 'مرتجع المبيعات', icon: <CornerDownLeft size={14} color="#dc3545" /> },
                { name: 'مرتجع المبيعات النقدية', icon: <CornerDownLeft size={14} color="#dc3545" /> },
                { name: 'مرتجع المشتريات', icon: <CornerDownLeft size={14} color="#28a745" /> },
                { name: 'مرتجع المشتريات النقدية', icon: <CornerDownLeft size={14} color="#28a745" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> }
              ]
            }, 
            { 
              name: 'المصروفات',
              subItems: [
                { name: 'تقييد المصروفات', icon: <MinusSquare size={14} color="#dc3545" /> },
                { name: 'أنواع المصروفات', icon: <List size={14} color="#6c757d" /> },
                { name: 'سندات الصرف', icon: <FileText size={14} color="#3c8dbc" /> }
              ]
            }
          ] 
        },
        { 
          name: 'divider', 
          items: [
            { name: 'تقارير المبيعات', icon: <BookOpen size={14} color="#3c8dbc" /> }
          ] 
        }
      ]
    },
    {
      title: 'المبيعات',
      items: [
        { 
          name: 'تهيئة النظام',
          subItems: [
            { name: 'الإعدادات', icon: <Settings size={14} color="#6c757d" /> },
            { name: 'المناطق التجارية', icon: <List size={14} color="#3c8dbc" /> }
          ]
        },
        { 
          name: 'العملاء',
          subItems: [
            { name: 'جديد', icon: <UserPlus size={14} color="#28a745" /> },
            { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
            { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
            { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> },
            { name: 'استلام مبلغ من عميل', icon: <ChevronLeft size={14} color="#3c8dbc" /> },
            { name: 'أرصدة العملاء', icon: <DollarSign size={14} color="#28a745" /> },
            { name: 'عمليات أخرى', icon: <ChevronLeft size={14} color="#3c8dbc" /> }
          ]
        },
        { 
          name: 'المندوبين',
          subItems: [
            { name: 'جديد', icon: <UserPlus size={14} color="#28a745" /> },
            { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
            { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
            { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> },
            { name: 'صرف مبلغ لمندوب', icon: <ChevronLeft size={14} color="#3c8dbc" /> },
            { name: 'الأرصدة', icon: <DollarSign size={14} color="#28a745" /> }
          ]
        },
        { 
          name: 'الموظفين',
          subItems: [
            { name: 'جديد', icon: <UserPlus size={14} color="#28a745" /> },
            { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
            { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
            { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> },
            { name: 'الأرصدة', icon: <DollarSign size={14} color="#28a745" /> },
            { name: 'العمليات المالية', icon: <BarChart2 size={14} color="#3c8dbc" /> }
          ]
        }
      ],
      sections: [
        { 
          name: 'العمليات', 
          items: [
            { 
              name: 'فواتير المبيعات',
              subItems: [
                { name: 'فاتورة مبيعات نقدية', icon: <FileText size={14} color="#3c8dbc" /> },
                { name: 'فاتورة مبيعات آجلة', icon: <FileText size={14} color="#3c8dbc" /> },
                { name: 'فاتورة مبيعات - كاشير', icon: <FileText size={14} color="#3c8dbc" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }, 
            { 
              name: 'مرتجع المبيعات',
              subItems: [
                { name: 'مرتجع المبيعات / فاتورة مبيعات', icon: <CornerDownLeft size={14} color="#dc3545" /> },
                { name: 'مرتجع المبيعات النقدية / بدون فاتورة', icon: <CornerDownLeft size={14} color="#dc3545" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> }
              ]
            }, 
            { 
              name: 'عروض الأسعار',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> },
                { name: 'عرض سعر - كاشير', icon: <FileText size={14} color="#3c8dbc" /> }
              ]
            }, 
            { 
              name: 'طلبات العملاء',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> },
                { name: 'طلب مبيعات - كاشير', icon: <FileText size={14} color="#3c8dbc" /> }
              ]
            }
          ] 
        },
        { 
          name: 'divider', 
          items: [
            { name: 'تقارير المبيعات', icon: <BookOpen size={14} color="#3c8dbc" /> }
          ] 
        }
      ]
    },
    {
      title: 'المشتريات',
      items: [
        { name: 'الإعدادات', icon: <Settings size={14} color="#6c757d" /> },
        { 
          name: 'الموردين',
          subItems: [
            { name: 'جديد', icon: <UserPlus size={14} color="#28a745" /> },
            { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
            { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
            { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> },
            { name: 'تسديد مبلغ لمورد', icon: <ChevronLeft size={14} color="#3c8dbc" /> },
            { name: 'أرصدة الموردين', icon: <DollarSign size={14} color="#28a745" /> },
            { name: 'عمليات أخرى', icon: <ChevronLeft size={14} color="#3c8dbc" /> }
          ]
        }
      ],
      sections: [
        { 
          name: 'المشتريات المحلية', 
          items: [
            { 
              name: 'فواتير المشتريات',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }, 
            { 
              name: 'مرتجع المشتريات',
              subItems: [
                { name: 'مرتجع المشتريات النقدية / بدون فاتورة', icon: <CornerDownLeft size={14} color="#dc3545" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> }
              ]
            }
          ] 
        },
        { 
          name: 'إدارة المشتريات', 
          items: [
            { 
              name: 'طلبات الشراء',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }, 
            { 
              name: 'عروض أسعار الموردين',
              subItems: [
                { name: "طلبات عروض الأسعار - RFQ's", icon: <FileQuestion size={14} color="#3c8dbc" /> },
                { name: 'عروض أسعار الموردين', icon: <FileText size={14} color="#3c8dbc" /> }
              ]
            }, 
            { 
              name: 'أوامر الشراء',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            },
            { 
              name: 'إتفاقيات المشتريات',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            },
            { name: 'فواتير المشتريات الخارجية', icon: <BarChart2 size={14} color="#3c8dbc" /> },
            { name: 'أمر التوريد المخزني - المشتريات', icon: <BarChart2 size={14} color="#3c8dbc" /> },
            { name: 'إستلام خدمة', icon: <BarChart2 size={14} color="#3c8dbc" /> },
            { name: 'فواتير الموردين', icon: <BarChart2 size={14} color="#3c8dbc" /> },
            { name: 'متابعة المشتريات', icon: <BarChart2 size={14} color="#3c8dbc" /> }
          ] 
        },
        { 
          name: 'divider', 
          items: [
            { name: 'التقارير', icon: <BookOpen size={14} color="#3c8dbc" /> }
          ] 
        }
      ]
    },
    {
      title: 'المخزون',
      items: [
        { 
          name: 'تهيئة النظام',
          subItems: [
            { name: 'الإعدادات', icon: <Settings size={14} color="#6c757d" /> },
            { name: 'المجموعات المخزنية المالية', icon: <List size={14} color="#3c8dbc" /> },
            { name: 'المخازن', icon: <Inbox size={14} color="#3c8dbc" /> },
            { name: 'مواقع التخزين/الرفوف', icon: <LayoutGrid size={14} color="#3c8dbc" /> },
            { name: 'المخازن الفرعية', icon: <Inbox size={14} color="#3c8dbc" /> },
            { name: 'وحدات القياس', icon: <Settings size={14} color="#6c757d" /> },
            { name: 'مجموعات الأصناف', icon: <List size={14} color="#3c8dbc" /> },
            { name: 'المجموعات الفرعية', icon: <List size={14} color="#3c8dbc" /> },
            { name: 'أشكال الأصناف', icon: <LayoutGrid size={14} color="#3c8dbc" /> },
            { name: 'الشركات المصنعة', icon: <Settings size={14} color="#6c757d" /> },
            { name: 'وكلاء الأصناف', icon: <Settings size={14} color="#6c757d" /> },
            { name: 'باقات الاصناف', icon: <Box size={14} color="#3c8dbc" /> }
          ]
        },
        { 
          name: 'الأصناف',
          subItems: [
            { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
            { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
            { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
            { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> },
            { name: 'الخدمات', icon: <Settings size={14} color="#6c757d" /> },
            { name: 'تعديل أسعار بيع الأصناف', icon: <Settings size={14} color="#6c757d" /> },
            { name: 'تغيير كلفة الأصناف', icon: <Settings size={14} color="#6c757d" /> }
          ]
        }
      ],
      sections: [
        { 
          name: 'العمليات', 
          items: [
            { 
              name: 'أوامر الصرف المخزني',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }, 
            { 
              name: 'أوامر التوريد المخزني',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }, 
            { 
              name: 'أمر تحويل بضاعة إلى مخزن آخر',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }
          ] 
        },
        { 
          name: 'divider', 
          items: [
            { 
              name: 'المخزون الإفتتاحي',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }, 
            { 
              name: 'جرد وتسوية المخزون',
              subItems: [
                { name: 'جرد المخزون', icon: <RefreshCw size={14} color="#3c8dbc" /> },
                { name: 'جرد المخزون - بسيط', icon: <RefreshCw size={14} color="#3c8dbc" /> },
                { name: 'تصفير المخزون', icon: <MinusSquare size={14} color="#dc3545" /> },
                { name: 'تسوية كلفة المخزون', icon: <RefreshCw size={14} color="#3c8dbc" /> }
              ]
            }, 
            { 
              name: 'الإنتاج',
              subItems: [
                { name: 'أوامر الإنتاج', icon: <Box size={14} color="#3c8dbc" /> },
                { name: 'صرف مواد خام للإنتاج', icon: <MinusSquare size={14} color="#dc3545" /> },
                { name: 'تقييد كميات الإنتاج الجاهز', icon: <FilePlus size={14} color="#28a745" /> }
              ]
            },
            { 
              name: 'أخرى',
              subItems: [
                { name: 'توريد مرتجع الصرف المخزني', icon: <CornerDownLeft size={14} color="#28a745" /> },
                { name: 'توريد مرتجع البضاعة المباعة', icon: <CornerDownLeft size={14} color="#28a745" /> },
                { name: 'أمر تركيب أصناف', icon: <Settings size={14} color="#6c757d" /> },
                { name: 'أمر تفكيك أصناف', icon: <Settings size={14} color="#6c757d" /> },
                { name: 'أوامر الشغل', icon: <Box size={14} color="#3c8dbc" /> },
                { name: 'أوامر التحميل', icon: <Inbox size={14} color="#3c8dbc" /> }
              ]
            }
          ] 
        },
        { 
          name: 'divider', 
          items: [
            { name: 'تقارير المخزون', icon: <BookOpen size={14} color="#3c8dbc" /> }
          ] 
        }
      ]
    },
    {
      title: 'الحسابات',
      items: [
        { 
          name: 'تهيئة النظام',
          subItems: [
            { name: 'الإعدادات', icon: <Settings size={14} color="#6c757d" /> },
            { name: 'أنواع القيود', icon: <List size={14} color="#3c8dbc" /> },
            { name: 'الفترات المحاسبية', icon: <LayoutGrid size={14} color="#3c8dbc" /> }
          ]
        },
        { 
          name: 'البيانات الأساسية',
          subItems: [
            { name: 'العملات', icon: <DollarSign size={14} color="#28a745" /> },
            { name: 'أسعار الصرف', icon: <DollarSign size={14} color="#28a745" /> },
            { name: 'الصناديق', icon: <Inbox size={14} color="#3c8dbc" /> },
            { name: 'البنوك', icon: <Inbox size={14} color="#3c8dbc" /> }
          ]
        },
        { name: 'دليل الحسابات', icon: <BarChart2 size={14} color="#3c8dbc" /> },
        { name: 'دليل المراكز', icon: <LayoutGrid size={14} color="#3c8dbc" /> }
      ],
      sections: [
        { 
          name: 'العمليات', 
          items: [
            { 
              name: 'سندات القبض',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }, 
            { 
              name: 'سندات الصرف',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }, 
            { 
              name: 'قيود اليومية',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }, 
            { 
              name: 'الإشعارات',
              subItems: [
                { name: 'إشعار دائن', icon: <CornerDownLeft size={14} color="#28a745" /> },
                { name: 'إشعار مدين', icon: <CornerDownLeft size={14} color="#dc3545" /> }
              ]
            }, 
            { 
              name: 'عمليات مالية مبسطة',
              subItems: [
                { name: 'استلام مبلغ من عميل', icon: <ChevronLeft size={14} color="#3c8dbc" /> },
                { name: 'تسديد مبلغ لمورد', icon: <ChevronLeft size={14} color="#3c8dbc" /> },
                { name: 'صرف مبلغ لمندوب', icon: <ChevronLeft size={14} color="#3c8dbc" /> },
                { name: 'تقييد المصروفات', icon: <MinusSquare size={14} color="#dc3545" /> }
              ]
            }
          ] 
        },
        { 
          name: 'divider', 
          items: [
            { 
              name: 'خطابات الضمان',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }, 
            { 
              name: 'الإعتمادات المستندية',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }, 
            { 
              name: 'الموازنة التقديرية',
              subItems: [
                { name: 'جديد', icon: <FilePlus size={14} color="#28a745" /> },
                { name: 'بحث', icon: <Search size={14} color="#6c757d" /> },
                { name: 'عرض القائمة', icon: <List size={14} color="#3c8dbc" /> },
                { name: 'إستعراض', icon: <LayoutGrid size={14} color="#6c757d" /> }
              ]
            }
          ] 
        },
        { 
          name: 'divider', 
          items: [
            { 
              name: 'المراجعة و الترحيل',
              subItems: [
                { name: 'مراجعة العمليات', icon: <Settings size={14} color="#6c757d" /> },
                { name: 'ترحيل العمليات', icon: <BarChart2 size={14} color="#3c8dbc" /> },
                { name: 'إلغاء ترحيل العمليات', icon: <RefreshCw size={14} color="#dc3545" /> }
              ]
            }, 
            { 
              name: 'المطابقة والتسوية',
              subItems: [
                { name: 'مطابقة وتسوية حساب بنكي', icon: <RefreshCw size={14} color="#3c8dbc" /> },
                { name: 'مطابقة حساب عميل', icon: <RefreshCw size={14} color="#3c8dbc" /> },
                { name: 'مطابقة حساب مورد', icon: <RefreshCw size={14} color="#3c8dbc" /> }
              ]
            }, 
            { name: 'خطوات إغلاق الفترة المحاسبية', icon: <Settings size={14} color="#6c757d" /> }
          ] 
        },
        { 
          name: 'divider', 
          items: [
            { 
              name: 'التقارير المالية',
              subItems: [
                { name: 'كشف حساب', icon: <BookOpen size={14} color="#3c8dbc" /> },
                { name: 'ميزان المراجعة', icon: <BarChart2 size={14} color="#3c8dbc" /> },
                { name: 'الأرباح والخسائر', icon: <BarChart2 size={14} color="#3c8dbc" /> },
                { name: 'الميزانية العمومية', icon: <BarChart2 size={14} color="#3c8dbc" /> }
              ]
            },
            { name: 'مصمم التقارير المالية', icon: <LayoutGrid size={14} color="#3c8dbc" /> }
          ] 
        }
      ]
    }
  ];

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      {/* Background Logo Watermark */}
      <div style={{ position: 'absolute', bottom: '30px', left: '50px', opacity: 0.8, pointerEvents: 'none' }}>
        <h1 style={{ fontSize: '80px', color: '#3c8dbc', margin: 0, display: 'flex', alignItems: 'center' }}>
          Remo<span style={{ backgroundColor: '#f39c12', color: 'white', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '-5px', transform: 'rotate(-10deg)' }}>X</span>
        </h1>
      </div>

      <div className="dashboard-container">
        {modules.map((mod, idx) => (
          <div key={idx} className="module-card">
            <div className="module-header">{mod.title}</div>
            <ul className="module-list">
              {mod.items.map((item, i) => (
                <li key={i} className="dashboard-list-item">
                  <a href="#" onClick={(e) => { e.preventDefault(); if (item.name === 'فواتير المبيعات') onNavigate('sales-invoices'); else if (item.name === 'مرتجع المبيعات' || item.name === 'مرتجع/مردود') onNavigate('sales-invoices-return'); else if (item.name === 'عروض الأسعار') onNavigate('quotations-search'); else if (item.name === 'العملاء') onNavigate('customers-main'); else if (item.name === 'الأصناف') onNavigate('items-main'); else if (item.name === 'فاتورة مبيعات') onNavigate('pos'); }}>
                    {item.icon ? item.icon : <ChevronLeft size={14} className="dashboard-icon" color="#3c8dbc" />} 
                    <span style={{ marginRight: '10px' }}>{item.name}</span>
                  </a>
                  
                  {/* Nested Submenu */}
                  {item.subItems && (
                    <div className="dashboard-submenu">
                      <div className="dashboard-submenu-title">{item.name}</div>
                      <ul>
                        {item.subItems.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <a href="#" onClick={(e) => { 
                              e.preventDefault(); 
                              if (item.name === 'فواتير المبيعات' && (sub.name === 'بحث' || sub.name === 'عرض القائمة' || sub.name === 'إستعراض')) {
                                onNavigate('sales-invoices');
                              } else if (sub.name === 'مرتجع المبيعات النقدية / بدون فاتورة' || sub.name === 'مرتجع المبيعات النقدية') {
                                onNavigate('cash-return');
                              } else if (item.name.includes('مرتجع') && sub.name === 'عرض القائمة') {
                                onNavigate('returns-list');
                              } else if (sub.name.includes('مرتجع المبيعات')) {
                                onNavigate('sales-invoices-return');
                              } else if (item.name === 'عروض الأسعار' && sub.name === 'عرض القائمة') {
                                onNavigate('quotations-list');
                              } else if (item.name === 'عروض الأسعار' && sub.name === 'بحث') {
                                onNavigate('quotations-search');
                              } else if (item.name === 'عروض الأسعار' && sub.name === 'جديد') {
                                onNavigate('quotations-new');
                              } else if (item.name === 'عروض الأسعار' && sub.name === 'إستعراض') {
                                onNavigate('quotations-browse');
                              } else if (item.name === 'العملاء' && sub.name === 'بحث') {
                                onNavigate('customers-search');
                              } else if (item.name === 'العملاء' && sub.name === 'عرض القائمة') {
                                onNavigate('customers-list');
                              } else if (item.name === 'العملاء' && sub.name === 'إستعراض') {
                                onNavigate('customers-browse');
                              } else if (item.name === 'العملاء' && sub.name === 'استلام مبلغ من عميل') {
                                onNavigate('receipt-voucher-new');
                              } else if (item.name === 'العملاء' && sub.name === 'عمليات أخرى') {
                                onNavigate('customers-other-ops');
                              } else if (item.name === 'الأصناف' && sub.name === 'بحث') {
                                onNavigate('items-search');
                              } else if (item.name === 'الأصناف' && sub.name === 'عرض القائمة') {
                                onNavigate('items-list');
                              } else if (item.name === 'الأصناف' && sub.name === 'إستعراض') {
                                onNavigate('items-browse');
                              } else if (item.name === 'الأصناف' && sub.name === 'الخدمات') {
                                onNavigate('items-services');
                              } else if (item.name === 'الأصناف' && sub.name === 'تغيير كلفة الأصناف') {
                                onNavigate('items-cost-change');
                              } else if (sub.name === 'تسوية كلفة المخزون') {
                                onNavigate('items-cost-change');
                              } else if (sub.name.includes('فاتورة مبيعات') || sub.name === 'جديد' || sub.name === 'فاتورة مبيعات - كاشير') {
                                onNavigate('pos');
                              }
                            }}>
                              <span style={{ marginLeft: '10px' }}>{sub.name}</span>
                              {sub.icon}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {mod.sections.map((sec, i) => (
              <div key={i}>
                {sec.name && sec.name !== 'divider' && <div className="module-section-title">{sec.name}</div>}
                {sec.name === 'divider' && <div style={{ borderBottom: '1px dotted #ccc', margin: '5px 15px' }}></div>}
                <ul className="module-list">
                  {sec.items.map((item, j) => (
                    <li key={j} style={{ borderBottom: sec.name === 'divider' && j === sec.items.length - 1 ? 'none' : '' }} className="dashboard-list-item">
                      <a href="#" onClick={(e) => { e.preventDefault(); if (item.name === 'فواتير المبيعات') onNavigate('sales-invoices'); else if (item.name === 'مرتجع المبيعات' || item.name === 'مرتجع/مردود') onNavigate('sales-invoices-return'); else if (item.name === 'عروض الأسعار') onNavigate('quotations-search'); else if (item.name === 'طلبات العملاء') onNavigate('customer-orders-list'); else if (item.name === 'الأصناف') onNavigate('items-main'); else if (item.name === 'أوامر الصرف المخزني') onNavigate('inventory-issue-search'); else if (item.name === 'فاتورة مبيعات' || !item.subItems) onNavigate('pos'); }}>
                        {item.icon ? item.icon : <ChevronLeft size={14} className="dashboard-icon" color="#3c8dbc" />} 
                        <span style={{ marginRight: '10px' }}>{item.name}</span>
                      </a>

                      {/* Nested Submenu for section items too! */}
                      {item.subItems && (
                        <div className="dashboard-submenu">
                          <div className="dashboard-submenu-title">{item.name}</div>
                          <ul>
                            {item.subItems.map((sub, subIdx) => (
                              <li key={subIdx}>
                                <a href="#" onClick={(e) => { 
                                  e.preventDefault(); 
                                  if (item.name === 'فواتير المبيعات' && (sub.name === 'بحث' || sub.name === 'عرض القائمة' || sub.name === 'إستعراض')) {
                                    onNavigate('sales-invoices');
                                  } else if (sub.name === 'مرتجع المبيعات النقدية / بدون فاتورة' || sub.name === 'مرتجع المبيعات النقدية') {
                                    onNavigate('cash-return');
                                  } else if (item.name.includes('مرتجع') && sub.name === 'عرض القائمة') {
                                    onNavigate('returns-list');
                                  } else if (sub.name.includes('مرتجع المبيعات')) {
                                    onNavigate('sales-invoices-return');
                                  } else if (item.name === 'عروض الأسعار' && sub.name === 'عرض القائمة') {
                                    onNavigate('quotations-list');
                                  } else if (item.name === 'عروض الأسعار' && sub.name === 'بحث') {
                                    onNavigate('quotations-search');
                                  } else if (item.name === 'عروض الأسعار' && sub.name === 'جديد') {
                                    onNavigate('quotations-new');
                                  } else if (item.name === 'عروض الأسعار' && sub.name === 'إستعراض') {
                                    onNavigate('quotations-browse');
                                  } else if (item.name === 'طلبات العملاء' && sub.name === 'بحث') {
                                    onNavigate('customer-orders-search');
                                  } else if (item.name === 'طلبات العملاء' && (sub.name === 'عرض القائمة' || sub.name === 'إستعراض')) {
                                    onNavigate('customer-orders-list');
                                  } else if (item.name === 'طلبات العملاء' && sub.name === 'جديد') {
                                    onNavigate('customer-orders-new');
                                  } else if (item.name === 'العملاء' && sub.name === 'بحث') {
                                    onNavigate('customers-search');
                                  } else if (item.name === 'العملاء' && sub.name === 'عرض القائمة') {
                                    onNavigate('customers-list');
                                  } else if (item.name === 'العملاء' && sub.name === 'إستعراض') {
                                    onNavigate('customers-browse');
                                  } else if (item.name === 'العملاء' && sub.name === 'استلام مبلغ من عميل') {
                                    onNavigate('receipt-voucher-new');
                                  } else if (item.name === 'العملاء' && sub.name === 'عمليات أخرى') {
                                    onNavigate('customers-other-ops');
                                  } else if (item.name === 'الأصناف' && sub.name === 'بحث') {
                                    onNavigate('items-search');
                                  } else if (item.name === 'الأصناف' && sub.name === 'عرض القائمة') {
                                    onNavigate('items-list');
                                  } else if (item.name === 'الأصناف' && sub.name === 'إستعراض') {
                                    onNavigate('items-browse');
                                  } else if (item.name === 'الأصناف' && sub.name === 'الخدمات') {
                                    onNavigate('items-services');
                                  } else if (item.name === 'الأصناف' && sub.name === 'تغيير كلفة الأصناف') {
                                    onNavigate('items-cost-change');
                                  } else if (sub.name === 'تسوية كلفة المخزون') {
                                    onNavigate('items-cost-change');
                                  } else if (item.name === 'أوامر الصرف المخزني' && sub.name === 'بحث') {
                                    onNavigate('inventory-issue-search');
                                  } else if (item.name === 'أوامر الصرف المخزني' && sub.name === 'جديد') {
                                    onNavigate('inventory-issue-search'); // Default to search for now, or to a new screen later
                                  } else if (sub.name.includes('فاتورة مبيعات') || (item.name === 'فواتير المبيعات' && sub.name === 'جديد') || sub.name === 'فاتورة مبيعات - كاشير' || sub.name === 'طلب مبيعات - كاشير') {
                                    onNavigate('pos');
                                  }
                                }}>
                                  <span style={{ marginLeft: '10px' }}>{sub.name}</span>
                                  {sub.icon}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
