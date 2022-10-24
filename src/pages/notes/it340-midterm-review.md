---
layout: "../../layouts/NoteLayout.astro"
title: IT340 Midterm Review
slug: it340-midterm-review
date: 10-24-2022
category: it340
author: Christian Domacena
---

# IT340 Midterm Review

## Chapter 1

### Commands

---

`chmod` - Changes permission. (Change mode) I think.

    ###  Roles

    u - user

    g - group

    o - others

    ### Permissions

    r - read

    w - write

    x - execute

### Example Commands

`chmod u+x filename` -> Changes permission to a single set. `+` means adding permission

- Add `-R` to recursively apply permission under a directory.

`chmod +x` -> Make a file executable

#### Some more important commands

Files, terms, and utilities:

    - bash -> enters the bash shell. It provides different commands.
    - echo -> print something to terminal
    - env -> used to either print enviroment variables.
    - exec -> execute
    - pwd -> present working directory
    - set -> sets the names and values of shell and linux environment variables
    - unset
    - man -> manual
    - uname
    - history

Text streams

    - cat
    - cut
    - expand
    - fmt
    - head
    - od
    -join

Streams, pipes, and redirects

Redirects standard input, output, and error.
Pipe the output of one command to the input of another command - echo "Hello, world!" >> myfile.txt - echo "Hello, world!" >> cat myfile.txt

---

## Chapter 2

`chown` - Change ownership

`chgrp` - Change Group

`echo` - prints something to terminal (unless directed otherwise)

`exit` - Exits the current shell.

## Different Shells

1. Bash

The Bourne Again Shell

2. csh

C Shell

3. ksh

Korn Shell. Attempt to improve the bourne shell

4. BSH

Not to be confused with BASH. Bourne Shell.

5. zsh

Z shell takes shell evolution further than the Korn Shell, incorporating features from earlier shells and adding still more.

### Questions:

**Internal vs External Commands**

     - Internal are commands built directly into the shell.
     - External are commands that exists as files elsewhere. (E.g. npm commands)

**How can you determine if a command is internal or external?**

Using the `type` command, it will return if a command is external or external.

'$' vs '#'

'#' - root user

'$' - regular user

**Commands**

`$set` - Can be used to view or change shell variables like `$PATH` or `$shell`

`$logout` - closes the current shell**IF**it was launched from the login command.

**Which takes precendence - Internal or External Commands?**

Internal commands take precedence unless the full path of the external command was typed.

**How do you exit vi**

In Visual mode type `:q`

**How to declare a varable**

`$export VARIABLE=somevalue`

**Three basic Pipe commands in Linux Systems**

    `stdin:` (0) -> Standard input
    `stdout:` (1) -> Standard output
    `stderr:` (2) -> Standard error

- Linux treats these pipes as files and thus all file operations (cat, cd, etc..) may be applied to theml.

**What does this do: `echo $VARIABLE > file.txt`**

Copies the information contained within the `$VARIABLE` to file.txt
If _file.txt_ does not exists, it will create one or overwrites if does.

**tee command**
Outputs to a file**AND**shows the results to the screen.

**What does this command do: `$someProgram | tee output.txt`**
Outputs the information to `$someProgram` to _output.txt_ as well as print it to the screen.

**What is the symbol for piping?**

`|`

**What does piping do?**

Passes the output of one tool as the input of another tool.

There's no maximum number of pipes-technically.

`xargs` - `xargs [options] [commands] [initial-arguments]`

Builds and executes command lines from standard input.

## Chapter 3

### Basic File commands

`cat` -> concatenates files together. Can be used for two or more.

eg. `cat file1.txt file2.txt > file3.txt` -> Concats file1 and file2 and outputs it to file3.

`join` -> Attempts to match the contents of fields in one file with the same fields. Typically works on database flat files.

`paste` -> Merges files line by line using a tab to separate the data from each file.

`sort` -> Sorts the contents of a file.

    Options:
    -n -> Sort a file numerically
    -r -> reversed sort
    -o -> tells to ouput (combined with `> output`
    -nr -> example two commands.

`head` -> Shows the first few lines of a file
`tail` -> Shows the last few lines of a file
`less` -> Used to view files one page at a time
`cut` -> extracts portions of files by specifying bytes, characters, or fields.
`wc` -> Counts line, words, bytes, or characters.
Ouput of a `wc` command. - [lines] [no. words] [characters] [filename]

**What does this command do? `wc -lw file.txt`?**

Displays the no. of lines and words in a file.

`l` - lines
`w` - words

**What is regular expression**
Perform pattern matching in text data. Knows as REGEX.

**what will this find: d[aeiou]g?**

Will find any words that matches with words that starts with _d_, any letter that matches _a,e,i,o,u_, and ends with _g_

**How do you find match a single character using regular expressions**

| Symbol | Description                                              |
| ------ | -------------------------------------------------------- |
| .      | replaces any characters                                  |
| ^      | matches start of string                                  |
| $      | matches end of string                                    |
| \*     | matches upto zero or more times the preceding characters |
| \      | Represent special characters                             |
| ()     | Groups regular expressions                               |
| ?      | Matches up exactly one character                         |

example command using `grep`:

`cat myfile.txt | grep a`

**How to escate a regex character in Linux?**

---

`grep` -> evaluates a file and counts matching lines patterns, and etc. It stands for general regular expression parser.

`sed` -> Stream editor for filtering and transforming text.

**What does this command do: `$sed 's/unix/linux/` file1.txt > file2.txt`?**

Will change the first occurence of the word _unix_ with _linux_ in**EVERY LINE**and not every occurence in the same line.

"s" specifies the substitution operation
"/" are delimeters. The first word is the search term and the second is the replacement string.

- You can use different flags such as '/1, /2, /g'. The number determines when to replace based on occurrence.

---

**What packages in Linux?**

Libraries of software contained by the OS.

**What are the 2 package management systems**

1. RPM (Redhat Package Management)
2. Debain (Used by Ubuntu and others)

**What utilities may be used to manage packages?**

Some are:

- apt-get,
- synaptic,
- yum,

**What is a package management system responsible for?**

Controlling the versions of files in an installed packages, enforcing dependencies. (like npm)

**What are dependencies?**

Packages required by other packages to run.

**True or False: Package management systems seamlessly identify dependencies and automatically install software needed.**

True - Think of it like package.json or `npm install`. It will recursively install required packages.

**What is checksum?**

A simple file integrity check in which the values of individual bits or bytes are summed up and compared to a stored value for a reference version of the file.

**What will tab do?**

Tab will autofill the rest of a phrase if enough characters have been entered.

**What makes up the full package name in RPM?**

{packagename}{version}{build}{architecture}

e.g. package-8.0.0-3.x86.rpm

**Common options for RPM**
| Option | Description |
| --- | --- |
| -i | install |
| -U | install a new package or upgrades an existing one |
| -F | upgrades if its already install |
| -V | verifies a package |
| -e | uinstalls the package |
| -b | builds a binary package |
| --rebuilddb | rebuilds the package db |
| --all | verifies all installed packages |
| --requires | displays dependencies |
| --list | displays filenams contained in a package |
| -h | displays progress of an installation |
| --force | forces the installation and overwrites existing files. |

**What are the differences between yum and rpm?**

#### YUM yellow dog updater, modified

An open-source Linux package management application that uses the RPM package manager.

Dependencies:
RPM does not resolve dependencies
Yum resolves and install package dependencies automatically.

Package installation
RPM allows multiple package versions to be installed. But, does not do parallel install.
Yum does not allow multiple package versions to be installed. Allows multiple packages to be install simultaneously.

Upgrades
RPM does not support automatic upgrades.
Yum allows automatic upgrades to the latest available version.

User Experience
RPM can get a little complicated.
Yum is much more user-friendly

**How do you find out which library a program uses?**

Use `ldd /bin/ls` will display the library a program uses.

**What does the Kernel do?**

Located in the heart of the CPU; it connects the application to the hardware. The kernel will make the low level hardware operations on behalf of the application.
Minimizes the application making direct calls to hardware, memory, and crashing the computer as a result of errors occuring.

### Commands

| Command | Description                                                                                 |
| ------- | ------------------------------------------------------------------------------------------- |
| ps      | Displays all active processes on a machine                                                  |
| top     | Shows the top executing processes.                                                          |
| jobs    | Shows info about the processes executing in the current session.                            |
| nice    | Change the priority level or a process. (Default 10) E.g. `nice --adjustment=9 processName` |
| renice  | Current process can have their priority changed using renice.                               |
| kill    | Kills a specified command by the PID (Process ID).                                          |
| killall | Kills all processes.                                                                        |
| passwd  | Changes password                                                                            |
| dd      | Disk duplicate (File archiving)                                                             |
| cpio    | Copy i/o - Generally used to do backups to tape devices.                                    |

**What do disk quotas do?**

Quotas allow admins to place limits on the amount of storage space given to users.

**Which utility can help you convert packages?**
`alien`

**What is the node name in reference to the kernel?**
The systems node name is its network hostsname

`$uname -n`

**How do you see all kernel information?**

`$uname -a`

**What are the default file permissions?**
666

-r--r--r--

### Unix and Linux Permissions.

u - User

g - Group

o - Others

r-- r-- r--
u g o

| Number |    Permission Type     | Symbol |
| :----- | :--------------------: | :----: |
| 0      |     No Permission      |   -    |
| 1      |        Execute         |   -x   |
| 2      |         Write          |  -w-   |
| 3      |    Execute + Write     |  -wx   |
| 4      |          Read          |   r-   |
| 5      |     Read + Execute     |  r-x   |
| 6      |      Read + Write      |  rw-   |
| 7      | Read + Write + Execute |  rwx   |

ex. d -rw- rw- r--
filetype 6 6 4

`find`

**What is SUID?**
The Linux access permission flag bit that allows users to run an executable file with the perission of the executable owner.

`umask` - Sets the user mask.

`chattr` - Change attributes

`locate` - Like find, but not as good. The database occasionally needs updated.

`whereis` - Searches for files in the restricted sections. Usually to find binaries.

**What is an IRQ?**
An interrupt request is a signal sent to the CPU instructing it to suspend its current activity and to handle some external event, such as keyboard input.

### Some IRQs and their common uses

| Code | Description                           |
| ---- | ------------------------------------- |
| 0    | System Timer                          |
| 1    | Keyboard (Reserved for keyboards only |
| 2    | Cascade for IRQs 8-5                  |
| 3    | Second RS-232 serial port             |
| 4    | First RS-232 serial port              |
| 5    | Sound card                            |
| 6    | Floppy disk controller                |
| 7    | First parallel port                   |
| 8    | real time clock                       |

`du` - Estimates file space usage (data usage)
`fdisk` - Manipulates disk partition tables
`df` - Displays file system disk space usage. `df -h` will show mounted devices.
`which` - Shows the full path of shell commands.

**How would you change permissions of a directory, thisDir, and all of its subdirectories and files to provide full readwrite and execute capabilities to only the group and user?**

`chmod +x 770`

#### Standard run levels for linux:

| PID | Desc                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------- |
| 0   | Powers of the machine.                                                                               |
| 1   | Mode for administrative tasks. (Single-user mode)                                                    |
| 2   | Enters multi user mode. Does not configure network interfaces and does not export networks services. |
| 3   | Reboots without the GUI                                                                              |
| 5   | Reboots operating system and enables x11 server                                                      |
| 6   | Reboots the operating system                                                                         |
