"""Build the FAISS vector store from the resume.

Run once, and again whenever the resume changes:
    python ingest.py
"""

from langchain_community.document_loaders import PyPDFLoader, TextLoader
from langchain_community.vectorstores import FAISS
from langchain_nvidia_ai_endpoints import NVIDIAEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

from config import EMBED_API_KEY, EMBED_MODEL, FAISS_INDEX_DIR, RESUME_PATH


def load_resume():
    if not RESUME_PATH.exists():
        raise FileNotFoundError(
            f"Resume not found at {RESUME_PATH}. Place your resume there or set RESUME_PATH in .env."
        )
    if RESUME_PATH.suffix.lower() == ".pdf":
        return PyPDFLoader(str(RESUME_PATH)).load()
    return TextLoader(str(RESUME_PATH), encoding="utf-8").load()


def build_index():
    documents = load_resume()
    splitter = RecursiveCharacterTextSplitter(chunk_size=800, chunk_overlap=120)
    chunks = splitter.split_documents(documents)

    embeddings = NVIDIAEmbeddings(model=EMBED_MODEL, api_key=EMBED_API_KEY, truncate="END")
    store = FAISS.from_documents(chunks, embeddings)
    store.save_local(str(FAISS_INDEX_DIR))

    print(f"Indexed {len(chunks)} resume chunks into {FAISS_INDEX_DIR}")


if __name__ == "__main__":
    build_index()
