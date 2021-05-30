# MajorDomo interface utilities

<!-- toc -->

## Entity types

The MajorDomo server keeps track of the types of artefacts it references 
in the JSON data that the server sends to the browser client. Most 
importantly, each type of artefact must be obtained through different 
server interfaces. This is the subject of the `entityInterfaceMapping` 
provided below. 

```yaml
httpRoutes:
  getEntityInterfaceMapping:
    route: /entity/interface/mapping
    actions:
     - GET
    response: entityeInterfaceMapping
```

```yaml
jsonSchemaDefs:
   entityInterfaceMapping:
     type: dictionary
     items:
       $ref: "#/$defs/mountPoint"
   entityType:
     type: object
     properties:
       entityType:
         enum:
           - logFile
           - projectFile
           - directory
           - file
           - task
       url:
         type: string
   mountPoint:
     type: string
```

The following is the entity type to interface route mapping which is 
currently understood by the MajorDomo server:

```yaml
jsonExamples:
   entityInterfaceMapping:
     title: The current entity to interface mapping
     httpRoutes:
       route: /entity/interface/mapping
       action: GET
---

# The following is the entity type to interface route mapping
# which is currently understood by the MajorDomo server

logFile:     logfiles
projectFile: projects
directory:   listFiles
file:        listFiles
task:        targetStatus

``` 

Where: 

- [`<workspacePath>`](Files.md#workspace-paths) is a "path" to the 
  required workspace directory or file. 

- [`<taskPath>`](Build.md#task-paths) is a "path" to the required build 
  dependency. 