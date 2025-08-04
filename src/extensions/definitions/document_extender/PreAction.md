---
title: DocumentExtender.PreAction(Document, ActionEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPreAction

```c#
public virtual Task PreAction(Document sender, ActionEventArgs args)
```

PreAction մեթոդը կանչվում է միջուկի կողմից՝ փաստաթղթի պահպանման ժամանակ ([Store](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/Store.html)) տրանզակցիայի մեջ` [Action](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Action.html) իրադարձությունից առաջ։

