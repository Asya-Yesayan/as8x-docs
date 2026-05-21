---
title: AddLine
nav_exclude: true
---

# DialogWindow.AddLine մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddLine(string, LineCaptionAlignment, string)](#dialogwindowaddlinestring-linecaptionalignment-string-մեթոդ) | Երկխոսության պատուհանում ավելացնում է հորիզոնական բաժանարար գիծ։ |
| [AddLine(LayoutGroup, string, LineCaptionAlignment, string)](#dialogwindowaddlinelayoutgroup-string-linecaptionalignment-string-մեթոդ) | Նշված դասավորման խմբում ավելացնում է հորիզոնական բաժանարար գիծ։ |

### DialogWindow.AddLine(string, LineCaptionAlignment, string) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public HorizontalLineControl AddLine(string caption = null, LineCaptionAlignment captionAlignment = 0, string name = null);
```

Երկխոսության պատուհանում ավելացնում է հորիզոնական բաժանարար գիծ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| caption | string | null | Բաժանարար գծի վրա ցուցադրվող տրված տեքստ։ |
| captionAlignment | LineCaptionAlignment | 0 | Տեքստի հորիզոնական դիրքավորումը գծի վրա։ |
| name | string | null | Դաշտի տրված ներքին անուն։ Չտալու դեպքում ավտոմատ կերպով ձևավորվում է եզակի անուն՝ ըստ **HLine_** նախածանցի։ |

### DialogWindow.AddLine(LayoutGroup, string, LineCaptionAlignment, string) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public HorizontalLineControl AddLine(LayoutGroup container, string caption = null,
                                     LineCaptionAlignment captionAlignment = 0, string name = null);
```

Նշված դասավորման խմբում ավելացնում է հորիզոնական բաժանարար գիծ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է բաժանարար գիծը։ |
| caption | string | null | Բաժանարար գծի վրա ցուցադրվող տրված տեքստ։ |
| captionAlignment | LineCaptionAlignment | 0 | Տեքստի հորիզոնական դիրքավորումը գծի վրա։ |
| name | string | null | Դաշտի տրված ներքին անուն։ |
