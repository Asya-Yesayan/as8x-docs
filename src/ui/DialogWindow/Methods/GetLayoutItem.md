---
title: GetLayoutItem
nav_exclude: true
---

# DialogWindow.GetLayoutItem մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetLayoutItem(Control)](#dialogwindowgetlayoutitemcontrol-մեթոդ) | Վերադարձնում է տրված դաշտին համապատասխանող դասավորման տարրը։ |
| [GetLayoutItem(string)](#dialogwindowgetlayoutitemstring-մեթոդ) | Վերադարձնում է տրված ներքին անունով դաշտին համապատասխանող դասավորման տարրը։ |

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

**Վերադարձնում է**

Դաշտին համապատասխանող **LayoutItemWithRequired** տարրը, կամ **null**՝ եթե այդպիսին չկա։

### DialogWindow.GetLayoutItem(string) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected LayoutItemWithRequired GetLayoutItem(string name);
```

Վերադարձնում է տրված ներքին անունով դաշտին համապատասխանող դասավորման տարրը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |

**Վերադարձնում է**

Դաշտին համապատասխանող **LayoutItemWithRequired** տարրը, կամ **null**՝ եթե այդպիսին չկա։
