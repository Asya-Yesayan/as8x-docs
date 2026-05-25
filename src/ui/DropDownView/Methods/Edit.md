---
title: Edit
parent: "Մեթոդներ"
grand_parent: "DropDownView"
---

# DropDownView.Edit(ref string value, ref string comment, Window owner, double top, double left) մեթոդ

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual bool Edit(ref string value,
                        ref string comment,
                        Window owner,
                        double top,
                        double left)
```

Սահմանում է բացվող ցուցակի դիտելու ձևից ընտրված արժեքի խմբագրման գործողությունը։

Մեթոդը չմշակելու դեպքում առաջանում է **NotImplementedException** տիպի սխալ։

Գործողության հասանելիությունը կարգավորվում է [EditSupported](../Properties/EditSupported.md) և [EditEnabled](../Properties/EditEnabled.md) հատկությունների միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | string | - | Խմբագրվող արժեքի կոդը։ Գործողության ավարտից հետո կարող է փոփոխվել թարմացված արժեքով։ |
| comment | string | - | Խմբագրվող արժեքի մեկնաբանությունը։ Գործողության ավարտից հետո կարող է փոփոխվել։ |
| owner | Window | - | Գործողությունը բացող պատուհանը։ |
| top | double | - | Popup պատուհանի վերին կողմի կոորդինատը էկրանի նկատմամբ։ |
| left | double | - | Popup պատուհանի ձախ կողմի կոորդինատը էկրանի նկատմամբ։ |

**Վերադարձնում է**

**true**, եթե արժեքը հաջողությամբ խմբագրվել է, հակառակ դեպքում՝ **false**։

**Օրինակ**

```c#
public override bool EditSupported => true;

public override bool Edit(ref string value, ref string comment, Window owner, double top, double left)
{
    bool result = false;
    var skillDoc = (Skill)DocumentHelper.LoadFromFolder(FolderIdSE.Skill, value);
    if (!Settings.HostingEnvironment.NavigatorPanel.GetAvailableDocumentsNames().Contains(DocumentNameSE.Job))
    {
        result = skillDoc.ShowDialog(true, owner, top, left);
    }
    else
    {
        if (skillDoc.ShowDialog(false, owner, top, left))
        {
            value = skillDoc.Code;
            comment = skillDoc.Name;
        }
    }
    return result;
}
```
