# generated by datamodel-codegen:
#   filename:  <stdin>
#   timestamp: 2022-04-05T11:43:10+00:00

from __future__ import annotations

from typing import List, Optional

from pydantic import BaseModel


class LogfileJson(BaseModel):
    lines: Optional[List[str]] = None
