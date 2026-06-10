---
title: ConfigureFromDefinition
parent: "Մեթոդներ"
grand_parent: "TreeEdit"
---

# TreeEdit.ConfigureFromDefinition(string treeName) մեթոդ

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public void ConfigureFromDefinition(string treeName)
```

Սահմանում է ծառ-տեղեկատուի վարքագիծը ու կարգավորումները՝ տրված ներքին անունով ծառի սահմանման (**TreeDefinition**) հիման վրա։ Մեթոդը արժեքավորում է դասի Name, Definition, CodeLength, Description, PathLastSeparator, UpperCase, AllowAddNode, AllowDelete, AllowEdit, AllowExport, AllowHistory, AllowView, AllowedDocumentsToAdd, AllowCopy, Caption, NodeCaption և DisableDocumentFunctions հատկությունները՝ ստացված սահմանումից և ընթացիկ լեզվից։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| treeName | string | - | Ծառի ներքին անունը։ |

**Օրինակ**

```c#
[TreeEdit("ApTrans")]
public class ApTransTreeEdit : TreeEdit
{
    public ApTransTreeEdit()
    {
        // ծառ-տեղեկատուի վարքագծի կարգավորում՝ "ApTrans" ներքին անունով ծառի սահմանման հիման վրա
        ConfigureFromDefinition("ApTrans");
    }
}
```
