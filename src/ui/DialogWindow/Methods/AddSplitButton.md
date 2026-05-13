---
title: AddSplitButton
nav_exclude: true
---

# DialogWindow.AddSplitButton(LayoutGroup, string, string, string, string, string, bool, HorizontalAlignment, double, double, IEnumerable&lt;IBarItem&gt;, bool) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public SplitButton AddSplitButton(LayoutGroup container, string name, string imageURI = "", string caption = "",
                                  string labelCaption = "", string tooltip = "", bool isTabStop = false,
                                  HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                  double imgWidth = 16, double imgHeight = 16,
                                  IEnumerable<IBarItem> popupItems = null, bool showGlyphsInPopupMenu = true);
```

Նշված դասավորման խմբում ավելացնում է կողային ընտրացանկով կոճակ (**SplitButton**)։ Կոճակը բաղկացած է երկու մասից՝ հիմնական գործողություն կատարող կոճակից և կողային ընտրացանկի կոճակից։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է կոճակը։ |
| name | string | — | Կոճակի ներքին անունը։ |
| imageURI | string | "" | Կոճակի վրա ցուցադրվող նկարի URI-ն։ |
| caption | string | "" | Կոճակի վրա ցուցադրվող տեքստը։ |
| labelCaption | string | "" | Կոճակի կողքին ցուցադրվող անվանումը։ |
| tooltip | string | "" | Կոճակի հուշումը։ |
| isTabStop | bool | false | Որոշում է, արդյոք կոճակը կարող է ստանալ ֆոկուս **Tab** ստեղնով։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Կոճակի հորիզոնական դիրքավորումը։ |
| imgWidth | double | 16 | Կոճակի վրա ցուցադրվող նկարի լայնությունը։ |
| imgHeight | double | 16 | Կոճակի վրա ցուցադրվող նկարի բարձրությունը։ |
| popupItems | IEnumerable&lt;IBarItem&gt; | null | Կողային ընտրացանկում ցուցադրվող տարրերի ցուցակը։ |
| showGlyphsInPopupMenu | bool | true | Որոշում է, արդյոք ցուցադրվեն տարրերի կողմի նկարները թռուցիկ ընտրացանկում։ |

**Վերադարձնում է**

Ստեղծված **SplitButton** տիպի կոճակը։
