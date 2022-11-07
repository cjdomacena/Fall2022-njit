---
layout: "../../layouts/NoteLayout.astro"
title: Administering the System Part 1
slug: administering-the-system-part-1
author: Christian Domacena
category: it340
date: 11-03-2022
---

# Administering the System Part 1

## User Account Names

### Individual Users login to a user account that has been created for them on the system

- Usernames maybe up to 32 characters in length and must begin with a letter (Case sensitive)

- It's usually a good idea to keep usernames at 8 characters or less due to compatibility with legacy software

- It's absolutely critical that you have a username policy in-place in the organization to standardize usernames!

## Groups

- Groups are used to link users together who share a common attribute or task

- Groups are **NOT** accounts, they are simply collectiuon of users

- Groups may have anywhere from zero members to as many users are on the system

- Membership is defined in the file _/etc/group_

- A user's primary group is defined in _/etc/passwd_

- Use the _newgrp_ command to change your account's primary group membership

## UID's and GID's

- UID and GID is a unique identifier linked to a user account or group specifically

- UID and GID numbers may not be identical across a domain

- _Only the root account (UID AND GID set to 0) are standardized_ Implementations vary on where user accounts start (typically 500 or 1000)

- Daemons may reside at any UID number (dependent on distribution)

- Usually, GID 100 is the default users group (not standardized)

## Configuring User Accounts

- The **useradd** command is used to create new users (e.g. `useradd username`)

- It has a **LOT** of options (type `man useradd` for reference)

- The **passwd** command is used to set the default passwod for the new user.

**To create new users, you must be in root**

### Some 'passwd' flags

| Flag | Description                 |
| ---- | --------------------------- |
| -k   | updated expired accounts    |
| -l   | lock an account             |
| -u   | unlock and account          |
| -d   | remove a user's password    |
| -S   | display account information |

### Making changes to existing user accounts

The **usermod** command is used to make changes to existing user accounts

Works similarly to **useradd**, but there are some slight differences such as:

- **-m** works with **-d** to both create a new home directory for the user, and also move their files from their existing deirectory to the new one.

- **-l** may be used to change a users login name

- Accounts may be locked or unlocked using **-L** and **-U** options respectively.

- If **usermod** changes the account's UID, it will be necessary to modify the users files with the **chown** command

### Configuring Account Expiration

The **chage** command controls account settings related to account expiration

----- WORK IN PROGRESS -----
