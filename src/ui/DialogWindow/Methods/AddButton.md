---
title: AddButton
nav_exclude: true
---

# DialogWindow.AddButton(LayoutGroup, string, string, string, string, string, bool, HorizontalAlignment, double, double) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public Button AddButton(LayoutGroup container, string name, string imageURI = "", string caption = "",
                        string labelCaption = "", string tooltip = "", bool isTabStop = false,
                        HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                        double imgWidth = 16, double imgHeight = 16);
```

Երկխոսության պատուհանի նշված դասավորման խմբում (LayoutGroup) ավելացնում է կոճակ։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը (LayoutGroup), որտեղ ավելացվում է կոճակը։ |
| name | string | — | Կոճակի ներքին անունը։ |
| imageURI | string | "" | Կոճակի վրա ցուցադրվող նկարի URI-ն։ |
| caption | string | "" | Կոճակի վրա ցուցադրվող տեքստը։ |
| labelCaption | string | "" | Կոճակի կողքին ցուցադրվող անվանումը։ |
| tooltip | string | "" | Կոճակի վրա մկնիկի ցուցիչը պահելու դեպքում ցուցադրվող tooltip-ը։ |
| isTabStop | bool | false | Որոշում է, արդյոք կոճակը կարող է ստանալ ֆոկուս **Tab** ստեղնով։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Կոճակի հորիզոնական դասավորվածության ուղղությունը։ |
| imgWidth | double | 16 | Կոճակի վրա ցուցադրվող նկարի լայնությունը։ |
| imgHeight | double | 16 | Կոճակի վրա ցուցադրվող նկարի բարձրությունը։ |
