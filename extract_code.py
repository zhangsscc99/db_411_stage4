import os

def extract_files_content(directory):
    file_contents = {}

    # Walking through the directory
    for root, dirs, files in os.walk(directory):
        # Skipping node_modules directory
        if 'node_modules' in root:
            continue

        for file in files:
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r') as file_obj:
                    # Reading and storing file content
                    file_contents[file_path] = file_obj.read()
            except Exception as e:
                # Handle any exceptions (like file not readable, etc.)
                print(f"Error reading {file_path}: {e}")

    return file_contents



# Example usage
directory_path = "C:/Users/zhang/Desktop/db_411_stage4"
contents = extract_files_content(directory_path)
print(contents)
# for file, content in contents.items():
#     print(f"{file}: {content[:100]}")  # Printing first 100 characters of each file

# Note: Uncomment the above lines and replace 'path_to_your_directory' with the path of your directory to use the script.

