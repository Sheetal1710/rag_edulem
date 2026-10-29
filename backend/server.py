import logging
from contextlib import asynccontextmanager
from typing import Literal

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from config import ALLOWED_ORIGINS
from rag import ResumeRAG

logger = logging.getLogger("resume-chat")


class Message(BaseModel):
    role: Literal["user", "assistant"]
    content: str


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=1000)
    history: list[Message] = Field(default_factory=list, max_length=12)


class ChatResponse(BaseModel):
    reply: str


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.rag = ResumeRAG()
    yield


app = FastAPI(title="Resume Chat API", lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.post("/api/chat", response_model=ChatResponse)
def chat(payload: ChatRequest, request: Request):
    rag: ResumeRAG = request.app.state.rag
    # Trim long past replies so one verbose answer cannot blow up the prompt
    history = [(m.role, m.content[:2000]) for m in payload.history]

    try:
        reply = rag.answer(history, payload.message)
    except Exception:
        logger.exception("Chat request failed")
        raise HTTPException(status_code=502, detail="The assistant is unavailable right now. Please try again.")

    return ChatResponse(reply=reply)
