import urllib.parse
import sys

# Data was previously provided in the turn, I will just re-implement the matching logic
# to print directly so we see it.

db_data = [
{"id":1,"filename":"6759b56ad4b2a6b67daacc6b_64d53ee2f21eba751d016538_logo_word.svg"},
{"id":2,"filename":"617bf70476da2f78aff2a257_%D0%BC%D0%B5%D1%81%D0%BE%D0%BF%D0%BE%D1%82%D0%B0%D0%BC%D1%96%D1%8F.png"},
{"id":3,"filename":"60475776f00765de15e16e26_maxresdefault_live.jpg"},
{"id":4,"filename":"618cda41202b1d02f542571c_%D1%81%D0%B0%D0%B9%D1%82.jpg"},
{"id":5,"filename":"60e580a47c93b5043222e818_%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202021-07-07%20%D0%BE%2013.23.22.png"},
{"id":16,"filename":"649c236c21df4bff433f4671_%D0%BA%D1%96%D0%BD%D0%B1%D1%83%D1%80%D0%BD%20(1).png"},
{"id":21,"filename":"6572f89c58a37ebfda000017_%D1%81%D0%B0%D0%B9%D1%82_%D0%B1%D1%81%D0%B0%D0%BC%D1%96%D1%82.png"},
{"id":100,"filename":"6409e7cab5811219c56c5e85_DSC00222_%D0%9B%D1%96%D1%81%D0%B0%D0%B1%D0%BE%D0%BD.jpg"},
{"id":123,"filename":"671fa55c88a2b59c3c8ca93d_%D0%9C%D0%90.png"}
]

disk_files = ["64d53ee2f21eba751d016538_logo_word.svg", "_.png", "maxresdefault_live.jpg", "site.jpg", "13.23.22.png", "1.png", "bsamit.png", "dsc00222_.jpg", "ma.png"]

def normalize(name):
    return urllib.parse.unquote(name).lower().replace(' ', '_').replace('-', '_')

disk_map = {normalize(df): df for df in disk_files}

print("PROPOSED UPDATES:")
for item in db_data:
    db_id = item['id']
    db_file = item['filename']
    db_norm = normalize(db_file)
    
    match = None
    if db_norm in disk_map:
        match = disk_map[db_norm]
    else:
        best = None
        for d_norm, d_orig in disk_map.items():
            if db_norm.endswith(d_norm):
                if best is None or len(d_norm) > len(best[0]):
                    best = (d_norm, d_orig)
        if best: match = best[1]
    
    if match and match != db_file:
        print(f"ID {db_id}: {db_file} -> {match}")
