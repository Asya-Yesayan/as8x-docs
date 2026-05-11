---
title: CreateDialog
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.CreateDialog(bool isRefresh) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual DataViewDialogWindow CreateDialog(bool isRefresh)
```

Այս մեթոդը նախատեսված է դիտելու ձևի նախնական ֆիլտրման դիալոգի ստեղծման և վերադարձման համար։ Ստեղծված դիալոգը անհրաժեշտ է ցուցադրել ApplyDialog մեթոդի միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| isRefresh | bool | - | Պարամետրը վերադարձնում է, արդյոք նախնական ֆիլտրման դիալոգը բացվել է դիտելու ձևի սկզբնական բացման պահին, թե ծրագրի Toolbar-ի **«Փոխել պարամետրերը»** (Ctrl + G) կոճակի միջոցով։ Եթե դիալոգը բացվել է «Փոխել պարամետրերը» կոճակով, անհրաժեշտ է դիալոգի control-ներին վերագրել վերջին բացման ժամանակ ընտրված արժեքները։ |

Օրինակ

```c#
public override DataViewDialogWindow CreateDialog(bool isRefresh)
{
    var dialog = new DataViewDialogWindow(this)
    {
        Caption = this.Caption,
        Name = this.Name
    };

    var userId = dialog.AddDropDownControl(nameof(this.Parameters.SUID), "Օգտագործող", new DropDown.Tree(TreeId.Users), storeValue: false);

    if (!Settings.LoginService.IsAdmin)
    {
        userId.Code = Settings.LoginService.Suid.ToString();
        userId.IsReadOnly = true;
    }

    if (isRefresh)
    {
        userId.Code = this.Parameters.SUID.ToString();
    }
    return dialog;
}
```

