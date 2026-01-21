---
title: IExecutionProgress.DefineReport(string, string, bool) մեթոդ
---

## Նկարագիր

**Դաս՝** [IExecutionProgress](../../IExecutionProgress.md)

```c#
public void DefineReport(string armenianCaption, 
                        string englishCaption = "", 
                        bool useFormatting = false);
```

Ստեղծում է [տեքստային հաշվետվություն՝](../../TextReport.md)` 200 լայնությամբ հատվածով (ֆրագմենտով)։

Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում [տեքստային հաշվետվությունը](../../TextReport.md) մնում է անփոփոխ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն                                                        |
| --------------- | ------------- | --------------- | --------------------------------------------------------------------- |
| armenianCaption | string        | -               | [Տեքստային հաշվետվության](../../TextReport.md) հայերեն անվանումը։                                  |
| englishCaption  | string        | ""              | [Տեքստային հաշվետվության](../../TextReport.md) անգլերեն անվանումը։                     |
| useFormatting   | bool          | false           | [Տեքստային հաշվետվությունում](../../TextReport.md) տեքստի ձևաչափեր օգտագործելու հայտանիշը։ |
