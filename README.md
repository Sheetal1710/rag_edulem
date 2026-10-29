<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/38d6c33d-949a-4fa9-8360-7e1d4d10cad7

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Resume Chatbot (RAG)

The floating chat widget answers questions from your resume. It uses FAISS for the vector store, NVIDIA embeddings for indexing and retrieval, and an NVIDIA LLM for answers. The backend lives in `backend/` so API keys stay off the browser.

**Setup**

1. Put your resume at `backend/data/resume.pdf` (or set `RESUME_PATH` to a PDF/TXT/MD file).
2. Create `backend/.env` from `backend/.env.example` and add your NVIDIA keys.
3. Install and build the index:
   ```
   cd backend
   python -m venv .venv && .venv\Scripts\activate
   pip install -r requirements.txt
   python ingest.py
   ```
4. Start the API on port 8000, then the frontend in another terminal:
   ```
   uvicorn server:app --port 8000     # from backend/
   npm run dev                        # from the project root
   ```

Re-run `python ingest.py` whenever the resume changes. The Vite dev server proxies `/api` to `http://localhost:8000`.
