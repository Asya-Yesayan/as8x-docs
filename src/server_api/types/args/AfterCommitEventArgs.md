---
layout: page
title: "AfterCommitEventArgs դաս" 
---

Այս դասը օգտագործվում է [Document.AfterCommit](../../definitions/Document/Methods/AfterCommit.md) մեթոդում։

## Հատկություններ

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| ActiveTrans | bool | - | [Document.AfterCommit](../../definitions/Document/Methods/AfterCommit.md) մեթոդի կանչի ժամանակ ակտիվ տրանզակցիայի առկայության հայտանիշ։ |
| Comment | string | - | [Document.AfterCommit](../../definitions/Document/Methods/AfterCommit.md) մեթոդի կանչի ժամանակ սխալ առաջանալու դեպքում [փաստաթղթի պատմությունում](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) գրանցվող հաղորդագրությունը։ Հաղորդագրությունը կիսվում է 64 երկարությամբ ենթահաղորդագրությունների և յուրաքանչյուրի համար ստեղծվում է M կոդով նոր գրառում։ Պարամետրի դատարկ արժեքի դեպքում [փաստաթղթի պատմությունում](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) գրառում չի ավելացվում: |
