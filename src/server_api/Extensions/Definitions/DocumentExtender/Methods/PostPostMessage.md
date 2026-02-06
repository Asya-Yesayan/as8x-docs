---
title: PostPostMessage
nav_exclude: true
---

# DocumentExtender.PostPostMessage(Document, PostMessageEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [PostPostMessage](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/DocExtenderEvents/PostPostMessage.html)

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostPostMessage(Document sender, 
                                    PostMessageEventArgs args)
```

PostMessage մեթոդը կանչվում է միջուկի կողմից` մի փաստաթղթից մյուն ծրագրային հաղորդագրություն([SendMessage](../../../../Definitions/Document/Methods/SendMessage.md)) ուղարկելիս՝ [PostMessage](../../../../Definitions/Document/Methods/PostMessage.md) մեթոդի կանչից հետո։

