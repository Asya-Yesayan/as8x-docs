---
layout: page
title: "ASException"
parent: "Exceptions"
has_toc: false
---

# ASException նկարագրություն

## Ներածություն

ASException դասը նախատեսված է UI-ի սխալները ներկայացնելու համար։ Ժառանգվում է **System.Exception**-ից և հանդիսանում է UI-ում առաջացող սխալների ընդհանուր բազային դասը։

Օգտագործվում է, երբ անհրաժեշտ է UI-ին փոխանցել սխալի մանրամասներ՝ ցուցադրելու համար (հաղորդագրություն, գլխագիր, պատկեր, սխալի կոդ, տողի համար, դաշտի անուն)։ Սխալի օբյեկտից UI-ն ձևավորում է համապատասխան սխալի պատուհանը։

Օգտագործվում է UI-ի կոդից (պատուհանի վալիդացիա, օգտագործողի սխալ գործողություն, UI-ի վիճակի անհամապատասխանություն)։ Սերվերի կողմի սխալների համար օգտագործվում է [RESTException](RESTException.md)։

## Կոնստրուկտորներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ASException()](ASException/Methods/ASException.md#asexceptionasexception-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ առանց սխալի հաղորդագրության։ |
| [ASException(string)](ASException/Methods/ASException.md#asexceptionasexceptionstring-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ։ |
| [ASException(string, Exception)](ASException/Methods/ASException.md#asexceptionasexceptionstring-exception-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ և ներքին սխալով։ |
| [ASException(string, int, string)](ASException/Methods/ASException.md#asexceptionasexceptionstring-int-string-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, պատկերի id-ով և գլխագրով։ |
| [ASException(string, string, string)](ASException/Methods/ASException.md#asexceptionasexceptionstring-string-string-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, գլխագրով և դաշտի անունով։ |
| [ASException(string, string, int, string)](ASException/Methods/ASException.md#asexceptionasexceptionstring-string-int-string-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, գլխագրով, սխալի կոդով և դաշտի անունով։ |
| [ASException(string, string, string, int)](ASException/Methods/ASException.md#asexceptionasexceptionstring-string-string-int-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, գլխագրով, ցուցակի անունով և տողի համարով։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ErrorCode](ASException/Properties/ErrorCode.md) | Վերադարձնում կամ նշանակում է սխալի կոդը։ |
| [Field](ASException/Properties/Field.md) | Վերադարձնում կամ նշանակում է սխալի հետ կապված դաշտի ներքին անունը (կոդ)։ |
| [Icon](ASException/Properties/Icon.md) | Վերադարձնում կամ նշանակում է սխալի պատուհանում ցուցադրվող պատկերի տիպի id-ն։ |
| [RowNumber](ASException/Properties/RowNumber.md) | Վերադարձնում կամ նշանակում է սխալի հետ կապված ցուցակի տողի համարը։ |
| [Title](ASException/Properties/Title.md) | Վերադարձնում կամ նշանակում է սխալի պատուհանի գլխագիրը։ |
