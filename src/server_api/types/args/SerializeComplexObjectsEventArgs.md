---
layout: page
title: "SerializeComplexObjectsEventArgs դաս" 
---

Այս դասը օգտագործվում է [Document.SerializeComplexObjects](../../Definitions/Document/Methods/SerializeComplexObjects.md) մեթոդում։

## Հատկություններ

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| ComplexObjectsJson | Dictionary<string, JsonElement> | - | Սերվիսից կլիենտ փոխանցվող բարդ օբյեկտների (ներդրված տիպեր չհանդիսացող, string, bool, ...) անուն/արժեքների ցուցակ։ արժեքների դեսերիալիզացիան(C#-ական տիպերի բերումը) կատարվում է **SerializeComplexObjectsEventArgs.Serialize** մեթոդի միջոցով։  |