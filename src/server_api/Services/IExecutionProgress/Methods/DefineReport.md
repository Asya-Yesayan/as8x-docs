---
title: DefineReport
parent: "Մեթոդներ"
grand_parent: "IExecutionProgress"
---

# IExecutionProgress.DefineReport(string, string, bool) մեթոդ

## Նկարագիր

**Դաս՝** [IExecutionProgress](../IExecutionProgress.md)

```c#
public void DefineReport(string armenianCaption, 
                        string englishCaption = "", 
                        bool useFormatting = false);
```

Ստեղծում է [տեքստային հաշվետվություն՝](../../../Types/TextReport.md)՝ 120 լայնությամբ հատվածով (ֆրագմենտով)։

Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում [տեքստային հաշվետվությունը](../../../Types/TextReport.md) մնում է անփոփոխ։

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն                                                        |
| --------------- | ------------- | --------------- | --------------------------------------------------------------------- |
| armenianCaption | string        | -               | [Տեքստային հաշվետվության](../../../Types/TextReport.md) հայերեն անվանումը։                                  |
| englishCaption  | string        | ""              | [Տեքստային հաշվետվության](../../../Types/TextReport.md) անգլերեն անվանումը։                     |
| useFormatting   | bool          | false           | [Տեքստային հաշվետվությունում](../../../Types/TextReport.md) տեքստի ձևաչափեր օգտագործելու հայտանիշը։ |
