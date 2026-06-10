---
title: GetNode
parent: "Մեթոդներ"
grand_parent: "TreeEdit"
---

# TreeEdit.GetNode մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetNode(int)](#treeeditgetnodeint-մեթոդ) | Վերադարձնում է ծառի տողը՝ ըստ փաստաթղթի ներքին նույնականացման համարի (isn)։ |
| [GetNode(string)](#treeeditgetnodestring-մեթոդ) | Վերադարձնում է ծառի տողը՝ ըստ տողի բանալու (key)։ |

### TreeEdit.GetNode(int) մեթոդ

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
TreeElementModel GetNode(int isn)
```

Վերադարձնում է ծառի տողը՝ ըստ փաստաթղթի ներքին նույնականացման համարի (isn)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| isn | int | - | Փաստաթղթի ներքին նույնականացման համարը (isn), որով որոնվում է ծառի տողը։ |

**Վերադարձնում է**

Տրված ներքին նույնականացման համարով ծառի տողը՝ **TreeElementModel** տիպով։ Նշված համարով տողի բացակայության դեպքում վերադարձնում է **null**։

**Օրինակ**

```c#
public override void Edit()
{
    // ընթացիկ տողի փաստաթղթի isn-ի ստացում
    int isn = this.Panel.GetCurrentItem().ISN;
    // ծառի տողի ստացում՝ ըստ փաստաթղթի isn-ի
    var node = this.GetNode(isn);
    if (node != null)
    {
        // ստացված տողի հետ աշխատանք
        var dataView = (TPlaceView)ViewHelper.CreateDataView(nameof(TPlaceView));
        dataView.Parameters.ParentCode = node.Key;
        dataView.ShowBrowser(true, suppressDialog: true);
    }
}
```

### TreeEdit.GetNode(string) մեթոդ

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
TreeElementModel GetNode(string key)
```

Վերադարձնում է ծառի տողը՝ ըստ տողի բանալու (key)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| key | string | - | Ծառի տողի բանալին (key), որով որոնվում է տողը։ |

**Վերադարձնում է**

Տրված բանալիով ծառի տողը՝ **TreeElementModel** տիպով։ Նշված բանալիով տողի բացակայության դեպքում վերադարձնում է **null**։

**Օրինակ**

```c#
private void ShowTransitions(object sender, ItemClickEventArgs e)
{
    // ընթացիկ տողի կոդի ստացում
    string transCode = this.Panel.GetCurrentItem().Key;
    // ծառի տողի ստացում՝ ըստ բանալու
    var node = this.GetNode(transCode);
    if (node != null)
    {
        // ստացված տողի անվանումը ցուցադրելու համար օգտագործումն
        var dataView = (AppTrans)ViewHelper.CreateDataView(nameof(AppTrans));
        dataView.Caption += $" ({node.Key} - {node.Comment})";
        dataView.Parameters.Trans = node.Key;
        dataView.ShowBrowser(true, null, true);
    }
}
```
