---
title: LoadValues
nav_exclude: true
---

# DialogWindow.LoadValues() մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected void LoadValues();
```

Բեռնում է երկխոսության պատուհանի դաշտերի պահպանված արժեքները՝ Windows registry-ից կամ տվյալների բազայից (կախված **DialogService** ծառայության կարգավորումից)։ Բեռնման ընթացքում նախ պահպանում է կանխադիր արժեքները, ապա բեռնում է փաստացի արժեքները և կանչում [AfterLoadValues](AfterLoadValues.md)-ը։ Եթե երկխոսության պատուհանի **Name** հատկությունը սահմանված չէ, մեթոդը գործողություն չի կատարում։
