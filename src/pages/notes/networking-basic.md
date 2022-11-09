---
layout: "../../layouts/NoteLayout.astro"
title: "Basic Networking"
slug: networking-basic
date: 11-09-2022
category: it340
author: Christian Domacena
---

# Basic Networking


## IP Addressing

- 32 binary bits, grouped into 4 eight bit 'quads' (dotted-quad notation).

- Each groups can range value to 0 - 256

- IP Address is split into two section: **Host & Network**

- netmask determines the delineation between the network and host portions. 

- Netmask starts with a 0 or 255. 

0 - Host mask

1 - Network mask

- Private addresses usually cannot be routed on the Internet.


### There are two types of Addresses: Unicast and Multicast/Broadcast

**Broadcast Address**

All of the host bits of a broadcast address are set to 1

**You must reserve at least 2 addresses in each network - 1 for the network itself (host bits all set to zero) and the broadcast (host bits all set to 1)**

## Hostnames

- TCP/IP supports the designation of hostnames to identify specific hosts






