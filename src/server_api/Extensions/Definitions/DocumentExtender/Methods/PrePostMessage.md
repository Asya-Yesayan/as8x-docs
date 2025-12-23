---
title: DocumentExtender.PrePostMessage(Document, PostMessageEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [PrePostMessage](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/DocExtenderEvents/PrePostMessage.html)

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PrePostMessage(Document sender, 
                                   PostMessageEventArgs args)
```

PostMessage մեթոդը կանչվում է միջուկի կողմից` մի փաստաթղթից մյուն ծրագրային հաղորդագրություն([SendMessage](../../../../Definitions/Document/Methods/SendMessage.md)) ուղարկելիս՝ [PostMessage](../../../../Definitions/Document/Methods/PostMessage.md) մեթոդի կանչից առաջ։

