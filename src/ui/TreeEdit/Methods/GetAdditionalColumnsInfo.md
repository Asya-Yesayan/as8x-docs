---
title: GetAdditionalColumnsInfo
parent: "Մեթոդներ"
grand_parent: "TreeEdit"
---

# TreeEdit.GetAdditionalColumnsInfo() մեթոդ

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual List<TreeEditColumnInfo> GetAdditionalColumnsInfo()
```

Սահմանում է ծառ-տեղեկատուում ցուցադրվող լրացուցիչ սյուների նկարագրությունը։

Մեթոդը չմշակելու դեպքում ծառ-տեղեկատուում ցուցադրվում են միայն ստանդարտ «Կոդ» և «Անվանում» սյուները:

**Օրինակ**

```c#
public class StructuralSectionsModel : TreeElementModel
{
    // ծառի տողի լրացուցիչ դաշտ, որը անհրաժեշտ է ցուցադրել ծառ-տեղեկատուում
    public bool IsClosed { get; set; }
}

[TreeEdit("DprtTree")]
public class StructuralSections : TreeEdit<StructuralSectionsModel>
{
    public override List<TreeEditColumnInfo> GetAdditionalColumnsInfo()
    {
        // ստանդարտ սյուներին ավելացված է "Փակ" գլխագրով սյուն, որը ցուցադրում է IsClosed դաշտի արժեքը
        return
        [
            new() { Header = Resources.Closed, Name = nameof(StructuralSectionsModel.IsClosed) },
        ];
    }
}
```
