# MajorDomo websocket interface

<!-- toc -->

The **websocket** interface provides the MajorDomo UI with timely push
based notifications of changes to the MajorDomo pod server's internal
model.

This websocket interface is push only (from the pod server to the browser
client). The only high frequency autonomous activity associated with a
build, will happen between the user's primary MajorDomo and respective
Chefs *inside* the federation of ComputePods. We expect only relatively
infrequent user activity to query the state of the federation of
ComputePods. This suggests that all user initiated activity can and should
happen via the MajorDomo REST interface. Hence there is no need for the
websocket interface to carry messages from the browser client to the pod
server.

Each message consists of an artefact path, corresponding to the URL
associated with the given artefact, as well as an enumerator indicating
what type of notification has been sent:

- Add
- Remove
- Changed

## Opening the websocket

```yaml
httpRoutes:
  websocket:
    route: /websocket
    actions:
      - WEBSOCKET
    response: websocket
```

## JSON Messages

```yaml
jsonSchemaDefs:
  websocket:
    description: A notification that a particular Artefact has changed.
    type: object
    properties:
      mountPoint:
        type: string
      fullPath:
        type: string
      routeParts:
        type: dictionary
        items:
          type: string
      notificationType:
        enum:
        - Added
        - Removed
        - Changed
```