# MajorDomo project descriptions

<!-- toc -->

The **Projects** interface provides the MajorDomo UI with a list of
existing Project descriptions for a user, together with the associated
build targets.

## List projects

```yaml
httpRoutes:
  projectList:
    route: /projects
    actions:
      - GET
    response: projectList
```

## JSON Project Lists

```yaml
jsonSchemaDefs:
  projectList:
    type: dictionary
    items:
      type: string
```

A project list is a dictionary whose keys are project names and whose
values are the path to the project (which is used by the `cprsyncCtl` to
determine which `rsync` requests to allow).

## Adding projects

```yaml
httpRoutes:
  projectAdd:
    route: /project/add
    actions:
      - POST
    body: projectDetails
```

```yaml
jsonSchemaDefs:
  projectDetails:
    type: object
    properties:
      rsyncUser:
        type: string
      rsyncHost:
        type: string
      projectName:
        type: string
      projectDir:
        type: string
      projectDesc:
        $ref: "#/$defs/projectDefinition"
```

## Updating projects

```yaml
httpRoutes:
  projectUpdate:
    route: /project/update
    actions:
      - POST
    body: projectDetails
```

## Removing projects

```yaml
httpRoutes:
  projectRemove:
    route: /project/remove
    actions:
      - POST
    body: projectDetails
```

## Getting project targets

```yaml
httpRoutes:
  projectTragets:
    route: /project/targets/<project>
    actions:
      - GET
    response: projectTargetList
```

```yaml
jsonSchemaDefs:
  projectTargetList:
    type: dictionary
    items:
      type: string
```

## Getting project targets build details

```yaml
httpRoutes:
  projectBuildTraget:
    route: /project/buildTarget/<project>/<target>
    actions:
      - GET
    response: projectBuildTarget
```

```yaml
jsonSchemaDefs:
  projectBuildTarget:
    type: dictionary
    items:
      type: string
```


## Getting project definitions

```yaml
httpRoutes:
  projectDefinition:
    route: /project/definition/<project>
    actions:
      - GET
    response: projectDefinition
```

### Project definition files

On *disk* a project definition *file* is a YAML file loosely based upon
the [Python Sake](http://tonyfischetti.github.io/sake/) format. In this
example, the reply to this REST request is essentially a project
definition file as it would be found on the disk in the project workspace.

```yaml
jsonExamples:
  projectDefinition:
    title: Project definition for the 'Measuring Heyting algebras' paper
    httpRoutes:
      route:
        mountPoint:    /projects
        workspacePath: measuringHeyting
        project:       project.yaml
      action: GET
---

description: |
  The Measuring Heyting algebras paper looks at...

targets:
  defaults:
    uses:
      - literateProgramming
      - conTests
      - commDiag
      - diSimp
    outputDir:
      - somewhere

  html:
    help: build the html version of the paper
    dependencies:
      - measuringHeyting.pdf
    worker: pdf2html

  pdf:
    help: build the pdf version of the paper
    dependencies:
      - measuringHeyting.tex
    worker: context
```

### JSON project definition

A project definition is a string description together with a dictionary of
targets. Each target key is the name of a target. Each target item
consists of a help string, a list of known (top-level file) dependencies,
and the name of a ComputePods worker who has the competence to build this
target.

```yaml
jsonSchemaDefs:
  projectDefinition:
    type: object
    properties:
      description:
        type: string
      targets:
        type: dictionary
        items:
          type: object
          properties:
            help:
              type: string
            uses:
              type: array
              items:
                type: string
            mainFile:
              type: string
            dependencies:
              type: array
              items:
                type: string
            outputs:
              type: array
              items:
                type: string
            srcDir:
              type: string
            outputDir:
              type: string
            install:
              type: object
              dir:
                type: string
              manualUpdate:
                type: boolean
            worker:
              type: string
            projectDir:
              type: string
            externals:
              type: array
              items:
                type: string
            origExternals:
              type: array
              items:
                type: string
```
