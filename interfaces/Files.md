# MajorDomo original project files

<!-- toc -->

The **Files** interface provides a way for the MajorDomo UI to access and 
list the currently known project files. 

Project files consist of (sub)directories, original project "source" 
files, as well as project definition files. 

User "workspaces" are simply directory trees located in the user's 
personal "commons" directory to which the ComputePods MajorDomo server has 
access. 

## Listing directories and files

```yaml
httpRoutes:
  - route: /files/<workspacePath>
    action: GET
    response: workspaceTree
```
### Workspace Paths

Workspace paths are essentially Unix/Web paths (using the `/` separator) 
relative to the user's personal "commons" directory. 

### JSON workspaceTree

A `workspaceTree` is a recursive JSON structure which captures a 
"directory's" contained sub-directories as well as files. 

```yaml
jsonTypes:
  workspaceTree:
    directories: 
      _dictionary_: workspaceTree
    files:
     _dictionary_: string
```

**Question**: how do get the types of a given file? Do we simply rely on 
an extension mapping? 


### Example workspaceTree

```yaml
jsonExamples:
  workspaceTree:
    title: Measuring Heyting Algebras workspace
    httpRoutes:
      route: /files/measuringHeyting
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