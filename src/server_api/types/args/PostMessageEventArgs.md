---
layout: page
title: "PostMessageEventArgs դաս" 
---

Այս դասը օգտագործվում է [Document.PostMessage](../../definitions/document/Methods/PostMessage.md) մեթոդում։

## Հատկություններ

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| Sender | Document | - | Հաղորդագրությունը ուղարկող փաստաթղթի օբյեկտ։ |
| Message | string | - | ուղարկված հաղորդագրության տեքստը։ |
| DocumentCheckLevel | [DocumentCheckLevel](../DocumentCheckLevel.md) | DocumentCheckLevel.None | Փաստաթղթի գրանցման [ստուգման մակարդակը](../DocumentCheckLevel.md): |
| StoreDocument | bool | true | Հաղորդագրությունը ուղարկող փաստաթղթի գրանցման հայտանիշ։ |