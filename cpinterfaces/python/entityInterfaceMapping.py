# generated by datamodel-codegen:
#   filename:  <stdin>
#   timestamp: 2022-04-04T12:49:41+00:00

from __future__ import annotations

from pydantic import BaseModel, Extra


class EntityInterfaceMapping(BaseModel):
    pass

    class Config:
        extra = Extra.allow


class MountPoint(BaseModel):
    __root__: str
