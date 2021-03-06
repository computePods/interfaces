# Compute Pods interfaces

This directory describes the ComputePods MajorDomo client/server 
interfaces. 


These interfaces are generated by the [ComputePods interface 
generator](https://github.com/computePods/interfaceGenerator) (`cpig`). 

The JSON on the client side of this interface will be checked using 
[AJV](https://ajv.js.org/) while the server side will use [Python's 
dataclass](https://docs.python.org/3/library/dataclasses.html). 

The `cpig` uses description format based on Markdown/YAML files from which 
both the AJV and dataclass descriptions can be automatically generated.

The Markdown will be used for any general descriptions targeted at human 
programmers. These Markdown files will contain YAML code blocks which the 
Python `cpig` will extract, load as YAML and use to produce the required 
interfaces descriptions for use by the appropriate code. 

## Interfaces

We require the following interfaces:

- [Project descriptions](Projects.md)

- [original project files](Files.md)

- [Build progress](Build.md) (including build dependencies)

- [Logfiles](Logfiles.md)
