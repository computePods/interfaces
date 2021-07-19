# MajorDomo original project files

<!-- toc -->

# Files HTTP interface

The **Files** HTTP interface provides a way for the MajorDomo UI to access
and list the currently known project files.

Project files consist of (sub)directories, original project "source"
files, as well as project definition files.

User "workspaces" are simply directory trees located in the user's
personal "commons" directory to which the ComputePods MajorDomo server has
access.

## Listing directories and files

```yaml
httpRoutes:
  listFiles:
    route: /files/<workspacePath>
    actions:
      - GET
    response: workspaceTree
```
### Workspace Paths

Workspace paths are essentially Unix/Web paths (using the `/` separator)
relative to the user's personal "commons" directory.

### JSON workspaceTree

A `workspaceTree` is a recursive JSON structure which captures a
"directory's" contained sub-directories as well as files.

```yaml
jsonSchemaDefs:
  workspaceTree:
    type: object
    properties:
      entityType:
        $ref: "#/$defs/entityType"
      directories:
        type: dictionary
        items:
          $ref: "#/$defs/workspaceTree"
      files:
        type: dictionary
        items:
          $ref: "#/$defs/entityType"
```

**Question**: how do we get the types of a given file? Do we simply rely
on an extension mapping?

**Answer**: The MajorDomo server includes the file type as the
[`entityType`](Utils.md#entity-types) *value* of the files dictionary. The
browser client then uses the `entityInterfaceMapping` to understand which
(server) interface should be used to obtain an artefact of the given type.
The client code then wraps the entity returned by the server in a
particular type of (Mithril) component which knows how to display and
interact with the returned entity.

### Example workspaceTree

```yaml
jsonExamples:
  workspaceTree:
    title: Measuring Heyting Algebras workspace
    httpRoutes:
      route:
        mountPoint:    /files
        workspacePath: measuringHeyting
      action: GET

---

directories:
  partialOrders :
    directories:
      subsectionA :
        directories: {}
        files:
          - subsectionA.tex
    files:
      - partialOrders.tex
  heytingSymmetries :
    directories: {}
    files:
      - heytingSymmetries.tex

files:
  - project.yaml
  - measuringHeyting.tex

```


# Files NATS interface

The **Files** NATS interface provides a way for the federation of
ComputePods to monitor changes in artefact files.

There are two primary NATS subject hierarchies, `fileChanged`, and
`watchRequest`.

## File changes

```yaml
natsSubjects:
  fileChanges:
    subject: fileChanged.<reason>.<pod>.[dottedPath]
    message: fileChanged
```

```yaml
#jsonSchemaDefs:
#  fileChanged:
#    type: object
#    properties:
#      reason:
#        type: string
#      pod:
#        type: string
#      path:
#        type: string
```

**Question**: Should this file change message also include the SHA256
hash? What about the file stats (modification time, file size?)

**Answer**: yes. We need to define a `fileStats` JSON type.

## File watches

```yaml
natsSubjects:
  watchRequest:
    subject: watchRequest.<pod>
    message: watchRequest
```

```yaml
#jsonSchemaDefs:
#  watchRequest:
#    type: object
#    properties:
#      pod:
#        type: string
#      baseSubject:
#        type: string
#      paths:
#        type: array
#        items:
#          type: string
```


# Includes

Interface.Include [Utils](Utils.md)

