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
