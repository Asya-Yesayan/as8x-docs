---
title: AddModalGridControl
nav_exclude: true
---

# DialogWindow.AddModalGridControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddModalGridControl(string, string, IDropDownView)](#dialogwindowaddmodalgridcontrolstring-string-idropdownview-մեթոդ) | Երկխոսության պատուհանում ավելացնում է մոդալ աղյուսակ։ |
| [AddModalGridControl(LayoutGroup, string, string, IDropDownView)](#dialogwindowaddmodalgridcontrollayoutgroup-string-string-idropdownview-մեթոդ) | Նշված դասավորման խմբում ավելացնում է մոդալ աղյուսակ։ |

### DialogWindow.AddModalGridControl(string, string, IDropDownView) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public ModalGridControl AddModalGridControl(string name, string caption, IDropDownView dropDownView);
```

Երկխոսության պատուհանում ավելացնում է մոդալ աղյուսակ (**ModalGridControl**)՝ տրված դիտելու ձևի (**IDropDownView**) հիման վրա։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| dropDownView | IDropDownView | — | Դիտելու ձևի նկարագրությունը, որի հիման վրա ձևավորվում է աղյուսակի կառուցվածքը։ |

**Վերադարձնում է**

Ստեղծված **ModalGridControl** դաշտը։

### DialogWindow.AddModalGridControl(LayoutGroup, string, string, IDropDownView) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public ModalGridControl AddModalGridControl(LayoutGroup container, string name, string caption, IDropDownView dropDownView);
```

Նշված դասավորման խմբում ավելացնում է մոդալ աղյուսակ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| dropDownView | IDropDownView | — | Դիտելու ձևի նկարագրությունը։ |

**Վերադարձնում է**

Ստեղծված **ModalGridControl** դաշտը։
