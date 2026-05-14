---
title: GetLayoutItem
nav_exclude: true
---

# DialogWindow.GetLayoutItem մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetLayoutItem(Control)](#dialogwindowgetlayoutitemcontrol-մեթոդ) | Վերադարձնում է տրված դաշտին համապատասխանող դասավորման տարրը (LayoutItem)։ |
| [GetLayoutItem(string)](#dialogwindowgetlayoutitemstring-մեթոդ) | Վերադարձնում է տրված ներքին անունով դաշտին համապատասխանող դասավորման տարրը (LayoutItem)։ |

### DialogWindow.GetLayoutItem(Control) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected LayoutItemWithRequired GetLayoutItem(Control control);
```

Վերադարձնում է տրված դաշտին համապատասխանող դասավորման տարրը (**LayoutItemWithRequired**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| control | Control | — | Դաշտը, որի դասավորման տարրը պետք է վերադարձվի։ |


### DialogWindow.GetLayoutItem(string) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected LayoutItemWithRequired GetLayoutItem(string name);
```

Վերադարձնում է տրված ներքին անունով դաշտին համապատասխանող դասավորման տարրը (LayoutItem)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |

