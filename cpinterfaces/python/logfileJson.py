# generated by datamodel-codegen:
#   filename:  <stdin>
#   timestamp: 2022-03-05T16:12:11+00:00

from __future__ import annotations

from typing import List, Optional

from pydantic import BaseModel


class LogfileJson(BaseModel):
    lines: Optional[List[str]] = None
