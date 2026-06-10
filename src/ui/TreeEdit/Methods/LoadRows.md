---
title: LoadRows
parent: "Մեթոդներ"
grand_parent: "TreeEdit"
---

# TreeEdit.LoadRows() մեթոդ

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public abstract IList<R> LoadRows()
```

Բեռնում և վերադարձնում է ծառի տողերի ցուցակը։

Մեթոդը աբստրակտ է. ժառանգ դասերը պետք է մշակեն այն՝ ծառի տողերի բեռնման համար ընտրված տվյալների աղբյուրից (օրինակ՝ տվյալների բազայից կամ ծառայության պատասխանից)։

**Վերադարձնում է**

Ծառի տողերի ցուցակը՝ `R` տիպի օբյեկտներով, որոնք ժառանգված են **TreeElementModel**-ից։

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
    // ստանդարտ ծառի հանգույցների ստացում
    var treeElements = Settings.ServiceProvider.GetRequiredService<TreeService>().GetTreeElements(this.Name);
    // ծառի յուրաքանչյուր հանգույցի ավելացում
    foreach (var element in treeElements.Values)
    {
        // ընթացիկ հանգույցի փաստաթղթի բեռնում թղթապանակից՝ լրացուցիչ դաշտի արժեքի ստացման համար
        var document = DocumentHelper.LoadFromFolder(this.Name, element.Key);
        rows.Add(new StructuralSectionsModel
        {
            // ... ստանդարտ դաշտերի լրացում
            IsClosed = document != null && (bool)document["IsClosed"],
        });
    }
    return rows;
}
```
