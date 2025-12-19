---
layout: page
title: "BeforeImportProcessingEventArgs դաս" 
---

Այս դասը օգտագործվում է [Document.BeforeImportProcessing](../../definitions/document/BeforeImportProcessing.md) մեթոդում։

## Հատկություններ

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| CancelStore | bool | false | Փաստաթղթի Import [ռեժիմով](../StoreMode.md) գրանցման ու պարամետրի false արժեքի դեպքում [գրանցումը](../../definitions/document/Store.md) չեղարկվում է` տրանզակցիայի բարեհաջող ավարտով, հակառակ դեպքում գրանցումը շարունակվում է։ |