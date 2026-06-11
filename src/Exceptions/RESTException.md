---
layout: page
title: "RESTException"
parent: "Exceptions"
has_toc: false
---

# RESTException նկարագրություն

## Ներածություն

RESTException դասը նախատեսված է սերվերում օգտագործողի սխալների հետևանքով առաջացող սխալները արտահայտելու համար։ Ժառանգվում է **System.Exception**-ից և պարունակում է HTTP ստատուս կոդը, սխալի կոդը և գլխագիրը։

## Լոգավորում

RESTException տեսակի սխալները և նշված դասից ժառանգ հանդիսացող սխալները ([InvisibleException](InvisibleException.md), [DocumentException](DocumentException.md)) լոգավորվում են միայն եթե api հարցման **logRestExceptions** header-ի արժեքը **true** է։

**logRestExceptions** header-ի արժեքը նշանակվում է ավտոմատ 4x, 8x ծրագրերի (ՀԾ-Բանկ, ՀԾ-Ձեռնարկություն, ՀԾ-ՄՌԿ) համակարգերի **«Դրույթներ»** -> **«Ծրագրավորողի գործիքներ»** -> **«Լոգավորել RESTException-ները»** նշիչի դրված լինելու դեպքում։

**logRestExceptions** **true** արժեքի դեպքում կամ եթե սխալի ստատուս կոդը մեծ է 500-ից, սխալը լոգավորվում է **Error** լոգավորման մակարդակով, հակառակ դեպքում՝ **Debug** լոգավորման մակարդակով։

## Կոնստրուկտորներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [RESTException()](RESTException/Methods/RESTException.md#restexceptionrestexception-կոնստրուկտոր) | Ստեղծում է **RESTException** դասի օբյեկտ առանց սխալի հաղորդագրության։ |
| [RESTException(string, string, string)](RESTException/Methods/RESTException.md#restexceptionrestexceptionstring-string-string-կոնստրուկտոր) | Ստեղծում է **RESTException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, սխալի կոդով և գլխագրով։ |
| [RESTException(string, Exception, string)](RESTException/Methods/RESTException.md#restexceptionrestexceptionstring-exception-string-կոնստրուկտոր) | Ստեղծում է **RESTException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, ներքին սխալով և գլխագրով։ |
| [RESTException(string, HttpStatusCode, string, string)](RESTException/Methods/RESTException.md#restexceptionrestexceptionstring-httpstatuscode-string-string-կոնստրուկտոր) | Ստեղծում է **RESTException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ և HTTP ստատուս կոդով։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Code](RESTException/Properties/Code.md) | Վերադարձնում կամ նշանակում է սխալի կոդը։ |
| [StatusCode](RESTException/Properties/StatusCode.md) | Վերադարձնում կամ նշանակում է HTTP ստատուս կոդը, որով հարցումի պատասխանը կվերադարձվի։ |
| [Title](RESTException/Properties/Title.md) | Վերադարձնում կամ նշանակում է սխալի պատուհանի գլխագիրը։ |

