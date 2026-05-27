---
title: AddDropDownButton
nav_exclude: true
---

# DialogWindow.AddDropDownButton(LayoutGroup, string, string, string, string, string, bool, HorizontalAlignment, double, double, IEnumerable&lt;IBarItem&gt;, bool) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public DropDownButton AddDropDownButton(LayoutGroup container, string name, string imageURI = "", string caption = "",
                                        string labelCaption = "", string tooltip = "", bool isTabStop = false,
                                        HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                        double imgWidth = 16, double imgHeight = 16,
                                        IEnumerable<IBarItem> popupItems = null, bool showGlyphsInPopupMenu = true);
```

Նշված դասավորման խմբում (LayoutGroup) ավելացնում է popup տեսակի ընտրացանկով կոճակ (**DropDownButton**)։ Կոճակի սեղմման ժամանակ բացվում է **popupItems** պարամետրով տրված ընտրացանկը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը (LayoutGroup), որտեղ ավելացվում է կոճակը։ |
| name | string | — | Կոճակի ներքին անունը։ |
| imageURI | string | "" | Կոճակի վրա ցուցադրվող նկարի URI-ն։ |
| caption | string | "" | Կոճակի վրա ցուցադրվող տեքստը։ |
| labelCaption | string | "" | Կոճակի կողքին ցուցադրվող անվանումը։ |
| tooltip | string | "" | Կոճակի tooltip-ը։ |
| isTabStop | bool | false | Որոշում է, արդյոք կոճակը կարող է ստանալ ֆոկուս **Tab** ստեղնով։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Կոճակի հորիզոնական դասավորվածության ուղղությունը։ |
| imgWidth | double | 16 | Կոճակի վրա ցուցադրվող նկարի լայնությունը։ |
| imgHeight | double | 16 | Կոճակի վրա ցուցադրվող նկարի բարձրությունը։ |
| popupItems | IEnumerable&lt;IBarItem&gt; | null | popup տեսակի ընտրացանկում ցուցադրվող տարրերի ցուցակը։ |
| showGlyphsInPopupMenu | bool | true | Որոշում է, արդյոք ցուցադրվեն տարրերի կողմի նկարները popup տեսակի ընտրացանկում։ |

## Օրինակ

```c#
// ստեղծում է ուղղահայաց դասավորման խումբ
var group = AddVerticalLayoutGroup();

// popup ընտրացանկում ցուցադրվող արժեքները
var popupItems = new List<IBarItem>
{
    new BarButtonItem { Content = "Արտահանել Excel" },
    new BarButtonItem { Content = "Արտահանել PDF" }
};

// նշված խմբում ավելացնում է popup ընտրացանկով կոճակ՝ Արտահանել անվանումով
var button = AddDropDownButton(group, "export", caption: "Արտահանել", popupItems: popupItems);
```
