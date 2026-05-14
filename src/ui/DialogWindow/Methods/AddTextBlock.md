---
title: AddTextBlock
nav_exclude: true
---

# DialogWindow.AddTextBlock մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddTextBlock(string, TextBlockImage)](#dialogwindowaddtextblockstring-textblockimage-մեթոդ) | Երկխոսության պատուհանում ավելացնում է տեքստային բլոկ՝ ընտրովի պատկերակով։ |
| [AddTextBlock(LayoutGroup, string, TextBlockImage, bool, HorizontalAlignment)](#dialogwindowaddtextblocklayoutgroup-string-textblockimage-bool-horizontalalignment-մեթոդ) | Նշված դասավորման խմբում ավելացնում է տեքստային բլոկ՝ ընտրովի պատկերակով։ |

### DialogWindow.AddTextBlock(string, TextBlockImage) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TextBlock AddTextBlock(string text, TextBlockImage icon);
```

Երկխոսության պատուհանում ավելացնում է չմուտքագրվող տեքստային բլոկ՝ ընտրովի պատկերակով (օրինակ՝ սխալ, զգուշացում, տեղեկատվություն կամ հարցում)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| text | string | — | Ցուցադրվող տեքստը։ |
| icon | TextBlockImage | — | Տեքստի կողքին ցուցադրվող պատկերակի տիպը։ |

### DialogWindow.AddTextBlock(LayoutGroup, string, TextBlockImage, bool, HorizontalAlignment) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TextBlock AddTextBlock(LayoutGroup container, string text, TextBlockImage icon,
                              bool iconAtRight = false,
                              HorizontalAlignment horizontalAlignment = HorizontalAlignment.Stretch);
```

Նշված դասավորման խմբում ավելացնում է չմուտքագրվող տեքստային բլոկ՝ ընտրովի պատկերակով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է տեքստային բլոկը։ |
| text | string | — | Ցուցադրվող տեքստը։ |
| icon | TextBlockImage | — | Տեքստի կողքին ցուցադրվող պատկերակի տիպը։ |
| iconAtRight | bool | false | **true** արժեքի դեպքում պատկերակը ցուցադրվում է աջից, հակառակ դեպքում՝ ձախից։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Stretch | Տեքստային բլոկի հորիզոնական դասավորվածության ուղղությունը։ |

