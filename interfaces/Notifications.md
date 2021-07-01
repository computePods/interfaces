# MajorDomo notifications interface

<!-- toc -->

The **notifications** interface provides the MajorDomo UI with timely push
based notifications of changes to the MajorDomo pod server's internal
model.

This notifications interface is push only (from the pod server to the
browser client). The only high frequency autonomous activity associated
with a build, will happen between the user's primary MajorDomo and
respective Chefs *inside* the federation of ComputePods. We expect only
relatively infrequent user activity to query the state of the federation
of ComputePods. This suggests that all user initiated activity can and
should happen via the MajorDomo REST interface. Hence there is no need for
the notifications interface to carry messages from the browser client to
the pod server.

Each message consists of an artefact path, corresponding to the URL
associated with the given artefact, as well as an enumerator indicating
what type of notification has been sent:

- Added
- Removed
- Changed

## Opening the notifications channel

```yaml
httpRoutes:
  notifications:
    route: /notifications
    actions:
      - SSE
    response: notification
```

## JSON Messages

```yaml
jsonSchemaDefs:
  notification:
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

## Examples

```yaml
jsonExamples:
  notifications:
    title: Example notifications
    httpRoutes:
      route:
        mountPoint: /notifications
      action: SSE
---
- mountPoint: /build/status
  fullPath: /build/status/a/workspace/path/aProject/aBuildTarget/example
  routeParts:
    mountPoint:    /build/status
    workspacePath: /a/workspace/path
    project:       aProject
    target:        aBuildTarget
    taskPath:      example
  notificationType: Added
- mountPoint: /build/current
  fullPath: /build/current
  routeParts:
    mountPoint: /build/current
  notificationType: Changed
- mountPoint: /build/status
  fullPath: /build/status/a/workspace/path/aProject/aBuildTarget/example
  routeParts:
    mountPoint:    /build/status
    workspacePath: /a/workspace/path
    project:       aProject
    target:        aBuildTarget
    taskPath:      example
  notificationType: Changed
- mountPoint:    /logfile
  fullPath: /logfile/a/workspace/path/aProject/aTarget/an/example/log
  routeParts:
    mountPoint:    /logfile
    workspacePath: /a/workspace/path
    project:       aProject
    target:        aTarget
    taskPath:      an/example/log
  notificationType: Added
```