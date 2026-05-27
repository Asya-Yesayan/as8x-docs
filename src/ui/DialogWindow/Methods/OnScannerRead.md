---
title: OnScannerRead
nav_exclude: true
---

# DialogWindow.OnScannerRead(OnScannerEventArgs) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public void OnScannerRead(OnScannerEventArgs args);
```

Կանչվում է, երբ սկաները կարդում է տվյալներ։ Իր հերթին կանչում է [OnScanner](OnScanner.md) մեթոդը մուտքագրման մշակման համար։ Այս մեթոդը կիրառում է **ISupportScanner** ինտերֆեյսի հետ հակասելիության նպատակով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| args | OnScannerEventArgs | — | Սկաների իրադարձության արգումենտները։ |