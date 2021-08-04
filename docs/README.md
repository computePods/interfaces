# ComputePods interfaces and architecture

<!-- toc -->

This project captures the ComputePods interfaces. These interfaces are
heavily influenced by the overall ComputePods system architecture.

## Goals

A ComputePods federation is a build system distributed across multiple
machines with multiple cores.

It is able to build incrementally and on demand. It is able to discover
build dependencies.

It is able to deal with circular dependencies (as found in the
TeX/LaTeX/ConTeXt typesetting systems).

## Requirements

A federation of ComputePods needs to:

1. Monitor build dependencies by watching for changes in all "upstream"
   build dependencies.

2. Perform build steps for any build steps whose dependent artefacts have
   changed.

3. Monitor build step outputs.

Since build steps can be assigned to "remote" compute pods the federation
of ComputePods must also:

1. Maintain a "map" of which pod "owns" a particular artefact.

2. Be able to refresh/move/copy an artefact from one pod to another.

3. Be able to "pass" artefact ownership between pods.

4. Quickly identify a pod as owning most dependencies for a particular
   build step.

5. Distinguish between consequential and inconsequential changes to an
   artefact.

## Architecture

A federation of ComputePods uses:

1. NATS to provide a messaging back-plane across the whole federation for
   "small" frequent messages.

2. A collection of "chefs" who perform specialised build steps.

3. A MajorDomo who monitors and controls the overall build process for a
   given "project"/"user".

4. The ability to transfer files/artefacts between pods.

## Questions

1. Who performs/requests file/artefact transfer, from whom, and over what
   protocol?

  - what connection/tunnel topology should we use?

    - star or full mesh?

    - if star who is the center? (Probably the lead MajorDomo on the
      user's machine, but the lead pod might not always have the
      "official" artefact)

    - the user's MajorDomo (on their machine) should act as the star and
      once any task is complete, should *pull* the resulting output back
      to itself for later (re)distribution / use.

  - pull or push?

    - pull as it is the receiver who can compute the local file hash and
      determine that the global "official" hash is different.

    - pull as the receiver knows which files are out of date and which are
      still valid.

  - how long should/can the connection last?

  - rsync or sftp?

    - rsync is "faster" on large collections of files (since only those
      parts of a file which have changed are sent) but more CPU intensive.
      Both the client and server must read/write the whole file, but only
      those parts which differ are sent over the network.

      - ssh-tunnels can be long lived, but the rsync must be restarted on
        every collection transferred.

      - rsync, unless it is very careful, will probably update too many
      files *if* there is a three or more way synchronisation happening in
      a short time.

    - sftp is "slower" since the client, server *and* network must process
      every byte of the file.

      - connections can be long lived

      - is easier to control which files get updated and which are kept as
        is.

      - each pod should have a Linux based ssh/sftp server

      - each Chef should *pull* using its own AsyncSSH sftp client.

  - [daemon based rsync over an existing ssh
    tunnel](https://linuxconfig.org/how-to-setup-the-rsync-daemon-on-linux)

    - Implementing rsync in *pure* Python is a bad idea given Python's
      GIL.

    - While the SSH tunnel can last indefinitely, each rsync
      invocation is a separate linux command line call.

  - sftp (using pysftp via paramiko OR via AsyncSSH) (pull or push)

    - AsyncSSH implements file read/write over its ssh connection

    - On my systems the sftp command seems to stay open indefinitely.

    - sftp can be used to run remote commands, so could compute file
      hashes.

  - JSON over websocket (likely pull)

    - This would require reading file chunks into Python, packaging into
      JSON, and then writing back out to the disk on the other end.

  - webfuse (Fuse over websocket) (unneeded complexity to implement full
    file system).

2. Will all of the dependencies be text files?

  - Images will be binary

3. Will we ever need to transfer binary files?

  - Image files yes...

4. Who will be responsible for *computing* file hashes?

  - Linux command line tools via asynchronous subprocesses. Since Python
    can only do *one* CPU-intensive task at one time (on only one core),
    we really want to compute file hashes in separate processes... as soon
    as we do this, we probably can't get better performance than with a
    Linux command line tool.