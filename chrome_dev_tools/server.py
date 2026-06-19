"""本地部署网页的 FastAPI 静态文件服务。

运行：
    conda run -n myenv python server.py
然后浏览器打开 http://127.0.0.1:8000
"""

from pathlib import Path

import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

BASE_DIR = Path(__file__).resolve().parent

app = FastAPI(title="Chrome Dev Tools 教程")

# 将整个目录作为静态站点挂载到根路径，html=True 时访问 / 会返回 index.html
app.mount("/", StaticFiles(directory=BASE_DIR, html=True), name="static")


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
