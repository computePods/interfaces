# MajorDomo project descriptions

<!-- toc -->

The **Projects** interface provides the MajorDomo UI with a list of 
existing Project descriptions for a user, together with the associated 
build targets. 

## Getting project definitions

```yaml
httpRoutes:
  - route: /projects/<workspacePath>/<project>
    action: GET
    response: projectDefinition
```

### Project definition files

On *disk* a project definition *file* is a YAML file loosley based upon 
the [Python Sake](http://tonyfischetti.github.io/sake/) format. In this 
example, the reply to this REST request is essentially a project 
definition file as it would be found on the disk in the project workspace. 

```yaml
jsonExamples:
  projectDefinition:
    title: Project definition for the 'Measuring Heyting algebras' paper
    httpRoutes:
      route: /projects/measuringHeyting/project.yaml
      action: GET
---

description: |
  The Measuring Heyting algebras paper looks at...

targets:
  html:
    help: build the html version of the paper
    dependencies:
      - measuringHeyting.pdf
    worker: html2pdf

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
jsonSchema:
  projectDefinition:
    description: string
    targets:
      _dictionary_:
        help: string
        dependencies:
          _array_: string
        worker: string
```
