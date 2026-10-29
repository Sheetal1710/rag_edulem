import os
from pathlib import Path

from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

NVIDIA_API_KEY = os.getenv("NVIDIA_API_KEY", "")
LLM_API_KEY = os.getenv("NVIDIA_LLM_API_KEY") or NVIDIA_API_KEY
EMBED_API_KEY = os.getenv("NVIDIA_EMBED_API_KEY") or NVIDIA_API_KEY
LLM_MODEL = os.getenv("NVIDIA_LLM_MODEL", "nvidia/nemotron-3.5-lightning-30b-a3b")
EMBED_MODEL = os.getenv("NVIDIA_EMBED_MODEL", "nvidia/nemotron-3.5-embed-1b")

RESUME_PATH = Path(os.getenv("RESUME_PATH", BASE_DIR / "data" / "resume.pdf"))
FAISS_INDEX_DIR = Path(os.getenv("FAISS_INDEX_DIR", BASE_DIR / "faiss_index"))

TOP_K = int(os.getenv("RAG_TOP_K", "4"))
ALLOWED_ORIGINS = [
    origin.strip()
    for origin in os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")
    if origin.strip()
]
