---
title: PostMessage
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.PostMessage(PostMessageEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [PostMessage](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/PostMessage.html)

**Դաս՝** [Document](../Document.md)

```c#
public virtual Task PostMessage(PostMessageEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից, երբ կից փաստաթղթից այս փաստաթղթին ուղարկվում է ծրագրային հաղորդագրություն [SendMessage](SendMessage.md) ֆունկցիայի միջոցով, դրանից հետո այս փաստաթուղթը գրանցվում է տվյալների պահոցում։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [PostMessageEventArgs](../../../Types/Args/PostMessageEventArgs.md) | - | [PostMessageEventArgs](../../../Types/Args/PostMessageEventArgs.md) դասի օբյեկտ։ |
