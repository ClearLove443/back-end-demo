Ues fastapi framework

## environment

```bash
python -m pip install virtualenv
python -m virtualenv env --python=python3.9
source env/Scripts/activate
```

## installation

```bash
# pip install autopep8
# pip install fastapi
# pip install "uvicorn[standard]"
```

```bash
pip install -r requirements.txt
```

## run it

```bash
source env/Scripts/activate

## 不生成 __pycache__文件夹
export PYTHONDONTWRITEBYTECODE=1

uvicorn main:app --reload
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

## development

```bash
nohup uvicorn main:app --host 0.0.0.0 --port 8000 &
```

## Interactive Api docs upgrad

go to http://127.0.0.1:8000/docs
