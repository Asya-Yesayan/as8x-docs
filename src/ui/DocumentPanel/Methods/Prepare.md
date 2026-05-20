---
title: Prepare
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---
# DocumentPanel&lt;T&gt;.Prepare(SupportDocumentArgs) մեթոդ
## Նկարագիր
**Դաս՝** [DocumentPanel](../DocumentPanel.md)
```c#
public void Prepare(SupportDocumentArgs args)
```
Կարգավորում է փաստաթղթի վահանակին ուղեկցող կոճակների (տպման, ստեղծել պատճեն, պատմություն և այլն) վիճակը։ Տպման կոճակները ([AllowPrint](AllowPrint.md) մեթոդի **true** արժեքի դեպքում) հասանելի են, եթե փաստաթուղթը արդեն պահպանված է կամ [AllowPrintOnNew](AllowPrintOnNew.md) մեթոդը վերադարձնում է **true**։ Պատճենման կոճակը ([AllowCopy](AllowCopy.md) մեթոդի **true** արժեքի դեպքում) հասանելի է միայն պահպանված փաստաթղթի համար։ Պատմության կոճակը հասանելի է պահպանված փաստաթղթի և համապատասխան թույլատվության դեպքում։

**Պարամետրեր**
| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | SupportDocumentArgs | — | Փաստաթղթի օժանդակ գործողությունների կոճակների կարգավորումների օբյեկտը։ |
