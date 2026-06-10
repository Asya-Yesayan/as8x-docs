---
title: TreeEdit
parent: "Մեթոդներ"
grand_parent: "TreeEdit"
---

# TreeEdit.TreeEdit() կոնստրուկտոր

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public TreeEdit()
```

Ստեղծում է TreeEdit դասի նոր օբյեկտ։

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
