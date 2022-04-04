# generated by datamodel-codegen:
#   filename:  <stdin>
#   timestamp: 2022-04-04T08:48:25+00:00

from __future__ import annotations

from typing import Dict, List, Optional

from pydantic import BaseModel


class Targets(BaseModel):
    help: Optional[str] = None
    uses: Optional[List[str]] = None
    dependencies: Optional[List[str]] = None
    outputs: Optional[List[str]] = None
    outputDir: Optional[str] = None
    worker: Optional[str] = None


class ProjectDefinition(BaseModel):
    description: Optional[str] = None
    targets: Optional[Dict[str, Targets]] = None
