---
title: DefaultComment(DefaultCommentEventArgs)
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.DefaultComment(DefaultCommentEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [DefaultComment](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/DefaultComment.html)

**Դաս՝** [Document](../Document.md)

```c#
public virtual Task DefaultComment(DefaultCommentEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ փաստաթղթի [թղթապանակի տարր](../../../Types/FolderElement.md) ստեղծելուց։

Նախատեսված է [թղթապանակի տարրի](../../../Types/FolderElement.md) մեկնաբանության լռությամբ արժեքի սահմանման համար, որը գրանցվում է [FOLDERS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Folders.html) աղյուսակում։ 

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [DefaultCommentEventArgs](../../../Types/Args/DefaultCommentEventArgs.md) | - | [DefaultCommentEventArgs](../../../Types/Args/DefaultCommentEventArgs.md) դասի օբյեկտ։ |

