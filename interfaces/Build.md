# MajorDomo build interface

<!-- toc -->

The **Build** interface provides the MajorDomo UI with access to the 
current build progress as well as dependency graph for a given project 
target. 

## Requesting the build of a project target

*Requesting* the build of a project target will typically take a number of 
minutes. As such, the *request* for a build is an *asynchronous* action. 
This means that there is no direct response. 

```yaml
httpRoutes:
  buildStart: 
    route: /build/start/<workspacePath>/<project>/<target>
    actions:
      - GET
    response: none
```

where <[WorkspacePaths](Files.md#workspace-paths)> are Unix/Web paths 
relative to the user's "commons" directory. 

## Getting a list of current build tasks

```yaml
httpRoutes:
  buildStatus:
    route: /build/current
    actions:
      - GET
    response: buildTasks
```

### JSON buildTasks

```yaml
jsonSchemaDefs:
  buildTasks:
    description : An array of build task status objects
    type: array
    items: 
      $ref: "#/$defs/taskStatus"

  taskStatus:
    description: The status of a single build task
    type: object
    required: ['target', 'progress']
    properties:
      target:
        type: string
      progress:
        type: integer
      dependencies:
        description: An array of dependent tasks
        type: array
        items:
         type: string
```

## Getting the status of a single build task 

```yaml
httpRoutes:
  targetStatus: 
    route: /build/status/<taskPath>
    actions:
      - GET
    response: taskStatus
```

### Task paths

Task paths are essentially Unix/Web paths (using the `/` separators) 
relative to a project build target. 

A taskPath consists of a <[workspacePath](Files#workspace-paths)>, a 
`<project>`, a `<target>` in the project, followed by subsequent 
"(sub)directories" which are part extended dependency hierarchy for that 
build target. 

**Question** Cyclic builds, such as, for example, ConTeXt documents, will 
have multiple "copies" of a dependency. One copy for each "time" the build 
has to proceed "around the cycle". These copies will be distinguished by 
"level-decorators" (cycle numbers). We need to make sure the hierarchy 
names of these "(sub)directories" remains stable as the build goes around 
a cycle multiple times. ***How do we do this?*** 

## Examples 

### Example taskStatus 

```yaml
jsonExamples:
  taskStatus:
    title: example task status
    httpRoutes:
      route: /build/status/example
      action: GET
---

target: example

progress: 50

dependencies:
  - example1
  - anOther/task

```

### Example buildTasks

Note that in this example we *have* a dependency cycle.

```yaml
jsonExamples:
  buildTasks:
    title: example list of build tasks
    httpRoutes:
      route: /build/current
      action: GET

---
- target: example1
  progress: 30
  dependencies:
    - example
- target: example
  progress: 50
  dependencies:
    - example1
    - anOther/task
```
