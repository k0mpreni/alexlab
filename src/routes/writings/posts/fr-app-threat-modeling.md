---
title: FR - Application Threat Modeling 🇫🇷
summary: Explication du modèle conceptuel de menace
date: 2020-01-31
---

_Ceci est à l'origine une brève pour une newsletter interne._

# Application Threat Modeling

_Qu'est ce qui vous tient éveillé la nuit ? Qui voudrait vous discréditer et voler vos clients ? Si vous attaquez votre application, comment le feriez vous ?_

Ce genre de questions qui vous font passer pour un paranoïaque sont pourtant celles à poser lors d'une séance de Threat Modeling !

Le Threat Modeling, modèle de menace en français, intervient lors de la phase de conception d'une application. L'objectif est d'identifier, communiquer et comprendre les menaces envers l'application et comment les maîtriser.

## Qui doit le faire

Un représentant de chaque partie prenantes du projet. Oui il faut le client, un commercial, un représantant de l'équipe sécurité et quelqu'un de l'équipe de développement.

## Les questions à se poser

- Qu'est ce que l'on construit ?
- Que peut-il mal se passer ?
- Que peut on y faire ? (Réduire / Transférer / Éviter / Accepter le risque)
- Est-ce suffisant ?

Une matrice des risques est un bon moyen de définir les risques à traîter en priorité.

![risk matrix](https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fcdn.business2community.com%2Fwp-content%2Fuploads%2F2019%2F08%2FRisk-Matrix.jpg&sp=83d7db380bd3eac8149fa3c1beb74321&anticache=715992)

Il convient ensuite de se demander:

- Qui va fixer la vulnérabilité
- Quelles seront les conséquences
- Quel est le prix du fix

__Ceci doit être fait avec quelqu'un ayant un pouvoir de décision, ce n'est pas au développeur d'accepter le risque.__

OWASP motto: "Threat modelling: the sooner the better, but never too late."

Pour aller plus loin:

- [OWASP Threat Modeling CheatSheet](https://owasp.org/www-project-cheat-sheets/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
- [Threat Modeling: 12 Available Methods](https://insights.sei.cmu.edu/sei_blog/2018/12/threat-modeling-12-available-methods.html)
