import os
import re

services_dir = 'definitions'

for filename in os.listdir(services_dir):
    if not filename.endswith('.md'):
        continue

    input_path = os.path.join(services_dir, filename)
    base_name = os.path.splitext(filename)[0]
    subdir = os.path.join(services_dir, base_name)

    if not os.path.isdir(subdir):
        continue  # Skip if method/property files don't exist

    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    def replace_method_link(match):
        method_name = match.group(1)
        file_name = match.group(2)

        method_file_path = os.path.join(subdir, file_name)
        if not os.path.isfile(method_file_path):
            return match.group(0)  # leave unchanged

        with open(method_file_path, 'r', encoding='utf-8') as mf:
            method_content = mf.read()

        title_match = re.search(r'^title:\s*.*?\.(.*?) մեթոդ', method_content, re.MULTILINE)
        if not title_match:
            return match.group(0)  # leave unchanged if no signature

        method_signature = title_match.group(1)
        return f"[{method_signature}]({base_name}/{file_name})"

    # Update only the method table
    new_content = re.sub(
        r'\[([A-Za-z_][\w]*)]\(' + re.escape(base_name) + r'/([^)]+\.md)\)',
        replace_method_link,
        content
    )

    with open(input_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("✅ Signatures added to method table links.")