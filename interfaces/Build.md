# MajorDomo build interface (NATS)

<!-- toc -->

The **Build** interface provides a federation of ComputePods the ability
to communicate build requirements between different components.

## How to build

```yaml
natsSubjects:
  howToBuild:
   subject: build.howTo.<artefactType>
   message: howToBuild
```

A "how to build" message is a collection of Artefact Types. The "goal"
artefact type represents the type of artefact that the system needs to
learn how to build. The "have" property is a list of artefact types which
the system either has, or knows how to obtain.

The RuleManager component of one or more Chefs is expected to respond with
a "can build from" message, registering the fact that this particular Chef
knows how to build this type of artefact type.

```yaml
jsonSchemaDefs:
  howToBuild:
    type: object
    properties:
      goal:
        type: string
      have:
        type: array
        items:
          type: string
```

## Can build from

```yaml
natsSubjects:
  canBuildFrom:
    subject: build.from.<artefactType>
    message: canBuildFrom
```

A "can build from" message is a collection of Artefact Types. The
"canBuild" artefact type represents the type of artefact that this Chef
knows how to build. The "from" property is a list of artefact types which
are required in the build. The "auxiliaries" property is a list of
artefact types which will be produced *in addition* to the main built
type.

```yaml
jsonSchemaDefs:
  canBuildFrom:
    type: object
    properties:
      canBuild:
        type: string
      from:
        type: array
        items:
          type: string
      auxiliaries:
        type: array
        items:
          type: string
```