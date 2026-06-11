---
title: ApiException
nav_exclude: true
---

# ApiException կոնստրուկտոր

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [ApiException(string, bool)](#apiexceptionapiexceptionstring-bool-կոնստրուկտոր) | Ստեղծում է **ApiException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ։ |
| [ApiException(string, Exception, bool)](#apiexceptionapiexceptionstring-exception-bool-կոնստրուկտոր) | Ստեղծում է **ApiException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ և ներքին սխալով։ |
| [ApiException(string, int, string, Exception, bool)](#apiexceptionapiexceptionstring-int-string-exception-bool-կոնստրուկտոր) | Ստեղծում է **ApiException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, HTTP ստատուս կոդով, սերվերի պատասխանով և ներքին սխալով։ |
| [ApiException(ErrorResponse, int, string, bool)](#apiexceptionapiexceptionerrorresponse-int-string-bool-կոնստրուկտոր) | Ստեղծում է **ApiException** դասի օբյեկտ՝ **ErrorResponse** մոդելից վերականգնելով սխալի հաղորդագրությունը և սխալի կոդը։ |

### ApiException.ApiException(string, bool) կոնստրուկտոր

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public ApiException(string message, bool isRestException = false);
```

Ստեղծում է **ApiException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ։ [Response](../Properties/Response.md) և [Code](../Properties/Code.md) հատկությունները արժեքավորվում են դատարկ տողերով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| message | string | - | Սխալի հաղորդագրությունը։ |
| isRestException | bool | false | **true** արժեքի դեպքում սխալը նշվում է որպես սերվերի [RESTException](../../RESTException.md)-ից առաջացած։ Արժեքավորում է [IsRestException](../Properties/IsRestException.md) հատկությունը։ |

### ApiException.ApiException(string, Exception, bool) կոնստրուկտոր

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public ApiException(string message, Exception innerException, bool isRestException = false);
```

Ստեղծում է **ApiException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ և ներքին սխալով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| message | string | - | Սխալի հաղորդագրությունը։ |
| innerException | Exception | - | Ընթացիկ սխալի պատճառ հանդիսացող ներքին սխալը։ |
| isRestException | bool | false | **true** արժեքի դեպքում սխալը նշվում է որպես սերվերի [RESTException](../../RESTException.md)-ից առաջացած։ Արժեքավորում է [IsRestException](../Properties/IsRestException.md) հատկությունը։ |

### ApiException.ApiException(string, int, string, Exception, bool) կոնստրուկտոր

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public ApiException(string message, int statusCode, string response, Exception innerException, bool isRestException = false);
```

Ստեղծում է **ApiException** դասի օբյեկտ տրված սխալի հաղորդագրությամբ, HTTP ստատուս կոդով, սերվերի պատասխանով և ներքին սխալով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| message | string | - | Սխալի հաղորդագրությունը։ |
| statusCode | int | - | Սերվերի կողմից վերադարձված HTTP ստատուս կոդը։ Արժեքավորում է [StatusCode](../Properties/StatusCode.md) հատկությունը։ |
| response | string | - | Սերվերից ստացված հարցումի պատասխանի ամբողջական տեքստը։ Արժեքավորում է [Response](../Properties/Response.md) հատկությունը։ |
| innerException | Exception | - | Ընթացիկ սխալի պատճառ հանդիսացող ներքին սխալը։ |
| isRestException | bool | false | **true** արժեքի դեպքում սխալը նշվում է որպես սերվերի [RESTException](../../RESTException.md)-ից առաջացած։ Արժեքավորում է [IsRestException](../Properties/IsRestException.md) հատկությունը։ |

### ApiException.ApiException(ErrorResponse, int, string, bool) կոնստրուկտոր

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public ApiException(ErrorResponse errorResponse, int statusCode, string response, bool isRestException = false);
```

Ստեղծում է **ApiException** դասի օբյեկտ՝ **ErrorResponse** մոդելից վերականգնելով սխալի հաղորդագրությունը և սխալի կոդը։ Սխալի հաղորդագրությունն արժեքավորվում է **errorResponse.Error** արժեքով, [Code](../Properties/Code.md) հատկությունը՝ **errorResponse.Code** արժեքով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| errorResponse | ErrorResponse | - | Սերվերից ստացված սխալի մոդելը, որից կարդացվում են սխալի հաղորդագրությունը (**Error**) և կոդը (**Code**)։ |
| statusCode | int | - | Սերվերի կողմից վերադարձված HTTP ստատուս կոդը։ Արժեքավորում է [StatusCode](../Properties/StatusCode.md) հատկությունը։ |
| response | string | - | Սերվերից ստացված հարցումի պատասխանի ամբողջական տեքստը։ Արժեքավորում է [Response](../Properties/Response.md) հատկությունը։ |
| isRestException | bool | false | **true** արժեքի դեպքում սխալը նշվում է որպես սերվերի [RESTException](../../RESTException.md)-ից առաջացած։ Արժեքավորում է [IsRestException](../Properties/IsRestException.md) հատկությունը։ |
