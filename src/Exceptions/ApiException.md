---
layout: page
title: "ApiException"
parent: "Exceptions"
has_toc: false
---

# ApiException նկարագրություն

## Ներածություն

ApiException դասը նախատեսված է client-ում սերվերից ստացված սխալները ներկայացնելու համար։ Ժառանգվում է **System.Exception**-ից և պարունակում է HTTP հարցումի սխալին վերաբերող ամբողջական տվյալները՝ HTTP ստատուս կոդը, սերվերի կողմից ձևավորված սխալի տեքստը, սերվերի stack trace-ը, ինչպես նաև փաստաթղթի կոնտեքստին վերաբերող դաշտեր ([FieldName](ApiException/Properties/FieldName.md), [Report](ApiException/Properties/Report.md))։

ApiException-ը client-ի կողմից առաջացվում է API-ի կանչի ընթացքում, երբ սերվերը վերադարձնում է սխալի ստատուս կոդ։ Սերվերի կողմից առաջացված [RESTException](RESTException.md)-ի հատկությունները սերիալիզացվում են և client-ում ձևավորվում են որպես ApiException՝ սխալի շարունակական մշակման համար։

[Visible](ApiException/Properties/Visible.md) **false** արժեքի դեպքում սխալը UI-ին չի ցուցադրվում (սերվերի [InvisibleException](InvisibleException.md)-ի համարժեքն է client-ում)։ [IsRestException](ApiException/Properties/IsRestException.md) **true** արժեքի դեպքում սխալը սերվերի կողմից առաջացված **RESTException** է, **false** արժեքի դեպքում՝ ընդհանուր HTTP սխալ։

## Կոնստրուկտորներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ApiException(string, bool)](ApiException/Methods/ApiException.md#apiexceptionapiexceptionstring-bool-կոնստրուկտոր) | Ստեղծում է **ApiException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ։ |
| [ApiException(string, Exception, bool)](ApiException/Methods/ApiException.md#apiexceptionapiexceptionstring-exception-bool-կոնստրուկտոր) | Ստեղծում է **ApiException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ և ներքին սխալով։ |
| [ApiException(string, int, string, Exception, bool)](ApiException/Methods/ApiException.md#apiexceptionapiexceptionstring-int-string-exception-bool-կոնստրուկտոր) | Ստեղծում է **ApiException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, HTTP ստատուս կոդով, սերվերի պատասխանով և ներքին սխալով։ |
| [ApiException(ErrorResponse, int, string, bool)](ApiException/Methods/ApiException.md#apiexceptionapiexceptionerrorresponse-int-string-bool-կոնստրուկտոր) | Ստեղծում է **ApiException** դասի օբյեկտ՝ **ErrorResponse** մոդելից վերականգնելով սխալի հաղորդագրությունը և սխալի կոդը։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Code](ApiException/Properties/Code.md) | Վերադարձնում է սխալի կոդը։ |
| [DocumentExceptionType](ApiException/Properties/DocumentExceptionType.md) | Վերադարձնում կամ նշանակում է փաստաթղթի սխալի տիպը, եթե սխալը կապված է փաստաթղթի մշակման հետ։ |
| [ErrorDetails](ApiException/Properties/ErrorDetails.md) | Վերադարձնում կամ նշանակում է սերվերի կողմից վերադարձված սխալի մանրամասների ցուցակը։ |
| [FieldName](ApiException/Properties/FieldName.md) | Վերադարձնում կամ նշանակում է փաստաթղթի դաշտի (Grid կամ Requisite) ներքին անունը (կոդ)։ |
| [InnerMessage](ApiException/Properties/InnerMessage.md) | Վերադարձնում կամ նշանակում է ներքին սխալի լրացուցիչ հաղորդագրությունը։ |
| [IsRestException](ApiException/Properties/IsRestException.md) | Վերադարձնում կամ նշանակում է, արդյոք սխալը սերվերի կողմից առաջացված [RESTException](RESTException.md) է։ |
| [Report](ApiException/Properties/Report.md) | Վերադարձնում կամ նշանակում է հաշվետվության պահեստավորման տվյալները։ |
| [Response](ApiException/Properties/Response.md) | Վերադարձնում է սերվերից ստացված հարցումի պատասխանի ամբողջական տեքստը։ |
| [ServiceStackTrace](ApiException/Properties/ServiceStackTrace.md) | Վերադարձնում կամ նշանակում է սերվերի կողմից առաջացած սխալի stack trace-ը։ |
| [StatusCode](ApiException/Properties/StatusCode.md) | Վերադարձնում է սերվերի կողմից վերադարձված HTTP ստատուս կոդը։ |
| [Title](ApiException/Properties/Title.md) | Վերադարձնում կամ նշանակում է սխալի պատուհանի գլխագիրը։ |
| [Visible](ApiException/Properties/Visible.md) | Վերադարձնում կամ նշանակում է, արդյոք սխալը պետք է ցուցադրվի օգտագործողին։ |
