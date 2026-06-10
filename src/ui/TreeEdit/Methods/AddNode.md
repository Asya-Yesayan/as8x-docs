---
title: AddNode
parent: "Մեթոդներ"
grand_parent: "TreeEdit"
---

# TreeEdit.AddNode(TreeElementModel node) մեթոդ

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
void AddNode(TreeElementModel node)
```

Ավելացնում է նոր տող ծառի տողերի հավաքածուում։ Մեթոդը ստեղծում է `R` տիպի նոր օբյեկտ՝ պատճենելով փոխանցված **TreeElementModel** օբյեկտի դաշտերը (Branch, Comment, Depart, DocName, EComment, ISN, Key, Leaf, Path, Parent, TreeId), և ավելացնում է ստեղծված տողը հավաքածուին։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| node | TreeElementModel | - | Ծառի տող ներկայացնող օբյեկտը, որը պետք է ավելացվի։ |

**Օրինակ**

```c#
// ծառի տողի մոդելի սահմանում՝ ստանդարտ դաշտերին ավելացված ստորաբաժանման փակ լինելու հայտանիշով
public class StructuralSectionsModel : TreeElementModel
{
    public bool IsClosed { get; set; }
}

public override IList<StructuralSectionsModel> LoadRows()
{
    var rows = new List<StructuralSectionsModel>();
    foreach (var element in Settings.ServiceProvider.GetRequiredService<TreeService>().GetTreeElements(this.Name).Values)
    {
        // նոր տողի ավելացում ծառի հավաքածուում՝ ստանդարտ դաշտերի պատճենումով
        AddNode(element);
        // ավելացված տողի վերցնում, լրացուցիչ դաշտի արժեքավորում և ավելացում վերադարձվող ցուցակում
        var row = (StructuralSectionsModel)this.GetNode(element.ISN);
        var document = DocumentHelper.LoadFromFolder(this.Name, element.Key);
        row.IsClosed = document != null && (bool)document["IsClosed"];
        rows.Add(row);
    }
    return rows;
}
```
