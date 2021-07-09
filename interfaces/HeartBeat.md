# MajorDomo HeartBeat interface

<!-- toc -->

The **HeartBeat** interface provides the MajorDomo UI with the ability to
recognise when the server is reloading.

```yaml
httpRoutes:
  heartBeat:
    route: /heartBeat
    actions:
      - SSE
    response: heartBeat
```

## JSON Messages

```yaml
jsonSchemaDefs:
  heartBeat:
    description: A simple heartBeat message (Hello)
    type: string
```

