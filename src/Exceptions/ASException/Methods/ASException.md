---
title: ASException
nav_exclude: true
---

# ASException կոնստրուկտոր

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [ASException()](#asexceptionasexception-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ առանց սխալի հաղորդագրության։ |
| [ASException(string)](#asexceptionasexceptionstring-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ։ |
| [ASException(string, Exception)](#asexceptionasexceptionstring-exception-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ և ներքին սխալով։ |
| [ASException(string, int, string)](#asexceptionasexceptionstring-int-string-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, պատկերի id-ով և գլխագրով։ |
| [ASException(string, string, string)](#asexceptionasexceptionstring-string-string-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, գլխագրով և դաշտի անունով։ |
| [ASException(string, string, int, string)](#asexceptionasexceptionstring-string-int-string-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, գլխագրով, սխալի կոդով և դաշտի անունով։ |
| [ASException(string, string, string, int)](#asexceptionasexceptionstring-string-string-int-կոնստրուկտոր) | Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, գլխագրով, ցուցակի անունով և տողի համարով։ |

### ASException.ASException() կոնստրուկտոր

**Դաս՝** [ASException](../../ASException.md)

```c#
public ASException();
```

Ստեղծում է **ASException** դասի օբյեկտ առանց սխալի հաղորդագրության։

### ASException.ASException(string) կոնստրուկտոր

**Դաս՝** [ASException](../../ASException.md)

```c#
public ASException(string message);
```

Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| message | string | - | Սխալի հաղորդագրությունը։ |

### ASException.ASException(string, Exception) կոնստրուկտոր

**Դաս՝** [ASException](../../ASException.md)

```c#
public ASException(string message, Exception innerException);
```

Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ և ներքին սխալով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| message | string | - | Սխալի հաղորդագրությունը։ |
| innerException | Exception | - | Ընթացիկ սխալի պատճառ հանդիսացող ներքին սխալը։ null արժեքի դեպքում ներքին սխալ նշված չէ։ |

### ASException.ASException(string, int, string) կոնստրուկտոր

**Դաս՝** [ASException](../../ASException.md)

```c#
public ASException(string message, int icon, string title = "");
```

Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, պատկերի id-ով և գլխագրով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| message | string | - | Սխալի հաղորդագրությունը։ |
| icon | int | - | Սխալի պատուհանում ցուցադրվող պատկերի տիպի id-ն։ Արժեքավորում է [Icon](../Properties/Icon.md) հատկությունը։ |
| title | string | "" | Սխալի պատուհանի գլխագիրը։ Արժեքավորում է [Title](../Properties/Title.md) հատկությունը։ |

### ASException.ASException(string, string, string) կոնստրուկտոր

**Դաս՝** [ASException](../../ASException.md)

```c#
public ASException(string message, string title, string field);
```

Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, գլխագրով և դաշտի անունով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| message | string | - | Սխալի հաղորդագրությունը։ |
| title | string | - | Սխալի պատուհանի գլխագիրը։ Արժեքավորում է [Title](../Properties/Title.md) հատկությունը։ |
| field | string | - | Սխալի հետ կապված դաշտի ներքին անունը (կոդ)։ Արժեքավորում է [Field](../Properties/Field.md) հատկությունը։ |

### ASException.ASException(string, string, int, string) կոնստրուկտոր

**Դաս՝** [ASException](../../ASException.md)

```c#
public ASException(string message, string title = "", int code = -1, string field = "");
```

Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, գլխագրով, սխալի կոդով և դաշտի անունով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| message | string | - | Սխալի հաղորդագրությունը։ |
| title | string | "" | Սխալի պատուհանի գլխագիրը։ Արժեքավորում է [Title](../Properties/Title.md) հատկությունը։ |
| code | int | -1 | Սխալի կոդը։ Արժեքավորում է [ErrorCode](../Properties/ErrorCode.md) հատկությունը։ |
| field | string | "" | Սխալի հետ կապված դաշտի ներքին անունը (կոդ)։ Արժեքավորում է [Field](../Properties/Field.md) հատկությունը։ |

### ASException.ASException(string, string, string, int) կոնստրուկտոր

**Դաս՝** [ASException](../../ASException.md)

```c#
public ASException(string message, string title, string list, int rowNum);
```

Ստեղծում է **ASException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, գլխագրով, ցուցակի անունով և տողի համարով։ Օգտագործվում է, երբ սխալը կապված է ցուցակի կոնկրետ տողի հետ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| message | string | - | Սխալի հաղորդագրությունը։ |
| title | string | - | Սխալի պատուհանի գլխագիրը։ Արժեքավորում է [Title](../Properties/Title.md) հատկությունը։ |
| list | string | - | Ցուցակի (Grid-ի) ներքին անունը (կոդ)։ Արժեքավորում է [Field](../Properties/Field.md) հատկությունը։ |
| rowNum | int | - | Ցուցակի այն տողի համարը, որի հետ կապված է սխալը։ Արժեքավորում է [RowNumber](../Properties/RowNumber.md) հատկությունը։ |
