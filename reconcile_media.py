import json
import urllib.parse
import os
import re

# 1. Завантажуємо список з БД
with open('db_media.json', 'r', encoding='utf-8') as f:
    db_media = json.load(f)

# 2. Отримуємо список файлів на диску
DISK_PATH = "public/media"
disk_files = os.listdir(DISK_PATH)

def normalize(name):
    # Декодуємо URL (наприклад %20 -> пробіл)
    decoded = urllib.parse.unquote(name)
    # Перетворюємо в нижній регістр і замінюємо пробіли/тире на підкреслення
    return decoded.lower().replace(' ', '_').replace('-', '_')

# Мапа нормалізованих імен до оригінальних імен на диску
disk_map = {}
for df in disk_files:
    norm = normalize(df)
    disk_map[norm] = df

updates = []
no_match = []

# Регулярний вираз для видалення Webflow хешу (наприклад 602aceba74d52b1438fdb8c3_)
# Зазвичай це 24 символи шістнадцяткового коду + підкреслення
webflow_hash_pattern = re.compile(r'^[a-f0-9]{24}_')

for db_item in db_media:
    db_id = db_item['id']
    db_filename = db_item['filename']
    
    # Видаляємо хеш Webflow, якщо він є
    clean_filename = webflow_hash_pattern.sub('', db_filename)
    
    db_norm = normalize(clean_filename)
    
    match = None
    # 1. Прямий збіг нормалізованого імені
    if db_norm in disk_map:
        match = disk_map[db_norm]
    else:
        # 2. Спробуємо знайти, чи є диск-файл частиною імені в БД (на випадок складних назв)
        for disk_norm, disk_original in disk_map.items():
            if disk_norm in db_norm or db_norm.endswith(disk_norm):
                match = disk_original
                break

    if match:
        if match != db_filename:
            updates.append((db_id, db_filename, match))
    else:
        no_match.append((db_id, db_filename))

print(f"Total in DB: {len(db_media)}")
print(f"Updates found: {len(updates)}")
print(f"No match found: {len(no_match)}")

# Записуємо SQL
with open('update_media.sql', 'w', encoding='utf-8') as f:
    for up in updates:
        safe_name = up[2].replace("'", "''")
        f.write(f"UPDATE public.media SET filename = '{safe_name}' WHERE id = {up[0]};\n")

print("Created update_media.sql")
