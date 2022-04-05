// This is the ajv validator based upon the rsyncPublicKey JSON schema


import Ajv from 'ajv'


/********************************************************************
Generation Options:
{
  "ajvOptions": {
    "allErrors": true,
    "strict": true
  },
  "interfaceName": "All",
  "rootType": "rsyncPublicKey"
}
*********************************************************************/

const schema = {
  "$defs": {
    "buildDetails": {
      "properties": {
        "build": {
          "type": "string"
        },
        "dependsDirs": {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "from": {
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "buildResults": {
      "properties": {
        "details": {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "result": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "buildTasks": {
      "description": "An array of build task status objects",
      "items": {
        "$ref": "#/$defs/taskStatus"
      },
      "type": "array"
    },
    "canBuildFrom": {
      "properties": {
        "auxiliaries": {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "canBuild": {
          "type": "string"
        },
        "from": {
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "emptyNatsMessage": {
      "type": "string"
    },
    "entityInterfaceMapping": {
      "additionalProperties": {
        "$ref": "#/$defs/mountPoint"
      },
      "type": "object"
    },
    "entityType": {
      "properties": {
        "entityType": {
          "enum": [
            "logFile",
            "projectFile",
            "directory",
            "file",
            "task"
          ]
        },
        "url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "heartBeat": {
      "description": "A simple heartBeat message (Hello)",
      "type": "string"
    },
    "hostPublicKey": {
      "properties": {
        "host": {
          "type": "string"
        },
        "publicKey": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "hostPublicKeys": {
      "additionalProperties": {
        "$ref": "#/$defs/hostPublicKey"
      },
      "type": "object"
    },
    "howToBuild": {
      "properties": {
        "goal": {
          "type": "string"
        },
        "have": {
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "logfileJson": {
      "properties": {
        "lines": {
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "mountPoint": {
      "type": "string"
    },
    "notification": {
      "description": "A notification that a particular Artefact has changed.",
      "properties": {
        "fullPath": {
          "type": "string"
        },
        "mountPoint": {
          "type": "string"
        },
        "notificationType": {
          "enum": [
            "Added",
            "Removed",
            "Changed"
          ]
        },
        "routeParts": {
          "additionalProperties": {
            "type": "string"
          },
          "type": "object"
        }
      },
      "type": "object"
    },
    "projectBuildTarget": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "projectDefinition": {
      "properties": {
        "description": {
          "type": "string"
        },
        "targets": {
          "additionalProperties": {
            "properties": {
              "dependencies": {
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "externals": {
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "help": {
                "type": "string"
              },
              "mainFile": {
                "type": "string"
              },
              "origExternals": {
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "outputDir": {
                "type": "string"
              },
              "outputs": {
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "projectDir": {
                "type": "string"
              },
              "srcDir": {
                "type": "string"
              },
              "uses": {
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "worker": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "object"
        }
      },
      "type": "object"
    },
    "projectDetails": {
      "properties": {
        "projectDesc": {
          "$ref": "#/$defs/projectDefinition"
        },
        "projectDir": {
          "type": "string"
        },
        "projectName": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "projectList": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "projectTargetList": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "registerArtefactType": {
      "properties": {
        "extensions": {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "rsyncPublicKey": {
      "type": "string"
    },
    "taskStatus": {
      "description": "The status of a single build task",
      "properties": {
        "dependencies": {
          "description": "An array of dependent tasks",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "progress": {
          "type": "integer"
        },
        "target": {
          "type": "string"
        }
      },
      "required": [
        "target",
        "progress"
      ],
      "type": "object"
    },
    "workspaceTree": {
      "properties": {
        "directories": {
          "additionalProperties": {
            "$ref": "#/$defs/workspaceTree"
          },
          "type": "object"
        },
        "entityType": {
          "$ref": "#/$defs/entityType"
        },
        "files": {
          "additionalProperties": {
            "$ref": "#/$defs/entityType"
          },
          "type": "object"
        }
      },
      "type": "object"
    }
  },
  "title": "rsyncPublicKey",
  "type": "string"
}

const ajv = new Ajv({
  "allErrors": true,
  "strict": true
})

export const rsyncPublicKey_validate = ajv.compile(schema)
