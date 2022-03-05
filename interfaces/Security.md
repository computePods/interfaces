# Security interface (HTTP)

The **Security** interface provides a federation of ComputePods the
ability to transfer various security keys in a secure manner.

## SSH public key for rsync

```yaml
httpRoutes:
  rsyncPublicKey:
    route: /security/rsyncPublicKey
    actions:
      - GET
    response: rsyncPublicKey
```

```yaml
jsonSchemaDefs:
  rsyncPublicKey:
    type: string
```

## SSH host public key for rsync

```yaml
httpRoutes:
  addHostPublicKey:
    route: /security/addHostPublicKey
    actions:
      - POST
    body: hostPublicKey
```

```yaml
jsonSchemaDefs:
  hostPublicKey:
    type: object
    properties:
      host:
        type: string
      publicKey:
        type: string
```

```yaml
httpRoutes:
  removeHostPublicKey:
    route: /security/removeHostPublicKey
    actions:
      - POST
    body: hostPublicKey
```
