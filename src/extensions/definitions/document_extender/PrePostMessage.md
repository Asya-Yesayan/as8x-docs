---
title: DocumentExtender.PrePostMessage(Document, PostMessageEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [PrePostMessage](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/DocExtenderEvents/PrePostMessage.html)

```c#
public virtual Task PrePostMessage(Document sender, 
                                   PostMessageEventArgs args)
```

PostMessage մեթոդը կանչվում է միջուկի կողմից` մի փաստաթղթից մյուն ծրագրային հաղորդագրություն([SendMessage](../../../server_api/definitions/document/SendMessage.md)) ուղարկելիս՝ [PostMessage](../../../server_api/definitions/document/PostMessage.md) մեթոդի կանչից առաջ։

