---
title: RESTException
nav_exclude: true
---

# RESTException կոնստրուկտոր

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [RESTException()](#restexceptionrestexception-կոնստրուկտոր) | Ստեղծում է **RESTException** դասի օբյեկտ առանց սխալի հաղորդագրության։ |
| [RESTException(string, string, string)](#restexceptionrestexceptionstring-string-string-կոնստրուկտոր) | Ստեղծում է **RESTException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, սխալի կոդով և գլխագրով։ |
| [RESTException(string, Exception, string)](#restexceptionrestexceptionstring-exception-string-կոնստրուկտոր) | Ստեղծում է **RESTException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, ներքին սխալով և գլխագրով։ |
| [RESTException(string, HttpStatusCode, string, string)](#restexceptionrestexceptionstring-httpstatuscode-string-string-կոնստրուկտոր) | Ստեղծում է **RESTException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ և HTTP ստատուս կոդով։ |

### RESTException.RESTException() կոնստրուկտոր

**Դաս՝** [RESTException](../../RESTException.md)

```c#
public RESTException();
```

Ստեղծում է **RESTException** դասի օբյեկտ առանց սխալի հաղորդագրության։ [Code](../Properties/Code.md) հատկությունն արժեքավորվում է դատարկ տողով, [StatusCode](../Properties/StatusCode.md) հատկությունը՝ **HttpStatusCode.BadRequest**-ով։

### RESTException.RESTException(string, string, string) կոնստրուկտոր

**Դաս՝** [RESTException](../../RESTException.md)

```c#
public RESTException(string message, string code = "", string title = "");
```

Ստեղծում է **RESTException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, սխալի կոդով և գլխագրով։ [StatusCode](../Properties/StatusCode.md) հատկությունն արժեքավորվում է **HttpStatusCode.BadRequest**-ով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| message | string | - | Սխալի հաղորդագրությունը։ |
| code | string | "" | Սխալի կոդը։ Արժեքավորում է [Code](../Properties/Code.md) հատկությունը։ |
| title | string | "" | Սխալի պատուհանի գլխագիրը։ Արժեքավորում է [Title](../Properties/Title.md) հատկությունը։ |

### RESTException.RESTException(string, Exception, string) կոնստրուկտոր

**Դաս՝** [RESTException](../../RESTException.md)

```c#
public RESTException(string message, Exception inner, string title = "");
```

Ստեղծում է **RESTException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, ներքին սխալով և գլխագրով։ [Code](../Properties/Code.md) հատկությունն արժեքավորվում է դատարկ տողով, [StatusCode](../Properties/StatusCode.md) հատկությունը՝ **HttpStatusCode.BadRequest**-ով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| message | string | - | Սխալի հաղորդագրությունը։ |
| inner | Exception | - | Ընթացիկ սխալի պատճառ հանդիսացող ներքին սխալը։ |
| title | string | "" | Սխալի պատուհանի գլխագիրը։ Արժեքավորում է [Title](../Properties/Title.md) հատկությունը։ |

### RESTException.RESTException(string, HttpStatusCode, string, string) կոնստրուկտոր

**Դաս՝** [RESTException](../../RESTException.md)

```c#
public RESTException(string message, HttpStatusCode statusCode, string code = "", string title = "");
```

Ստեղծում է **RESTException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ և HTTP ստատուս կոդով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| message | string | - | Սխալի հաղորդագրությունը։ |
| statusCode | HttpStatusCode | - | Սխալի հետ վերադարձվող HTTP ստատուս կոդը։ Արժեքավորում է [StatusCode](../Properties/StatusCode.md) հատկությունը։ |
| code | string | "" | Սխալի կոդը։ Արժեքավորում է [Code](../Properties/Code.md) հատկությունը։ |
| title | string | "" | Սխալի պատուհանի գլխագիրը։ Արժեքավորում է [Title](../Properties/Title.md) հատկությունը։ |
