# generated by datamodel-codegen:
#   filename:  <stdin>
#   timestamp: 2021-07-22T14:27:56+00:00

from __future__ import annotations

from enum import Enum
from typing import Dict, Optional

from pydantic import BaseModel


class NotificationType(Enum):
    Added = 'Added'
    Removed = 'Removed'
    Changed = 'Changed'


class Notification(BaseModel):
    mountPoint: Optional[str] = None
    fullPath: Optional[str] = None
    routeParts: Optional[Dict[str, str]] = None
    notificationType: Optional[NotificationType] = None
