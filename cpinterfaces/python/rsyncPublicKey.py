# generated by datamodel-codegen:
#   filename:  <stdin>
#   timestamp: 2022-04-04T12:49:42+00:00

from __future__ import annotations

from pydantic import BaseModel, Field


class RsyncPublicKey(BaseModel):
    __root__: str = Field(..., title='rsyncPublicKey')
