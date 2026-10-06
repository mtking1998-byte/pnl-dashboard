#!/usr/bin/env python3
"""Build the downloadable ZIP packages served at /netlink-theme.zip and /netlink-website.zip.

Run automatically by the `pack` compose service on startup, or manually:
    python3 tools/build-zips.py
"""
import os
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def make(out_name, entries):
    out = os.path.join(ROOT, out_name)
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
        for entry in entries:
            path = os.path.join(ROOT, entry)
            if os.path.isdir(path):
                for dirpath, _dirnames, filenames in os.walk(path):
                    for fn in filenames:
                        full = os.path.join(dirpath, fn)
                        z.write(full, os.path.relpath(full, ROOT))
            else:
                z.write(path, entry)
    print("built", out_name, os.path.getsize(out), "bytes")


# WordPress theme (zip must contain a single top-level folder)
make("netlink-theme.zip", ["netlink-theme"])

# Static site for shared hosting / cPanel (files at zip root)
make(
    "netlink-website.zip",
    ["index.html", "css", "js", ".htaccess", "README-FA.txt"],
)
